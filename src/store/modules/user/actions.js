import firebase from 'firebase'
const actions = {
  setUser: context => {
    context.commit('setUser')
  },
  signUp ({commit, dispatch}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        user.sendEmailVerification()
        const createUser = {
          id: user.uid,
          name: payload.fullName,
          email: user.email,
          isAdmin: false,
          gender: payload.gender,
          birthday: payload.birthday,
          photoUrl: user.photoURL
        }
        firebase.firestore().collection('users').doc(user.uid).set(createUser)
        commit('setUser', user)
        dispatch('getUserData', {id: user.uid})
      }, error => {
        commit('setLoading', false)
        commit('setError', error)
      })
  },
  signIn ({commit, dispatch}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit('setLoading', false)
        commit('setUser', user)
        dispatch('getUserData', {id: user.uid})
      }, error => {
        commit('setLoading', false)
        commit('setError', error)
      })
  },
  autoSignIn ({commit, dispatch}, payload) {
    commit('setUser', payload)
    dispatch('getUserData', {id: payload.uid})
  },
  async getUserData ({commit}, payload) {
    firebase.firestore().collection('users').doc(payload.id).get().then((res) => {
      if (res.exists) {
        const userData = {
          id: res.data().id,
          name: res.data().name,
          email: res.data().email,
          photoUrl: res.data().photoUrl,
          isAdmin: res.data().isAdmin,
          gender: res.data().gender,
          birthday: res.data().birthday
        }
        commit('setUserData', userData)
        commit('setLoading', false)
      }
    })
  },
  signOut ({commit}) {
    commit('setLoading', true)
    firebase.auth().signOut().then(() => {
      commit('setUser', null)
      commit('setLoading', false)
    })
  }
}

export default actions
