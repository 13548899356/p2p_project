import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

// 登录
import Login from '@/view/basics/Login'
// 摄像头
// import Photo from '@/view/interface/photo'
//首页
import index from '@/view/basics/index'
//我的账户
import MyAccount from '@/view/basics/MyAccount'
// 注册
import register from '@/view/basics/register'
// 账户总览
import AccountOverview from '@/view/account/AccountOverview'

//头部
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		/* {
			path: '/Photo',
			name: 'Photo',
			component: Photo
		} */
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/MyAccount',
			name: 'MyAccount',
			component: MyAccount,
			children: [{
				path: '/AccountOverview',
				name: 'AccountOverview',
				component: AccountOverview

			}, ]
		},
		{
			path: '/register',
			name: 'register',
			component: register
		}
	]
})
