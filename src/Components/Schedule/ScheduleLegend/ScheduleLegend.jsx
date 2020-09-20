import React from 'react';
import s from './ScheduleLegend.module.css';

const ScheduleLegend = (props) => {
    return (
        <div className={s.legend}>
            <div className={s.block}>
                <span>Лекции</span>
                <div className={s.lections}></div>
            </div>

            <div className={s.block}>
                <span>Практики</span>
                <div className={s.practics}></div>
            </div>

            <div className={s.block}>
                <span>Лабораторные</span>
                <div className={s.labs}></div>
            </div>

            <div className={s.block}>
                <span>Семинары</span>
                <div className={s.seminars}></div>
            </div>
        </div>
    )
}

export default ScheduleLegend;