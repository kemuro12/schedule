import React from 'react';
import { connect } from 'react-redux';
import { addSchedule, deleteSchedule } from '../../redux/schedule-reducer';
import ControlPanel from './ControlPanel';

const ControlPanelContainer = (props) => {
    return (
        <>
            {props.selectedX !== null && props.selectedY !== null ? 
                <ControlPanel 
                    selectedX={props.selectedX}
                    selectedY={props.selectedY}
                    addSchedule={props.addSchedule} 
                    selectedBlock={ props.schedule[props.selectedY][props.selectedX]} 
                    list={props.list} 
                    keySchedule={props.keySchedule}
                    deleteSchedule={props.deleteSchedule}
                />
            :
                ""    
            }
        </>
        
    )
}

const mapStateToProps = (state) => ({
    selectedX: state.schedule.selectedX,
    selectedY: state.schedule.selectedY,
    schedule: state.schedule.schedule.schedule,
    keySchedule: state.schedule.schedule.key,
    list: state.schedule.list
})

export default connect(mapStateToProps, {addSchedule, deleteSchedule} )(ControlPanelContainer);