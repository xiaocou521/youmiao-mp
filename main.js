import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
// 引入全局公共方法
import uniApi from './common/uniApi.js'
// 引入全局授权方法-第三方
// 第三方登陆
import uniLogin from './common/provider/login/uniLogin.js'
// 引用全局授权方法-其他
import uniAuth from './common/authorize/uniAuth.js'
// 分享
import share from '@/static/js/mixins/share.js'
// UI组件
import uView from "uview-ui"
Vue.use(uView);

Vue.config.productionTip = false
//把vuex定义成全局组件
Vue.prototype.$store = store
// 全局方法
Vue.prototype.$uniApi = uniApi
// 全局授权
Vue.prototype.$uniAuth = uniAuth
Vue.prototype.$uniLogin = uniLogin
// 分享（混入）
Vue.mixin(share)

App.mpType = 'app'

const app = new Vue({
    ...App,
	//挂载
	store
})
app.$mount()
