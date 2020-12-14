import uniApi from '../uniApi.js'
const authsName = {
	"scope.userInfo": "用户信息", // 请用button获取该信息
	"scope.userLocation": "地理位置",
	"scope.userLocationBackground": "后台定位",
	"scope.address": "通讯地址",
	"scope.invoiceTitle": "发票抬头",
	"scope.invoice": "获取发票",
	"scope.werun": "微信运动步数",
	"scope.record": "录音功能",
	"scope.writePhotosAlbum": "保存到相册",
	"scope.camera": "摄像头",
}


var success = null;
var fail = null;

/**
 * 分享给朋友
 * _success 成功回调
 * _fail 失败回调
 */
const shareFriend = function(_success, _fail) {
	resetData();

	success = _success;
	fail = _fail;

	// 获取用户信息时，需要先授权
	if (scope === 'scope.userInfo') {
		let authUserInfo = uniApi.isAuthUserInfo();
		return authUserInfo.then((isAuth) => {
			if (!isAuth) {
				uni.showToast({
					title: '未授权，无法获取',
					icon: "none"
				});
				return;
			}
		});
	}

	// 判断权限状态
	uni.getSetting({

		success: function(res) {

			let currentScope = res.authSetting[scope];

			if (currentScope == undefined || currentScope == null) {

				// 之前没有申请或该权限
				uni.authorize({
					scope: scope,
					success: function(res) {

						authSuccess(res);
					},

					fail: function(err) {

						authDeny();
					}
				});

			} else if (currentScope == false) {

				// 之前申请过该权限但被拒绝了, 如果配置 deniedFun 函数，则有执行 deniedFun 方法，
				// 由调用者决定改中情况下如何处理。
				if (authDenied()) {
					return;
				}

				// 如果没有配置 deniedFun 函数，走默认逻辑，打开设置界面
				uni.showModal({
					title: '权限申请',
					content: '点击 “确定” 按钮，打开 “' + authsName[scope] + '” 的权限设置界面',
					cancelText: '取消',
					confirmText: '确定',
					success(res) {
						if (res.confirm) {

							uni.openSetting({
								success: function(res) {

									let cScope = res.authSetting[scope];
									console.log('成功了')
									if (cScope) {

										authSuccess();
									} else {

										authFail();
									}
								},

								fail: function(res) {

									authFail();
								}
							});
						}
					}
				});

			} else {

				// 已经获得该权限
				authSuccess();
			}
		},

		fail: function() {

			authFail();
		}
	});
}

/**
 * 权限申请成功
 */
function authSuccess(res) {

	if (success && typeof success == 'function') {
		success(res);
	}

	resetData();
}

/**
 * 权限申请失败
 */
function authFail() {

	if (fail && typeof fail == 'function') {
		fail();
	}

	resetData();
}

/**
 * 重置参数
 */
function resetData() {

	success = null;
	fail = null;
}

export default {
	authorizer
}