<template>
	<div id="#box">
		<router-view></router-view>
		<header class="pic">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/intell/intel01.png"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/intell/intel02.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/intell/intel03.png"/></mt-swipe-item>
			</mt-swipe>
		</header>
		<ul class="intellbox">
			<li class="l intelbtn" v-for="(item,index) in intelbtn">
				<img :src="item">
			</li>
		</ul>
		<section v-for="(item01,index01) in intellist">
			<p><img :src="item01.title"/></p>
			<ul class="inproductbox">
				<li class="inproduct l" v-for="(item02,index02) in item01.detail">
					<img :src="item02.src"/>
					<div class="indetails">
						<span class="inname">{{item02.inname}}</span>
						<p class="intro">{{item02.intro}}</p>
						<span class="newprice">{{item02.newprice}}</span>
						<span class="qi">起</span>
						<span class="oldprice">{{item02.oldprice}}</span>
					</div>
				</li>
			</ul>
		</section>
		<p><img src="../../assets/intell/title.png"/></p>
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
				intelbtn:[],
				intellist:[]
			}
		},
		mounted(){
			this.$nextTick(function () {
		      window.addEventListener('scroll', this.scrollToTop)//监听滚动事件
		    })
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				_this.intelbtn = res.data.btn02;
				_this.intellist = res.data.intellist;
			})
			.catch(()=>{
			
			})
			.finally((f)=>{

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
			window.removeEventListener('scroll',this.scrollsToTop)
		}
	}
</script>

<style scoped="scoped">
	#box{
		background-color: #f2f2f2;
		overflow: hidden;
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
	.intellbox{
		width: 100%;
		background-color: #f5f5f5;
		overflow: hidden;
		padding: 2% 0%;
	}
	.intelbtn{
		width: 20%;
		/*margin: 2% 0%;*/
	}
	.inproductbox{
		width: 100%;
		padding: 2% 2%;
		overflow: hidden;
		background-color: #f2f2f2;
	}
	.inproduct{
		width: 31%;
		margin-right: 1.5%;
		text-align: center;
	}
	.indetails{
		padding: 8% 2%;
		background-color: white;
	}
	.inname{
		font-size: 0.8rem;
		color: #3c3c3c;
		font-weight: bolder;
		display: inline-block;
		padding-bottom: 4%;
	}
	.intro{
		font-size: 0.6rem;
		color: #3c3c3c;
		padding-bottom: 1%;
		/*display: inline-block;*/
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.newprice{
		color: red;
		font-weight: bolder;
		font-size: 0.8rem;
	}
	.qi{
		color: red;
		font-size: 0.5rem;
	}
	.oldprice{
		text-decoration: line-through;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
	}
</style>