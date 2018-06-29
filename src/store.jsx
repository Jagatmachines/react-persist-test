import { createStore,  applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
// import thunk from 'react-thunk';

import rootReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = applyMiddleware(/* thunk, */ logger);


let store = createStore(persistedReducer, middlewares)


export let persistor = persistStore(store);

export default store;