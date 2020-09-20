import React from 'react';
import { connect } from 'react-redux';
import { setSelectedSchedule } from '../../../../redux/schedule-reducer';
import ScheduleBlock from './ScheduleBlock';

const ScheduleBlockContainer = (props) => {
    
    const handleClickBlock = () => {
        if(props.userRole !== "admin") return;
        props.setSelectedSchedule(props.x, props.y);
    }

    return (
        <ScheduleBlock 
            userRole={props.userRole} 
            schedule={props.schedule}  
            handleClickBlock={handleClickBlock}
        />
    )
}

const mapStateToProps = (state) => ({
    userRole: state.auth.user.role
})

export default connect(mapStateToProps, {setSelectedSchedule})(ScheduleBlockContainer)