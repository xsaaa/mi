<template>
	<div id="#box">
		<mt-header fixed title="分类">
		  <router-link to="/index" slot="left">
		    <mt-button icon="back" @click="backhome()"></mt-button>
		  </router-link>
		  <mt-button icon="search" slot="right" @click="search()"></mt-button>
		</mt-header>
			<ul class="lbox l">
				<li :class="{navbox:true,active:index==num}" v-for="(item,index) in typePic" @click="jump(index)">{{item.title}}</li>
			</ul>
			
			<article class="rbox r" >
				<p class="title"><img src="../../assets/type/type01.jpg"/></p>
				<section v-for="(item2,index2) in typePic" class="s_jump">
					<p class="ptitle">{{item2.title}}</p>
					<ul class="box">
						<li class="typepic l" v-for="(item3,index3) in item2.detail">
							<router-link to="/detail">
								<img :src="item3.pic" />
							</router-link>
							<p class="typetext">{{item3.text}}</p>
						</li>
					</ul>
				</section>
			</article>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				msg:'type',
				typePic:[]
			}
		},
		mounted(){
			this.$nextTick(function () {
		      window.addEventListener('scroll', this.handleScroll)//监听滚动事件
		    })
			this.$http.get('./data/type.json')
			.then((res)=>{
				this.typePic = res.data.typePic;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{

			})
		},
		methods:{
			backhome(){
				if (window.removeEventListener) {                    // 所有浏览器，除了 IE 8 及更早IE版本
				    window.removeEventListener("scroll", this.handleScroll);
				} else if (window.detachEvent) {                   // IE 8 及更早IE版本
				    window.detachEvent("scroll", this.handleScroll);
				}
			},
			jump(i){
				this.num = i;
				var oSec = document.querySelectorAll('.s_jump');
				var total = oSec[i].offsetTop-100;//获取需要滚动的距离
				window.pageYOffset = total;//safari
				document.documentElement.scrollTop = total;//firefox
				document.body.scrollTop = total;//chrome
			},
			handleScroll(){
				var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
				var sec = document.querySelectorAll('.s_jump');
				var lbox = document.querySelector('.lbox');
				for(var i = 0;i<sec.length;i++){
					if(scrolled <= sec[i].offsetTop-300){
					}else{
						this.num = i;
					}
				}
				if(scrolled>2400){
					lbox.scrollTop = scrolled-2400;
				}else{
					lbox.scrollTop = 0;
				}
			},
			search(){
				this.$router.push({path:'/search'})
			}
		},
		destroyed(){
			window.removeEventListener('scroll',this.handleScroll);
			
		}
	}
</script>

<style >
	.box {
		overflow: hidden;
	}
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
	
	.lbox{
		width: 19.5%;
		border-right: 1px solid gainsboro;
		padding: 13% 0%;
		height: 85vh;
		overflow: scroll;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	.lbox::-webkit-scrollbar {
        display: none;
    }
	.navbox{
		width: 100%;
		padding: 18% 0%;
		font-size: 0.8rem;
	}
	.active{
		font-size: 1rem;
		color: orangered;
	}
	ul li{
		list-style: none;
	}
	.rbox{
		width: 80%;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 13% 2%;
		overflow: hidden;
	}
	.title{
		padding: 0% 2%;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.ptitle{
		padding: 10% 0%;
		font-size: 1rem;
	}
	.ptitle:before,.ptitle:after{
		content:"";
	    display:inline-block;
	    width:10%;
	    margin:5px 2%;
	    border-bottom:1px solid gainsboro;
	}
	.typepic{
		width: 32%;
	}
	.typepic img{
		margin: 0 auto;
		width: 68%;
	}
	.typetext{
		padding: 14% 0%;
		color: rgba(0,0,0,.54);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 1;
	}
	.native{
		font-size: 1.2rem;
		color: orangered;
	}
	.mintui{
		font-size: 22px !important;
	}

</style>