import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  BiUser,
  BiUpload,
  BiCrown,
  BiHeadphone,
  BiMailSend,
  BiDonateHeart,
  BiShoppingBag,
  BiLogOutCircle,
  BiMoon,
} from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import Container from "../../components/Container";
import TopNote from "../../components/TopNote";
import { ThemeContext } from "../../components/ThemeProvider";
import TopNote2 from "../../components/TopNote2";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toglleTheme = (event) => {
    const isChecked = event.target.checked;
    // console.log(isChecked);
    if (isChecked) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    // setDarkMode(!darkMode);
  };
  return (
    <div className="fixed w-full mx-auto z-10 top-0 bg-slate-50 dark:bg-slate-900">
      {/* {<TopNote></TopNote>} */}
      <TopNote2></TopNote2>
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <Link
              to="/"
              className="normal-case text-xl flex items-center gap-2"
            >
              <img className="h-10 w-10" src="/cs-icon.svg" alt="" />
              <span className="text-indigo-600 font-bold text-3xl font-unica stroke-black stroke-1">
                CYBERSPACE
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <p className="text-sm text-slate-500 dark:text-slate-300 border py-1 px-2 border-slate-100 rounded-md">Home of pre-activated software!</p>
          </div>
          <div className="navbar-end text-slate-400">
            <button className="w-10 h-10 flex justify-center items-center rounded-md hover:bg-slate-100 hover:text-slate-700">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input onChange={toglleTheme} type="checkbox" className="hidden" />

                {/* sun icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon swap-on  icon-tabler icon-tabler-sun h-6 w-6"
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
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>

                {/* moon icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon swap-off icon-tabler icon-tabler-moon w-6 h-6"
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
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                </svg>
              </label>
            </button>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="w-10 h-10 flex justify-center items-center rounded-md hover:bg-slate-100 hover:text-slate-700"
              >
                {/* <BiUser className="w-7 h-7"></BiUser> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell w-6 h-6  "
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
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 z-[1] shadow bg-base-100 rounded-md w-80 md:w-96 text-slate-400"
              >
                <li className="pl-4 pt-3 hover:bg-base-100 rounded-md mb-2 h-11">
                  <div className="flex justify-between ">
                    <h1 className="text-slate-700 font-bold text-base">
                      Notifications
                    </h1>
                    <p className="mr-6 text-indigo-700 text-base bg-indigo-100 py-1 px-1.5 rounded-md">
                      3 new
                    </p>
                  </div>
                </li>

                <li className="h-18 border border-y-slate-100 hover:bg-slate-100 bg-slate-50 text-slate-500 hover:text-slate-700 py-4 pl-6 pr-2">
                  <button className="flex gap-4 items-center justify-between w-full text-sm ">
                    <div className="flex gap-4">
                      <label tabIndex={0} className="">
                        <div className="w-10">
                          <img className="w-10 rounded-md" src="/refat.png" />
                        </div>
                      </label>
                      <div className="text-left">
                        <h1 className="font-bold text-base">Emilia Gates</h1>
                        <h1 className="text-slate-300 text-xs">
                          Replied on your comment{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-slate-400 text-xs">
                        Today <br /> 9.30 PM
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-point-filled text-indigo-700"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="h-18 border border-y-slate-100 hover:bg-slate-100 bg-slate-50 text-slate-500 hover:text-slate-700 py-4 pl-6 pr-2">
                  <button className="flex gap-4 items-center justify-between w-full text-sm ">
                    <div className="flex gap-4">
                      <label tabIndex={0} className="">
                        <div className="w-10">
                          <img className="w-10 rounded-md" src="/refat.png" />
                        </div>
                      </label>
                      <div className="text-left">
                        <h1 className="font-bold text-base">Tim Reborn</h1>
                        <h1 className="text-slate-300 text-xs">
                          Replied on your comment{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-slate-400 text-xs">
                        15 Oct 2023 <br /> 10.45 PM
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-point-filled text-indigo-700"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="h-18 border border-y-slate-100 hover:bg-slate-100 bg-slate-50 text-slate-500 hover:text-slate-700 py-4 pl-6 pr-2">
                  <button className="flex gap-4 items-center justify-between w-full text-sm ">
                    <div className="flex gap-4">
                      <label tabIndex={0} className="">
                        <div className="w-10">
                          <img className="w-10 rounded-md" src="/refat.png" />
                        </div>
                      </label>
                      <div className="text-left">
                        <h1 className="font-bold text-base">Expiring soon</h1>
                        <h1 className="text-slate-300 text-xs">
                          Your pro plan will end on 20 Oct
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-slate-400 text-xs">
                        13 Oct 2023
                        <br /> 4.25 AM
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-point-filled text-indigo-700"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="h-18 border border-y-slate-100 hover:bg-slate-100  text-slate-500 hover:text-slate-700 py-4 pl-6 pr-2">
                  <button className="flex gap-4 items-center justify-between w-full text-sm ">
                    <div className="flex gap-4">
                      <label tabIndex={0} className="">
                        <div className="w-10">
                          <img className="w-10 rounded-md" src="/refat.png" />
                        </div>
                      </label>
                      <div className="text-left">
                        <h1 className="font-bold text-base">
                          Update available
                        </h1>
                        <h1 className="text-slate-300 text-xs">
                          Internet Download Manager 6.25.4
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-slate-400 text-xs">
                        13 Oct 2023
                        <br /> 4.25 AM
                      </p>
                    </div>
                  </button>
                </li>
                <li className="h-18 border border-y-slate-100 hover:bg-slate-100  text-slate-500 hover:text-slate-700 py-4 pl-6 pr-2">
                  <button className="flex gap-4 items-center justify-between w-full text-sm ">
                    <div className="flex gap-4">
                      <label tabIndex={0} className="">
                        <div className="w-10">
                          <img className="w-10 rounded-md" src="/refat.png" />
                        </div>
                      </label>
                      <div className="text-left">
                        <h1 className="font-bold text-base">
                          Update available
                        </h1>
                        <h1 className="text-slate-300 text-xs">
                          Internet Download Manager 6.25.4
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-slate-400 text-xs">
                        13 Oct 2023
                        <br /> 4.25 AM
                      </p>
                    </div>
                  </button>
                </li>
                <div className="bg-indigo-700 h-9 text-center mx-4 rounded-md my-4 flex items-center gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-check-filled text-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <button className="text-white my-auto h-full">
                    Mark all as Read
                  </button>
                </div>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="w-10 h-10 flex justify-center items-center rounded-md hover:bg-slate-100 hover:text-slate-700"
              >
                {/* <BiUser className="w-7 h-7"></BiUser> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user w-6 h-6  "
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
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 z-[1] shadow bg-base-100 rounded-md w-56 text-slate-400"
              >
                <li className="pl-4 pt-3 hover:bg-base-100 rounded-md mb-6 h-11">
                  <div className="flex gap-4">
                    <label tabIndex={0} className="">
                      <div className="w-10">
                        <img className="w-10 rounded-md" src="/refat.png" />
                      </div>
                    </label>
                    <div>
                      <h1 className="font-bold text-base text-slate-700">
                        Tanzil
                      </h1>
                      <h1 className="text-slate-300 text-xs">Free User</h1>
                    </div>
                  </div>
                </li>

                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <button className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-smart-home"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
                      <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
                    </svg>
                    Dashboard
                  </button>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-wallet"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                    </svg>
                    Transactions
                  </a>
                </li>
                <div className="divider m-0"></div>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-circle"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                    </svg>
                    Account
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-cloud-upload"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                      <path d="M9 15l3 -3l3 3"></path>
                      <path d="M12 12l0 9"></path>
                    </svg>
                    Request
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-crown"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                    </svg>
                    Pricing
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-headset"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
                      <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
                      <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                      <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                    </svg>
                    Support
                  </a>
                </li>
                <div className="divider m-0"></div>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-info-circle"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                    Faq
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-mail"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                    Contact
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-heart"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                      <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                    </svg>
                    Donate
                  </a>
                </li>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-shopping-cart"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 17h-11v-14h-2"></path>
                      <path d="M6 5l14 1l-1 7h-13"></path>
                    </svg>
                    Shop
                  </a>
                </li>
                <div className="divider m-0"></div>
                <li className="h-9 hover:bg-slate-100 hover:text-slate-700">
                  <a className="flex gap-4 items-center pl-4 pt-1.5 text-sm  mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-logout"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M9 12h12l-3 -3"></path>
                      <path d="M18 15l3 -3"></path>
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
