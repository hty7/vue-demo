import {getCurrentUser} from '@/service/modules/userInfo'
import * as types from '../mutation-types'
const state = {
  userInfo: null // 用户信息
}

const getters = {
  userInfo: state => state.userInfo
}

const actions = {
  async getCurrentUser ({commit}, params) {
    let data = await getCurrentUser(params)
    commit(types.GET_CURRENTDATA, data)
    return data
  }
}

const mutations = {
  [types.GET_CURRENTDATA] (state, data) {
    state.userInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
