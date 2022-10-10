import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userInfo from "./userInfo";
const store = configureStore({
  reducer: {
    auth,
    userInfo,
  },
});

export default store;
