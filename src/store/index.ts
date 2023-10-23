import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import navbarReducer from "./navbarSlice";
import searchWindowReducer from "./searchWindowSlice";
import sizeGuideReducer from "./sizeGuideSlice";
import searchQuerryReducer from "./searchQuerrySlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
    productsReducer,
    navbarReducer,
    searchWindowReducer,
    sizeGuideReducer,
    searchQuerryReducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                },
            }),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']