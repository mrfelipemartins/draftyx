import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  loggedIn: false,
  user: null
}

export default {
  state,
  getters,
  actions,
  mutations
}
