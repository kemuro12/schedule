import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMasFromFirebase } from '../../redux/schedule-reducer';
import Schedule from './Schedule';

const ScheduleContainer = (props) => {
    useEffect(() => {
        props.getMasFromFirebase();
    }, [])

    return (
        <Schedule 
            mas={props.mas}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        mas: state.schedule.mas
    }
}

export default connect(mapStateToProps, { getMasFromFirebase })(ScheduleContainer)