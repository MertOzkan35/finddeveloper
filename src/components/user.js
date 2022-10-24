import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { dowlandCv } from "../firebase";
function User() {
  const { id } = useParams();
  const MainDb = localStorage.getItem("Data");
  const [newData, setNewData] = useState(JSON.parse(MainDb));

  const selectedUser = newData && newData.find((x) => x.uid === id);

  const cv = async () => {
    console.log(selectedUser.addProfile.CvName);
    const url = await dowlandCv(selectedUser.addProfile.CvName);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `FileName.pdf`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };
  return (
    <div className=" flex flex-col w-full h-full  justify-center items-center font">
      <div className=" border-2 border-[#0a66c2] mt-32 mb-32 p-10 rounded-2xl flex flex-col w-[90%] md:w-1/2 h-full justify-center items-center ">
        <div className="flex flex-col-2 w-full h-full">
          <div className="flex justify-center items-center flex-col w-full h-full gap-8">
            <div className="w-full h-full rounded-full   flex flex-col justify-center  items-center   gap-4">
              {selectedUser && (
                <img
                  className=" w-[140px] h-[150px] object-cover rounded-full my-3 "
                  src={selectedUser.imgUrl}
                />
              )}
            </div>
            <button
              className=" w-full md:w-1/2 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-base text-sm"
              onClick={cv}
            >
              {" "}
              Download Cv
            </button>
          </div>
          <div className="flex justify-center items-center text-center flex-col w-full h-full  ">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 font px-6 pt-6  pb-2 rounded-3xl text-lg font-semibold text-gray-900 dark:text-gray-300"
              >
                {selectedUser.addProfile && selectedUser.addProfile.FirstName}{" "}
                {selectedUser.addProfile && selectedUser.addProfile.LastName}
              </label>
            </div>

            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                {selectedUser.addProfile && selectedUser.addProfile.Title}
              </label>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                {selectedUser.addProfile && selectedUser.addProfile.City}
              </label>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                {selectedUser.addProfile && selectedUser.addProfile.Email}
              </label>
            </div>

            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                <a
                  href={
                    selectedUser.addProfile && selectedUser.addProfile.Linkedin
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
