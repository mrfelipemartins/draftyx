import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import User from './modules/user'
import Shared from './modules/shared'
import 'babel-polyfill'
import 'firebase/firestore'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const state = {
  db: db.firestore()
}

const vuexLocalStorage = new VuexPersist({
  key: 'drafty',
  storage: window.localStorage,
  reducer: state => ({
    User: state.User
  })
})

export default new Vuex.Store({
  state,
  modules: {User, Shared},
  plugins: [vuexLocalStorage.plugin]
})
