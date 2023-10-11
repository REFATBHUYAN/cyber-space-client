import React from "react";
import Container from "../../components/Container";
import { BiSpa } from "react-icons/bi";

const EditorsChoice = () => {
  return (
    <div className="py-5 my-10 w-full">
      <Container>
        <h1 className="flex items-center gap-2 mb-9">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-diamond"
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
            <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path>
            <path d="M10 12l-2 -2.2l.6 -1"></path>
          </svg>
          <span className="font-bold text-3xl">Editor's Choice</span>
        </h1>
        <div className="flex flex-col md:flex-row  gap-4 mt-4">
          <div className="w-full  md:w-2/5 mx-auto">
            <div className="h-[504px] max-w-lg rounded-2xl  overflow-hidden relative bg-gradient-to-b from-slate-50 to-slate-800  mb-6">
              <img
                className="absolute rounded-2xl p-0 h-full w-full opacity-60 "
                src="/idm.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Internet Download Manager
              </h1>
              <button className=" absolute top-4 left-4 bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
            <div className="flex gap-6">
              <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
                {/* <div className=" w-full"></div> */}
                <img
                  className="absolute object-fill h-full w-full opacity-60"
                  src="/mo.png"
                  alt=""
                />
                <h1 className="absolute left-4 bottom-4 font-semibold text-lg text-white">
                  Microsoft Office 2021
                </h1>
                <button className=" absolute top-4 left-4 bg-blue-50 text-blue-700 uppercase rounded-md px-1 text-xs text-center border border-blue-100">
                  WINDOWS
                </button>
              </div>
              <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
                <img
                  className="absolute object-fill h-full w-full opacity-60"
                  src="/pp.png"
                  alt=""
                />
                <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                  Pot Player
                </h1>
                <button className=" absolute top-4 left-4 bg-orange-50 text-orange-700 uppercase rounded-md px-1 text-xs text-center border border-orange-100">
                  MULTIMEDIA
                </button>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/pp.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Pot Player
              </h1>
              <button className=" absolute top-4 left-4 bg-orange-50 text-orange-700 uppercase rounded-md px-1 text-xs text-center border border-orange-100">
                MULTIMEDIA
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/wf.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Wondershare Filmora
              </h1>
              <button className=" absolute top-4 left-4 bg-pink-50 text-pink-700 uppercase rounded-md px-1 text-xs text-center border border-pink-100">
                UTILITY
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Windows 11 Pro
              </h1>
              <button className=" absolute top-4 left-4 bg-indigo-50 text-indigo-700 uppercase rounded-md px-1 text-xs text-center border border-indigo-100">
                WINDOWS
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Windows 11 Pro
              </h1>
              <button className=" absolute top-4 left-4 bg-indigo-50 text-indigo-700 uppercase rounded-md px-1 text-xs text-center border border-indigo-100">
                WINDOWS
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              {/* <div className=" w-full"></div> */}
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/mo.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-lg text-white">
                Microsoft Office 2021
              </h1>
              <button className=" absolute top-4 left-4 bg-blue-50 text-blue-700 uppercase rounded-md px-1 text-xs text-center border border-blue-100">
                WINDOWS
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/pp.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Pot Player
              </h1>
              <button className=" absolute top-4 left-4 bg-orange-50 text-orange-700 uppercase rounded-md px-1 text-xs text-center border border-orange-100">
                MULTIMEDIA
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/wf.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Wondershare Filmora
              </h1>
              <button className=" absolute top-4 left-4 bg-pink-50 text-pink-700 uppercase rounded-md px-1 text-xs text-center border border-pink-100">
                UTILITY
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900 mb-6">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/idm.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Internet Download Manager
              </h1>
              <button className=" absolute top-4 left-4 bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
            <div className="h-60 w-full md:w-60 rounded-xl overflow-hidden bg-repeat-round relative bg-gradient-to-b from-transparent to-slate-900">
              <img
                className="absolute object-fill h-full w-full opacity-60"
                src="/w11.png"
                alt=""
              />
              <h1 className="absolute left-4 bottom-4 font-semibold text-2xl text-white">
                Windows 11 Pro
              </h1>
              <button className=" absolute top-4 left-4 bg-indigo-50 text-indigo-700 uppercase rounded-md px-1 text-xs text-center border border-indigo-100">
                WINDOWS
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditorsChoice;
