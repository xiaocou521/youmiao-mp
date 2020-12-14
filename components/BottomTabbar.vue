<template name="BottomTabbar">
	<view>
		<u-tabbar :model="tabbarListStore.current" :list="tabbarListStore.list" :mid-button="true" active-color="#b6a2de" @change="change"></u-tabbar>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
			};
		},
		computed: {
			...mapGetters('tabbarList', ['tabbarListStore'])
		},
		methods: {
			change (index) {
				if (index === 4) {
					this.setMyHomeCount(25)
				}
			},
			...mapMutations('tabbarList', [
				'setMyHomeCount'
			]),
		}
		
	}
</script>

<style style="scss">

</style>
