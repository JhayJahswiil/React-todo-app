import React from 'react';
import TaskItem from './TaskItem'

import '../Styles/TaskList.css'
const TaskList = ({ tasks, deleteTask, markTaskComplete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    markTaskComplete={markTaskComplete}
                />
            ))}
        </ul>
    );
};

export default TaskList;
