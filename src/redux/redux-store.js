import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import scheduleReducer from './schedule-reducer';

let reducers = combineReducers({
    schedule:  scheduleReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;