import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// import { logout } from "../firebase";

const initialState = {
  user: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logoutt: (state) => {
      state.user = false;
    },
  },
});

export const { login } = auth.actions;
export const { logoutt } = auth.actions;
export default auth.reducer;
