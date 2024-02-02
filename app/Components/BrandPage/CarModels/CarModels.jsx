"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarModelItem from "./CarModelItem";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const carModels = [
  {
    title: "BMW 2 Series",
    link: "#",
    image: "/images/brand-page/bmw-model-1.webp",
  },
  {
    title: "BMW 3 Series",
    link: "#",
    image: "/images/brand-page/bmw-model-2.webp",
  },
  {
    title: "BMW 2 Series",
    link: "#",
    image: "/images/brand-page/bmw-model-1.webp",
  },
  {
    title: "BMW 3 Series",
    link: "#",
    image: "/images/brand-page/bmw-model-2.webp",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/hp-service-slider-arrow.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

const CarModels = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
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
    <section className="bg-black py-24 lg:py-40 xl:py-52 3xl:py-72 -mt-5 md:-mt-0">
      <div className="max-1920">
        <div
          className="lg:flex justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 3xl:pl-72"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container lg:w-30% lg:pr-20 xl:pr-28 3xl:w-[25%]">
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden lg:inline-block mb-14 object-contain lg:w-32 xl:w-40 3xl:w-48"
            />
            <h2 className=" text-white mb-3 lg:mb-6 [&>br]:hidden lg:[&>br]:block text-[2.9rem] xl:text-[3.2rem] 1xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem]">
              Bmw <br /> Car Models
            </h2>
            <p className="text-xl text-white text-[1.4rem] leading-[1.5] 1xl:text-[1.4rem] 3xl:text-[1.6rem] mb-10 1xl:mb-[3rem] 2xl:mb-[4rem] 3xl:mb-[5rem]">
              Get your dream luxury car in 4 easy steps at Big Boy Toyz, India's
              trusted used car portal.
            </p>
            <Link
              href="#"
              className="inline-block text-center text-white text-[1.3rem] font-medium py-3 px-16 rounded-[3rem] border border-[#FFFFFF] 1xl:text-[1.5rem] 3xl:text-[1.8rem] 3xl:px-[6rem] 3xl:py-[1.5rem] 3xl:min-w-[27rem] hover:bg-white hover:text-[#000] transition-all duration-500 ease-in-out"
            >
              View All
            </Link>
          </div>

          <div className="w-full lg:w-70% mt-24 lg:mt-0 3xl:w-[75%]">
            <div className="pl-[2rem]">
              <Slider
                {...settings}
                className="hp-services-slider brand-model-slider"
              >
                {carModels.map((item, index) => (
                  <CarModelItem key={index} data={item} />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarModels;
