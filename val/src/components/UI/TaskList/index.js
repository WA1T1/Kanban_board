import React, {useCallback} from 'react';
import classes from './TaskList.module.css'
const TaskList = ({onSelect, taskList}) => {
    const selectValue = useCallback((value)=>{
        onSelect(value);
    },[onSelect])

    return (
        <div className={classes.container}>
            {taskList.map(item=>
                <div onClick={()=>selectValue(item)} className={classes.option}><p>{item.header}</p></div>
            )}
        </div>
    );
};

export default TaskList;