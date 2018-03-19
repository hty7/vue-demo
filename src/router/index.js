import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const location = r => require.ensure([], () => (require('@/view/location/')), 'location')
const setting = r => require.ensure([], () => (require('@/view/setting/')), 'location')

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
      path: '/setting',
      component: setting
    }
  ]
}]

const router = new Router({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

export default router
