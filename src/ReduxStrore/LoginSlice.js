import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    loginRed: (state) => {
      state.value = true;
    },
    logoutRed: (state) => {
      state.value = false;
    },
  },
});

export const { loginRed, logoutRed } = LoginSlice.actions;
export default LoginSlice.reducer;
