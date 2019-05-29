import Vue from 'vue'
import Router from 'vue-router'
import { getSessionStorage } from '@/utils/utils'

Vue.use(Router)

const Login = () => require.ensure([], () => (require('@/views/login/login')), 'Login')
const Main = () => require.ensure([], () => (require('@/views/main/')), 'Main')
const Home = () => require.ensure([], () => (require('@/views/home/')), 'Home')
const NotFound = () => require.ensure([], () => (require('@/views/login/login')), 'Login')

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
