"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  slidesToShow: 1.8,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding:'25rem',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1.7,
        centerPadding:'5rem',
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
};

const BannerSection = () => {
  return (
    <section className="productPageBanner overflow-hidden bg-white">
      <div className="max-1920">
        <Slider {...settings} className="details-banner-slider">
          <div className="md:px-[1.3rem]">
            <img
              src="/images/detail-page/detail-page-banner.webp"
              alt="Product Image"
              className="w-full object-cover block"
              width="1025"
              height="730"
            />
          </div>
          <div className="md:px-[1.3rem]">
            <img
              src="/images/detail-page/detail-page-banner.webp"
              alt="Product Image"
              className="w-full object-cover"
              width="1025"
              height="730"
            />
          </div>
          <div className="md:px-[1.3rem]">
            <img
              src="/images/detail-page/detail-page-banner.webp"
              alt="Product Image"
              className="w-full object-cover"
              width="1025"
              height="730"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BannerSection;
