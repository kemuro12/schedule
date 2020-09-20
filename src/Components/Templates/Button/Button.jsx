import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
    return (
        <button {...props} className={props.error ? s.error : "" }>{props.name}</button>
    )
}

export default Button;