import React, { Component } from 'react'

class BackLogCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskTitle: '',
            taskStatus: ''
        }
    }

    componentDidMount () {
        let { title, props }  = this.props
        this.setState({
            taskTitle: title,
            taskStatus: props
        })
    }

    render(){
        let { taskTitle, taskStatus } = this.state
        let { updateTaskStatus } = this.props
        let taskInfo = {
            taskTitle,
            taskStatus
        }
        return(
            <div>
                {taskTitle}
                <select 
                    value={this.state.taskStatus} 
                    onChange={e => {this.setState({taskStatus: e.target.value})}}>
                        <option value='backlog'>Backlog</option>
                        <option value='todo'>To Do</option>
                        <option value='completed'>Completed</option>
                        <option value='inprogress'>In Progress</option>
                </select>
                <button
                    onClick={() => {updateTaskStatus(taskInfo)}}
                    >Update Task</button>
            </div>
        )
    }
}

export default BackLogCard