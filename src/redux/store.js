import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { catalogReducer } from './catalogSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['carsFavorites', 'allCars'],
};
const userPersistReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: userPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
