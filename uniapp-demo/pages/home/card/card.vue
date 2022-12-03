<template>
	<view class="card">
		<image :src="card.titlePicUrl" class="top"></image>
		<scroll-view scroll-x="true" enable-flex class="scroll">
			<view class="item" v-for="(item, index) in card.itemList" :key="index">
				<image :src="item.listPicUrl" class="img"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="item">
				<text class="jt">
					查看更多>>
				</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:['card']
	}
</script>

<style lang="stylus" scoped>
.card
	.top
		width 750rpx
		height 350rpx
	.scroll
		width 750rpx
		height 300rpx
		display flex
		margin-top 20rpx 0rpx
		.item
			margin 0rpx 20rpx
			width 200rpx
			height 300rpx
			.img
				width 200rpx
				height 200rpx
			text
				width 200rpx
				height 64rpx
				font-size 24rpx
				display -webkit-box
				-webkit-box-orient vertical
				-webkit-line-clamp 2
				text-overflow ellipsis
				overflow hidden
			.jt
				display: block;
				width 200rpx
				height 300rpx
				text-align: center
				line-height: 300rpx;
</style>
