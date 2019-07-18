import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper)
import axios from 'axios'
Vue.prototype.$http = axios;

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
Vue.use(Mint);

import './assets/css/icon/demo.css';
import './assets/css/icon/iconfont.css';

import './assets/css/base.css';
import './assets/css/animate.css'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
