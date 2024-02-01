"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RelatedCarsCard from "./RelatedCarsCard";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

const NewInclusion = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className=" bg-white ">
      <div className="max-1920 bg-[#F3F3F3] py-24 lg:py-36 xl:py-44 2xl:py-52 3xl:py-60">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="flex justify-between items-center mb-10 2xl:mb-16 3xl:mb-36">
            <span className="h-px w-auto grow bg-black lg:hidden"></span>
            <h2 className=" pl-8 lg:pl-0 titleWithLine lg:w-full 2xl:tracking-tighter">
              <span className="lg:bg-[#F3F3F3] lg:pr-5 relative z-10 2xl:pr-16">
                Related Cars
              </span>
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Slider
            {...settings}
            className="related-car-slider pl-0 sm:pl-12 lg:px-36 lg:mt-24 xl:px-40 1xl:px-48 3xl:px-60"
          >
            <RelatedCarsCard />
            <RelatedCarsCard />
            <RelatedCarsCard />
            <RelatedCarsCard />
            <RelatedCarsCard />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewInclusion;
