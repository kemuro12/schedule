import './firebaseSetter'; 
import * as firebase from 'firebase';

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_FORM_ERROR = "auth/SET_FORM_ERROR";

const db = firebase.database();

let initialState = {
    user: {
        email: "",
        pass: "",
        role: "admin"
    },
    isAuth: false,
    formError: ""
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                user: action.userData,
                isAuth : true
            }
        }
        case SET_FORM_ERROR:{
            return {
                ...state,
                formError: action.text
            }
        }
        default:
            return state
    }  
}

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
})

export const setFormError = (text) => ({
    type: SET_FORM_ERROR,
    text
})

export const createUser = (email, pass) => {
    return async dispatch => {    
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(user => {
                let userData = {
                    email,
                    pass
                };
                console.log("Success")
                dispatch(setUserData(userData))
            })
            .catch(err => dispatch(setFormError(err.message)));
    }
}

export const login = (email, pass) => {
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(user => {
                let userData = {
                    email,
                    pass
                };
                if(email === "denis.larionov.2000@mail.ru") userData.role = "admin"
                else userData.role = "user"

                dispatch(setUserData(userData))
            })
            .catch(err => dispatch(setFormError(err.message)))     
    }
}

export default authReducer