import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from "@redux-saga/core";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const storeConfig = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }),
        composeWithDevTools(
            applyMiddleware(...middlewares))
    );
    initSagas(sagaMiddleware);
    
    return store;
};

export default storeConfig;