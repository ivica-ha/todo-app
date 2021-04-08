import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, text: 'Operi suđe', completed: false },
        { id: 2, text: 'Odmori', completed: false },
      ],
      maxId: 2,
      wrongInput: false
    };
  }

  handleTaskAdd = (newTaskText) => {
    const NewTaskTextTrimmerd = newTaskText.trim();

    if(NewTaskTextTrimmerd.length < 3) return this.setState({wrongInput: true})

    this.setState({wrongInput: false})
    const newId = this.state.maxId + 1;
    const newTask = { id: newId, text: NewTaskTextTrimmerd, completed: false };
    const newTasks = [newTask, ...this.state.tasks];

    this.setState({ tasks: newTasks, maxId: newId });
  };

  handleDelete = (taskId) => {
    const listCopy = [...this.state.tasks];
    const newList = listCopy.filter((task) => task.id !== taskId);
    this.setState({ tasks: newList });
  };

  handleCompleteToggle = (taskId) => {
    const tasksCopy = [...this.state.tasks];
    const taskToComplete = tasksCopy.filter((task) => task.id === taskId);
    if (taskToComplete.length > 0) {
      const task = taskToComplete[0];
      task.completed = !task.completed;
      this.setState({ tasks: tasksCopy });
    }
  };

  render() {
    return (
      <div>
        <NewTask onAdd={this.handleTaskAdd} />
        {this.state.wrongInput && <p style={{color: 'red'}}>Wrong Input. Number of letter must be more than 3.</p>}
        {this.state.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={this.handleDelete}
            onCompleteToggle={this.handleCompleteToggle}
          />
        ))}
      </div>
    );
  }
}
