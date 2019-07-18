<template>
	<div id="foot">
		 <router-view></router-view>
		  <ul>
	   		<li>
	   			<router-link to="/home">
	   				<span class="iconfont">&#xe637;</span><br />
	   				首页
	   			</router-link>
	   		</li>
	   		<li>
	   			<router-link to="/type">
	   				<span class="iconfont">&#xe608;</span><br />
	   				分类
	   			</router-link>
	   		</li>
	   		<li>
	   			<router-link to="/shopcar">
	   				<span class="iconfont">&#xe607;</span><br />
	   				购物车
	   			</router-link>
	   		</li>
	   		<li>
	   			<router-link to="/my">
	   				<span class="iconfont">&#xe613;</span><br />
	   				我的
	   			</router-link>
	   		</li>
	   </ul>
	</div>
	
</template>

<script>
	export default{
		name:'foot',
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped="scoped">
ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /*height: 10%;*/
  background-color: white;
}

li {
  display: inline-block;
  margin: 1% 8%;
  font-size: 0.7rem;
}

a {
 color: #b5b5b5;
 text-decoration: none;
}
.iconfont{
		font-size: 22px;
	}
.router-link-exact-active,.router-link-active{
		color: #f60;
	}
</style>