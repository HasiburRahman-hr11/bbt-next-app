"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

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
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white pt-[3rem] pb-[5rem] md:pt-[5rem] md:pb-[7rem] lg:pt-[7rem] lg:pb-[9rem] 1xl:pt-[8rem] 1xl:pb-[10rem] 2xl:pt-[9rem] 2xl:pb-[12rem] 3xl:pt-[11rem] 3xl:pb-[13rem]">
      <div className="max-1920 overflow-hidden">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text-center mb-[3rem] lg:mb-[4rem]">
            <div className="hidden md:block text-center mb-[2rem] lg:mb-[1.7rem]">
              <p className="flex flex-wrap justify-center items-center font-light">
                <Link
                  href="/"
                  className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                >
                  Home
                </Link>
                <Image
                  src="/images/breadcrumb-arrow.webp"
                  className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                  width="6"
                  height="11"
                  alt="Arrow Icon"
                />
                <span className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                  Our Showrooms
                </span>
              </p>
            </div>
            <h1 className="font-[200] text-[4.5rem] [&>b]:font-[400] leading-[1] tracking-[-0.2rem] lg:[&>br]:hidden lg:text-[5rem] 1xl:text-[6rem] 1xl:tracking-[-0.4rem] 2xl:text-[6.3rem] 3xl:text-[7.5rem] 2xl:tracking-[-0.5rem]">
              Our Luxury Car <br /> <b>Showrooms</b>
            </h1>
            <p className="text-[1.2rem] mt-[1.5rem] font-light md:text-[1.5rem] lg:text-[1.77rem] 1xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem]">
              At BBT, we strive to provide the quickest and most <br /> hassle
              free car selling service available.
            </p>
          </div>
        </div>
        <div className="showroom-banner-slider [&_.slick-slide]:mx-[0.7rem] mx-[-0.7rem] md:px-[3rem] lg:[&_.slick-slide]:mx-[1rem] lg:mx-auto lg:w-[89%] 1xl:w-[88%] 1xl:[&_.slick-slide]:mx-[1.2rem] 3xl:[&_.slick-slide]:mx-[1.7rem] 3xl:w-[87.5%]">
          <Slider {...settings}>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-1.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover md:rounded-[0.5rem] lg:rounded-[1rem]"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-2.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover md:rounded-[0.5rem] lg:rounded-[1rem]"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-3.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover md:rounded-[0.5rem] lg:rounded-[1rem]"
                width="372"
                height="613"
              />
            </div>
            <div>
              <img
                src="/images/showroom-page/showroom-banner-img-4.webp"
                alt="Banner Image"
                className="w-full h-auto object-cover md:rounded-[0.5rem] lg:rounded-[1rem]"
                width="372"
                height="613"
              />
            </div>
          </Slider>
        </div>
        <div className="container">
          <div className="mt-[3rem] sm:max-w-[362px] sm:mx-auto lg:mt-[4rem] lg:max-w-[25rem] 1xl:max-w-[27rem] 3xl:max-w-[36.2rem] 3xl:mt-[6rem]">
            <a
              href="https://www.bigboytoyz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full h-[5.6rem] bg-black text-white p-[1rem] rounded-[1.1rem] sm:rounded-[3rem] lg:h-[4.6rem] transition-all duration-500 ease-in-out hover:bg-[#333333] 1xl:h-[4.8rem] 3xl:h-[6.57rem] 3xl:rounded-[4rem]"
            >
              <img
                src="/images/showroom-page/360-tour-btn-icon.webp"
                alt="360 degree tour"
                className="object-contain w-[2.4rem] h-auto inline-block mr-[3.5rem] lg:w-[2rem] lg:mr-[3rem] 3xl:w-[2.5rem]"
                width="25"
                height="25"
              />
              <span className="font-medium text-[1.6rem] text-white lg:text-[1.2rem] lg:font-normal 1xl:text-[1.3rem] 3xl:text-[1.8rem]">
                360{" "}
                <sup className="font-extralight text-[0.9rem] inline-block relative top-[-1rem] lg:text-[0.5rem] lg:top-[-0.7rem] 3xl:text-[0.8rem] 3xl:top-[-1.5rem]">
                  o
                </sup>{" "}
                Virtual Tour
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
