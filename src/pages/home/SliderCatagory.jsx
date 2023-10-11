import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCatagory = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "24px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="max-w-7xl mx-auto text-slate-500 mt-28 mb-14">
      
      <Slider {...settings}>
        <div>
          <button className=" w-48 h-48 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 ">
            <img className="h-14 w-14" src="/windows.svg" alt="" />
            <h1 className="font-bold  ">Windows</h1>
          </button>
        </div>
        <div>
          <button className=" w-48 h-48 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
            <img className="h-[50px] w-[50px]" src="/graphics.svg" alt="" />
            <h1 className="font-bold">Graphic</h1>
          </button>
        </div>
        <div>
          <button className="w-48 h-48 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
            <img className="h-[50px] w-[50px]" src="/web.svg" alt="" />
            <h1 className="font-bold">Web</h1>
          </button>
        </div>
        <div>
          <button className="w-48 h-48 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
            <img className="h-[50px] w-[50px]" src="/multimedia.svg" alt="" />
            <h1 className="font-bold">Multimedia</h1>
          </button>
        </div>
        <div>
          <button className="w-48 h-48 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
            <img className="h-[50px] w-[50px]" src="/utilities.svg" alt="" />
            <h1 className="font-bold">Utilities</h1>
          </button>
        </div>
        <div>
          <button className="w-48 h-48 hover:bg-gradient-to-t from-indigo-400 bg-indigo-50 hover:text-indigo-700 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 ">
            <img className="h-[50px] w-[50px]" src="/security.svg" alt="" />
            <h1 className="font-bold">Security</h1>
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default SliderCatagory;
