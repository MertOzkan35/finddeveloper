import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./filter";
import { getInfo } from "../../firebase";
import { async } from "@firebase/util";
import { addUserDb } from "../store/userDb";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserDb(profile));
  }, [profile]);
  const info = async () => {
    setProfile(await getInfo());
    console.log(profile);
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full h-full ">
      <Filter />
      <button className=" w-16 h-7 bg-slate-600 mt-12" onClick={info}>
        {" "}
        bas
      </button>
      <div className=" w-[80%] h-full  grid grid-cols-4  mt-12 gap-12  ">
        {profile &&
          profile.map((element) => {
            console.log(element.uid);
            return (
              <Link to={`/user/${element.uid}`}>
                <div className=" w-full h-[300px] flex flex-col items-center my-6 justify-center bg-[#f3f4f6] rounded-xl shadow-lg hover:border-2 border-black ">
                  <img
                    className=" w-[150px] p-4 h-[50%] rounded-full  "
                    src={element.imgUrl}
                  />

                  <div className="flex flex-col justify-between  h-[50%] gap-5">
                    <p className="pt-3 font-semibold text-lg  text-center ">
                      {element.addProfile.FirstName}
                    </p>
                    <p className=" font-semibold  text-lg text-center">
                      {element.addProfile.Title}
                    </p>
                    <p className="pb-10 font-semibold    text-center">
                      {element.addProfile.City}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      ;
    </div>
  );
}

export default HomePage;

{
  /* <Link to={`/user/${element.uid}`}> */
}
