import { createStore, applyMiddleware } from  "redux";
import rootReducer from "../reducer";
import { logger } from "redux-logger";

const configureStore = (initialSate) => {
    const store = createStore(rootReducer, initialSate, applyMiddleware(logger));
    return store;
}

export default configureStore;