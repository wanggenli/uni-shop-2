<template>
	<view class="my-search-container" :style="{'background-color': bgcolor}" @click="searchBoxHandler">
		<view class="my-search-box" :style="{'border-radius': radius + 'px'}">
			<uni-icons type="search" size="17"></uni-icons>
			<text class="placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 背景颜色
			bgcolor: {
				type: String,
				default: '#c00000'
			},
			// 圆角尺寸
			radius: {
				type: Number,
				default: 18 //px
			}
		},
		name:"my-search",
		data() {
			return {
				
			};
		},
		methods: {
			searchBoxHandler() {
				console.log('~~~~');
				// 为分类列表页面，也就是外部引用页面自定义事件，并调用
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.my-search-container {
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	.my-search-box {
		height: 36px;
		background-color: #ffffff;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.placeholder {
			font-size: 15px;
			margin-left: 5px;
		}
	}
}
</style>