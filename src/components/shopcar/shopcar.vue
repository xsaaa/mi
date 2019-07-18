<template>
	<div id="#box">
		<mt-header fixed title="购物车">
		  <mt-button icon="back" slot="left" @click="home()"></mt-button>s
		  <mt-button icon="search" slot="right" @click="search()"></mt-button>
		</mt-header>
		<p class="p1">
			<span class="t1 l" style="font-size: 1rem;">登陆后享受更多优惠</span>
			<span class="iconfont t1 r" style="padding-top: 1%;">&#xe64a;</span>
			<router-link to="/login">
				<span class="t1 r" style="padding-top: 1%;">去登陆</span>
			</router-link>
		</p>
		<article v-for="(item01,index01) in shoplist">
			<section class="section01">
				<span :class="{iconfont:true,check:true,checked:item01.bon}" 
					style="font-size: 20px;" @click="change(index01),changenum()">&#xe64f;</span>
				<div class="l imgbox">
					<router-link to="/detail">
						<img :src="item01.src"/>
					</router-link>
				</div>
				<div class="l textbox">
					<p class="pbox">{{item01.info}}</p>
					<span class="sbox">售价:&nbsp;&nbsp;&nbsp;</span>
					<span class="price">{{item01.price}}元</span>
				</div>
				<ul class="sul l">
					<li class="l sli iconfont" @click="add(item01,-1)">&#xe614;</li>
					<li class="l sli" style="font-size: 18px;">{{item01.num}}</li>
					<li class="l sli iconfont" @click="add(item01,1)">&#xeaf3;</li>
				</ul>
				<span class="iconfont del r" style="font-size: 20px;" @click="del(index01)">&#xe626;</span>
			</section>
			<section class="choice" v-if="item01.bon">
				<div class="ptext">
					<div class="sbox02 l"><img src="../../assets/shopcar/insurance.png"/></div>
					<div class="stext l">意外保护 99元起</div>
					<span class="r stext02">选购</span>
				</div>
				<div class="ptext">
					<div class="sbox02 l"><img src="../../assets/shopcar/insurance.png"/></div>
					<div class="stext l"> 延长保修服务 49元</div>
					<span class="r stext02">选购</span>
				</div>
			</section>
		</article>
		<p class="empty" v-if="show">
			<span class="iconfont" style="font-size: 24px;">&#xe607;</span>&nbsp;
			<span>购物车还是空的</span>&nbsp;
			<router-link to="/home">
				<span class="go">去逛逛</span>
			</router-link>
		</p>
		<p class="side"></p>
		<p class="tips">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
		<p class="side"></p>
		<p><img src="../../assets/shopcar/like.jpg"/></p>
		<ul class="section02">
			<li class="goodsbox" v-for="(item,index) in shopcar">
				<img :src="item.src"/>
				<p class="ldatails01">{{item.title}}</p>
				<span class="ldatails02">{{item.newprice}}</span>
				<span class="ldatails03">{{item.oldprice}}</span>
			</li>
		</ul>
		<footer>
			<ul class="ful">
				<li class="fli">
					共<span>{{n}}</span>件 &nbsp;金额：<br />
					<span class="money">{{m}}</span>
					<span>元</span>
				</li>
				<li class="fli" @click="type()">继续购物</li>
				<li class="fli">去结算</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				shopcar:[],
				shoplist:[],
				show:false,
				total:0,
				totalprice:0
			}
		},
		computed:{
			//监听total的变化
			n(){
				return this.total;
			},
			m(){
				return this.totalprice;
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
			.then(function(res){
				_this.shopcar = res.data.shopcar;
				_this.shoplist = res.data.shoplist;
			})
			.catch(()=>{
			
			})
			.finally((f)=>{
//				console.log('请求结束')
			})
		},
		methods:{
			change(index01){
				this.shoplist[index01].bon = !this.shoplist[index01].bon;
			},
			add(obj,i){
				if(i==-1){
					obj.num--;
					if(obj.num<'0'){
						obj.num=0
						Toast('已经不能再减了!');
					}
				}
				else{
					obj.num++;
				}
				this.changenum();
			},
			changenum(){
				var _this = this;
				this.total = 0;
				this.totalprice = 0;
				for(var x=0;x<_this.shoplist.length;x++){
					if(this.shoplist[x].bon){
						_this.total += this.shoplist[x].num;
						_this.totalprice += this.shoplist[x].num*_this.shoplist[x].price;
					}
				}
			},
			del(i){
				this.shoplist.splice(i,1);
				if(this.shoplist.length==0){
					this.show = true;
				}
				this.num = 0;
				this.changenum();
			},
			type(){
				this.$router.push({path:'/type'})
			},
			home(){
				this.$router.push({path:'/home'})
			},
			search(){
				this.$router.push({path:'/search'})
			}
		}
		
	}
