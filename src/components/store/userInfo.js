import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Info: { x: 1 },
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, { payload }) => {
      state.Info = payload;
    },
  },
});

export const { addUserInfo } = userInfo.actions;

export default userInfo.reducer;
