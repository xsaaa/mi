<template>
	<div id="#box">
		<router-view></router-view>
		<header class="pic">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/home/tab01.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/home/tab02.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/home/tab03.jpg"/></mt-swipe-item>
			</mt-swipe>
		</header>
		<ul>
			<router-link to="/channel">
				<li class="btns l" v-for="(item1,index1) in btn"><img :src="item1"/></li>
			</router-link>
		</ul>
		<section class="adv01">
			<p class="l adv"><img src="../../assets/home/goods01.png"/></p>
			<p class="r adv"><img src="../../assets/home/goods02.png"/></p>
			<p class="r adv"><img src="../../assets/home/goods03.png"/></p>
		</section>
		<p class="adv02"><img src="../../assets/home/goods04.png"/></p>
		<p class="adv03"><img src="../../assets/home/goods05.png"/></p>
		<section class="product">
			<div class="pro01 l" v-for="(item2,index2) in list">
				<img :src="item2.src"/>
				<div class="info">
					<p class="name">{{item2.title}}</p>
					<p class="details">{{item2.details}}</p>
					<p class="price">
						<span class="new">{{item2.newprice}}</span>
						<span class="qi">起</span>
						<span class="old">{{item2.oldprice}}</span>
					</p>
					<p class="buybtn">立即购买</p>
				</div>
			</div>
		</section>
		<section class="more">更多小米手机产品 ></section>
		<p class="adv02"><img src="../../assets/home/tv01.jpg"/></p>
		<p class="adv03"><img src="../../assets/home/tv02.jpg"/></p>
		<section class="product">
			<div class="pro01 l" v-for="(item3,index3) in tvlist">
				<img :src="item3.src"/>
				<div class="info">
					<p class="name">{{item3.title}}</p>
					<p class="details">{{item3.details}}</p>
					<p class="price">
						<span class="new">{{item3.newprice}}</span>
						<span class="qi">起</span>
						<span class="old">{{item3.oldprice}}</span>
					</p>
					<p class="buybtn">立即购买</p>
				</div>
			</div>
		</section>
		<section class="more">更多小米电视产品 ></section>
		<p v-show="topFlag" class="top" @click="backTop" >
			<img src="../../assets/home/top.png" />
		</p>
	</div>
	
</template>
<!--
	this.$http.get('地址').then(成功之后的回调).catch(失败以后的回调).finally(最终执行的代码)

箭头函数this指向的是定义的时候所在的对象，而不是执行的时候所在的对象
-->
<script>
	export default{
		data(){
			return{
				topFlag:false,
				list:[],
				tvlist:[],
				btn:[]
			}
		}
		,
		mounted(){
			
			this.$nextTick(function () {
		      window.addEventListener('scroll', this.scrollToTop,true)//监听滚动事件
		    })
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
//				console.log(res);
				_this.list=res.data.list;
				_this.tvlist=res.data.tvlist;
				_this.btn=res.data.btn;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
//				console.log('请求结束')
			})
		},
		methods:{
			backTop(){
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			},
			scrollToTop () {
			    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			    if (scrollTop > 100) {
			      this.topFlag = true;
			    } else {
			      this.topFlag = false;
			    }
			}
		},
		destroyed(){
			window.removeEventListener('scroll',this.scrollsToTop, true)
		}
	}
</script>

<style>
	#box{
		margin-top:5.3rem ;
		overflow: hidden;
		padding-bottom: 10%;
	}
	.pic{
		padding-top: 21%;
	}
 img{
		width: 100%;
		height: 100%;
	}
	.mint-swipe-items-wrap {
		width: 100%;
		margin: 0 auto;
		padding-bottom: 50%;
		border-top: 1px solid gainsboro;
	}
	.btns{
		width: 20%;
		background-color: palegreen;
		text-align: center;
		font-size: .5rem;
		color: #b5b5b5;
	}
	.adv01{
		background-color: #f2f2f2;
		padding: 2% 0% 0% 0%;
		width: 100%;
		overflow: hidden;
	}
	.adv{
		width: 50%;
	}
	.adv02{
		background-color: #f2f2f2;
		padding: 2% 0% 0% 0%;
		width: 100%;
	}
	.adv03{
		background-color: #f2f2f2;
		padding: 2% 0% 0% 0%;
		width: 100%;
	}
	.product{
		width: 100%;
		padding: 2%;
		overflow: hidden;
		border-bottom: 2px solid gainsboro;
	}
	.pro01{
		width: 47%;
		text-align: center;
		margin-right: 2%;
	}
	.info{
		padding: 3% 0%;
		background-color: white;
	}
	.name{
		margin-top: 1%;
		font-size: 0.9rem;
  	    color: rgba(0,0,0,.87);
	}
	.details{
		color: rgba(0,0,0,.54);
		font-size: 0.7rem;
		margin-top: 1%;
	}
	.new{
		color: red;
		font-size: 0.9rem;
	}
	.qi{
		color: red;
		font-size: 0.5rem;
	}
	.old{
		color: rgba(0,0,0,.54);
		text-decoration:line-through
	}
	.buybtn{
		width: 50%;
		background-color: #ea625b;
		color: white;
		margin: 1% auto;
		border-radius: 4%;
		padding: 4%;
		font-size: 0.9rem;
	}
	.more{
		width: 100%;
		text-align: center;
		padding: 4% 0%;
		font-size: 1rem;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
	}
</style>