import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { addProfiles } from "../firebase";
import { uploadFile, updateProfile } from "../firebase";
import toast from "react-hot-toast";
import userEvent from "@testing-library/user-event";
import { async } from "@firebase/util";

function Profile() {
  const [imgUrl, setImgUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
  );
  const [CvimgUrl, setCvImgUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/524/524505.png"
  );

  const [addProfile, setAddProfile] = useState({
    FirstName: "",
    LastName: "",
    Title: "",
    Email: "",
    Linkedin: "",
    City: "",
    CvName: "",
  });

  const user = useSelector((state) => state.userInfo.Info);
  const data = useSelector((state) => state.userDb.usersInfo);
  const selectedUser = data && data.find((x) => x.uid === user.uid);

  const addNewProfile = async (e) => {
    e.preventDefault();
    toast.success("Successfully");
    if (selectedUser) {
      
      await updateProfile({
        addProfile,
        imgUrl,
        uid: user.uid,
      });
    } else {
      await addProfiles({
        addProfile,
        imgUrl,
        uid: user.uid,
      });
    }
  };
  const uploader = Uploader({
    apiKey: "free",
  });
  const metadata = {
    contentType: "application/pdf",
  };
  const uploadCv = async (event) => {
    const file = event.target.files[0];
    
    setAddProfile({ ...addProfile, CvName: `${file.name}` });
    event.preventDefault();
    await uploadFile(file, metadata);
    toast.success("Successfully");
  };

  return (
    <div className="flex justify-center items-center w-full h-[1000px]">
      <div className=" flex justify-center items-center flex-col w-full md:w-4/5 h-4/5 bg-[#f3f3f3]">
        <div className=" flex w-4/5 h-1/3 mb-4 justify-center items-center ">
          <div className="w-1/2 h-full rounded-full   flex flex-col justify-center items-center mt-2 gap-4">
            {imgUrl !== null && (
              <img
                className=" h-2/4 object-cover rounded-full  my-3 "
                src={imgUrl}
              />
            )}
            <UploadButton
              uploader={uploader}
              options={{ multi: true }}
              onComplete={(files) => setImgUrl(files[0].fileUrl)}
            >
              {({ onClick }) => (
                <button
                  className=" w-[125px] sm:w-[200px] text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded "
                  onClick={onClick}
                >
                  Upload a Photo...
                </button>
              )}
            </UploadButton>
          </div>
          <div className="w-1/2 h-full rounded-full   flex flex-col justify-center items-center mt-2 gap-4">
            {imgUrl !== null && (
              <img
                className=" h-2/4 object-cover rounded-full my-3"
                src={CvimgUrl}
              />
            )}

            <input
              className=" w-[125px] sm:w-[200px] text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded "
              type="file"
              onChange={uploadCv}
            />
          </div>
        </div>
        <div className=" flex flex-col-2 w-4/5 h-2/5 justify-center items-center ">
          <div className="flex justify-center items-center text-center flex-col w-4/5 h-4/5 gap-6 ">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, FirstName: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Title
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, Title: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Frontend Developer"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Linkedin URL
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, Linkedin: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center text-center flex-col w-4/5 h-4/5 gap-6  ">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, LastName: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, Email: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jhondoe@company.com"
                required
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center text-center items-center">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City
              </label>
              <input
                onChange={(e) =>
                  setAddProfile({ ...addProfile, City: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-1/5 ">
          <button
            disabled={
              !addProfile.FirstName ||
              !addProfile.LastName ||
              !addProfile.Email ||
              !addProfile.Title ||
              !addProfile.Linkedin ||
              !addProfile.City ||
              !addProfile.CvName
            }
            onClick={addNewProfile}
            className="bg-blue-500 disabled:bg-[#CCA9AE] hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
