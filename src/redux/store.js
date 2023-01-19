import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import filterReducer from './filterSlice';
import contactReducer from './contactsSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token', 'email'],
};

const persisteduserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persisteduserReducer,
    filter: filterReducer,
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
