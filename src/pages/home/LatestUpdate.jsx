import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import {
  BiCommentDetail,
  BiRadioCircleMarked,
  BiTimeFive,
} from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import Pagination from "./Pagination";

const LatestUpdate = () => {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    fetch("/updates.json")
      .then((res) => res.json())
      .then((data) => setUpdates(data));
  }, []);
  console.log(updates);
  return (
    <div className=" py-10">
      <Container>
        <div>
          <h1 className="flex items-center gap-2">
            <BiRadioCircleMarked className="w-7 h-7 animate-ping delay-700"></BiRadioCircleMarked>{" "}
            <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">Latest Updates</span>
          </h1>
          <div className="my-3">
            <>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 my-4">
                <img className="h-56 w-56 rounded-md" src="/idm.png" alt="" />
                <div className="flex flex-col gap-4 text-slate-400 max-w-[824px] h-full md:h-56">
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      WEB
                    </button>
                  </div>
                  <button className="font-semibold text-lg text-slate-700 dark:text-slate-50 text-start hover:text-blue-700 dark:hover:text-blue-700">
                    Internet Download Manager
                  </button>
                  <p className="border-b border-b-slate-100 pb-5">
                    Comprehensive error recovery and resume capability will
                    restart broken or interrupted downloads due to lost
                    connections, network problems, computer shutdowns, or
                    unexpected power outages. Simple graphic...
                  </p>
                  <div className="md:flex gap-3">
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar"
                        width="16"
                        height="16"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>{" "}
                      02 Oct 2023{" "}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-dots"
                        width="16"
                        height="16"
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
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                        <path d="M12 11l0 .01"></path>
                        <path d="M8 11l0 .01"></path>
                        <path d="M16 11l0 .01"></path>
                      </svg>{" "}
                      15 Comments
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-flame"
                        width="16"
                        height="16"
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
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                      </svg>
                      273736 Views
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 my-4">
                <img className="h-56 w-56 rounded-md" src="/mo.png" alt="" />
                <div className="flex flex-col gap-4 text-slate-400 max-w-[824px] h-full md:h-56">
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      WINDOWS
                    </button>
                  </div>
                  <button className="font-semibold text-lg text-start text-slate-700 dark:text-slate-50 hover:text-blue-700 dark:hover:text-blue-700">
                    Microsoft Office 2021
                  </button>
                  <p className="border-b border-b-slate-100 pb-5">
                    Comprehensive error recovery and resume capability will
                    restart broken or interrupted downloads due to lost
                    connections, network problems, computer shutdowns, or
                    unexpected power outages. Simple graphic...
                  </p>
                  <div className="md:flex gap-3">
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar"
                        width="16"
                        height="16"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>{" "}
                      02 Oct 2023{" "}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-dots"
                        width="16"
                        height="16"
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
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                        <path d="M12 11l0 .01"></path>
                        <path d="M8 11l0 .01"></path>
                        <path d="M16 11l0 .01"></path>
                      </svg>{" "}
                      15 Comments
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-flame"
                        width="16"
                        height="16"
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
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                      </svg>
                      273736 Views
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 my-4">
                <img className="h-56 w-56 rounded-md" src="/pp.png" alt="" />
                <div className="flex flex-col gap-4 text-slate-400 max-w-[824px] h-full md:h-56">
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      MULTIMEDIA
                    </button>
                  </div>
                  <button className="font-semibold text-lg text-start text-slate-700 dark:text-slate-50 hover:text-blue-700 dark:hover:text-blue-700">
                    Pot Player
                  </button>
                  <p className="border-b border-b-slate-100 pb-5">
                    Comprehensive error recovery and resume capability will
                    restart broken or interrupted downloads due to lost
                    connections, network problems, computer shutdowns, or
                    unexpected power outages. Simple graphic...
                  </p>
                  <div className="md:flex gap-3">
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar"
                        width="16"
                        height="16"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>{" "}
                      02 Oct 2023{" "}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-dots"
                        width="16"
                        height="16"
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
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                        <path d="M12 11l0 .01"></path>
                        <path d="M8 11l0 .01"></path>
                        <path d="M16 11l0 .01"></path>
                      </svg>{" "}
                      15 Comments
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-flame"
                        width="16"
                        height="16"
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
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                      </svg>
                      273736 Views
                    </p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 my-4">
                <img className="h-56 w-56 rounded-md" src="/wf.png" alt="" />
                <div className="flex flex-col gap-4 text-slate-400 max-w-[824px] h-full md:h-56">
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      UTILITY
                    </button>
                  </div>
                  <button className="font-semibold text-lg text-start text-slate-700 dark:text-slate-50 hover:text-blue-700 dark:hover:text-blue-700">
                    Wondershare Filmora
                  </button>
                  <p className="border-b border-b-slate-100 pb-5">
                    Comprehensive error recovery and resume capability will
                    restart broken or interrupted downloads due to lost
                    connections, network problems, computer shutdowns, or
                    unexpected power outages. Simple graphic...
                  </p>
                  <div className="md:flex gap-3">
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar"
                        width="16"
                        height="16"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>{" "}
                      02 Oct 2023{" "}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-dots"
                        width="16"
                        height="16"
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
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                        <path d="M12 11l0 .01"></path>
                        <path d="M8 11l0 .01"></path>
                        <path d="M16 11l0 .01"></path>
                      </svg>{" "}
                      15 Comments
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-flame"
                        width="16"
                        height="16"
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
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                      </svg>
                      273736 Views
                    </p>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 my-4">
                <img className="h-56 w-56 rounded-md" src="/w11.png" alt="" />
                <div className="flex flex-col gap-4 text-slate-400 max-w-[824px] h-full md:h-56">
                  <div className="flex gap-2">
                    <p className="bg-indigo-50 text-indigo-700 rounded-md px-1 text-xs text-center border border-indigo-100">
                      6.42.2
                    </p>
                    <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                      WINDOWS
                    </button>
                  </div>
                  <button className="font-semibold text-lg text-start text-slate-700 dark:text-slate-50 hover:text-blue-700 dark:hover:text-blue-700">
                    Windows 11 Pro
                  </button>
                  <p className="border-b border-b-slate-100 pb-5">
                    Comprehensive error recovery and resume capability will
                    restart broken or interrupted downloads due to lost
                    connections, network problems, computer shutdowns, or
                    unexpected power outages. Simple graphic...
                  </p>
                  <div className="md:flex gap-3">
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar"
                        width="16"
                        height="16"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>{" "}
                      02 Oct 2023{" "}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-dots"
                        width="16"
                        height="16"
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
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                        <path d="M12 11l0 .01"></path>
                        <path d="M8 11l0 .01"></path>
                        <path d="M16 11l0 .01"></path>
                      </svg>{" "}
                      15 Comments
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-flame"
                        width="16"
                        height="16"
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
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                      </svg>
                      273736 Views
                    </p>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="text-center my-9">
          <Pagination></Pagination>
        </div>
      </Container>
    </div>
  );
};

export default LatestUpdate;
