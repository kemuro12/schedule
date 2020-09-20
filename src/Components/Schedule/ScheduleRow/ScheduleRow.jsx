import React from 'react';
import ScheduleBlockContainer from './ScheduleBlock/ScheduleBlockContainer';
import s from './ScheduleRow.module.css';

const SceduleRow = (props) => {  
    return (
        <div className={s.row}> 
            <div className={s.week}>
                <div>{props.week}</div>
            </div>

            {props.schedule.map((s,count) => <ScheduleBlockContainer key={count} x={count} y={props.y} schedule={s} /> )}

        </div>
    )
}

export default SceduleRow