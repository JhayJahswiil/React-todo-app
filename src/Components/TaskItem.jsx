import React from 'react';
import '../Styles/TaskItem.css'

const TaskItem = ({ task, deleteTask, markTaskComplete }) => {
    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleComplete = () => {
        markTaskComplete(task.id);
    };

    return (
        <li className='li'>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            {!task.completed && (
                <button onClick={handleComplete}>✔</button>
            )}
            <button onClick={handleDelete}>🚮</button>
        </li>
    );
};

export default TaskItem;
