import React from "react";

function Contact() {
  return (
    <div className=" flex flex-col w-full h-full  justify-center items-center font">
      <div className=" border-2 border-[#0a66c2] mt-32 mb-32 p-10 rounded-2xl flex flex-col w-[90%] md:w-1/2 h-full justify-center items-center ">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center items-center text-center flex-col w-full h-full  ">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 font px-6 pt-6  pb-2 rounded-3xl text-lg font-semibold text-gray-900 dark:text-gray-300"
              >
                Mert Özkan
              </label>
            </div>

            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                Frontend Developer
              </label>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                İzmir
              </label>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                mertozkan.296@gmail.com
              </label>
            </div>

            <div>
              <label
                htmlFor="first_name"
                className="block mb-2  px-6 py-2 rounded-3xl text-lg  text-gray-900 dark:text-gray-300"
              >
                <a href={"https://www.linkedin.com/in/mertozkann/"}>
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

export default Contact;
