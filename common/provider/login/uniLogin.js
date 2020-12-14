const serviceName = {
	"weixin": "微信",
	"qq": "QQ",
}

var scope = null;
var success = null;

/**
 * 登陆授权
 * _scope 权限名称
 * _success 成功回调
 */
const authLogin = function(_scope, _success) {
	resetData();

	scope = _scope;
	success = _success;

	if (!scope) {
		return;
	}
	
	uni.getProvider({
		service: 'oauth',
		success: function(res) {
			// 登陆
			if (~res.provider.indexOf(scope)) {
				uni.login({
					provider: scope,
					success: function(loginRes) {
						// 1、调用接口获取登录凭证（code）
						console.log(loginRes.code)
						// 获取用户信息
						uni.getUserInfo({
							provider: scope,
							success: function(infoRes) {
								authSuccess(infoRes)
							}
						});
					},
					fail: () => {
						uni.showToast({
							title: serviceName[scope] + '登录授权失败',
							icon: "none"
						});
					}
				});
			} else {
				if (serviceName[scope]) {
					uni.showToast({
						title: '请先安装' + serviceName[scope] + '或升级版本',
						icon: "none"
					});
				} else {
					uni.showToast({
						title: '请确认服务商是否存在',
						icon: "none"
					});
				}
			}
		}
	})
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
 * 重置参数
 */
function resetData() {

	scope = null;
	success = null;
}

export default {
	authLogin
}
