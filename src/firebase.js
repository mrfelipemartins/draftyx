import config from './config'
import firebase from 'firebase'

const db = firebase.initializeApp(config)

export default db
