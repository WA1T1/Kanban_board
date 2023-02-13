import React from 'react';
import classes from "../HomePage/App.module.css";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import TaskContent from "../../components/TaskContent";

const TaskScreen = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <TaskContent/>
            <Footer/>
        </div>
    );
};

export default TaskScreen;