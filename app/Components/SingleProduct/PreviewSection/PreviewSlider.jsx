"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderData = [
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  }
];

const PreviewSliderItem = ({ data, index }) => {
  return (
    <div className="mr-8">
      <div
        className="text-white relative pt-8 pb-16 px-8 overflow-hidden rounded-2xl min-h-20 sm:min-h-24 lg:min-h-20"
        style={{ backgroundColor: "#131313" }}
      >
        <p className="w-max border border-white rounded-2xl text-sm py-1 px-5 text-right ml-auto sm:text-lg lg:text-sm">
          {data.tag}
        </p>
        <h6 className="text-lg mt-8 font-normal sm:text-2xl lg:text-lg">{data.title}</h6>
        <span className="absolute text-neutral-700 text-8xl -right-2 -bottom-6 font-medium sm:text-9xl lg:text-8xl">
          {index > 9 ? "" : "0"}{index + 1}
        </span>
      </div>
    </div>
  );
};

const PreviewSlider = () => {
  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };
  return (
    <>
      <div className="pl-5 sm:pl-12 md:pl-16 lg:pl-0">
        <Slider {...settings} className="hp-services-slider">
          {sliderData.map((data, index) => (
            <PreviewSliderItem key={index} data={data} index={index} />
          ))}
        </Slider>
      </div>
      <div className="px-8 sm:px-16 lg:w-full lg:pl-10 lg:pr-32 3xl:pr-40">
        <div
          className="progress mt-16 3xl:mt-32"
          style={{
            backgroundColor: "rgb(251 251 251 / 10%)",
            height: "1px",
          }}
        >
          <div
            style={{
              width: `${progressWidth}%`,
              backgroundColor: "rgba(255, 255, 255, 1)",
              height: "100%",
            }}
            className="progressFill"
          ></div>
        </div>
      </div>
    </>
  );
};

export default PreviewSlider;
