import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './slices/userSlice'
import allUsersReducer from './slices/allUsersSlice'

const rootReducers = combineReducers({
    user: userReducer,
    allUsers: allUsersReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['allUsers']
  }

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: {
       reducer: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store) 

export default store