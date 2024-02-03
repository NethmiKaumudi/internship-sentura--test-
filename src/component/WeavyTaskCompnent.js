import React from 'react';

const WeavyTaskComponent = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
        </div>
    );
};

export default WeavyTaskComponent;
