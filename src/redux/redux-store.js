import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import scheduleReducer from './schedule-reducer';

let reducers = combineReducers({
    schedule:  scheduleReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;