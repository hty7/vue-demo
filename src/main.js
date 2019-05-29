import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import * as methods from './utils/utils'
import './utils/rem'
import './plugins/vuetify'
import './plugins/toast'
import './plugins/validate'
import CMdialog from './components/CMdialog'

Vue.config.productionTip = false

// 注册公有方法
Object.keys(methods).forEach(e => Vue.prototype[e] = methods[e])

// 注册全局组件
Vue.component('cm-dialog', CMdialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
