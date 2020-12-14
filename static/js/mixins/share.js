export default {
	data() {
		return {
			// 设置默认的分享参数
			share: {
				title: '有喵',
				path: '/pages/first/FirstHome',
				imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606817590225&di=2f0fd4af3c1ab6d9111955ffe709249a&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191209%2F20%2F1575894691-QIpJzqPyxS.jpeg',
				desc: '猫中刘诗诗高清美图',
				content: '治愈的小眼神，心都融化啦'
			}
		}
	},
	onShareAppMessage(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			imageUrl: this.share.imageUrl,
			desc: this.share.desc,
			content: this.share.content,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			}
		}
	}
	// onShareTimeline() {
	// 	console.log('我要发朋友圈啦')
	// }
}
