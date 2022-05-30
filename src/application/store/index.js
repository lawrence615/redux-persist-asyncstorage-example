import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import booksReducer from "../redux/reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage, // storage engine used to save and persist the data
    whitelist: ['bookmarks'] // defines which object key to use from the initial state to save the data
}

const rootReducer = combineReducers({ 
    booksReducer: persistReducer(persistConfig, booksReducer)
 })

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)