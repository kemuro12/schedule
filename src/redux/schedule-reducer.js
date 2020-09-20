import './firebaseSetter'; 
import * as firebase from 'firebase';

const SET_SCHEDULE = "schedule/SET_SCHEDULE";
const SET_SELECTED_SCHEDULE = "schedule/SET_SELECTED_SCHEDULE";

const db = firebase.database();

let initialState = {
    schedule: {},
    selectedX: null,
    selectedY: null,
    list: {
        names: ["-","Физра","Математика","Литература","Русский Язык","Методы оптимизации и исследование операций 1","Английский Язык"],
        rooms: [0, 413, 310, 213, 440, 450, 241, 211],
        teachers: ["-","Алексеев Д.В","Гаськова О.А","Олегов А.А","Бабанов А.М","Джон С.А"],
        types: ["-","lection","practic","lab","seminar"]
    }
}

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SCHEDULE: {
            return {
                ...state,
                schedule : action.schedule
            }
        }
        case SET_SELECTED_SCHEDULE: {
            return {
                ...state,
                selectedX: action.selected[0],
                selectedY: action.selected[1]
            }
        }
        default:
            return state
    }   
}

//action creator
export const setSchedule = (schedule) => {
    return {
        type: SET_SCHEDULE,
        schedule
    }
}

export const setSelectedScheduleAC = (x,y) => {
    return {
        type: SET_SELECTED_SCHEDULE,
        selected: [x,y]
    }
}

//thunk 
export const getSchedule = () => {
    return async (dispatch) => {
        db.ref('schedule').once('value', snap => {
            let mas;
            let key;
            console.log(snap.key)
            snap.forEach(v => {
                key = v.key;
                mas = v.val();
            })
            mas.key = key;
            
            dispatch(setSchedule(mas))
        })
    }
}

export const addSchedule = (keySchedule, formData, x, y) => {
    return async (dispatch) => {
        let updates = {};
        updates['schedule/'+keySchedule+'/schedule/'+x+'/'+y] = formData;
        await db.ref().update(updates)
        dispatch(setSelectedScheduleAC(null,null))
        dispatch(getSchedule())
    }
}

export const deleteSchedule = (keySchedule, x, y) => {
    return async dispatch => {
        let data = {
            name: '-',
            room: 0,
            teacher: '-',
            type: '-'
        }
        dispatch(addSchedule(keySchedule, data, x, y))
    }
}

export const setSelectedSchedule = (x,y) => {
    return async dispatch => {
        dispatch(setSelectedScheduleAC(x,y));
    }
}


export default scheduleReducer;