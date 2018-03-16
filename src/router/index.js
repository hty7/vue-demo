import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const helloWorld = r => require.ensure([], () => (require('@/view/home/HelloWorld')), 'helloWorld')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')

let routes = [{
  path: '/',
  component: home,
  children: [
    {
      path: 'index',
      component: helloWorld
    }
  ]
}]

const router = new Router({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

export default router
