import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userInfo from "./userInfo";
import userDb from "./userDb";

const store = configureStore({
  reducer: {
    auth,
    userInfo,
    userDb,
  },
});

export default store;
