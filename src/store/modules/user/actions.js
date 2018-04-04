import db from '../../../firebase'

const actions = {
  setUser: context => {
    context.commit('setUser')
  },
  signUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    db.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
        this.$router.push({path: '/'})
      }, error => {
        commit('setLoading', false)
        commit('setError', error)
      })
  },
  signIn ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    db.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
        this.$router.push({path: '/'})
      }, error => {
        commit('setLoading', false)
        commit('setError', error)
      })
  },
  signOut ({commit}) {
    commit('setLoading', true)
    db.auth().signOut().then(() => {
      commit('setUser', null)
      commit('setLoading', false)
      this.$router.push({path: '/login'})
    })
  }
}

export default actions
