import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
// import { logout } from "../firebase";

const initialState = {
  Info: {},
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, { payload }) => {
      console.log(payload);
      state.Info = payload;
    },
  },
});

export const { addUserInfo } = userInfo.actions;

export default userInfo.reducer;
