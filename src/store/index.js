import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    userInfo
  }
})
