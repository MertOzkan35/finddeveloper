import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { addProfiles } from "../firebase";
import userEvent from "@testing-library/user-event";
function Profile() {
  const [imgUrl, setImgUrl] = useState(null);
  const [addProfile, setAddProfile] = useState("");

  const user = useSelector((state) => state.userInfo.Info);
  console.log(user);
  const addNewProfile = async (e) => {
    console.log("çalıştı");
    e.preventDefault();
    await addProfiles({
      addProfile,
      uid: user.uid,
    });
  };
  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  return (
    <div className="flex justify-center items-center w-full h-[850px]">
      <div className=" flex justify-center items-center flex-col w-4/5 h-4/5 bg-[#f3f3f3]">
        <div className=" flex w-4/5 h-1/4 justify-center items-center ">
          <div className="w-1/4 h-full rounded-full border-2  flex justify-center items-center mt-2">
            <UploadButton
              uploader={uploader}
              options={{ multi: true }}
              onComplete={(files) => setImgUrl(files[0].fileUrl)}
            >
              {({ onClick }) => (
                <button onClick={onClick}>Upload a file...</button>
              )}
            </UploadButton>
            {imgUrl !== null && <img src={imgUrl} />}
          </div>
        </div>
        <div className=" flex flex-col-2 w-4/5 h-3/4 ">
          <div className="flex justify-center items-center text-center flex-col w-4/5 h-full gap-6 ">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                onChange={(e) => setAddProfile(e.target.value)}
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Frontend Developer"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Linkedin URL
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center text-center flex-col w-4/5 h-full gap-6  ">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jhondoe@company.com"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Githup URL
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start h-1/4">
          <button
            onClick={addNewProfile}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
