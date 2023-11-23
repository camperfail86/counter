import {counterReducer} from "../components/reducers/reducers";
import {combineReducers, legacy_createStore} from "redux";

export const rootReducer = combineReducers({
    values: counterReducer,
})
export type rootReducerType = ReturnType<typeof rootReducer>

let preloadedState;
let persistedString = localStorage.getItem('state')
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = legacy_createStore(rootReducer, preloadedState);

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})