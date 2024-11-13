import { authKey } from "@/app/constant";
import { isLoggedIn } from "@/app/helpers/auth.helpers";
import {
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/app/helpers/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: isLoggedIn(),
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      setToLocalStorage(authKey, action.payload);
      state.isLogin = true;
    },
    logout: (state) => {
      removeFromLocalStorage(authKey);
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
