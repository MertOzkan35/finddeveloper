import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  const db = useSelector((state) => state.userDb.usersInfo);
  console.log(db);
  const selectedUser = db.find((x) => x.uid === id);
  console.log(selectedUser);
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
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.FirstName}
          </label>

          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.Title}
          </label>

          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.Linkedin}
          </label>
        </div>
        <div className="flex justify-center items-center text-center flex-col w-4/5 h-4/5 gap-12  ">
          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.LastName}
          </label>

          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.Email}
          </label>

          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {selectedUser.addProfile.City}
          </label>
        </div>
      </div>
    </div>
  );
}

export default User;
