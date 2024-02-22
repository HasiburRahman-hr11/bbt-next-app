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
              src="/images/suv/suv-banner-desk.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden md:block"
            />
            <Image
              src="/images/suv/suv-banner-mob.webp"
              alt="Banner Image"
              width="390"
              height="741"
              className="block w-full md:hidden"
            />
          </div>
          <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[9rem] pb-16 md:pt-[17rem] xl:pt-[25rem] 3xl:pt-[30rem]">
            <div
              className="text-center px-14 md:text-left md:px-[8rem] lg:px-0 lg:w-[83%] lg:mx-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="flex justify-center md:block [&_img]:invert">
                <BreadCrumb pageTitle="SUVs" />
              </div>
              <h1 className="font-extralight text-3.3rem tracking-tighter leading-1.3 mt-5 [&>strong]:font-normal lg:mt-10 lg:text-[4.5rem] 2xl:text-[6rem] 2xl:leading-[1.2] 3xl:text-[7.5rem]">
                Planning to buy a <br /> used <strong>luxury Suv car ?</strong>{" "}
                <br /> Take a look.
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
