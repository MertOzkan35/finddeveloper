import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersInfo: [],
};

const userDb = createSlice({
  name: "userDb",
  initialState,
  reducers: {
    addUserDb: (state, { payload }) => {
      console.log(payload);
      state.usersInfo = payload;
    },
  },
});

export const { addUserDb } = userDb.actions;

export default userDb.reducer;
