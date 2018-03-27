import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const login = r => require.ensure([], () => (require('@/view/login/login')), 'login')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const location = r => require.ensure([], () => (require('@/view/location/')), 'location')
const announcement = r => require.ensure([], () => (require('@/view/announcement/')), 'announcement')
const dataAnalysis = r => require.ensure([], () => (require('@/view/dataAnalysis/')), 'dataAnalysis')
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
      path: '/analysis',
      component: dataAnalysis
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
