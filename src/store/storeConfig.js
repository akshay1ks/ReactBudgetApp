import { combineReducers, createStore } from "redux";
import entriesReducer from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducer from '../reducers/modals.reducer';

const storeConfig = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }),
        composeWithDevTools()
    );
};

export default storeConfig;