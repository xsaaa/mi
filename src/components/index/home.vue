<template>
	<div id="box">
		 	<router-view></router-view>
			<header id="header01">
						<img class="header-left" src="../../assets/home/milogo01.png">
						<p class="header-middle" @click="search()">
							<span class="iconfont">&#xe617;</span>
							搜索商品名称
						</p>
						<p class="header-right">
							<router-link to="/my">
								<span class="iconfont" style="color:#bebebe;">&#xe613;</span>
							</router-link>
						</p>	
						<swiper :options="swiperOption" class="nav">
					        <swiper-slide v-for="(item,index) in homelist">
					        	<li class='nav-btns' @click="tabChange(item.name),change(index)" :class="{active:index==num}">{{item.type}}</li>
					        </swiper-slide>
					    </swiper>
			</header>
			<component :is="currentView"></component>
			
	</div>
	
</template>


<script scoped="scoped">
	import recommend from './recommend';
	import phone from './phone';
	import intelligence from './intelligence';
	import tv from './tv';
	export default{
		data(){
			return{
				num:0,
				homelist:[],
				recommend:'recommend',
				phone:'phone',
				intelligence:'intelligence',
				tv:'tv',
				currentView:'recommend',
				swiperOption: {
		          slidesPerView: 6,
		          spaceBetween: 10,
		          freeMode: true,
		          pagination: {
		           el: '.swiper-pagination',
		           clickable: true
		          }
		        }
			};
			
		},
		components:{
			recommend,
			phone,
			intelligence,
			tv
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/home.json')
			.then(function(res){
				_this.homelist = res.data.home;
			})
			.catch(()=>{
			
			})
			.finally((f)=>{

			})
		},
		methods:{
			tabChange(tabItem){
				this.currentView = tabItem;
			},
			change(i){
				this.num = i
			},
			search(){
				this.$router.push({path:'/search'})
			}
		}
	};
</script>

<style scoped="scoped">
	#box{
		width: 100%;
		max-width: 750px;
		margin: 0 auto;
	}
	#header01{
		width: 100%;
		background-color: #f2f2f2;
		position: fixed;
		top: 0px;
		/*left: 0px;*/
		padding-top: 3%;
		max-width: 750px;
		margin: 0 auto;
		z-index: 999;
		/*padding-bottom: 5%;*/
	}
	.header-left{
		width: 8%;
		float: left;
		padding: 3% 4%;
	}
	.header-left img{
		width: 100%;
		height: 100%;
	}
	.header-middle{
		float: left;
		width: 70%;
		background-color: white;
		text-align: left;
		color: #d9d9d9;
		border: 1px solid gainsboro;
		margin: 0 auto;
	}
	.header-middle span{
		display: inline-block;
		padding: 0.5rem 0.5rem;
	}
	.header-right{
		float: right;
		padding: 2% 0%;
		color: #bebebe;
		width: 13%;
	}
	.header-right span{
		font-size: 1.5rem;
	}
	.nav{
		width: 100%;
		overflow: hidden;
		z-index: 999;
	}
	.nav-btns{
		padding: 5% 0%;
		font-size: 0.9rem;
		border-bottom: 2px solid #f2f2f2;
	}
	.active{
		color: #f60;
		border-bottom-color: orangered;
	}
	ul li{
		list-style: none;
	}
	.swiper-wrapper{
		width: 20% !important;
		margin-right: 0 !important;
	}
</style>