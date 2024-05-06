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
              src="/images/modifications/modification-banner-desktop.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[800px] object-cover"
            />
            <img
              src="/images/associates/associates-banner-mobile.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden"
            />
          </div>
          <div className=" text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[12rem] pb-16 sm:text-left sm:pt-[15rem] md:pt-[15rem] lg:pt-[16rem]  1xl:pt-[25.5rem] 2xl:pt-[26.5rem] 3xl:pt-[34rem] 3xl:pb-[6rem]">
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
                  Modification
                </span>
              </p>
              <h1 className="font-extralight text-[4.5rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem] [&>br]:hidden sm:[&>br]:block">
                Glam Up Your Ride <br /> <b>To Savage Level</b>
              </h1>
              <p className="text-[1.2rem] mt-[2rem] [&>br]:hidden sm:[&>br]:block xl:mt-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.22rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                Since 2000, our skilled and professional workforce has been
                crafting <br /> automotive transformations that redefine the art
                of car customizations.
              </p>
              <div className="mt-[5rem] xl:mt-[9rem]">
                <p className="font-medium sm:text-left mb-[2rem] text-[1.3rem] xl:tracking-wide">
                  Modification Available For
                </p>
                <ul className="grid grid-cols-3 gap-x-[1rem] justify-between text-white max-w-[400px] xl:gap-x-[1.5rem]">
                  <li className={styles.uspItem}>
                    <img
                      src="/images/modifications/banner-icon-1.webp"
                      alt=""
                      className={styles.uspIcon}
                    />
                    <p className={styles.uspTitle}>
                      Luxury Cars
                    </p>
                  </li>
                  <li className={styles.uspItem}>
                    <img
                      src="/images/modifications/banner-icon-2.webp"
                      alt=""
                      className={styles.uspIcon}
                    />
                    <p className={styles.uspTitle}>Bikes</p>
                  </li>
                  <li className={styles.uspItem}>
                    <img
                      src="/images/modifications/banner-icon-3.webp"
                      alt=""
                      className={styles.uspIcon}
                    />
                    <p className={styles.uspTitle}>
                      Aircrafts
                    </p>
                  </li>
                </ul>
              </div>
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

const styles = {
  uspItem:"px-[1.5rem] py-[2rem] rounded-[8px] mod-banner-card flex flex-col items-center min-h-[12rem] justify-center",
  uspIcon:"w-[80%] h-auto max-h-[3rem] block object-contain xl:w-[70%]",
  uspTitle:"font-medium text-[1.2rem] mt-[1rem] xl:mt-[2rem] xl:text-[1.25rem]"
}
