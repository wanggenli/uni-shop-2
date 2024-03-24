<template>
	<view class="goods_item">
		<!-- 左侧的盒子 -->
		<view class="goods_item_left">
			<radio :checked="goods.goods_state" color="#c00000" v-if="showRadio" @click="radioClickHandler"></radio>
			<image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
		</view>
		<!-- 右侧的盒子 -->
		<view class="goods_item_right">
			<!-- 商品的名字 -->
			<view class="goods_name">{{goods.goods_name}}</view>
			<view class="goods_info_box">
				<view class="goods_price">￥{{goods.goods_price | tofixed}}</view>
				<uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="numChangeHandler"></uni-number-box>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-goods",
		props: {
			goods: {
				type: Object,
				default: {}
			},
			showRadio: {
				type: Boolean,
				// 默认不展示radio组件
				default: false
			},
			showNum: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
			};
		},
		filters: {
			tofixed(num) {
				return Number(num).toFixed(2)
			}
		},
		methods: {
			radioClickHandler() {
				this.$emit('radio-change', {
					goods_id: this.goods.goods_id,
					goods_state: !this.goods.goods_state
				})
			},
			numChangeHandler(val) {
				this.$emit('num-change',{
					goods_id: this.goods.goods_id,
					goods_count: +val
				})
			}
		}
	}
</script>

<style lang="scss">
.goods_item {
	// 让goods-item项占满屏幕的宽度
	width: 750rpx;
	box-sizing: border-box;
	
	
	display: flex;
	padding: 10px 5px;
	border-bottom: 1px solid #f0f0f0;
	.goods_item_left {
		margin-right: 5px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.goods-pic {
			width: 100px;
			height: 100px;
			display: block;
		}
	}
	.goods_item_right {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		.goods_name {
			font-size: 13px;
		}
		.goods_info_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goods_price {
				color: #c00000;
				font-size: 16px;
			}
		}
	}
}
</style>