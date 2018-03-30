import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const login = r => require.ensure([], () => (require('@/view/login/login')), 'login')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const location = r => require.ensure([], () => (require('@/view/location/')), 'location')
const announcement = r => require.ensure([], () => (require('@/view/announcement/')), 'announcement')
const announceList = r => require.ensure([], () => (require('@/view/announceList/')), 'announceList')
const trafficAnalysis = r => require.ensure([], () => (require('@/view/dataAnalysis/trafficAnalysis/')), 'trafficAnalysis')
const flowAnalysis = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/')), 'flowAnalysis')
const setting = r => require.ensure([], () => (require('@/view/setting/')), 'setting')

let routes = [{
  path: '/',
  component: home,
  redirect: '/location',
  children: [
    {
      path: '/location',
      component: location
    },
    {
      path: '/announcement',
      component: announcement
    },
    {
      path: '/announceList',
      component: announceList
    },
    {
      path: '/trafficAnalysis',
      component: trafficAnalysis
    },
    {
      path: '/flowAnalysis',
      component: flowAnalysis
    },
    {
      path: '/setting',
      component: setting
    }
  ]
}, {
  path: '/login',
  component: login
}]

const router = new Router({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

export default router
