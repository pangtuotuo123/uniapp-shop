<template>
	<view class="cartContainer">
		<!-- 购物车列表 -->
		<view class="cartList">
			<view class="cartItem" v-for="(good, index) in arr" :key="good.id">
				<!-- 商品的勾选的状态icon图标 -->
				<text class="iconfont icon-xuanzhong" :class="{ selected: good.isChecked }" @click="changeChecked(good)"></text>
				<view class="shopItem">
					<image class="shopImg" :src="good.listPicUrl"></image>
					<view class="shopInfo">
						<text>{{ good.name }}</text>
						<text class="price">￥{{ good.counterPrice }}</text>
					</view>
				</view>
				<!-- 控制数量 -->
				<view class="countCtrl">
					<text class="add" @click="add(good)">+</text>
					<text class="count">{{ good.goodNum }}</text>
					<text class="del" @click="minus(good)">-</text>
				</view>
			</view>
		</view>
		<!-- 底部下单 -->
		<view class="cartFooter">
			<text class="iconfont icon-xuanzhong" :class="{ selected: isSelect }"></text>
			<text class="allSelected">已选{{ skuNum }}</text>
			<view class="right">
				<text class="totalPrice">合计:{{ totalPrice }}</text>
				<text class="preOrder">下单</text>
			</view>
		</view>
	</view>
</template>

<script>
//仓库数据
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			arr: state => state.shopcart.cartArr
		}),
		//计算已选数量
		skuNum() {
			//reduce计算总和
			return this.arr.reduce((prev, next) => {
				//商品勾选了才进行累加数量
				if (next.isChecked) {
					prev += next.goodNum;
				}
				return prev;
			}, 0);
		},
		//计算总价
		totalPrice() {
			return this.arr.reduce((prev, next) => {
				//商品勾选了才进行累加数量
				if (next.isChecked) {
					prev += next.counterPrice * next.goodNum;
				}
				return prev;
			}, 0);
		},
		//全选
		isSelect() {
			return this.arr.every(good => {
				return good.isChecked == true;
			});
		}
	},
	methods: {
		//修改操作商品勾选状态
		changeChecked(good) {
			good.isChecked = !good.isChecked;
		},
		//商品+
		add(good) {
			good.goodNum++;
		},
		//商品-
		minus(good) {
			if (good.goodNum > 1) {
				good.goodNum--;
			} else {
				//数量小于等于执行分支
				wx.showModal({
					title: '你确定删除?', //模态框提示文字
					success: params => {
						//用户选择确定按钮执行钩子
						params.confirm && this.arr.splice(this.arr.indexOf(good), 1);
					}
				});
			}
		}
	}
};
</script>

<style lang="stylus">
/* iconfont 公共样式 */
.cartImg
	display block
	width 248upx
	height 248upx
	margin 300upx auto 50upx
.cartContainer
	position relative
	background #f4f4f4
	height 100%
	.title
		font-size 32upx
		line-height 80upx
		margin-left 30upx
	.header
		display flex
		background #eee
		text
			width 33.333%
			height 80upx
			line-height 80upx
			text-align center
			font-size 26upx
	.contentContainer
		button
			width 480upx
			height 92upx
			background #DD1A21
			color #fff
			font-size 32upx
			line-height 92upx
		.addMore
			text-align center
			font-size 26upx
			color #7f7f7f
			line-height 60rpx
	.cartList
		.cartItem
			position relative
			display flex
			height 172upx
			background #fff
			margin-top 20upx
			padding 20upx
			.iconfont
				font-size 40upx
				line-height 172upx
				margin 0 40upx
				color #999
				&.selected
					color #BB2C08
			.shopItem
				display flex
				.shopImg
					width 172upx
					height 172upx
					background #eee
				.shopInfo
					font-size 28upx
					display flex
					flex-direction column
					margin-left 20upx
					text
						line-height 60upx
					.price
						color #BB2C08
			.countCtrl
				position absolute
				right 20upx
				bottom 30upx
				text
					display inline-block
					width 60upx
					height 50upx
					text-align center
					line-height 50upx
					border 1upx solid #EEEEEE
					&:nth-child(2)
						border none
						border-top 1upx solid #EEEEEE
						border-bottom 1upx solid #EEEEEE
	.cartFooter
		position absolute
		display flex
		bottom 2rpx
		height 96upx
		line-height 96upx
		width 100%
		background #fff
		font-size 30upx
		.iconfont
			font-size 40upx
			margin 0 20upx
			color #999
			&.selected
				color #BB2C08
		.right
			height 96upx
			position absolute
			right 0
			.totalPrice
				display inline-block
				height 96upx
				line-height 96upx
			.preOrder
				display inline-block
				background yellowgreen
				width 225upx
				height 96upx
				line-height 96upx
				text-align center
				font-size 28upx
				color #fff
				margin-left 30upx
	.hint
		text-align center
		font-size 28upx
</style>
