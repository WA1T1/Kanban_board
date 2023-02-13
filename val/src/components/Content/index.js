import React, {useEffect} from 'react';
import classes from './Content.module.css';
import AgileSection from "../AgileSection";
import SectionTypes from "../../types/SectionTypes";
import {useContent} from "../../hooks/useContent";

const Content = () => {
    const {content} = useContent();

    useEffect(()=>{
        console.log(content.backlog)
    },[content])

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <AgileSection taskList={content.backlog} headerText={'Backlog'} type={SectionTypes.backlog}/>
                <AgileSection taskList={content.ready} headerText={'Ready'} type={SectionTypes.ready}/>
                <AgileSection taskList={content.inProgress} headerText={'In Progress'} type={SectionTypes.inProgress}/>
                <AgileSection taskList={content.finished} headerText={'Finished'} type={SectionTypes.finished}/>
            </div>
        </div>
    );
};

export default Content;