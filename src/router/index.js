import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const login = r => require.ensure([], () => (require('@/view/login/login')), 'login')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const location = r => require.ensure([], () => (require('@/view/location/')), 'location')
const announcement = r => require.ensure([], () => (require('@/view/announcement/')), 'announcement')
const announceList = r => require.ensure([], () => (require('@/view/announceList/')), 'announcement')
const trafficAnalysis = r => require.ensure([], () => (require('@/view/dataAnalysis/trafficAnalysis/')), 'analysis')
const flowAnalysis = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/')), 'analysis')
const baiduMap = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/baiduMap')), 'map')
const mapbox = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/mapbox')), 'map')
const mapbox2 = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/mapbox2')), 'map')
const arcGIS = r => require.ensure([], () => (require('@/view/dataAnalysis/flowAnalysis/arcGIS')), 'map')
const resource = r => require.ensure([], () => (require('@/view/resource/')), 'resource')
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
      path: '/baiduMap',
      component: baiduMap
    },
    {
      path: '/mapbox',
      component: mapbox
    },
    {
      path: '/mapbox2',
      component: mapbox2
    },
    {
      path: '/arcGIS',
      component: arcGIS
    },
    {
      path: '/resource',
      component: resource
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
