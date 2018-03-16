import App from './App'
import axios from './service/'
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store/'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Toast from './plugins/toast/toast'
import './plugins/toast/toast.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
