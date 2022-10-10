import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rout from "./components/router";
import Navbar from "./components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { isLogin } from "./components/store/auth";

function App() {
  const dispatch = useDispatch();
  const isUserLogin = localStorage.getItem("isLogin");
  useEffect(() => {
    if (isUserLogin) {
      dispatch(isLogin(true));
    }
  }, [isUserLogin]);
  return (
    <div className="">
      <Toaster />
      <Navbar />
      <Rout />
    </div>
  );
}

export default App;
