<template>
	<div id="#box">
		<router-view></router-view>
		<header class="pic">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/phone/phone01.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/phone/phone02.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/phone/phone03.jpg"/></mt-swipe-item>
			</mt-swipe>
		</header>
		<nav v-for="(item1,index1) in phonelist">
			<p><img :src="item1.titlepic"/></p>
			<section class="tel">
				<img :src="item1.bigpic"/>
				<div class="telbox">
					<span class="l">{{item1.bigname}}</span>
					<p class="r">
						<span class="telprice">{{item1.bigprice}}</span>
						<span class="telqi">起</span>
					</p><br />
					<span class="l telintro">{{item1.bigdetails}}</span>
					<span class="telbtn r">立即购买</span>
				</div>
			</section>
			<section class="telpro">
				<div class="teldetails l" v-for="(item2,index2) in item1.smallbox">
					<img :src="item2.src"/>
					<p>
						<span class="telname">{{item2.title}}</span><br />
						<span class="telintro">{{item2.details}}</span><br />
						<span class="telprice">{{item2.newprice}}</span>
						<span class="telqi">起</span>
						<span class="oldtelprice">{{item2.oldprice}}</span>
						<br />
						<span class="telbtn2">立即购买</span>
					</p>
				</div>
			</section>
		</nav>
		
		<p><img src="../../assets/phone/bg01.jpg"/></p>
		<p v-show="topFlag" class="top" @click="backTop" >
			<img src="../../assets/home/top.png" />
		</p>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				topFlag:false,
				phonelist:[]
			}
		},
		mounted(){
			this.$nextTick(function () {
		      window.addEventListener('scroll', this.scrollToTop,true)//监听滚动事件
		    })
			this.$http.get('./data/phone.json')
			.then((res)=>{
				this.phonelist = res.data.phonelist;
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

<style scoped="scoped">
	#box{
		margin-top:5.3rem ;
		overflow: hidden;
		padding-bottom: 10%;
		background-color: #e7e6fd;
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
	.tel{
		padding: 0% 2%;
		/*width: 100%;*/
		font-size: 1.2rem;
		background-color: #e7e6fd;
	}
	.telbox{
		/*margin: 4%;*/
		padding: 4% 2%;
		overflow: hidden;
		background-color: white;
	}
	.telprice{
		color: red;
		font-size: 1rem;
	}
	.oldtelprice{
		text-decoration: line-through;
		font-size: 0.6rem;
		color: #757575;
	}
	.telqi{
		color: red;
		font-size: 0.5rem;
	}
	.telintro{
		color: #757575;
		font-size: 0.7rem;
		padding: 3% 0%;
	}
	.telbtn{
		background-color: #ea625b;
		color: white;
		margin: 1% auto;
		border-radius: 4%;
		padding: 2% 6%;
		font-size: 0.9rem;
	}
	.telpro{
		width:100%;
		padding: 2%;
		background-color: #e7e6fd;
		text-align: center;
		overflow: hidden;
	}
	.telinfo{
		padding: 2%;
	}
	.teldetails{
		width: 47%;
		text-align: center;
		margin-right: 2%;
		margin-top: 2%;
		background-color: white;
	}
	.telname{
		font-size: 1rem;
		padding: 3% 1%;
		display: inline-block;
	}
	.telbtn2{
		background-color: #ea625b;
		color: white;
		border-radius: 4%;
		padding: 2% 6%;
		font-size: 0.9rem;
		display: inline-block;
		margin-bottom: 4%;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
	}
</style>