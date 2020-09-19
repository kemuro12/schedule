import './firebaseSetter'; 
import * as firebase from 'firebase';

const SET_MAS = "schedule/SET_MAS";

const db = firebase.database();

let initialState = {
    mas: []
}

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MAS: {
            return {
                ...state,
                mas : action.mas
            }
        }
        default:
            return state
    }   
}

//action creator
export const setMas = (mas) => {
    return {
        type: SET_MAS,
        mas
    }
}

//thunk 
export const getMasFromFirebase = () => {
    return async (dispatch) => {
        db.ref('isCreated').once('value', snap => {
            let mas = [];
            snap.forEach(v => {
                mas.push(v.val())
            })
            dispatch(setMas(mas))
        })
    }
}

export default scheduleReducer;