import App from './App'
import Vue from 'vue'



Vue.config.productionTip = false
App.mpType = 'app'
// 注册安装仓库
import store from "@/store/index.js"
const app = new Vue({
    ...App,
	// 使全局VC身上拥有$store属性
	store
})
app.$mount()