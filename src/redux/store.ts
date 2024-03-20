import { configureStore } from "@reduxjs/toolkit";
import indicatorReducer from "./indicator";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    indicators: indicatorReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
