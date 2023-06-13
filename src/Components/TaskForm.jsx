import { useState } from 'react';
import '../Styles/TaskForm.css'

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            const newTask = {
                id: Date.now(),
                title: task,
                completed: false,
            };
            addTask(newTask);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit" className='Add-task-btn'>Add Task</button>
        </form>
    );
};

export default TaskForm;
