import MUTATION_TYPES from '../mutation_type.js' // 引入
const store = {
	namespaced: true,
    state: {
        list: [{
        		iconPath: "home",
        		selectedIconPath: "home-fill",
        		text: '首页',
        		count: 2,
        		isDot: true,
        		customIcon: false,
        		pagePath: '/pages/first/FirstHome',
        	},
        	{
        		iconPath: "photo",
        		selectedIconPath: "photo-fill",
        		text: '友圈',
        		customIcon: false,
        		pagePath: '/pages/friend/FriendHome',
        	},
        	{
        		iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
        		selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
        		text: '发布',
        		midButton: true,
        		customIcon: false,
        		pagePath: '/pages/punish/PunishHome',
        	},
        	{
        		iconPath: "chat",
        		selectedIconPath: "chat-fill",
        		text: '消息',
        		customIcon: false,
        		pagePath: '/pages/notice/NoticeHome',
        	},
        	{
        		iconPath: "account",
        		selectedIconPath: "account-fill",
        		text: '我的',
        		count: 23,
        		isDot: false,
        		customIcon: false,
        		pagePath: '/pages/my/MyHome',
        	},
        ],
        current: 0
    },
    getters: {
        tabbarListStore: state => {
            return state
        }
    },
    mutations: {
        [MUTATION_TYPES.setMyHomeCount]: (state, count) => {
			state.current = count
			state.list[4].count = count
			// this.$set(state.list[0], 'count', count)
            console.log('执行了修改数量', state.list)
        }
    },
    actions: {}
}
export default store