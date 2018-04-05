const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  },
  setUserData: (state, payload) => {
    state.user.data = payload
  }
}

export default mutations
