<template>
  <div id="tv">
  	<router-view></router-view>
  	<p class="bigpic">
  		<img src="../../assets/tv/bigtv.png"/>
  	</p>
  	<ul class="nav01">
  		<li class="navli"><img src="../../assets/tv/tv01.png"/></li>
  		<li class="navli"><img src="../../assets/tv/tv02.png"/></li>
  		<li class="navli"><img src="../../assets/tv/tv03.png"/></li>
  		<li class="navli"><img src="../../assets/tv/tv04.png"/></li>
  		<li class="navli"><img src="../../assets/tv/tv05.png"/></li>
  	</ul>
  	<nav v-for="(item1,index1) in tvlist">
  		<p><img :src="item1.titlepic"/></p>
			<section class="tvpro">
				<div class="tvdetails l" v-for="(item2,index2) in item1.smallbox">
					<img :src="item2.src"/>
					<p>
						<span class="tvname">{{item2.title}}</span><br />
						<span class="tvintro">{{item2.details}}</span><br />
						<span class="tvprice">{{item2.newprice}}</span>
						<span class="tvqi">起</span>
						<span class="oldtvprice">{{item2.oldprice}}</span>
						<br />
						<span class="tvbtn2">立即购买</span>
					</p>
				</div>
			</section>
		</nav>
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
				tvlist:[]
			}
		},
		mounted(){
			this.$nextTick(function () {
		      window.addEventListener('scroll', this.scrollToTop,true)//监听滚动事件
		    })
			this.$http.get('./data/phone.json')
			.then((res)=>{
				this.tvlist = res.data.tvlist;
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
<style type="text/css" scoped="scoped">
	#tv{
		padding-bottom: 5%;
	}
	.bigpic{
		padding-top: 4%;
	}
	.nav01{
		width: 100%;
	}
	.navli{
		width: 20%;
		float: left;
	}
	.tvpro{
		width:100%;
		padding: 0% 2% 2% 2%;
		background-color: rgb(21, 100, 229);
		text-align: center;
		overflow: hidden;
	}
	.tvdetails{
		width: 47%;
		text-align: center;
		margin-right: 2%;
		margin-top: 2%;
		background-color: white;
	}
	.tvname{
		font-size: 1rem;
		padding: 3% 1%;
		display: inline-block;
	}
	.tvbtn2{
		background-color: #ea625b;
		color: white;
		border-radius: 4%;
		padding: 2% 6%;
		font-size: 0.9rem;
		display: inline-block;
		margin-bottom: 4%;
	}
	.tvprice{
		color: red;
		font-size: 1rem;
	}
	.oldtvprice{
		text-decoration: line-through;
		font-size: 0.6rem;
		color: #757575;
	}
	.tvqi{
		color: red;
		font-size: 0.5rem;
	}
	.tvintro{
		color: #757575;
		font-size: 0.7rem;
		padding: 3% 0%;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
	}
</style>