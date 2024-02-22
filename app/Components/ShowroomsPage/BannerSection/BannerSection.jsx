"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerSection = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-white pt-[3rem] pb-[5rem]">
      <div className="max-1920 overflow-hidden">
        <div className="container">
          <div className="text-center mb-[3rem]">
            <h1 className="font-[200] text-[4.5rem] [&>b]:font-[400] leading-[1] tracking-[-0.2rem]">
              Our Luxury Car <br /> <b>Showrooms</b>
            </h1>
            <p className="text-[1.2rem] mt-[1.5rem] font-light">
              At BBT, we strive to provide the quickest and most <br /> hassle
              free car selling service available.
            </p>
          </div>
        </div>
        <div className="showroom-banner-slider [&_.slick-slide]:mx-[0.7rem] mx-[-0.7rem] ">
          <Slider {...settings}>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-1.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-2.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-3.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-4.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover"
                width="372"
                height="613"
              />
            </div>
          </Slider>
        </div>
        <div className="container">
            <div className="mt-[3rem]">
                <a href="https://www.bigboytoyz.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-[5.6rem] bg-black text-white p-[1rem] rounded-[1.1rem]">
                    <img src="/images/showroom-page/360-tour-btn-icon.webp" alt="360 degree tour" className="object-contain w-[2.4rem] h-auto inline-block mr-[3.5rem]" width="25" height="25" />
                    <span className="font-medium text-[1.6rem] text-white ">360 <sup className="font-extralight text-[0.9rem] inline-block relative top-[-1rem]">o</sup> Virtual Tour</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
