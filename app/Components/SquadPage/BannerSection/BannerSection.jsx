"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white bg-black">
      <div className="max-1920">
        <div className="relative">
          <div>
            <Image
              src="/images/bbt-squad/squad-banner-desktop.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden sm:block"
            />
            <Image
              src="/images/bbt-squad/squad-banner-mobile.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full sm:hidden"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[9rem] pb-16 md:pt-[17rem] xl:pt-[25rem] 3xl:pt-[30rem]">
            <div
              className="px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[83%] lg:mx-auto"
              //   data-aos="fade-up"
              //   data-aos-easing="linear"
              //   data-aos-duration="500"
            >
              <div className="hidden sm:block [&_img]:invert">
                <BreadCrumb pageTitle="BBT Squad" />
              </div>
              <h1 className="font-extralight text-[4.5rem] tracking-tighter leading-1.3 mt-5 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] 2xl:text-[6rem] 2xl:leading-[1.2] 3xl:text-[7.5rem]">
                The <b>BBT Squad</b> <br /> - Join Us
              </h1>
              <p className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block">BBT Squad is a new platform inviting car enthusiasts to pursue their passion <br /> for automobiles without compromising on their existing work areas.</p>
            </div>
            <div
              className={`text-center flex flex-col justify-center items-center scroll-animation`}
            >
              <Image
                src="/images/banner-scroll-icon-white.webp"
                alt="Scroll Down"
                width="19"
                height="29"
                className="inline-block object-contain w-8 1xl:w-6"
              />
              <span className="uppercase mt-5 text-base">Scroll Down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
