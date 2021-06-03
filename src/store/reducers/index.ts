import {combineReducers} from "redux";
import {countReducer } from "store/reducers/countReducer";


export const rootReducer = combineReducers({
    count: countReducer,
})

export type RootState = ReturnType<typeof rootReducer>