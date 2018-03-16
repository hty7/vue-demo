import {getCurrentUser} from '@/service/modules/userInfo'
const state = {
  userInfo: null // 用户信息
}

const getters = {
  userInfo: state => state.userInfo
}

const actions = {
  async getCurrentUser ({commit}, params) {
    let data = await getCurrentUser(params)
    commit('GET_CURRENTDATA', data)
  }
}

const mutations = {
  GET_CURRENTDATA (state, data) {
    state.userInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
