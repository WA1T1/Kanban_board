import React, {useMemo} from 'react';
import classes from './Button.module.css'

const Button = ({onClick, active}) => {
    const buttonText = useMemo(()=>active ? 'submit' : '+ Add', [active])

    return (
        <button onClick={onClick} className={[classes.button, active ? classes.submit : classes.add].join(' ')}>{buttonText}</button>
    );
};

export default Button;