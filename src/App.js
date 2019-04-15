import React, { Component } from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask'
import BackLog from './Components/BackLog/BackLog'
import Completed from './Components/Completed/Completed'
import InProgress from './Components/InProgress/InProgress'
import ToDo from './Components/ToDo/ToDo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList: []
    }
  }

  addNewTask = (task) => {
    const mappedTasks = this.state.taskList.map(task => {
      return task
    })
    mappedTasks.push(task)
    this.setState({
      taskList: mappedTasks
    })
  }

  updateTaskStatus = (task) => {
    const mappedTasks = this.state.taskList.map(task => {
      return task
    })
    let indexOfUpdatedTask = mappedTasks.indexOf(task.taskTitle)
    mappedTasks.splice(indexOfUpdatedTask,1)
    mappedTasks.push(task)
    this.setState({
      taskList: mappedTasks
    })
  }

  render() {
    console.log(this.state.taskList)
    return (
      <div className="App">
        Project Organizer
        <div>
          Add New Task
          <AddTask 
            addNewTask={this.addNewTask} />
        </div>
        <div className='task_container'>
          <div>
            BackLog
            <BackLog 
              taskList={this.state.taskList}
              updateTaskStatus={this.updateTaskStatus} />
          </div>
          <div>
            To Do
            <ToDo 
              taskList={this.state.taskList}
              updateTaskStatus={this.updateTaskStatus} />
          </div>
          <div>
            In Progress
            <InProgress 
              taskList={this.state.taskList}
              updateTaskStatus={this.updateTaskStatus} />
          </div>
          <div>
            Completed
            <Completed 
              taskList={this.state.taskList}
              updateTaskStatus={this.updateTaskStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
