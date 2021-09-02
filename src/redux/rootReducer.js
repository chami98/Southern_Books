import { combineReducers } from "redux";
import { appReducer } from './appReducer';
import { chamiReducer } from './chamiReducer';


export const rootReducer = combineReducers({
    app : appReducer,
    chami : chamiReducer,
})