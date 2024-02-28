"use client";

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderItems = [
  {
    thumbnail: "/images/team-page/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
  },
  {
    thumbnail: "/images/team-page/celebration-slide-1.webp",
    title: "We are <b>passionate about cars</b>",
  },
  {
    thumbnail: "/images/team-page/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
  },
];

const SliderItem = ({ data }) => {
  return (
    <div className="pr-[2rem]">
      <div className="relative rounded-[3rem] overflow-hidden">
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt="Slider Image"
          className="w-full block object-cover"
        />
        <div className="absolute bottom-0 left-0 pb-[4rem] pt-[8rem] px-[3rem] w-full h-auto linear-bottom bg-gradient-to-t from-black to-[#00000000]">
          <h5
            className="text-white  text-center text-[1.8rem] font-light [&>b]:font-normal leading-[1.2] tracking-[-1px]"
            dangerouslySetInnerHTML={{
              __html: data?.title ? data.title : "BBT World",
            }}
          ></h5>
        </div>
      </div>
    </div>
  );
};

const Celebration = () => {
  const [progressWidth, setProgressWidth] = useState(25);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "15%",
    afterChange: (index) => {
      setProgressWidth((100 / sliderItems.length) * (index + 1));
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 className="flex-1 font-light [&>b]:font-normal [&>b]:block leading-[1.1] pr-[2rem] tracking-[-1.2px]">
              Celebration <b>40 years of bond</b>
            </h2>
            <img
              src="/images/team-page/celebration-icon.webp"
              alt="Icon"
              className=" object-contain h-[6rem] w-auto"
            />
          </div>
          <p className="font-light text-[1.2rem] leading-[1.4] mt-[2rem] w-[90%]">
            At each progression without a doubt Directly from the time you enter
            the paradise of extravagance vehicles, rubberneck at the most loved
            pick of the parcel, steer away the difficulty runs and choke your
            pre cherished or new first light adored outlandish home
          </p>
        </div>

        <div className="celebration-slider pl-[2rem] mt-[4rem]">
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <SliderItem data={item} key={index} />
            ))}
          </Slider>
        </div>
        <div className="container">
          <div
            className="progress mt-[4rem] 2xl:mt-32 3xl:mt-40"
            style={{
              backgroundColor: "rgb(0 0 0 / 10%)",
              height: "2px",
            }}
          >
            <div
              style={{
                width: `${progressWidth}%`,
                backgroundColor: "rgba(0, 0, 0, 1)",
                height: "100%",
              }}
              className="progressFill"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebration;
