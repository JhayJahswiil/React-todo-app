import { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
// import TaskItem from './Components/TaskItem';

import './App.css'
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const markTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <div className='tasks'>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} markTaskComplete={markTaskComplete} />
      </div>
    </div>
  );
};

export default App;
