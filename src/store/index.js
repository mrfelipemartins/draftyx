import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Shared from './modules/shared'
import 'babel-polyfill'
import 'firebase/firestore'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
  state,
  modules: {User, Shared},
  mutations: firebaseMutations
})
