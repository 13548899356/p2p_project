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
//资金记录
import MoneyRecord from '@/view/account/MoneyRecord'
//投资记录
import InvestmentRecord from '@/view/account/InvestmentRecord'
//回款计划
import CashTransfer from '@/view/account/CashTransfer'
//充值提现
import Recharge from '@/view/account/Recharge'
//账户设置
import PersonalCenter from '@/view/account/PersonalCenter'
//资产计划预览
import AssetPlan from '@/view/account/AssetPlan'

//头部
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
     {
      path: '/register',
      name: 'register',
      component: register
    },

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

      },
        {
          path: '/MoneyRecord',
          name: 'MoneyRecord',
          component:MoneyRecord

        },
        {
          path: '/AssetPlan',
          name: 'AssetPlan',
          component:AssetPlan

        },
        {
          path: '/Recharge',
          name: 'Recharge',
          component:Recharge

        },
        {
          path: '/InvestmentRecord',
          name: 'InvestmentRecord',
          component:InvestmentRecord

        },

        {
          path: '/CashTransfer',
          name: 'CashTransfer',
          component:CashTransfer

        },
        {
          path: '/PersonalCenter',
          name: 'PersonalCenter',
          component: PersonalCenter
        }
      ]
    },

  ]
})
