import React from 'react';
import TaskComponent from './TaskComponent';

const TaskListComponent = ({ tasks }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.map((task) => (
                <TaskComponent key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskListComponent;
