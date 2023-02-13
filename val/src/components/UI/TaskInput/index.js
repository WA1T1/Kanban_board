import React from 'react';
import classes from './TaskInput.module.css';

const TaskInput = ({onChange, value}) => {
    return (
        <input onChange={(e)=>onChange(e.target.value)} defaultValue={value} className={classes.input} type="text"/>
    );
};

export default TaskInput;