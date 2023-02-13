import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import classes from './AgileSection.module.css';
import TaskItem from "../TaskItem";
import Button from "../UI/Button";
import TaskSelect from "../UI/TaskSelect";
import SectionTypes from "../../types/SectionTypes";
import TaskInput from "../UI/TaskInput";
import {useContent} from "../../hooks/useContent";
import {Link} from "react-router-dom";

const AgileSection = ({ headerText, type, taskList }) => {
    const [changeActive, setChangeActive] = useState(false);
    const inputRef = useRef(null);
    const {content, setState} = useContent();
    const [value, setValue] = useState('');

    const getPrevType = useCallback(()=>{
        switch (type){
            case SectionTypes.ready:
                return SectionTypes.backlog
            case SectionTypes.inProgress:
                return SectionTypes.ready
            case SectionTypes.finished:
                return SectionTypes.inProgress
            default:
                return null
        }
    },[type])

    const getPredicate = useMemo(()=> type === SectionTypes.backlog ? !!value : !!value.header, [type, value] )

    const onClick = useCallback(()=>{
        if(changeActive && getPredicate) {
            const contentChange = {...content, [type]: [...content[type], value]}

            if (getPrevType()) {
                contentChange[getPrevType()] = content[getPrevType()].filter(item => item.id !== value.id)
            }
            setState(contentChange)

        }
        setChangeActive(!changeActive)
    }, [setChangeActive, changeActive, inputRef, setState, content, value])

    const onChange = useCallback((value)=>{
        setValue({id: new Date().getTime(), header: value, description: ''})
    },[setValue])

    const renderItemChangeComponents = useCallback(()=>{
        if(changeActive){
            return type === SectionTypes.backlog ? <TaskInput onChange={onChange}/> : <TaskSelect taskList={content[getPrevType()]} onChange={setValue}/>;
        }
    },[changeActive, type, inputRef])

    return (
        <div className={classes.container}>
            <p className={classes.headerText}>{headerText}</p>
            <div className={classes.columnContainer}>
                <div className={changeActive ? classes.scrollWith : classes.scrollWithout}>
                    {taskList.map((item)=>
                        <Link to={`/tasks/${item.id}`} style={{ textDecoration: 'none' }}><TaskItem text={item.header}/></Link>
                    )}
                </div>
                {renderItemChangeComponents()}
                <Button active={changeActive} onClick={onClick}/>
            </div>
        </div>
    );
};

export default AgileSection;