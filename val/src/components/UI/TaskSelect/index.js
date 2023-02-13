import React, {useEffect, useState} from 'react';
import classes from './TaskSelect.module.css';
import ArrowDown from '../../../img/arrowDown.svg';
import ArrowUp from '../../../img/arrowUp.svg';
import TaskList from "../TaskList";
const TaskSelect = ({onChange, taskList}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [value, setValue] = useState('')

    useEffect(()=>{
        onChange(value)
        setCollapsed(false)
    },[value])

    return (
        <div className={classes.positionContainer}>
            <div onClick={()=>{setCollapsed(!collapsed)}} className={classes.container}>
                <p>{value.header}</p>
                <img className={classes.image} src={collapsed? ArrowDown : ArrowUp} alt=""/>
            </div>
            {collapsed && <TaskList taskList={taskList} onSelect={setValue}/>}
        </div>
    );
};

export default TaskSelect;