import * as types from '../mutation-types'
const state = {
  mapboxMap: null
}

const getters = {
  mapboxMap: state => state.mapboxMap
}

const actions = {
}

const mutations = {
  [types.SET_MAPBOXMAP] (state, data) {
    state.mapboxMap = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
