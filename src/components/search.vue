<template>
	<div id="#search">
		<router-view></router-view>
		<ul class="searbox">
			<li class="sli">
				<router-link to="/home">
					<span class="iconfont">&#xe610;</span>
				</router-link>
			</li>
			<li class="sli">
				<input type="text" placeholder="搜索商品名称" class="sinput"/>
			</li>
			<li class="sli">
				<router-link to="/type">
					<span class="iconfont">&#xe617;</span>
				</router-link>
			</li>
		</ul>
		<p class="hot">热门搜索</p>
		<p class="spic"><img src="../assets/search.jpg"/></p>
		<ul class="keytext">
			<li class="key" v-for="(item,index) in key">
				{{item}}
			</li>
		</ul>
		<p class="use">常用分类</p>
		<ul class="keytext">
			<li class="key2" v-for="(item,index) in key2">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				key:[],
				key2:[]
			}
		},
		mounted(){
			this.$http.get('./data/data.json')
			.then((res)=>{
				this.key = res.data.search;
				this.key2 = res.data.search02;
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
//				console.log('请求结束')
			})
		}
	}
</script>

<style scoped="scoped">
	#search{
		width: 100%;
	}
	.searbox{
		width: 100%;
		overflow: hidden;
		background-color: #f2f2f2;
	}
	.sli{
		float: left;
		display: inline-block;
		padding: 2% 0%;
	}
	.sli:nth-child(1){
		width: 15%;
		text-align: center;
	}
	.sli:nth-child(2){
		width: 64%;
	}
	.sli:nth-child(3){
		width: 15%;
		text-align: right;
	}
	.sinput{
		width: 100%;
		font-size: 1rem;
		border: none;
		outline:none;
		padding: 2% 3%;
	}
	.iconfont{
		font-size: 22px;
	}
	.hot{
		width: 90%;
		margin: 0 auto;
		padding: 3% 0%;
		text-align: left;
		font-size: 0.9rem;
	}
	.use{
		width: 90%;
		margin: 0 auto;
		padding-top: 3%;
		text-align: left;
		font-size: 0.9rem;
	}
	.spic{
		width: 100%;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.keytext{
		width: 90%;
		margin: 0 auto;
		padding: 2% 0%;
		overflow: hidden;
	}
	.key{
		float: left;
		margin-right: 3%;
		margin-top: 2%;
		padding: 2%;
		border: 1px solid pink;
		line-height: 1;
		font-size: 0.9rem;
	}
	.key2{
		float: left;
		margin-right: 3%;
		margin-top: 2%;
		padding: 3% 2.1%;
		line-height: 1;
		font-size: 0.7rem;
		background-color: #F2F2F2;
		color: gray;
	}
</style>