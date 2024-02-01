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
    <section className="text-white bg-black pt-20 md:pt-0">
      <div className="max-1920">
        <div className="relative">
          <div>
            <Image
              src="/images/brand-page/brand-page-banner-desk.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden md:block"
            />
            <Image
              src="/images/brand-page/brand-page-banner-mob.webp"
              alt="Banner Image"
              width="390"
              height="741"
              className="block w-full md:hidden"
            />
          </div>
          <div
            className="absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-24 pb-16 md:pt-[10rem] lg:pt-[13rem] 3xl:pt-[18rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-center px-14 lg:w-[83%] lg:mx-auto">
              <div className="flex justify-center [&_img]:invert">
                <BreadCrumb pageTitle="BMW" />
              </div>
              <h1 className="font-light text-3.3rem tracking-tighter leading-1.4 mt-5 [&>strong]:font-normal lg:mt-10 lg:text-[4.5rem] 2xl:text-[6rem] 2xl:leading-[1.2] 3xl:text-[7.5rem] [&_br]:hidden md:[&_br]:block">
                Looking to buy a{" "}
                <strong>
                  used BMW <br /> car ?
                </strong>{" "}
                Take a look.
              </h1>
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
