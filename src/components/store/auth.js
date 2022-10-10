import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// import { logout } from "../firebase";

const initialState = {
  login: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin: (state, { payload }) => {
      state.login = payload;
    },
  },
});

export const { isLogin } = auth.actions;

export default auth.reducer;
