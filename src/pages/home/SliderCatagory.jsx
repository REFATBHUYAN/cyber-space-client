import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/circle-chevron-left.svg";
import RightArrow from "../../assets/circle-chevron-right.svg";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="w-20 h-20 hover:bg-indigo-600 slick-prev"
    src={LeftArrow}
    alt="prevArrow"
    {...props}
  />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img
    className="w-20 h-20 hover:bg-indigo-600"
    src={RightArrow}
    alt="nextArrow"
    {...props}
  />
);

const SliderCatagory = () => {
  const settings = {
    // dots: true,
    autoplay: true,
    // speed: 2000,
      autoplaySpeed: 3000,
      // cssEase: "linear",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="md:w-full w-[22rem] md:max-w-[78rem] text-center mx-auto text-slate-500 my-20 px-7">
      <Slider {...settings}>
        <div>
          <button className=" w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100">
            <img className="h-14 w-14" src="/windows.svg" alt="" />
            <h1 className="font-bold  ">Windows</h1>
          </button>
        </div>
        <div>
          <button className=" w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/graphics.svg" alt="" />
            <h1 className="font-bold">Graphic</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/web.svg" alt="" />
            <h1 className="font-bold">Web</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/multimedia.svg" alt="" />
            <h1 className="font-bold">Multimedia</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/utilities.svg" alt="" />
            <h1 className="font-bold">Utilities</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/security.svg" alt="" />
            <h1 className="font-bold">Security</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/misc.svg" alt="" />
            <h1 className="font-bold">Misc</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/security.svg" alt="" />
            <h1 className="font-bold">Security</h1>
          </button>
        </div>
        <div>
          <button className="w-32 md:w-48 mx-2 h-32 aspect-square md:h-48 hover:bg-indigo-100 bg-slate-50 rounded-md flex flex-col justify-center items-center gap-2 border border-slate-300 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-800 dark:text-slate-100 ">
            <img className="h-[50px] w-[50px]" src="/misc.svg" alt="" />
            <h1 className="font-bold">Misc</h1>
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default SliderCatagory;
