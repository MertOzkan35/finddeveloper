import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./filter";
import { getInfo } from "../../firebase";
import { async } from "@firebase/util";
import { addUserDb } from "../store/userDb";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  const [profile, setProfile] = useState([]);
  const [newDb, setNewDb] = useState([]);
  const [stop, setStop] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stop.length === 0) {
      async function fetchMyAPI() {
        setProfile(await getInfo());
        dispatch(addUserDb(profile));
        localStorage.setItem("Data", JSON.stringify(profile));
        setStop(profile);
        setNewDb(profile);
      }
      fetchMyAPI();
    }
  });

  const FilmName = (event) => {
    const name = event;
    setNewDb(profile);
    setNewDb(
      profile.filter((item) => item.addProfile.FirstName.includes(name))
    );
  };

  const YearSelectValue = (event) => {
    const city = event.year;

    setNewDb(profile);
    setNewDb(profile.filter((item) => item.addProfile.City.includes(city)));
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full h-full ">
      <Filter ChangeYear={YearSelectValue} FilmName={FilmName} />
      <div className=" w-[85%] h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-12 gap-12  ">
        {newDb &&
          newDb.map((element, key) => {
            return (
              <Link key={key} to={`/user/${element.uid}`}>
                <div className=" font w-full h-[400px] flex flex-col items-center my-8 justify-start bg-[#f3f4f6] rounded-xl   hover:shadow-xl ">
                  <img
                    className=" w-[150px] p-4 h-[160px] rounded-full object-cover  "
                    src={element.imgUrl}
                  />

                  <div className="flex flex-col justify-between mt-4  h-[50%] gap-6">
                    <p className="pt-3 font-semibold text-xl   text-center  ">
                      {element.addProfile.FirstName}{" "}
                      {element.addProfile.LastName}
                    </p>
                    <p className="  pb-12 text-lg text-center">
                      {element.addProfile.Title}
                    </p>
                    <p className="pb-4 text-md   text-center">
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
