export default function reducer(state={
    tasks: [],
    finished: [],
}, action) {
    let newTasks = null
    let index = null
    switch(action.type) {
        case 'ADD_TASK':
            newTasks = [...state.tasks]
            if(newTasks.length) {
                newTasks.push(action.payload)
            } else {
                newTasks = [action.payload]
            }

            return {
                ...state,
                tasks: newTasks
            }
        case 'DELETE_TASK':
            index = state.tasks.indexOf(action.payload)
            newTasks = state.tasks.slice()
            newTasks.splice(index, 1)

            return {
                ...state,
                tasks: newTasks
            }
        case 'COMPLETE_TASK':
            let unfinished = [...state.tasks]
            index = state.tasks.indexOf(action.payload)
            newTasks = [...state.finished].concat(unfinished[index])
            unfinished.splice(index, 1)

            return {
                ...state,
                tasks: unfinished,
                finished: newTasks
            }
    }
}
