import React from "react";
import { BiBoltCircle } from "react-icons/bi";
import Container from "../../components/Container";

const PopularPost = () => {
  return (
    <div className=" py-10 text-slate-700">
      <Container>
        <h1 className="flex items-center gap-2 mb-8">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bolt dark:text-slate-50"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
          </svg>
          <span className="font-bold text-3xl text-slate-700 dark:text-slate-50">Trending Now</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/mo.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
              Microsoft Office 2021
              </h1>
              <button className="bg-blue-50 text-blue-700 uppercase rounded-md px-1 text-xs text-center border border-blue-100">
              WINDOWS
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/pp.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
              Pot Player
              </h1>
              <button className="bg-orange-50 text-orange-700 uppercase rounded-md px-1 text-xs text-center border border-orange-100">
              MULTIMEDIA
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/wf.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
              Wondershare Filmora
              </h1>
              <button className="bg-pink-50 text-pink-700 uppercase rounded-md px-1 text-xs text-center border border-pink-100">
              UTILITY
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/w11.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
              Windows 11 Pro
              </h1>
              <button className="bg-cyan-50 text-cyan-700 uppercase rounded-md px-1 text-xs text-center border border-cyan-100">
              WINDOWS
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-2 py-1">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-indigo-700 dark:text-slate-100 dark:hover:text-indigo-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default PopularPost;
