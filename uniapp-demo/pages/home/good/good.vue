<template>
	<div class="box">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="1000" circular class="swiper">
			<swiper-item wx-for="item in good.category.bannerUrlList" class="item">
				<view class="swiper-item"><image :src="item" mode=""></image></view>
			</swiper-item>
		</swiper>
		<!-- 两行文字 -->
		<view style="text-align: center;color: yellowgreen;">{{ good.category.name }}</view>
		<view style="text-align: center;color: yellowgreen;">{{ good.category.frontName }}</view>
		<!-- 底部展示商品的结构 -->
		<view class="bottom">
			<view class="item" wx-for="item in good.itemList" wx-key="item.id" @click="toDetail(item)">
				<image :src="item.listPicUrl" mode=""></image>
				<text>{{ item.name }}</text>
			</view>
		</view>
	</div>
</template>

<script>
export default {
	props: ['good'],
	methods: {
		toDetail(item) {
			// 路由跳转时将数据一并传递过去query  +  字符串
			wx.navigateTo({
				url: '/pages/detail/detail?goods=' + JSON.stringify(item)
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	width: 750rpx;
}
.box .swiper {
	width: 750rpx;
	height: 300rpx;
}
.box .swiper .item {
	width: 750rpx;
	height: 300rpx;
}
.box .swiper .swiper-item {
	width: 750rpx;
	height: 300rpx;
}
.box .swiper .swiper-item image {
	width: 750rpx;
	height: 300rpx;
}
.box .bottomk {
	width: 750rpx;
	display: flex;
	flex-wrap: wrap;
	padding: 20rpx;
	box-sizing: border-box;
}
.box .bottom .item {
	width: 50%;
	height: 436rpx;
}
.box .bottom .item image {
	width: 344rpx;
	height: 344rpx;
}
.box .bottom .item text {
	font-size: 28rpx;
	color: yellowgreen;
	height: 92rpx;
	display: block;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>
