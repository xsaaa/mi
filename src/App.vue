<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
	//导出
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
	
	/*样式*/
	*{
		margin: 0;
		padding: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*min-width: 360px;
  max-width: 720px;*/
  /*width: 50%;*/
  height: auto;
  /*background: blueviolet;*/
}

h1, h2 {
  font-weight: normal;
}


</style>
