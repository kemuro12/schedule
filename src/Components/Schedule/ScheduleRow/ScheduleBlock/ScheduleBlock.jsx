import React from 'react';
import s from './ScheduleBlock.module.css';

const ScheduleBlock = (props) => {
    return (
        <div className={s.block + (props.userRole === "admin" ? " " + s.admin : "")} onClick={props.handleClickBlock} >
            {props.schedule.name !== "-" ?
            <>
                <div className={s.type + " " + s[props.schedule.type]}></div>
                <span className={s.lesson} >{props.schedule.name}</span>
                <span className={s.teacher}>{props.schedule.teacher}</span>
                <span className={s.room}>каб. {props.schedule.room}</span>
            </>
            : "" }
            
            
        </div>
    )
}

export default ScheduleBlock;