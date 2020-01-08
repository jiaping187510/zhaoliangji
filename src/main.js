/*
 * @Author: your name
 * @Date: 2019-12-25 14:45:53
 * @LastEditTime : 2020-01-04 10:15:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import axios from 'axios'
Vue.prototype.axios = axios
require("./mock")

Vue.use(Vant);

Vue.config.productionTip = false
// import {store} from './store/store'
import router from "./router"
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
