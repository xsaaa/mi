import VueRouter from 'vue-router'

import home from '../components/index/home.vue'
import type from '../components/type/type.vue'
import my from '../components/index/my.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import foot from '../components/footer/foot.vue'
import login from '../components/login/login.vue'
import detail from '../components/detail.vue'
import channel from '../components/channel.vue'
import search from '../components/search.vue'

export default new VueRouter({
	routes:[
	{
		path:'/',
		component:foot,
		children:[
			{
				path:'/home',component:home
			},
			{
				path:'/my',component:my
			},
			{
				path:'/type',component:type
			}	
		],
		redirect:'/home'
	},
	{
		path:'/shopcar',component:shopcar
	},
	{
		path:'/detail',component:detail
	},
	{
		path:'/channel',component:channel
	},
	{
		path:'/login',component:login
	},
	{
		path:'/search',component:search
	},
	{
		path:'/*',redirect:'/home'
	}
	]
})
