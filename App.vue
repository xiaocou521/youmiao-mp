<script>
	export default {
		onLoad() {
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 选择iconfont.css所在的路径 */
	@import "static/iconfont/iconfont.css";
	/*每个页面公共css */
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	/* #ifndef APP-PLUS-NVUE */
	@import "uview-ui/index.scss";

	/* #endif */
	page {
		background-color: $uni-bg-color-grey;
		font-family: 'PingFangSC-Medium';
	}
</style>
