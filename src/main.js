import App from './App'
import axios from './service/'
import router from './router'
import store from './store/'
import { sync } from 'vuex-router-sync'
import Toast from './plugins/toast/toast'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueLazyLoad from 'vue-lazyload'
import VueI18n from 'vue-i18n'
import * as directives from './directives'
import * as filters from './filters'
import * as methods from './utils/utils'
import 'vuetify/dist/vuetify.min.css'
import './plugins/toast/toast.css'
import SectionContent from '@/components/SectionContent'
/* 平台国际语言静态字典 */
import LangEn from './lang/en'
import LangZhCHS from './lang/zhCHS'
import LangZhCHT from './lang/zhCHT'

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
Vue.use(VueI18n)

// 设置语言项
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': LangEn,
    'zh': LangZhCHS,
    'zhCHT': LangZhCHT
  }
})

// 注册全局组件
Vue.component('section-content', SectionContent)

// 注册指令&&过滤器&&公有方法
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Object.keys(methods).forEach(k => { Vue.prototype[k] = methods[k] })

// 动态路由
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
