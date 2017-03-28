import firebase from 'firebase'
import config from './db.config'

firebase.initializeApp(config)
export const db = firebase.database()

export function writeTasks(tasks, finished) {
    let list = tasks.concat(finished)
    list.forEach((item) => {
        firebase.database().ref('tasks/').push(item)
    })
}
