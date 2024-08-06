"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black py-[8rem] lg:py-[10rem]">
      <div className="max-1920">
        <div className="relative">
          <div
            className="text-box text-white lg:absolute z-10 px-10 w-full right-0 top-0 text-center lg:w-5/12 lg:text-left lg:pt-[7rem] lg:right-10 lg:max-w-3xl xl:max-w-4xl xl:right-0 2xl:right-16 3xl:max-w-6xl 3xl:pt-[9rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <p className="uppercase text-lg mb-4 md:mb-8 lg:text-xl xl:mb-10 xl:text-2xl 2xl:mb-12 3xl:text-3xl 3xl:mb-14">
              LET'S KEEP IT SIMPLE.
            </p>
            <h2 className="font-light leading-tight tracking-tight md:text-4xl lg:text-6xl lg:tracking-tighter lg:leading-snug xl:text-6.5xl 2xl:text-7xl 3xl:text-8xl sm:[&>br]:hidden xl:[&>br]:block [&>strong]:font-normal">
              We are the best when it <br /> comes{" "}
              <strong>to exotic cars.</strong>
            </h2>
            <div className="hidden md:block mt-10 xl:mt-14 2xl:mt-20">
              <Link href="/about-us" className="btn btnWhite roundedBtn">
                About Us
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-1/4 md:top-2/4 explore-interactive-badge z-10">
            <a href="https://www.bigboytoyz.com/" target="_blank" className="block">
              <img
                src="/images/360-deg-badge.webp"
                width="197"
                height="301"
                className="object-contain w-40 lg:w-52 1xl:w-60 3xl:w-80"
                alt="Interactive Virtual Tour"
              />
            </a>
          </div>
          <div className="absolute bottom-0 w-full left-0 text-center px-10 md:hidden">
            <Link href="/about-us" className="btn btnWhite roundedBtn">
              Explore More
            </Link>
          </div>
          <div className="video-box w-full xl:w-[75%]">
            <video
              src="https://www.shutterstock.com/shutterstock/videos/1077602141/preview/stock-footage-the-black-car-gradually-emerges-from-the-darkness-due-to-the-illumination-and-disappears-again-in.webm"
              poster="/images/360-deg-vid-thumb-mob.webp"
              className="w-full block object-cover md:hidden min-h-[500px]"
              autoPlay
              loop
              muted
            ></video>
            <video
              src="https://www.shutterstock.com/shutterstock/videos/1077602141/preview/stock-footage-the-black-car-gradually-emerges-from-the-darkness-due-to-the-illumination-and-disappears-again-in.webm"
              poster="/images/360-deg-vid-thumb-desk.webp"
              className="w-full md:block object-cover hidden"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
