import React from 'react';
import classes from "./App.module.css";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default HomePage;