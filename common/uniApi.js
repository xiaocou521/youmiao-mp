/**
 * 判断是否授权
 */
const isAuthUserInfo = function() {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success(res) {
				console.log("授权：", res);
				if (!res.authSetting['scope.userInfo']) {
					resolve(false)
					console.log("当前未授权");
				} else {
					resolve(true)
					console.log("当前已授权");
				}
			}
		})
	})
}

const isPromise = function() {
	return new Promise((resolve, reject) => {
			console.log("log: 外部promise");
			resolve();
		})
		.then(() => {
			console.log("log: 外部第一个then");
			return new Promise((resolve, reject) => {
					console.log("log: 内部promise");
					resolve();
				})
				.then(() => {
					console.log("log: 内部第一个then");
				})
				.then(() => {
					console.log("log: 内部第二个then");
				});
		})
		.then(() => {
			console.log("log: 外部第二个then");
		});
}

new Promise((resolve, reject) => {
		console.log("promise")
		resolve()
	})
	.then(() => { // 执行.then的时候生成一个promise是给最后一个.then的
		console.log("then1")
		new Promise((resolve, reject) => {
				console.log("then1promise")
				resolve()
			})
			.then(() => { // 执行这个.then的时候，生成的promise是下面一个then的
				console.log("then1then1")
			})
			.then(() => {
				console.log("then1then2")
			})
	})
	.then(() => {
		// 这个
		console.log("then2")
	})

export default {
	isAuthUserInfo,
	isPromise
}