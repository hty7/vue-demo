import Vue from 'vue'
import Router from 'vue-router'
import { getSessionStorage } from '@/utils/utils'

Vue.use(Router)

const Login = () => require.ensure([], () => (require('@/views/login/login')), 'Login')
const Main = () => require.ensure([], () => (require('@/views/main/')), 'Main')
const Home = () => require.ensure([], () => (require('@/views/home/')), 'Home')
const NotFound = () => require.ensure([], () => (require('@/views/login/login')), 'Login')
const Announcement = () => require.ensure([], () => (require('@/views/announcement')), 'Announcement')
const TrafficAnalysis = () => require.ensure([], () => (require('@/views/dataAnalysis/trafficAnalysis/')), 'TrafficAnalysis')
const BaiduMap = () => require.ensure([], () => (require('@/views/dataAnalysis/flowAnalysis/baiduMap')), 'BaiduMap')
const Mapbox = () => require.ensure([], () => (require('@/views/dataAnalysis/flowAnalysis/mapbox')), 'Mapbox')
const Mapbox2 = () => require.ensure([], () => (require('@/views/dataAnalysis/flowAnalysis/mapbox2')), 'Mapbox')
const ArcGIS = () => require.ensure([], () => (require('@/views/dataAnalysis/flowAnalysis/arcGIS')), 'ArcGIS')

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/announcement',
          component: Announcement
        },
        {
          path: '/trafficAnalysis',
          component: TrafficAnalysis
        },
        {
          path: '/baiduMap',
          component: BaiduMap
        },
        {
          path: '/mapbox',
          component: Mapbox
        },
        {
          path: '/mapbox2',
          component: Mapbox2
        },
        {
          path: '/arcGIS',
          component: ArcGIS
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 路由守卫
const checkPermission = async (to, from, next) => {
  let isLogin = getSessionStorage('isLogin')
  if (to.path === '/login') return next()
  if (isLogin) {
    return next()
  } else {
    return next ({path: '/login'})
  }
}

router.beforeEach((to, from, next) => {
  checkPermission(to, from, next)
})

export default router
