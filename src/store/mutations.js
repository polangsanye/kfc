import * as types from './mutation-types'

const mutations = {
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mutations