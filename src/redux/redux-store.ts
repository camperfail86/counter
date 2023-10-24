import {CounterReducer} from "../components/reducers/reducers";
import {combineReducers, legacy_createStore} from "redux";

export const rootReducer = combineReducers({
    values: CounterReducer,
})
export type rootReducerType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer);