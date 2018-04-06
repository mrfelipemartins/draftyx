import Vue from 'vue'
import Vuex from 'vuex'
import Shared from './modules/shared'
import 'babel-polyfill'

Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
  state,
  modules: {Shared}
})
