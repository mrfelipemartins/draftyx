import db from '../../../firebase'

const mutations = {
  setUser: state => {
    state.user = db.auth().currentUser
  }
}

export default mutations
