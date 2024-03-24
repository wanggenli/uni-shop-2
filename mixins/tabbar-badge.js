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
			uni.setTabBarBadge({
				index: 2,
				text: this.total + ''
			})
		},
		removeBadge() {
			uni.removeTabBarBadge({
				index: 2
			})
		}
	},
	watch: {
		total(newVal) {
			console.log(newVal === 0);
			if(newVal === 0) {
				this.removeBadge()
			} else {
				this.setBadge()
			}
		}
	}
	
}