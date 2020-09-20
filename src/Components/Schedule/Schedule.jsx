import React from 'react';
import ScheduleRow from './ScheduleRow/ScheduleRow';
import s from './Schedule.module.css';
import ScheduleLegend from './ScheduleLegend/ScheduleLegend';

const Schedule = (props) => {
    const weeks = ["Пн","Вт","Ср","Чт","Пт","Сб"]
    const times = ["8:45 - 10:20", "10:35 - 12:10", "12:25 - 14:00", "14:45 - 16:20", "16:35 - 18:10", "18:25 - 20:00"]
   
    return (
        <div className={s.main}>
            <div className={s.info}>
                <div className={s.date} >{props.date.join('.')}</div>
                <ScheduleLegend />
            </div>
            
            <div className={s.schedule}>
                <div className={s.times}>
                    {times.map((t, count) => <div key={count} className={s.timeBlock}>{ t }</div>)}
                </div>
                {weeks.map((w, count) => <ScheduleRow key={count} y={count} week={w} schedule={props.schedule[count]} /> )}
            </div>
        </div>
        
    )
}

export default Schedule;