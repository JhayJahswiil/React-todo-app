import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../Styles/TaskItem.css'

const TaskItem = ({ task, deleteTask, markTaskComplete }) => {
    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleComplete = () => {
        markTaskComplete(task.id);
    };

    return (
        <li className='task-item'>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <div>
                {!task.completed && (
                    <button onClick={handleComplete}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                )}
                <button onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
