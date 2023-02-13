import React, {useCallback, useMemo, useState} from 'react';
import classes from "./TaskContent.module.css";
import Button from "../UI/Button";
import TaskInput from "../UI/TaskInput";
import {useParams} from "react-router";
import {useContent} from "../../hooks/useContent";
import CrossImage from '../../img/cross.svg';
import {Link} from "react-router-dom";

const TaskContent = () => {
    const [visibleRedactor, setVisibleRedactor] = useState(false)
    const {id} = useParams()
    const {content, setState} = useContent()

    const destructureTask = useCallback(
        ()=> {
            return Object.keys(content)
            .map((key)=>content[key])
            .flat()
            .filter((item)=>String(item.id) === id)[0]
            },
        [content])

    const changeDescription = useCallback((value)=>{
        const copyContent = {...content};
        Object.keys(copyContent).forEach(item => {
            copyContent[item] = copyContent[item].map(item=> String(item.id) === id ? {...item, description: value} : item)
        })
        setState(copyContent)
    },[setState])

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <h1 className={classes.header}>{destructureTask()?.header}</h1>
                <p className={classes.description}>{destructureTask()?.description}</p>
                {visibleRedactor && <TaskInput value={destructureTask()?.description} onChange={changeDescription}/>}
                <Button onClick={()=>setVisibleRedactor(!visibleRedactor)} active={visibleRedactor}/>
                <Link to={'/'}><img className={classes.image} src={CrossImage} alt=""/></Link>
            </div>
        </div>
    );
};

// setVisibleRedattor(!visibleRedactor)

export default TaskContent;