import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rout from "./components/router";
import Navbar from "./components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { isLogin } from "./components/store/auth";
import { addUserInfo } from "./components/store/userInfo";
import { addUserDb } from "./components/store/userDb";
import Footer from "./components/footer";
import { getInfo } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const isUserLogin = localStorage.getItem("isLogin");
  const UserI = localStorage.getItem("Logininf");
  const MainDb = localStorage.getItem("Data");
  useEffect(() => {
    if (isUserLogin) {
      dispatch(isLogin(true));
      dispatch(addUserInfo(JSON.parse(UserI)));
      dispatch(addUserDb(JSON.parse(MainDb)));
    }
  }, [isUserLogin]);
  return (
    <div className="">
      <Toaster />
      <Navbar />
      <Rout />
      <Footer />
    </div>
  );
}

export default App;
