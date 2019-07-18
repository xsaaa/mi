<template>
	<div id="#box">
		 <swiper  :options="swiperOption">
	        <swiper-slide><img src="../assets/detail/de01.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/detail/de02.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/detail/de03.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/detail/de04.jpg"/></swiper-slide>
	        <swiper-slide><img src="../assets/detail/de05.jpg"/></swiper-slide>
	         <div class="swiper-pagination" slot="pagination"></div>
	      </swiper>
	      <ul class="iul">
	      	<li class="iconli l">
	      		<router-link to="/home">
	      			<span class="iconfont"style="color: white;">&#xe610;</span>
	      		</router-link>
	      	</li>
	      	<li class="iconli r" @click="share">
	      		<span class="iconfont"style="color: white;">&#xe63c;</span>
	      	</li>
	      </ul>
	      <section class="content">
	      	<p class="name">小米CC9 6GB +64GB</p>
	      	<p>
	      		<span class="t1">「新品火爆热卖中，享花呗6期免息；加19元可得保护壳」</span>
	      		<span class="t2">前置3200万自拍 / 索尼4800万超广角三摄 / 多色炫彩轻薄机身 / 6.39英寸三星 AMOLED水滴屏 /4030mAh大电量
	      			 /  骁龙710处理器 / 屏幕指纹 / NFC功能 / 红外遥控功能 / Game Turbo2.0游戏加速</span>
	      	</p>
	      	<p class="price">￥1999</p>
	      </section>
	      <section class="nav01">
	      	<swiper :options="swiperOption2">
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav01.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav02.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav03.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav04.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav05.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav06.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav07.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav08.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="navli">
			     		<p class="navpic"><img src="../assets/detail/nav09.png"/></p>
			     		<p>CPU</p>
			     		<p>骁龙710</p>
			     	</div>
		        </swiper-slide>
		      </swiper>
	      </section>
	      
	      <section class="chosed">
	      	<p class="p1">
	      		<span class="l sp01">已选</span>
	      		<span class="l">小米CC9 6GB+64GB 白色恋人 x 1</span>
	      		<span class="iconfont r">&#xe64a;</span>
	      	</p>
	      	<p class="p1">
	      		<span class="l sp01">送至</span>
	      		<span class="l">东城区 有现货</span>
	      		<span class="iconfont r">&#xe64a;</span>
	      	</p>
	      	<p class="p1">
	      		<span class="l sp02"><img src="../assets/detail/bingo.jpg.png"/></span>
	      		<span class="l">&nbsp;小米自营</span>
	      		<span class="l sp02 sp03"><img src="../assets/detail/bingo.jpg.png"/></span>
	      		<span class="l">&nbsp;小米发货</span>
	      		<span class="l sp02 sp03"><img src="../assets/detail/bingo.jpg.png"/></span>
	      		<span class="l">&nbsp;7天无理由退货</span>
	      		<span class="iconfont r">&#xe64a;</span>
	      	</p>
	      </section>
	      <div class="user">
	      	<swiper>
		        <swiper-slide>
		        	<div class="userp">
		        		<div style="overflow: hidden;">
		        			<p class="upic l"><img src="../assets/detail/user01.jpg"/></p>
			        		<p class="uname l">张三001</p>
			        		<p class="udate l">2019-05-05</p>
			        		<p class="r">
			        			<span class="iconfont">&#xe65c;</span>
			        			<span>3</span>
			        		</p>
		        		</div>
		        		<p class="ucontent">手机扛扛的！特别是物流真的很快，隔天就到了非常不错</p>
		        		<ul class="userul">
		        			<li class="userli userli01"><img src="../assets/detail/upic01.jpg"/></li>
		        			<li class="userli userli01"><img src="../assets/detail/upic02.jpg"/></li>
		        			<li class="userli"><img src="../assets/detail/upic03.jpg"/></li>
		        		</ul>
		        		<p class="ucontent">
		        			<span style="color: orangered;">官方回复：</span>
		        			有人问我皮肤为什么黑，真搞笑，一白遮百丑，你白是为了遮丑，我又不丑。感...
		        		</p>
		        	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="userp">
		        		<div style="overflow: hidden;">
		        			<p class="upic l"><img src="../assets/detail/user01.jpg"/></p>
			        		<p class="uname l">张三001</p>
			        		<p class="udate l">2019-05-05</p>
			        		<p class="r">
			        			<span class="iconfont">&#xe65c;</span>
			        			<span>3</span>
			        		</p>
		        		</div>
		        		<p class="ucontent">手机扛扛的！特别是物流真的很快，隔天就到了非常不错</p>
		        		<ul class="userul">
		        			<li class="userli userli01"><img src="../assets/detail/upic01.jpg"/></li>
		        			<li class="userli userli01"><img src="../assets/detail/upic02.jpg"/></li>
		        			<li class="userli"><img src="../assets/detail/upic03.jpg"/></li>
		        		</ul>
		        		<p class="ucontent">
		        			<span style="color: orangered;">官方回复：</span>
		        			有人问我皮肤为什么黑，真搞笑，一白遮百丑，你白是为了遮丑，我又不丑。感...
		        		</p>
		        	</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<div class="userp">
		        		<div style="overflow: hidden;">
		        			<p class="upic l"><img src="../assets/detail/user01.jpg"/></p>
			        		<p class="uname l">张三001</p>
			        		<p class="udate l">2019-05-05</p>
			        		<p class="r">
			        			<span class="iconfont">&#xe65c;</span>
			        			<span>3</span>
			        		</p>
		        		</div>
		        		<p class="ucontent">手机扛扛的！特别是物流真的很快，隔天就到了非常不错</p>
		        		<ul class="userul">
		        			<li class="userli userli01"><img src="../assets/detail/upic01.jpg"/></li>
		        			<li class="userli userli01"><img src="../assets/detail/upic02.jpg"/></li>
		        			<li class="userli"><img src="../assets/detail/upic03.jpg"/></li>
		        		</ul>
		        		<p class="ucontent">
		        			<span style="color: orangered;">官方回复：</span>
		        			有人问我皮肤为什么黑，真搞笑，一白遮百丑，你白是为了遮丑，我又不丑。感...
		        		</p>
		        	</div>
		        </swiper-slide>
		      </swiper>
	      </div>
	      <div class="picbox">
	      	<img src="../assets/detail/detail01.jpg"/>
	      	<img src="../assets/detail/detail02.jpg"/>
	      	<img src="../assets/detail/detail03.jpg"/>
	      	<img src="../assets/detail/detail04.jpg"/>
	      	<img src="../assets/detail/detail05.jpg"/>
	      	<img src="../assets/detail/detail06.jpg"/>
	      	<img src="../assets/detail/detail07.jpg"/>
	      	<img src="../assets/detail/detail08.jpg"/>
	      	<img src="../assets/detail/detail09.jpg"/>
	      	<img src="../assets/detail/detail10.jpg"/>
	      </div>
	      <footer class="foot">
	      	<p class="l fp">
	      		<router-link to="/home" style="color: rgba(0,0,0,.54)">
					<span class="iconfont" style="font-size: 24px;">&#xe637;</span><br />
	      			<span>首页</span>
				</router-link>
	      	</p>
	      	<p class="l fp">
	      		<router-link to="/shopcar" style="color: rgba(0,0,0,.54)">
					<span class="iconfont" style="font-size: 24px;">&#xe607;</span><br />
	      			<span>购物车</span>
				</router-link>	      		
	      	</p>
	      	<p class="r fp2">加入购物车</p>
	      </footer> 
	      <p v-show="topFlag" class="top" @click="backTop" >
			 <img src="../assets/home/top.png"/>
		  </p>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	 export default {
    data() {
      return {
      	topFlag:false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
		swiperOption2: {
          slidesPerView: 5,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination2',
            clickable: true
          }
        }
      }
    },
    mounted(){
		this.$nextTick(function () {
	      window.addEventListener('scroll', this.scrollToTop,true)//监听滚动事件
	    })
	},
	methods:{
		backTop(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		},
		scrollToTop () {
		    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		    if (scrollTop > 100) {
		      this.topFlag = true;
		    } else {
		      this.topFlag = false;
		    }
		},
		share(){
			MessageBox.confirm('确定分享此商品?').then(action => {
				  this.$router.push({path:'/login'})
				})
			.catch(()=>{
				this.$router.push({path:'/my'})
			})
			.finally((f)=>{

			})
		}
	},
	destroyed(){
		window.removeEventListener('scroll',this.scrollsToTop, true)
	}
  }
