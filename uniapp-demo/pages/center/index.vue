<template>
	<div>
		<!-- 个人中心顶部布局 -->
		<div class="header" @click="login">
			<image class="userImg" :src="avatarUrl ? avatarUrl : `../../static/images/personal/personal.png`" mode=""></image>
			<div class="userInfo">
				<p>{{ nickName ? nickName : '未登录' }}</p>
			</div>
			<button @click="scan">扫一扫</button>
		</div>
		<div class="content">
			<h2>我的资产</h2>
			<p class="line"></p>
			<div class="myAssetList">
				<div class="assetItem">
					<span>￥0</span>
					<span>回馈金</span>
				</div>
				<div class="assetItem">
					<span>￥0</span>
					<span>红包</span>
				</div>
				<div class="assetItem">
					<span>￥0</span>
					<span>优惠券</span>
				</div>
				<div class="assetItem">
					<span>￥0</span>
					<span>津贴</span>
				</div>
				<div class="assetItem">
					<span>￥0</span>
					<span>礼品卡</span>
				</div>
			</div>
			<!-- 列表选项 -->
			<div class="personalList">
				<div class="navItem" v-for="(item, index) in personalList" :key="index">
					<i class="iconfont " :class="item.icon"></i>
					<p>{{ item.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			nickName: '',
			avatarUrl: '',
			personalList: [
				{
					name: '我的订单',
					icon: 'icon-dingdan11'
				},
				{
					name: '我的拼团',
					icon: 'icon-pintuandingdan'
				},
				{
					name: '领红包',
					icon: 'icon-tubiaolunkuo-1'
				},
				{
					name: '我的积分',
					icon: 'icon-jifen3'
				},
				{
					name: '地址管理',
					icon: 'icon-dizhiguanli'
				},
				{
					name: '账号安全',
					icon: 'icon-dingdan11'
				},
				{
					name: '联系客服',
					icon: 'icon-zhanghaoanquan'
				},
				{
					name: '用户反馈',
					icon: 'icon-tubiaolunkuo-'
				},
				{
					name: '帮助中心',
					icon: 'icon-bangzhuzhongxin'
				},
				{
					name: '退还/售后',
					icon: 'icon-shouhou'
				}
			]
		};
	},
	methods: {
		//点击头像跳转到登录页面
		login() {
			//点击的时候跳转到登录页面
			//用户信息没有才去登录页面
			if (!this.nickName) {
				uni.navigateTo({
					url: '/pages/login/login',
					animationType: 'pop-in',
					animationDuration: 2000
				});
			}
		},
		// 打开摄像头扫码
		scan() {
			wx.scanCode({
				success: res => {
					console.log(res.result);
				}
			});
		}
	},
	mounted() {
		//获取本地存储里面用户信息
		let userInfo = uni.getStorageSync('USER');
		console.log(userInfo);
		if (userInfo) {
			this.nickName = userInfo.nickName;
			this.avatarUrl = userInfo.avatarUrl;
		}
	}
};
</script>

<style lang="stylus">
.header
	display flex
	background #EED7B5
	padding 40upx 0
	.userImg
		width 100upx
		height 100upx
		margin 0 50upx 0 30upx
		background #FFFFFF
		border-radius 50upx
	.userInfo
		p
			height 50upx
			line-height 50upx
			&:first-child
				font-size 28upx
			&:last-child
				font-size 24upx
.content
	h2
		font-size 26upx
		line-height 100upx
		margin-left 5%
	.line
		width 90%
		height 2upx
		background #eee
		margin 0 auto
	.myAssetList
		width 90%
		margin 20upx auto
		display flex
		.assetItem
			width 25%
			display flex
			flex-direction column
			align-items center
			font-size 24upx
			color #333333
			line-height 40upx
	.personalList
		display flex
		flex-wrap wrap
		border-top 1upx solid #EEEEEE
		.navItem
			width 33.3333%
			text-align center
			border-bottom 1upx solid #EEEEEE
			border-right 1upx solid #EEEEEE
			box-sizing border-box
			padding 30upx 0
			&:nth-child(3n)
				border-right none
			.iconfont
				font-size 60upx
			p
				font-size 24upx
				line-height 40upx
</style>
