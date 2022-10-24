import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "./store/auth";

function Navbar() {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const isLoginFunction = () => {
    {
      login && dispatch(isLogin(false)) && localStorage.removeItem("isLogin");
    }
  };
  return (
    <div className="border-b-2 border-black w-full flex md:flex-row flex-col justify-between ">
      <nav className="bg-white w-full  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex w-full flex-wrap justify-center md:justify-between items-center mx-auto">
          <p
            href="https://flowbite.com/"
            className="flex items-center  md:pb-0 pb-3"
          >
            <Link to="/">
              <span className="self-center text-xl  font-semibold whitespace-nowrap dark:text-white">
                FINDeveloper
              </span>
            </Link>
          </p>

          <div className="  block w-auto" id="navbar-default">
            <ul className="flex flex-row p-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  onClick={isLoginFunction}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {login ? "Logout" : "Login"}
                </Link>
              </li>
              {login ? null : (
                <li>
                  <Link
                    to="/create"
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    CretaAccount
                  </Link>
                </li>
              )}
              {login && (
                <li>
                  <Link
                    to="/profile"
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/contact"
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
