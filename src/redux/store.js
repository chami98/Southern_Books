import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger";
import { rootReducer } from './rootReducer';


export const configureStore = () => {
    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(logger)
    )

    return store;
}