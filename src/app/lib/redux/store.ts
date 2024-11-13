import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import settingsReducer from "./settingsSlice";
import loginReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    settings: settingsReducer,
    loginInfo: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
