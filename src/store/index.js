import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import home from './modules/home'
import mapbox from './modules/mapbox'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    userInfo,
    mapbox
  }
})
