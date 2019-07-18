<template>
	<div id="#box">
		<router-view></router-view>
		<swiper :options="swiperOption">
	        <swiper-slide><img src="../assets/channel/channel01.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/channel/channel02.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/channel/channel03.jpg"/></swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
	    <section class="picBox" v-for="(item01,index01) in channel">
	    	<p><img :src="item01.title"/></p>
	    	<ul class="pul">
	    		<li class="pli" v-for="(item02,index02) in item01.detail">
	    			<img :src="item02.pic"/>
	    			<p class="pname01 ptext01">{{item02.name}}</p>
	    			<p class="pname02 ptext01">{{item02.text}}</p>
	    			<p class="ptext01">
	    				<span class="newp">{{item02.newprice}}</span>
	    				<span class="oldp">{{item02.oldprice}}</span>
	    			</p>
	    		</li>
	    	</ul>
	    </section>
	    <p v-show="topFlag" class="top" @click="backTop" >
			 <img src="../assets/home/top.png"/>
		</p>
		<div class="search">
			<router-link to="/home">
				<span class="search01 iconfont" @click="aa()">&#xe610;</span>
			</router-link>	
			<p class="search01">
				<span class="iconfont">&#xe617;</span>
				<span>搜索商品名称</span>
			</p>
			<router-link to="shopcar">
				<span class="search01 iconfont">&#xe607;</span>
			</router-link>
			
		</div>
	</div>
</template>

<script> 
	export default {
    data() {
      return {
      	channel:[],
      	topFlag:false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
     mounted(){
		 	this.$nextTick(function () {
		      window.addEventListener('scroll', this.scrollToTop1)//监听滚动事件
		    })
			var _this = this;
			this.$http.get('./data/type.json')
			.then(function(res){
				_this.channel = res.data.channellist;
				console.log(res);
			})
			.catch(()=>{
			
			})
			.finally((f)=>{
//				console.log('请求结束')
			})
		},
	methods:{
		aa(){
//			window.removeEventListener('scroll',this.scrollsToTop1);
//			window.onscroll = null;
			if (window.removeEventListener) {                   // // 所有浏览器，除了 IE 8 及更早IE版本
			    window.removeEventListener("scroll", this.scrollToTop1);
			} else if (window.detachEvent) {                   // IE 8 及更早IE版本
			    window.detachEvent("scroll", this.scrollToTop1);
			}
		},
		backTop(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		},
		scrollToTop1 () {
		    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		    var sea1 = document.querySelectorAll('a')[0];
		    var sea2 = document.querySelectorAll('a')[1];
		    var sear = document.querySelector('.search');
		    if (scrollTop > 250) {
		      this.topFlag = true;
		      sea1.style.color = "black";
		      sea2.style.color = "black";
		      sear.style.backgroundColor = "white";
		    } else {
		      this.topFlag = false;
		      sea1.style.color = "white";
		      sea2.style.color = "white";
		      sear.style.backgroundColor = "";
		    }
		}
	},
	beforeDestroyed(){
		window.removeEventListener('scroll',this.scrollsToTop1, true);
	}
  }
</script>

<style>
	.search{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		color: white;
		z-index: 999;
		overflow: hidden;
	}
	
	.search .search01:nth-child(1){
		width: 13%;
	}
	.search .search01:nth-child(2){
		width: 68%;
		background-color: white;
		border: 1px solid gainsboro;
		text-align: left;
		font-size: 1.1rem;
		color: rgba(0,0,0,.54);
		padding: 1%;
	}
	.search .search01:nth-child(3){
		width: 13%;
	}
	.search01{
		display: inline-block;
		padding: 1% 0%;
		margin: 2% 0%;
	}
</style>
<style scoped="scoped">
	a{
	    color: white;
	}
	#box{
		overflow: hidden;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.iconfont{
		font-size: 22px;
	}
	.swiper-pagination-bullet-active {
		background: white;
	}
	.pul{
		width: 100%;
		padding-bottom: 10%;
	}
	.pul li:nth-of-type(odd){
		 float: left;
		 }
    .pul li:nth-of-type(even){
    	float: right;
    	}
	.pli{
		width: 49.7%;
		padding-bottom: 2%;
	}
	.ptext01{
		width: 90%;
		margin: 0 auto;
		text-align: left;
	}
	.pname01{
		padding-top: 4%;
		font-size: 1rem;
	}
	.pname02{
		padding-top: 2%;
		font-size: 0.8rem;
		color: rgba(0,0,0,.54);
	}
	.newp{
		padding-top: 2%;
		font-size: 0.9rem;
		color: #ea625b;
	}
	.oldp{
		font-size: 0.8rem;
		color: rgba(0,0,0,.54);
		text-decoration: line-through;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
		z-index: 999;
	}
</style>