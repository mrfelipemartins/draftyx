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
          name: payload.fullName,
          email: user.email,
          isAdmin: false,
          gender: payload.gender,
          birthday: payload.birthday,
          photoUrl: user.photoURL
        }
        db.firestore().collection('users').doc(user.uid).set(newUser)
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
      .then((user) => {
        commit('setLoading', false)
        db.firestore().collection('users').doc(user.uid).get().then((res) => {
          if (res.exists) {
            const newUser = {
              id: res.data().id,
              name: res.data().name,
              email: res.data().email,
              photoUrl: res.data().photoUrl,
              isAdmin: res.data().isAdmin,
              gender: res.data().gender,
              birthday: res.data().birthday
            }
            commit('setUser', newUser)
          } else {
            commit('setError', 'Usuário não encontrado')
          }
        })
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
    })
  }
}

export default actions
