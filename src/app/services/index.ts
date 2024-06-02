import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formSlice from './form/formSlice';

const rootReducer = combineReducers({
  form: formSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
