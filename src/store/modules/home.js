import * as types from '../mutation-types'
const state = {
  // 框架配置
  controlsOption: {
    drawer: true, // 侧边菜单显示
    hints: false // 界面样式
  }
}

const getters = {
  controlsOption: state => state.controlsOption
}

const actions = {
}

const mutations = {
  [types.SET_CONTROLSOPTION] (state, data) {
    Object.assign(state.controlsOption, data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
