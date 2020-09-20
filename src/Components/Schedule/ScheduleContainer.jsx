import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../../redux/schedule-reducer';
import Preloader from '../Templates/Preloader/Preloader';
import Schedule from './Schedule';

const ScheduleContainer = (props) => {
    useEffect(() => {
        props.getSchedule()
    }, [])

    return (
        <>
            {props.schedule ?
                <Schedule 
                    schedule={props.schedule}
                    userRole={props.userRole}
                    date={props.date}
                />
            : <Preloader />}
        </>
       
    )
}

let mapStateToProps = (state) => {
    return {
        schedule: state.schedule.schedule.schedule,
        userRole: state.auth.user.role,
        date: state.schedule.schedule.date
    }
}

export default connect(mapStateToProps, { getSchedule })(ScheduleContainer)