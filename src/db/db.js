import firebase from 'firebase'
import config from './db.config'

firebase.initializeApp(config)
export const db = firebase.database()
