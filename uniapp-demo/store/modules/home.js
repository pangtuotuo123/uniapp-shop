import {
	request
} from '@/utils/request.js'
//存储数据地方
const state = {
	homeData: {},
	arr:[]
};
//唯一可以修改state地方
const mutations = {
	GETHOMEDATA(state, homeData) {
		state.homeData = homeData
	},
	GETOTHERDATA(state,arr){
		state.arr = arr;
	}
};
//处理业务地方
const actions = {
	async getHomeData({
		state,
		dispatch,
		commit,
		getters
	}, payload) {
		let result = await request('/getIndexData');
		commit('GETHOMEDATA', result)
	},
	//获取导航后面三个数据
	async getOtherData({
		commit,
		state,
		dispatch,
		getter
	}, payload) {
		let result = await request("/getIndexCateList");
		commit('GETOTHERDATA', result)
	}
};
//计算属性,简化数据
const getters = {
	//简化首页导航数据与十个商品的数据
	//假的报错:考虑服务器数据没有回来情况,空对象
	goodList(state) {
		return (state.homeData.kingKongModule || {}).kingKongList || [];
	},
	//首页三个小图标
	iconsList(state) {
		return state.homeData.policyDescList || []
	},
	//三个card卡片需要数据
	cardList(state) {
		return state.homeData.categoryModule || []
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}
