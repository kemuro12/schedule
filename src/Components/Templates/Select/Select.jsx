import React from 'react';
import s from './Select.module.css'

const Select = (props) => {
    return (
        <div>
            <select onChange={props.onChange} name={props.name} className={s.select}>
                {props.options.map((o,count) => <option key={count} value={o} selected={props.inst == o ? true : false} >{o}</option>)}
            </select>
        </div>   
    )
}

export default Select;