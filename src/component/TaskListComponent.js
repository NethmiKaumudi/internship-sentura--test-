import React from 'react';
import WeavyTaskComponent from "./WeavyTaskCompnent";

const TaskListComponent = ({ tasks }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.map((task) => (
                <WeavyTaskComponent key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskListComponent;
