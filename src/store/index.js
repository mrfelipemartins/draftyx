import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import User from './modules/user'
import Shared from './modules/shared'
import 'babel-polyfill'
import 'firebase/firestore'

Vue.use(Vuex)

const state = {
  db: db.firestore()
}

export default new Vuex.Store({
  state,
  modules: {User, Shared}
})
