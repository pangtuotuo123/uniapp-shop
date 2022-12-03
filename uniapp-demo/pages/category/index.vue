<template>
	<!-- 分类静态布局 -->
	<view class="category">
		<view class="top">搜索商品</view>
		<view class="bottom">
			<view class="left">
				<ul>
					<li v-for="(item, index) in arr" :class="{ active: currentIndex == index }" :key="item.id" @click="changeIndex(index)">{{ item.name }}</li>
				</ul>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="scroll">
					<image :src="showGood.imgUrl" mode=""></image>
					<view class="goods">
						<view class="item" v-for="item in showGood.subCateList">
							<image :src="item.wapBannerUrl" mode=""></image>
							<text>{{ item.name }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			currentIndex: 0
		};
	},
	//微信小程序的钩子也可以
	onLoad() {
		this.$store.dispatch('getCategoryData');
	},
	computed: {
		...mapState({
			arr: state => state.category.arr
		}),
		//计算出分类右侧需要展示的数据
		showGood() {
			return this.arr[this.currentIndex];
		}
	},
	methods: {
		changeIndex(index) {
			this.currentIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.category {
	width: 100%;
	height: 100%;
}
.category .top {
	width: 90%;
	height: 60rpx;
	background: #eee;
	text-align: center;
	margin: 10rpx auto;
	line-height: 60rpx;
}
.category .bottom {
	width: 750rpx;
	height: calc(100vh - 82rpx);
	border-top: 2rpx solid #eee;
	display: flex;
}
.category .bottom .left {
	width: 150rpx;
	height: 100%;
	border-right: 2rpx solid #eee;
}
.category .bottom .left ul {
	list-style: none;
	width: 150rpx;
	height: 100%;
}
.category .bottom .left ul li {
	width: 150rpx;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
}
.category .bottom .left ul .active {
	background: #bb2c08;
	border-bottom: 2rpx dashed black;
	color: white;
}
.category .bottom .right {
	flex: 1;
}
.category .bottom .right .scroll {
	width: 100%;
	height: 100%;
}
.category .bottom .right .scroll image {
	display: block;
	width: 520rpx;
	height: 190rpx;
	margin: 10rpx auto;
}
.category .bottom .right .scroll .goods {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.category .bottom .right .scroll  .goods .item {
	width: 33%;
	height: 194rpx;
	padding: 20rpx;
	box-sizing: border-box;
}
.category .bottom .right .scroll .goods .item image {
	width: 100%;
	height: 144rpx;
}
.category .bottom .right .scroll .goods .item text {
	font-size: 24rpx;
}
</style>
