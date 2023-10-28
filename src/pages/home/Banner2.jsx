import React, { useState } from "react";
import Popular from "./Popular";
import SliderCatagory from "./SliderCatagory";
// import Search from "../../components/Search";
// import Search2 from "../../components/Search2";
import Search3 from "../../components/Search3";
import SliderCatagory2 from "./SliderCatagory2";
import Container from "../../components/Container";

const Banner2 = () => {
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  return (
    <div
      className="w-full mx-auto overflow-hidden"
      // style={{
      //   backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
      // }}
    >
      <>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-extrabold text-2xl md:text-3xl text-center mb-9 text-slate-700 dark:text-slate-300 pt-16">
              Hey, looking for something?
            </h1>

            {/* <form className="w-80 md:w-full max-w-[670px] h-12 mx-auto relative">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onFocus={() => setSearchSuggestion(true)}
                onBlur={() => setSearchSuggestion(false)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search for your desired software..."
                required
              />
              <button
                type="submit"
                className="text-slate-400 absolute right-5 bottom-2.5   font-medium py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              </button>
            </div>
            {searchSuggestion && (
              <div className="z-50 absolute w-80 md:w-full max-w-[670px] mx-auto bg-slate-50 dark:bg-slate-700">
                <div className="flex border-b-[1px] border-slate-100 p-2 justify-between  items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-indigo-800 ">
                  <div className="flex gap-2">
                    <img className="h-8 w-8 rounded-md" src="/idm.png" alt="" />
                    <p className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700 ">
                      Internet Download Manager
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      WEB
                    </button>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-slate-100 p-2 justify-between items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-indigo-800">
                  <div className="flex gap-2">
                    <img className="h-8 w-8 rounded-md" src="/mo.png" alt="" />
                    <p className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700">
                      Microsoft Office 2021
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-indigo-50 text-indigo-700 uppercase rounded-md px-1 text-xs text-center border border-indigo-100">
                      WINDOWS
                    </button>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-slate-100 p-2 justify-between items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-indigo-800">
                  <div className="flex gap-2">
                    <img className="h-8 w-8 rounded-md" src="/pp.png" alt="" />
                    <p className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700">
                      Pot Player
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-pink-50 text-pink-700 uppercase rounded-md px-1 text-xs text-center border border-pink-100">
                      MULTIMEDIA
                    </button>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-slate-100 p-2 justify-between items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-indigo-800">
                  <div className="flex gap-2">
                    <img className="h-8 w-8 rounded-md" src="/wf.png" alt="" />
                    <p className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700">
                      Wondershare Filmora
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-red-50 text-red-700 uppercase rounded-md px-1 text-xs text-center border border-red-100">
                      UTILITY
                    </button>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-slate-100 p-2 justify-between items-center w-80 md:w-full max-w-[670px] mx-auto hover:bg-indigo-50 dark:hover:bg-indigo-800">
                  <div className="flex gap-2">
                    <img className="h-8 w-8 rounded-md" src="/w11.png" alt="" />
                    <p className="font-medium text-slate-700 dark:text-slate-50 hover:text-blue-700">
                      Windows 11 Pro
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-indigo-50 text-indigo-700 uppercase rounded-md px-1 text-xs text-center border border-indigo-100">
                      UTILITY
                    </button>
                  </div>
                </div>
                <div className="py-1 rounded-b-md dark:hover:bg-indigo-800">
                  <p className="flex items-center gap-1 p-2 text-slate-400 dark:text-slate-50 cursor-pointer">
                    View all results{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                      <path d="M15 16l4 -4"></path>
                      <path d="M15 8l4 4"></path>
                    </svg>
                  </p>
                </div>
              </div>
            )}
          </form> */}

            <Search3></Search3>

            <p className="text-slate-400 mt-6">
              You can also browse our popular categories
            </p>

            <div className="overflow-hidden max-w-7xl mx-auto">
              <SliderCatagory></SliderCatagory>
              {/* <SliderCatagory2></SliderCatagory2> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner2;
