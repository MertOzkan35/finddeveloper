import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/homePage";
import Login from "./login";
import Profile from "./profile";
import Register from "./register";
import { useSelector, useDispatch } from "react-redux";
import User from "./user";
import Contact from "./contact";

function Rout() {
  const login = useSelector((state) => state.auth.login);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Register />} />
        {login && <Route path="/profile" element={<Profile />} />}
        <Route path="/user/:id" element={<User />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Rout;