</script>
<style>
	.mintui{
		font-size: 22px !important;
	}
</style>
<style scoped="scoped">
	#box{
		overflow: hidden;
	}
	.mint-header{
		background-color: #e6e6e6;
		color: #959595;
		width: 100%;
		height:50px;
		font-size: 1.1rem;
	}
	.ful{
		width: 100%;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.fli{
		width: 33.3%;
		float: left;
		font-size: 1rem;
	}
	.fli:nth-child(1){
		background-color: white;
		padding: 1.4% 0%;
	}
	.fli:nth-child(2){
		background-color: #f5f5f5;
		color: black;
		padding: 4% 0%;
	}
	.fli:nth-child(3){
		color: white;
		background-color: #ff6700;
		padding: 4% 0%;
	}
	.p1{
		width: 92%;
		margin: 0 auto;
		padding-top: 18%;
		padding-bottom: 10%;
	}
	.t1{
		display: inline-block;
	}
	.section01{
		width: 95%;
		margin: 4% auto;
		overflow: hidden;
	}
	.check{
		width: 8%;
		padding: 10% 0%;
		display: inline-block;
		float: left;
		color: gainsboro;
	}
	.checked{
		color: orangered;
	}
	.imgbox{
		width: 25%;
		border: 1px solid gainsboro;
		margin-right: 2%;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.textbox{
		width: 60%;
		padding-bottom: 1%;
	}
	.pbox{
		text-align: left;
		font-size: 0.95rem;
		color: #666666;
	}
	.sbox{
		display: inline-block;
		float: left;
		/*padding: 0% 4%;*/
		font-size: 0.8rem;
		color: #999;
	}
	.price{
		display: inline-block;
		float: left;
		font-size: 0.8rem;
		color: #999;
	}
	.sul{
		width: 25%;
		border: 1px solid gainsboro;
		overflow: hidden;
	}
	.sli{
		width: 33.3%;
		font-size: 1.2rem;
		padding: 4% 0%;
		text-align: center;
	}
	
	.sli:nth-child(1){
		background-color: #fafafa;
		color: #cfcfcf;
	}
	.sli:nth-child(3){
		background-color: #f4f4f4;
		color: #747474;
	}
	.del{
		padding-top: 2%;
		display: inline-block;
	}
	.ptext{
		width: 90%;
		background-color: #f6f6f6;
		margin: 3% auto;
		padding: 2%;
		overflow: hidden;
	}
	.sbox02{
		width: 8%;
	}
	.stext{
		width: 65%;
		text-align: left;
		display: inline-block;
		font-size: 0.8rem;
		padding: 2%;
	}
	.stext02{
		padding: 2% 5%;
		color: orangered;
	}
	.side{
		width: 100%;
		height: 10px;
		background-color: #f6f6f6;
	}
	.tips{
		width: 94%;
		text-align: left;
		padding: 3% 3%;
		font-size: 12px;
		color: #999;
	}
	.section02{
		width: 100%;
		margin-top: 1%;
		overflow: hidden;
		padding-bottom: 15%;
		text-align: left;
	}
	.section02 li:nth-of-type(odd){
		 float: left;
		 }
    .section02 li:nth-of-type(even){
    	float: right;
    	}
	.goodsbox{
		width: 49%;
		padding-bottom: 5%;
		overflow: hidden;
	}
	.ldatails01{
		padding: 4% 4% 0% 4%;
		font-size: 0.9rem;
	}
	.ldatails02{
		padding: 4% 4% 0% 4%;
		font-size: 1.1rem;
		color: orangered;
		display: inline-block;
	}
	.ldatails03{
		text-decoration: line-through;
	}
	.empty{
		width: 94%;
		background-color: #e6e6e6;
		padding: 3%;
		color: rgba(0,0,0,.27);
		font-size: 1rem;
	}
	.go{
		display: inline-block;
		border: 1px solid gray;
		padding: 1% 3%;
		font-size: 0.8rem;
	}
	.money{
		color: orangered;
		font-weight: bolder;
		font-size: 1.1rem;
	}
</style>