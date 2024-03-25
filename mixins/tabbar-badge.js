import { mapGetters } from 'vuex'
export default {
	// 计算tabbar购物车上的徽标的值
	computed: {
		...mapGetters('m_cart', ['total'])
	},
	onShow() {
		this.setBadge()
	},
	
	methods: {
		setBadge() {
			if(this.total === 0){
				uni.removeTabBarBadge({
					index: 2
				})
			}else {
				uni.setTabBarBadge({
					index: 2,
					text: this.total + ''
				})
			}
		},
		
	},
	watch: {
		total(newVal) {
			this.setBadge()
		}
	}
	
}