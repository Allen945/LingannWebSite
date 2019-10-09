import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import AgencySocialSecurity from '@/components/AgencySocialSecurity'
import AgencyTax from '@/components/AgencyTax'
import OpenAccount from '@/components/OpenAccount'
import Knowlege from '@/components/Knowlege'
import RegisteredCo from '@/components/RegisteredCo'
import RegisteredMark from '@/components/RegisteredMark'
import PolicyNews from '@/components/PolicyNews'
import Policy from '@/components/Policy'
import Trade from '@/components/TrademarkApplication'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'IndexPage',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'IndexPage',
    component: IndexPage
  }, {
    path: '/trade',
    name: 'Trade',
    component: Trade
  }, {
    path: '/policy',
    name: 'PolicyNews',
    component: PolicyNews
  }, {
    path: '/policys',
    name: 'Policy',
    component: Policy
  }, {
    path: '/socialSecurity',
    name: 'AgencySocialSecurity',
    component: AgencySocialSecurity
  }, {
    path: '/tax',
    name: 'AgencyTax',
    component: AgencyTax
  }, {
    path: '/know',
    name: 'Knowlege',
    component: Knowlege
  }, {
    path: '/account',
    name: 'OpenAccount',
    component: OpenAccount
  }, {
    path: '/company',
    name: 'RegisteredCo',
    component: RegisteredCo
  }, {
    path: '/tradeMark',
    name: 'RegisteredMark',
    component: RegisteredMark
  }]
})
