//存储数据地方
const state = {

	//由于购物车模块没有接口了:模拟购物车里面商品的数据
	cartArr: [
		{

			"id": 1535004, //商品的ID
			"isChecked": true, //商品的勾选状态
			"goodNum": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png", //商品图片地址
			"name": "男式色拉姆内衣套装2.0", //商品的名字
			"counterPrice": 299, //商品的单价

		},
		{
			"id": 1536001,
			"isChecked": true, //商品的勾选状态
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"name": "女式色拉姆内衣套装2.0",
			"counterPrice": 199,
			"goodNum": 1,
		},
	]


};
//唯一可以修改state地方
const mutations = {};
//处理业务地方
const actions = {};
//计算属性,简化数据
const getters = {};
export default {
	state,
	mutations,
	actions,
	getters
}
