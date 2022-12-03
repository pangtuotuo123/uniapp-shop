<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* 将阿里图标的样式变为全局样式，全部页面可以直接使用样式 */
@import url('./static/iconfont/iconfont.styl');
/*每个页面公共css */
page {
	width: 100%;
	height: 100%;
}
</style>
