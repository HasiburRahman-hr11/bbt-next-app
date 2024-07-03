"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white bg-black">
      <div className="max-1920">
        <div className="relative">
          <div>
            <img
              src="/images/why-us/why-us-banner-desktop.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[600px] object-cover"
            />
            <img
              src="/images/why-us/why-us-banner-desktop.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden min-h-[650px]"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[12rem] pb-16 sm:text-left sm:pt-[15rem] md:pt-[18rem] lg:pt-[20rem] xl:pt-[25rem] 1xl:pt-[27rem] 2xl:pt-[29rem] 3xl:pt-[33rem] 3xl:pb-[6rem]">
            <div
              className="px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[82%] lg:mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p className="text-center sm:block [&_img]:invert text-white sm:text-left font-light">
                <Link
                  href="/"
                  className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                >
                  Home
                </Link>
                <img
                  src="/images/breadcrumb-arrow.webp"
                  className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                  width="6"
                  height="11"
                  alt="Arrow Icon"
                />
                <span className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                  Why Us
                </span>
              </p>
              <h1 className="font-extralight [&>br]:hidden sm:[&>br]:block text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem] capitalize">
                Why We're the <br /> <b>Best Choice</b>
              </h1>
              <p className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:mt-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.22rem] 1xl:mt-[2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                From the finest German engineering to standout Italian designs,
                our <br /> collection of 24 exotic brands with 75 to 100 cars
                under one roof will <br /> ignite your passion and get your
                adrenaline pumping.
              </p>

              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden xl:inline-block object-contain xl:w-[8.5rem] xl:mt-[7rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 2xl:mt-[9rem] 3xl:w-[12.36rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
