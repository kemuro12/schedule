import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
    return (
        <div className={s.block}>
            <input {...props} className={s.input} />
        </div>
        
    )
}

export default Input;