<template>
	<div id="#box">
		<router-view></router-view>
		<header class="hd">
			<p class="p1">
				<img src="../../assets/my/my01.png"/>
				<span style="color: white;" @click="comfirm()">{{msg}}</span>	
			</p>
		</header>
		<p class="p2">
			<span class="t1 l">我的订单</span>
			<span class="t2 iconfont r">&#xe64a;</span>
			<span class="t02 r">全部订单</span>
		</p>
		<p class="p3">
			<span class="iconfont t3">&#xe608;</span>
			<span class="iconfont t3">&#xe67f;</span>
			<span class="iconfont t3">&#xe64d;</span>
			<span class="t4">待付款</span>
			<span class="t4">待发货</span>
			<span class="t4">退换修</span>
		</p>
		<p class="p4"></p>
		<div class="bigbox">
			<span class="iconfont t5">&#xe60e;</span>
			<p class="p5 r">
				<span class="t1 l">会员中心</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<div class="bigbox">
			<span class="iconfont t6">&#xe606;</span>
			<p class="p6 r">
				<span class="t1 l">我的优惠</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<p class="p4"></p>
		<div class="bigbox">
			<span class="iconfont t7">&#xe60d;</span>
			<p class="p5 r">
				<span class="t1 l">服务中心</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<div class="bigbox">
			<span class="iconfont t8">&#xe660;</span>
			<p class="p6 r">
				<span class="t1 l">小米之家</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<p class="p4"></p>
		<div class="bigbox">
			<span class="iconfont t9">&#xe600;</span>
			<p class="p6 r">
				<span class="t1 l">F码通道</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<p class="p4"></p>
		<div class="bigbox">
			<span class="iconfont t10">&#xe620;</span>
			<p class="p6 r">
				<span class="t1 l">设置</span>
				<span class="t2 iconfont r">&#xe64a;</span>
			</p>
		</div>
		<p class="p4"></p>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui';
	export default{
		name:'my',
		data(){
			return{
				msg:'登陆/注册'
			}
		},
		mounted(){
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
		created:function(){
		  this.getParams();
		},
		watch: {
		  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
		  '$route': 'getParams'
		},
		methods:{
		  getParams:function(){
		    // 取到路由带过来的参数
		    var routerParams = '账号:'+this.$route.query.num
		    // 将数据放在当前组件的数据内
		    if(this.$route.query.num==undefined){
		    	this.msg = '登陆/注册'
		    }else{
		    	this.msg = routerParams
		    }

		  },
		  comfirm(){
		  	MessageBox.confirm('确定执行此操作?').then(action => {
				  this.$router.push({path:'/login'})
				})
			.catch(()=>{
				this.$router.push({path:'/my'})
			})
			.finally((f)=>{

			})
		  }
		  
		}

	}
</script>

<style scoped="scoped">
	#box{
		overflow: hidden;
		background-color: #f5f5f5;
	}
	.hd{
		width: 100%;
		/*height: 80px;*/
		background-color: #f37d0f;
		background-image: url(../../assets/my/my02.png);
		background-size: auto 100%;
		padding: 5% 3%;
		color: white;
		font-size: 0.8rem;
		box-sizing:border-box ;
	}
	.p1{
		text-align: left;
	}
	.p1 img{
		width: 12%;
		padding: 0% 2%;
	}
	.p2{
		width: 100%;
		padding: 1% 4%;
		overflow: hidden;
		font-size: 1rem;
		border-bottom: 1px solid gainsboro;
		box-sizing:border-box ;
	}
	.t1{
		display: inline-block;
		padding: 2% 1%;
	}
	.t02{
		display: inline-block;
		padding: 2% 1%;
		font-size: 0.8rem;
		}
	.t2{
		display: inline-block;
		padding: 1% 8% 0% 0%;
		font-size: 0.8rem;
	}
	.p3{
		width: 100%;
		padding: 4% 0%;
		}
	.t3{
		width: 30%;
		display: inline-block;
		padding: 1% 0%;
		color: #9f9f9f;
	}
	.t4{
		width: 30%;
		display: inline-block;
		padding: 1% 0%;
		color: black;
	}
	.iconfont{
		font-size: 22px;
	}
	.p4{
		width: 100%;
		background: #f5f5f5;
		height: 10px;
	}
	.bigbox{
		width: 100%;
		padding: 0% 2%;
		box-sizing:border-box ;
	}
	.p5{
		width: 85%;
		font-size: 1rem;
		padding: 2% 0%;
		border-bottom: 1px solid gainsboro;
		}
	.t5{
		color: #fdbf2d;
		padding: 4% 0%;
		display: inline-block;
		}
	.p6{
		width: 85%;
		font-size: 1rem;
		padding: 2% 0%;
		}
	.t6{
		color: #51bbe0;
		padding: 4% 0%;
		display: inline-block;
		}
	.t7{
		color: #f96c5e;
		padding: 4% 0%;
		display: inline-block;
		}
	.t8{
		color: #ff8b43;
		padding: 4% 0%;
		display: inline-block;
		}
	.t9{
		background-color: #ffb302;
		color: white;
		margin: 2% 0%;
		padding: 1%;
		display: inline-block;
		border-radius: 20%;
		}
	.t10{
		color: gray;
		padding: 4% 0%;
		display: inline-block;
		}
	.router-link-exact-active{
		color: #f60;
	}
</style>
