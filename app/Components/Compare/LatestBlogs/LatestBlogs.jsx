"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

const LatestBlogs = () => {
  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };

  return (
    <section className="bg-[#F8F8F8] pt-24 pb-28">
      <div className="container">
        <h2 className=" pl-8 lg:pl-0 titleWithLine mobileLine text-right 2xl:tracking-tighter">
          <span className="bg-[#F8F8F8] pl-5 inline-block relative z-10">
            Latest Reads
          </span>
        </h2>
      </div>
      <div className="mt-20 pl-8">
        <Slider {...settings}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Slider>
      </div>
      <div className="container">
        <div
          className="progress mt-20"
          style={{
            backgroundColor: "rgb(0 0 0 / 10%)",
            height: "1.4px",
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
    </section>
  );
};

export default LatestBlogs;
