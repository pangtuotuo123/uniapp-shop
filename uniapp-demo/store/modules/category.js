import {
	request
} from '@/utils/request.js'
//存储数据地方
const state = {
	arr:[]
};
//唯一可以修改state地方
const mutations = {
	GETCATEGORYDARA(state,arr){
		state.arr = arr;
	}
};
//处理业务地方
const actions = {
	async getCategoryData({
		commit,
		state,
		dispatch,
		getter
	}, payload) {
	let result	 = await request("/getCateGoryData");
	 commit('GETCATEGORYDARA',result);
	}
};
//计算属性,简化数据
const getters = {};
export default {
	state,
	mutations,
	actions,
	getters
}
