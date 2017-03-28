import {updateComplete} from './taskActions'

function makeTask(name) {
    return {name: name, complete: false}
}

export default function reducer(state={
    tasks: [],
    finished: [],
}, action) {
    let newTasks, index = null
    switch(action.type) {
        case 'ADD_TASK':
            newTasks = [...state.tasks]
            if(newTasks.length) {
                newTasks.push(makeTask(action.payload))
            } else {
                newTasks = [makeTask(action.payload)]
            }
            return {
                ...state,
                tasks: newTasks
            }
        case 'DELETE_TASK':
            newTasks = [...state.tasks]
            newTasks.forEach((item) => {
                if(item.name === action.payload) {
                    newTasks.splice(newTasks.indexOf(item), 1)
                }
            })
            return {
                ...state,
                tasks: newTasks
            }
        case 'COMPLETE_TASK':
            let unfinished = [...state.tasks]
            unfinished.forEach((item) => {
                if(item.name === action.payload) {
                    item.complete = true
                }
            })
            return {
                ...state,
                finished: updateComplete(unfinished, [...state.finished]),
                tasks: unfinished
            }
    }
}
