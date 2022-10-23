import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { dowlandCv } from "../firebase";
async function User() {
  const { id } = useParams();
  const MainDb = localStorage.getItem("Data");

  const [newData, setNewData] = useState([]);
  useEffect(() => {
    async function fetch() {
      setNewData(await JSON.parse(MainDb));
      console.log(newData);
    }
    fetch();
  });
  const db = useSelector((state) => state.userDb.usersInfo);
  console.log(newData);
  const selectedUser = newData && newData.find((x) => x.uid === id);
  console.log(selectedUser);

  const cv = async () => {
    console.log(selectedUser.addProfile.CvName);
    const url = await dowlandCv(selectedUser.addProfile.CvName);
    console.log(url);
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
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <div className="w-1/2 h-full rounded-full   flex flex-col justify-center items-center my-8 gap-4">
        {selectedUser && (
          <img
            className=" h-[150px] object-cover rounded-full my-3"
            src={selectedUser.imgUrl}
          />
        )}
      </div>

      <div className=" flex flex-col-2 w-full h-full justify-center items-center ">
        <div className="flex justify-center items-center text-center flex-col w-full h-full gap-12 ">
          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.FirstName}
          </label>

          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.Title}
          </label>

          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.Linkedin}
          </label>
        </div>
        <div className="flex justify-center items-center text-center flex-col w-4/5 h-4/5 gap-12  ">
          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.LastName}
          </label>

          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.Email}
          </label>

          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile && selectedUser.addProfile.City}
          </label>
        </div>
      </div>
      <button className="w-12 h-12" onClick={cv}>
        {" "}
        bas
      </button>
    </div>
  );
}

export default User;
