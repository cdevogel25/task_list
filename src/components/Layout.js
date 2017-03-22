import React from 'react'
import {connect} from 'react-redux'
//make an actions file too

@connect((store) => {
    return {
        tasks: store.tasks,
        finished: store.finished
    }
})

export default class Layout extends React.Component {
    componentWillMount() {
        //this.props.dispatch(/* do this once you have actions */)
    }

    render() {
        const {tasks, finished} = this.props

        const mapTasks = tasks.map(task => <li>{task}</li>)
        const mapFinished = finished.map(finished => <li>{finished}</li>)

        return (
            <div>
                <p>Tasks</p>
                <ul>{mapTasks}</ul>
                <p>Finished</p>
                <ul>{mapFinished}</ul>
            </div>
        )
    }
}
