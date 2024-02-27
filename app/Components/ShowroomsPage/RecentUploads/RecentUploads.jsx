"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CollectionItem from "./CollectionItem";
import Image from "next/image";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "7%",
      },
    },
  ],
};

const RecentUploads = () => {
  return (
    <section className="py-[6rem] bg-[#F3F3F3] lg:py-[8rem] 3xl:py-[15rem]">
      <div className="max-1920 overflow-hidden">
        <div className="container">
          <h2 className=" pl-8 lg:pl-0 titleWithLine mobileLine text-right mb-[4rem] lg:text-left lg:mb-[6rem] xl:pb-[0.5rem] 3xl:mb-[8rem]">
            <span className="bg-[#F3F3F3] pl-5 inline-block relative z-10 tracking-[-1px] lg:pl-0 lg:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[4.5rem] 3xl:tracking-[-0.4rem]">
              Recent Uploads
            </span>
          </h2>
        </div>
        <div className="pl-[2rem] lg:pl-0 lg:[&_.slick-list]:w-[85%] lg:[&_.slick-list]:mx-auto">
          <Slider {...settings} className="recent-uploads-slider">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentUploads;