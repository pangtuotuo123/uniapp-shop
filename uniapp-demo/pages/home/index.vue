<template>
	<view class="container">
		<!-- 头部 -->
		<view class="top">
			<image src="../../static/images/logo.png" class="img" ></image>
			<view class="center">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="搜索商品" placeholder-style="color:yellowgreen"  @confirm="handleSearch" confirm-type="搜索"/>
			</view>
			<button class="btn" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">登录</button>
		</view>
		<!-- 首页导航的布局 -->
		<scroll-view scroll-x="true" class="scroll" enable-flex>
			<view class="item" :class="{ active: goodId == -1 }"><text class="title" @click="changeGoodId(-1)">推荐</text></view>
			<view :class="{ active: goodId == good.L1Id }" class="item" v-for="(good, index) in goodList" :key="good.L1Id" @click="changeGoodId(good.L1Id)">
				<text class="title">{{ good.text }}</text>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="scroll1">
			<div v-show="goodId == -1">
				<!-- 轮播图 -->
				<swiper :indicator-dots="true" :autoplay="true" :interval="1000" circular class="swiper">
					<swiper-item class="item">
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/static-union/1668762470c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode="" class="img"></image>
						</view>
					</swiper-item>
					<swiper-item class="item">
						<view class="swiper-item">
							<image
								src="https://yanxuan.nosdn.127.net/7d34bca0e6c95fbf3ecd8f3d81b1703b.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
								mode=""
								class="img"
							></image>
						</view>
					</swiper-item>
					<swiper-item class="item">
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/static-union/166816115937b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode="" class="img"></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 三个小图标结构 -->
				<view class="icons">
					<view class="item" v-for="(icon, index) in iconsList" :key="index">
						<image :src="icon.icon"></image>
						<text>{{ icon.desc }}</text>
					</view>
				</view>
				<!-- 十个小商品的布局 -->
				<view class="goods">
					<view class="item" v-for="(good, index) in goodList" :key="good.L1Id">
						<image :src="good.picUrl" mode=""></image>
						<text>{{ good.text }}</text>
					</view>
				</view>
				<Card v-for="(card, index) in cardList" :key="index" :card="card"></Card>
			</div>
			<Good v-show="goodId != -1" :good="good"></Good>
		</scroll-view>
	</view>
</template>

<script>
//通过vuex提供辅助函数mapGetters获取仓库简化的数据
import { mapGetters,mapState } from 'vuex';
// 引入子组件
import Card from './card/card.vue';
import Good from './good/good.vue';
export default {
	data() {
		return {
			//导航每一个商品的ID，当做标记,相应商品的底部有下划线
			goodId: -1
		};
	},
	mounted() {
		this.$store.dispatch('getHomeData');
		this.$store.dispatch("getOtherData");
	},
	methods: {
		handleGetUserInfo(res){
			console.log(res)
		},
		//导航十一个商品的点击事件回调
		changeGoodId(id) {
			this.goodId = id;
		},
		// 搜索
		handleSearch(){
			let data={req:this.searchContent}
			console.log(data)
			// wx.request({
			// 	url: 'http://127.0.0.1:3001/search',
			// 	data,
			// 	method:'GET',
			// 	success(res) {
			// 		resolve(res.data)
			// 	},
			// 	fail(error) {
			// 		reject(error)
			// 	}
			// })
		}
	},
	computed: {
		...mapGetters(['goodList', 'iconsList', 'cardList']),
		...mapState({
			arr:state=>state.home.arr
		}),
		good(){
			return this.arr.find(good=>{
				return good.category.parentId===this.goodId;
			})
		}
	},
	components: {
		Card,
		Good
	}
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
}
.container .top {
	display: flex;
	width: 750rpx;
	height: 80rpx;
	justify-content: space-between;
	padding: 20rpx;
	box-sizing: border-box;
	align-items: center;
}
.container .top .img {
	width: 120rpx;
	height: 40rpx;
}
.container .top .btn {
	width: 140rpx;
	height: 60rpx;
	margin: 0;
	padding: 0;
	font-size: 24rpx;
}
.container .top .center {
	border: 1rpx solid #09a35b;
	display: flex;
	font-size: 24rpx;
	flex: 1;
	margin: 0rpx 10rpx;
	align-items: center;
}
.container .top .center .icon-sousuo {
	margin: 0rpx 10rpx;
}
.scroll {
	width: 750rpx;
	height: 84rpx;
	display: flex;
}
.item {
	white-space: nowrap;
	margin: 0rpx 20rpx;
	width: 140rpx;
	height: 80rpx;
}
.title {
	display: block;
	width: 140rpx;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
}
.active {
	border-bottom: 2rpx solid yellowgreen;
}
.scroll1 {
	width: 750rpx;
	height: calc(100vh - 168rpx);
}
.scroll1 .swiper {
	width: 750rpx;
	height: 300rpx;
}
.scroll1 .swiper .item {
	width: 750rpx;
	height: 300rpx;
}
.scroll1 .swiper .item .swiper-item {
	width: 750rpx;
	height: 300rpx;
}
.scroll1 .swiper .item .swiper-item .img {
	width: 750rpx;
	height: 300rpx;
}
.scroll1 .icons {
	display: flex;
	margin-top: 10rpx;
}
.scroll1 .icons .item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.scroll1 .icons .item image {
	width: 32rpx;
	height: 32rpx;
}
.scroll1 .icons .item text {
	font-size: 28rpx;
}
.scroll1 .goods {
	display: flex;
	/* *flex:容器中项目笔容器都宽度，项目默认死活不换行
			 flex-wrap：wrap换行
			** */
	flex-wrap: wrap;
	margin-top: 20rpx;
}
.scroll1 .goods .item {
	width: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10rpx 0rpx;
	height: 188rpx;
}
.scroll1 .goods .item image {
	
	width: 110rpx;
	height: 110rpx;
}
.scroll1 .goods .item text {
	font-size: 28rpx;
	margin-top: 10rpx;
}
</style>
