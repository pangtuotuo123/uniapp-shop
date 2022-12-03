import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//引入小仓库
import home from '@/store/modules/home.js'
import category from '@/store/modules/category.js'
import shopcart from '@/store/modules/shopcart.js'
import center from '@/store/modules/center.js'
// 对外暴露大仓库
export default new Vuex.Store({
	modules:{
		home,
		category,
		shopcart,
		center
	}
})