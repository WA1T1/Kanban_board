import React, {useState} from 'react';
import classes from './Header.module.css'
import ArrowUp from '../../img/arrowUpWhite.svg'
import ArrowDown from '../../img/arrowDownWhite.svg'
import Profile from '../../img/Profile.svg'
const Header = () => {
    const [collapsed, setCollapsed] = useState()

    return (
        <div className={classes.container}>
            <div className={classes.flexContainer}>
                <p className={classes.header}>Awesome Kanban Board</p>
                <div onClick={()=>setCollapsed(!collapsed)} className={classes.profile}>
                    <div className={classes.avatar}>
                        <img src={Profile} alt=""/>
                    </div>
                    <img className={classes.arrow} src={collapsed ? ArrowDown : ArrowUp} alt=""/>
                </div>
            </div>
            {collapsed &&
                <div className={classes.profileDialog}>
                    <p>Profile</p>
                    <p>Log Out</p>
                </div>
            }
        </div>
    );
};

export default Header;