</script>

<style scoped="scoped">
	#box{
		position: relative;
		overflow: hidden;
	}
	.swiper-slide{
		width: 100%;
		margin-right: 0 !important;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.iul{
		position: absolute;
		top: 2%;
		left: 2%;
		z-index: 999;
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
	}
	.iconli{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: rgba(1,1,1 ,0.7);
		padding: 2%;
	}
	.content{
		width: 90%;
		padding-top: 5%;
		text-align: left;
		margin: 0 auto;
	}
	.name{
		font-size: 1.3rem;
	}
	.t1{
		color: orangered;
		font-size: 0.85rem;
	}
	.t2{
		color: rgba(0,0,0,.54);
		font-size: 0.9rem;
	}
	.price{
		padding: 2% 0%;
		font-size: 1.5rem;
		color: orangered;
	}
	.chosed{
		width: 90%;
		margin: 2% auto;
		border: 1px solid gainsboro;
		border-radius: 4%;
		overflow: hidden;
	}
	.p1{
		padding: 4% 4%;
		background-color: #fafafa;
		border-bottom: 1px solid #F2F2F2;
		overflow: hidden;
	}
	.p1 span{
		display: inline-block;
		font-size: 0.8rem;
	}
	.sp01{
		margin-right: 5%;
	}
	.sp02{
		width: 5%;
	}
	.sp03{
		margin-left: 5%;
	}
	.nav01{
		margin: 5% 0%;
	}
	.navli{
		border-right: 1px solid gainsboro;
	}
	.navpic{
		width: 30%;
		margin: 0 auto;
		padding: 2%;
	}
	.user{
		margin: 6% 0%;
	}
	.userp{
		width: 80%;
		margin: 0 auto;
		border-radius: 2%;
		background-color: #fafafa;
		overflow: hidden;
		padding: 4%;
	}
	.upic{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: inline-block;
		overflow: hidden;
	}
	.uname{
		padding:  0% 4%;
		width: 50%;
		text-align: left;
		font-size: .9rem;
		margin: 1%;
	}
	.udate{
		width: 50%;
		text-align: left;
		padding:  0% 5%;
		font-size: 0.7rem;
		color: rgba(0,0,0,.54);
	}
	.iconfont{
		font-size: 20px;
	}
	.ucontent{
		font-size: 0.9rem;
		text-align: left;
		padding: 3% 0%;
	}
	.userul{
		width: 95%;
		overflow: hidden;
		margin: 0 auto;
	}
	.userli{
		width: 31%;
		float: left;
		overflow: hidden;
		border-radius: 5%;
	}
	.userli01{
		margin-right: 3%;
	}
	.foot{
		position: fixed;
		bottom: 1%;
		left: 4%;
		width: 84%;
		box-shadow: 0 0 10px gainsboro;
		border: 1px solid gainsboro;
		z-index: 999;
		padding: 2% 4%;
		background-color: white;
		text-align: left;
		border-radius: 2%;
	}
	.fp{
		margin-right: 6%;
		text-align: center;
		color: rgba(0,0,0,.54);
	}
	.fp2{
		width: 30%;
		background-color: orangered;
		color: white;
		border-radius: 10%;
		padding: 3% 0%;
		text-align: center;
		font-size: 1rem;
	}
	.picbox{
		width: 100%;
	}
	.top{
		width: 2.5rem;
		border-radius: 50%;
		position: fixed;
		bottom: 10%;
		right: 4%;
		z-index: 999;
	}
	.mint-swipe{
		overflow: hidden;
	}
</style>