import React, { Component } from 'react'
import InProgressCard from './InProgressCard';

class InProgress extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskList: []
        }
    }

    componentDidMount(){
        this.setState({
            taskList: this.props.taskList
        })
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.taskList !== prevProps.taskList){
            this.setState({
                taskList: this.props.taskList
            })
        }
    }

    render () {
        const filteredList = this.state.taskList.filter(task => {
            return task.taskStatus === 'inprogress'
        }).map((task, index) => {
            return (
                <InProgressCard 
                    key={index} 
                    title={task.taskTitle} 
                    status={task.taskStatus}
                    updateTaskStatus={this.props.updateTaskStatus}/>
            )
        })
        return (
            <div>
                {filteredList}
            </div>
        )
    }
}

export default InProgress