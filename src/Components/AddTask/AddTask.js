import React, { Component } from 'react'

class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTaskInput: '',
            newTaskStatus: 'backlog',
        }
    }

    render () {
        const { addNewTask } = this.props
        const newTaskInfo = {
            taskTitle: this.state.newTaskInput,
            taskStatus: this.state. newTaskStatus
        }
        return (
            <div>
                <input 
                    type='text' 
                    placeholder='Task title...' 
                    value={this.state.newTaskInput} 
                    onChange={e => {this.setState({ newTaskInput: e.target.value})}} />
                <select 
                    value={this.state.newTaskStatus} 
                    onChange={e => {this.setState({newTaskStatus: e.target.value})}}>
                        <option value='backlog'>Backlog</option>
                        <option value='todo'>To Do</option>
                        <option value='completed'>Completed</option>
                        <option value='inprogress'>In Progress</option>
                </select>
                <button onClick={() => {
                    addNewTask(newTaskInfo)
                    this.setState({
                        newTaskInput: '',
                        newTaskStatus: 'backlog'
                    })}}>Submit</button>
            </div>    
        )
    }
}

export default AddTask