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
];

const PreviewSliderItem = ({ data, index }) => {
  return (
    <div className="mr-8">
      <div
        className="text-white relative pt-8 pb-16 px-8 overflow-hidden rounded-2xl min-h-20"
        style={{ backgroundColor: "#282829" }}
      >
        <p className="w-max border border-white rounded-2xl text-sm py-1 px-5 text-right ml-auto">
          {data.tag}
        </p>
        <h6 className="text-lg mt-8 font-normal">{data.title}</h6>
        <span className="absolute text-neutral-700 text-8xl -right-2 -bottom-6 font-medium">
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };
  return (
    <>
      <div className="pl-5">
        <Slider {...settings} className="hp-services-slider">
          {sliderData.map((data, index) => (
            <PreviewSliderItem key={index} data={data} index={index} />
          ))}
        </Slider>
      </div>
      <div className="container lg:w-full lg:pl-10 lg:pr-32 3xl:pr-40">
        <div
          className="progress mt-16 3xl:mt-32"
          style={{
            backgroundColor: "rgb(251 251 251 / 10%)",
            height: "2px",
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
