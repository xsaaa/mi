<template>
	<div id="#box">
		<router-view></router-view>
		<header class="hbox">
			<img src="../../assets/home/milogo01.png" class="pimg"/>
			<p class="t1"><span>小米账号登陆</span></p>
		</header>
		<p class="pbox" v-if="regis">
			<transition-group enter-active-class="animated fadeInLeft">
				<span v-show="show" :key="1">+86</span>
				<span v-show="show" class="iconfont" :key="2" style="font-size: 20px;">&#xe64a;</span>
			</transition-group>
			<input type="text" class="telnum" placeholder="手机号码" v-model="telnum"/>
		</p>
		<p class="pbox" v-if="regis">
			<input type="text" class="telnum" placeholder="短信验证码"></input>
			<span class="t2">获取验证码</span>
		</p>
		<p class="pbox" v-if="login">
			<input type="text" class="telnum" placeholder="邮箱/手机号码/小米ID" v-model="telnum"/>
		</p>
		<p class="pbox" v-if="login">
			<input type="text" class="telnum" placeholder="密码"/>
		</p>
		<p class="phonenum" v-show="phonenum">请输入正确的手机号</p>
		<!--<router-link to="/my" class="t3">立即登陆/注册</router-link>-->
		<p class="t3"  @click="isTelCode(telnum)" v-if="regis">立即登陆/注册</p>
		<p class="t4" @click="register()" v-if="regis">用户名密码登陆</p>
		<!--两种登陆方式-->
		<p class="t3"  @click="isTelCode(telnum)" v-if="login">登陆</p>
		<p class="t4" @click="register()" v-if="login">手机号短信登陆</p>
		
		<p class="ptitle">其他方式登陆</p>
		<p class="t5">
			<span class="iconfont t5">&#xe73c;</span>
			<span class="iconfont t5">&#xe60f;</span>
			<span class="iconfont t5">&#xe73b;</span>
		</p>
		<p class="t6">
			<span>简体</span>
			<span>|</span>
			<span>繁体</span>
			<span>|</span>
			<span>English</span>
			<span>|</span>
			<span>常见问题</span>
			<span>|</span>
			<span>隐私政策</span>
		</p>
	</div>
</template>

<script>
	export default {
    data() {
      return{
      	show:true,
      	telnum:'',
      	phonenum:false,
      	regis:true,
      	login:false
      }
    },
    methods:{
    	isTelCode(telnum) {
		    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
		     reg.test(telnum);
		    if(reg.test(telnum)){
		    	this.phonenum = false;
//		    	this.$router.push({name:"my",params:{num:this.telnum}})
		    	this.$router.push({path:'/my', query:{num: this.telnum}})
		    }
		    else{
		    	this.phonenum = true;
		    }
		
   		},
   		register(){
   			this.login = !this.login;
   			this.regis = !this.regis;
   		}
    }
  }
</script>

<style scoped="scoped">
	#box{
		width: 100%;
		padding: 0% 2%;
	}
	header{
		padding: 2%;
	}
	.hbox{
		padding: 7% 0% 0% 0%;
		width: 85%;
		margin: 0 auto;
	}
	.pimg{
		width: 20%;
	}
	.t1{
		font-size: 1.2rem;
		padding: 4%;
	}
	.pbox{
		width: 90%;
		padding: 4% 0%;
		text-align: left;
		border-bottom: 1px solid #b0b0b0;
		margin: 0 auto;
		color: #b5aea4;
		font-size: 1.2rem;
	}
	.t2{
		display: inline-block;
		font-size: 0.8rem;
		float: right;
		padding-top: 2%;
	}
	.t3{
		width: 90%;
		margin: 7% auto;
		background-color: #ff6700;
		color: white;
		padding: 3% 0%;
		font-size: 18px;
		border-radius: 4%;
		display: inline-block;
	}
	.t4{
		width: 90%;
		margin: 0% auto;
		padding: 3% 0%;
		font-size: 18px;
		border-radius: 5%;
		border: 1px solid gainsboro;
	}
	.ptitle{
		padding: 4% 0%;
		font-size: 0.7rem;
		color: #b0b0b0;
		margin-top: 8%;
	}
	.ptitle:before,.ptitle:after{
		content:"";
	    display:inline-block;
	    width:30%;
	    margin:5px 2%;
	    border-bottom:1px solid gainsboro;
	}
	.iconfont{
		font-size: 30px;
	}
	.t5{
		padding: 1% 2%;
	}
	.t5:nth-child(1){
		color: #ed9090;
	}
	.t5:nth-child(2){
		color: #6bb6ea;
	}
	.t5:nth-child(3){
		color: #00be00;
	}
	.t6{
		font-size: 0.9rem;
		width: 90%;
		margin: 0 auto;
		padding-top: 20%;
	}
	.t6 span{
		padding: 1%;
		color: #b0b0b0;
	}
	.t6 span:nth-child(1){
		color: black;
	}
	.telnum{
		display: inline-block;
		width: 50%;
		border: none;
		outline:none;
		font-size: 1.1rem;
	}
	.phonenum{
		width: 90%;
		color: orangered;
		text-align: left;
		margin: 0 auto;
		padding: 4% 0% 0% 0%;
		font-size: 0.9rem;
	}
</style>