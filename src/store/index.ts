import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
   
  },
});

// Types for usage in your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

