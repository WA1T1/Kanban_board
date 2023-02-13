import React from 'react';
import classes from './TaskItem.module.css';

const TaskItem = ({text}) => {
    return (
        <div className={classes.container}>
            <p className={classes.taskText}>{text}</p>
        </div>
    );
};

export default TaskItem;