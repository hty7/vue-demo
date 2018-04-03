import App from './App'
import axios from './service/'
import router from './router'
import store from './store/'
// import { sync } from 'vuex-router-sync'
import Toast from './plugins/toast/toast'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueLazyLoad from 'vue-lazyload'
import * as directives from './directives'
import * as filters from './filters'
import * as methods from './utils/utils'
import 'vuetify/dist/vuetify.min.css'
import './plugins/toast/toast.css'
import SectionContent from '@/components/SectionContent'

Vue.config.productionTip = false

// 注册插件
Vue.use(Vuetify)
Vue.use(Toast)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'static/images/404.png',
  loading: 'static/images/loading-spin.svg',
  attempt: 1
})

// 注册全局组件
Vue.component('section-content', SectionContent)

// 注册指令&&过滤器&&公有方法
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Object.keys(methods).forEach(k => { Vue.prototype[k] = methods[k] })

// 动态路由
// sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
