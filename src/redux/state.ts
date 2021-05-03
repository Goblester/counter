import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';
import {loadState, saveState} from '../utilits/localStorage-utilits';


const rootReducer = combineReducers({
    counter: counterReducer
});

export type IGlobalState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState(store.getState());
})