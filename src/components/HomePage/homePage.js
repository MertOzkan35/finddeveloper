import React from "react";
import Filter from "./filter";
import { getInfo } from "../../firebase";

function HomePage() {
  const ınfo = () => {
    getInfo();
  };
  return (
    <div className=" flex justify-center items-center w-full h-[400px] ">
      <Filter />
      <button onClick={ınfo}> bas</button>
    </div>
  );
}

export default HomePage;
