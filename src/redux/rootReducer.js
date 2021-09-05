import { combineReducers } from "redux";
import { appReducer } from './appReducer';
import { chamiReducer } from './chamiReducer';
import { bookReducer } from "./bookReducer";


export const rootReducer = combineReducers({
    app : appReducer,
    chami : chamiReducer,
    book : bookReducer,
})