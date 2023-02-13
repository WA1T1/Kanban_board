import React, {useMemo} from 'react';
import classes from './Footer.module.css';
import {useContent} from "../../hooks/useContent";
import SectionTypes from "../../types/SectionTypes";
const Footer = () => {
    const {content} = useContent();

    return (
        <div className={classes.container}>
             <div className={classes.flexContainer}>
                <div className={classes.leftSide}>
                    <p>Active Tasks: {content[SectionTypes.backlog].length}</p>
                    <p>Finished tasks: {content[SectionTypes.finished].length}</p>
                </div>
                 <div>
                     <p>Kanban board by Червинский Валентин Викторович, 2023</p>
                 </div>
             </div>
        </div>
    );
};

export default Footer;