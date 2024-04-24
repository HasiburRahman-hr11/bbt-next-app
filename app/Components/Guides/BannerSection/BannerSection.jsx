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
              src="/images/guides/auto-guide-banner.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[600px] object-cover"
            />
            <img
              src="/images/guides/guide-banner-mob.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[9rem] pb-16 sm:text-left sm:pt-[15rem] md:pt-[18rem] lg:pt-[20rem] xl:pt-[22rem] 1xl:pt-[25.5rem] 2xl:pt-[26.5rem] 3xl:pt-[34rem] 3xl:pb-[6rem]">
            <div
              className="px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[82%] lg:mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p className="hidden sm:block [&_img]:invert text-white text-left font-light">
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
                  Auto Guide
                </span>
              </p>
              <h1 className="font-extralight text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem]">
                The Grand <br /> <b>Convertible Feast</b>
              </h1>
              <p className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:mt-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.22rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion <br /> for automobiles without compromising on
                their existing work areas.
              </p>
            </div>
            <div
              className={`text-center flex flex-col justify-center items-center scroll-animation`}
            >
              <img
                src="/images/banner-scroll-icon-white.webp"
                alt="Scroll Down"
                width="19"
                height="29"
                className="inline-block object-contain w-8 xl:w-[1.5rem] 1xl:w-6 3xl:w-[1.9rem]"
              />
              <span className="uppercase mt-5 text-base xl:text-[0.8rem] 3xl:text-[0.9rem]">
                Scroll Down
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
