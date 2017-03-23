import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/actions'

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
        switch (param) {
            case 'add':
                action.addTask(this.refs.addTask.value)
                this.refs.addTask.value = ''
                break
            case 'complete':
                action.completeTask(this.refs.completeTask.value)
                this.refs.completeTask.value = ''
                break
            case 'delete':
                action.deleteTask(this.refs.deleteTask.value)
                this.refs.deleteTask.value = ''
                break
        }
    }

    render() {
        const {tasks, finished, actions} = this.props

        const mapTasks = tasks.map(task => <li>{task}</li>)
        const mapFinished = finished.map(finished => <li>{finished}</li>)

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
                </div>
            </div>
        )
    }
}
