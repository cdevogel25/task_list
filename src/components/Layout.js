import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/actions'
import {writeTasks} from '../db/db'
//import {update} from '../db/db.actions'

@connect(state => ({
    tasks: (state) ? state.tasks : [],
    finished: (state) ? state.finished : []
}), dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
}))

export default class Layout extends React.Component {

    componentDidMount() {
        console.log('props', this.props)
    }

    handleClick(param) {
        let action = this.props.actions
        let ref = this.refs
        switch (param) {
            case 'add':
                action.addTask(ref.addTask.value)
                ref.addTask.value = ''
                break
            case 'complete':
                action.completeTask(ref.completeTask.value)
                ref.completeTask.value = ''
                break
            case 'delete':
                action.deleteTask(ref.deleteTask.value)
                ref.deleteTask.value = ''
                break
        }
    }

    handleUpdate() {
        writeTasks(this.props.tasks, this.props.finished)
    }

    render() {
        const {tasks, finished, actions} = this.props

        const mapTasks = tasks.map(task => <li>{task.name}</li>)
        const mapFinished = finished.map(finished => <li>{finished.name}</li>)

        return (
            <div>
                <p>Tasks</p>
                <ul>{mapTasks}</ul>
                <p>Finished</p>
                <ul>{mapFinished}</ul>
                <div id="buttons">
                    <input ref="addTask" type="text" id="addBox" />
                    <input type="submit" value="Add Task" onClick={this.handleClick.bind(this, 'add')}/><br/>
                    <input ref="completeTask" type="text" id="completeBox" />
                    <input type="submit" value="Complete Task" onClick={this.handleClick.bind(this, 'complete')}/><br/>
                    <input ref="deleteTask" type="text" id="deleteBox" />
                    <input type="submit" value="Delete Task" onClick={this.handleClick.bind(this, 'delete')}/><br/>
                    <input type="button" value="Update DB" onClick={this.handleUpdate.bind(this)}/>
                </div>
            </div>
        )
    }
}
