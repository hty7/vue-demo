import App from './App'
import axios from './service/'
import router from './router'
import store from './store/'
import Toast from './plugins/toast/toast'
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as directives from './directives'
import * as filters from './filters'
// import * as dict from './utils/dict'
import * as methods from './utils/utils'
import 'vuetify/dist/vuetify.min.css'
import './plugins/toast/toast.css'
import SectionContent from '@/components/SectionContent'

Vue.config.productionTip = false

// 注册插件
Vue.use(Vuetify)
Vue.use(Toast)

// 注册全局组件
Vue.component('section-content', SectionContent)

// 注册指令&&过滤器&&公有方法
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Object.keys(methods).forEach(k => { Vue.prototype[k] = methods[k] })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
