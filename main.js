import Vue from 'vue'
import App from './App'

import store from '@/store/store.js'

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'

// 1.1挂载全局网络请求到uni顶级对象上
uni.$http = $http
// 1.4设置请求根路径
// $http.baseUrl = 'https://www.uinav.com'
$http.baseUrl = 'https://api-hmugo-web.itheima.net'
// 1.2配置请求拦截器
$http.beforeRequest = function(options) {
	// 显示加载框
	uni.showLoading({
		title: '数据加载中...'
	})
	// 判断当前请求的是否为有权限的接口
	if(options.url.indexOf('/my/') !== -1) {
		options.header = {
			Authorization: store.state.m_user.token
		}
	}
}
// 1.3配置响应拦截器
$http.afterRequest = function() {
	// 隐藏加载框
	uni.hideLoading()
}

// 封装响应失败的提示框
uni.$showMsg = function(title = '数据请求失败!', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
