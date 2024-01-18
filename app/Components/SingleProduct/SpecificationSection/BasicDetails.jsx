"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicDetails = () => {
  const [isSold, setIsSold] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="container container-lg-full lg:px-12 lg:py-12 lg:shadow-detail-space xl:px-24 xl:py-20 2xl:py-24 2xl:px-28 3xl:px-32 3xl:py-28"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="block lg:flex lg:flex-wrap lg:justify-between">
        <div className="flex items-center mb-20 lg:mb-0 lg:w-40% xl:w-2/6">
          <div className="w-36 pr-8 border-r border-stone-400 lg:border-none lg:pr-4 xl:w-32 2xl:w-36 3xl:w-44">
            <Image
              src="/images/detail-page/detail-bbt-certified.webp"
              alt="BBT Certified"
              width="53"
              height="72"
              className="w-full object-contain"
            />
          </div>
          <div className="w-auto pl-8 3xl:pl-12">
            <p
              className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8 xl:py-1 xl:px-7 2xl:mb-8 3xl:mb-10 3xl:tracking-wide`}
            >
              Reg.Year : 2015 | EMI STARTS @ 6,20,270.04
            </p>
            <h4 className="leading-tight text-1.9xl tracking-tight xl:text-4xl 1xl:text-25px 2xl:text-4.5xl 3xl:text-5.5xl">
              Rolls-Royce Ghost Series II
            </h4>
            <p className="text-red font-medium tracking-tight text-1.6xl mt-3 xl:text-3xl 1xl:mt-5 1xl:text-4xl 3xl:text-5xl 2xl:mt-6 3xl:mt-9">
              ₹ 4,99,00,000
            </p>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between lg:w-60% xl:w-4/6 xl:pl-10 3xl:pl-16">
          <div className="sm:w-60% xl:w-[63%]">
            <CommonInfoUsp isDetailPage={true} />
          </div>

          <div className=" mt-12 overflow-hidden  sm:w-40% sm:mt-0 xl:w-[37%]">
            {isSold ? (
              <div className="sm:pl-5 1xl:pl-10 3xl:pl-24">
                <p className="font-light [&_strong]:font-medium mb-4 text-center xl:text-left xl:mb-6 1xl:text-[2rem] 3xl:text-[2.2rem]">
                  Sorry This Car is Sold !! <br /> <strong>Still want to know more ?</strong>
                </p>
                <Link
                  href="#"
                  className="bg-black w-full flex justify-center items-center py-7 px-10 rounded-[5px] xl:rounded-[1rem] transition-all duration-500 ease-in-out group hover:bg-white hover:border hover:border-black"
                >
                  <Image
                    src="/images/square-btn-call-icon.webp"
                    alt="Reserve Icon"
                    width="30"
                    height="30"
                    className=" object-contain inline-block mr-8 w-[2rem] h-auto 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                  />
                  <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] group-hover:text-black transition-all duration-500 ease-in-out">
                    Request a Call Back
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex flex-wrap justify-between md:pl-5 1xl:pl-10 3xl:pl-14">
                <div className="hidden md:block md:w-[48%] lg:hidden xl:block xl:w-[55%]">
                  <div className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 group transition-all duration-500 ease-in-out hover:bg-black">
                    <Image
                      src="/images/emi-btn-icon.webp"
                      alt="Reserve Icon"
                      width="26"
                      height="26"
                      className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                    />
                    <span className="text-[1.3rem] font-medium 1xl:text-[1.5rem] 3xl:text-[1.7rem] group-hover:text-white">
                      Emi Calculator
                    </span>
                  </div>
                  <div className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 mt-4 3xl:mt-6 group transition-all duration-500 ease-in-out hover:bg-black">
                    <Image
                      src="/images/compare-btn-icon.webp"
                      alt="Reserve Icon"
                      width="26"
                      height="26"
                      className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                    />
                    <span className="text-[1.3rem] font-medium 1xl:text-[1.5rem] 3xl:text-[1.7rem] group-hover:text-white">
                      Compare Car
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-[48%] lg:w-full xl:w-[40%]">
                  <Link
                    href="#"
                    className="bg-black w-full flex justify-center items-center py-7 px-10 rounded-[5px] md:flex-col xl:rounded-[1rem] xl:h-full 3xl:py-12 transition-all duration-500 ease-in-out  group hover:bg-white hover:border hover:border-black"
                  >
                    <Image
                      src="/images/reserve-btn-icon.webp"
                      alt="Reserve Icon"
                      width="30"
                      height="30"
                      className=" object-contain inline-block mr-8 w-[2rem] h-auto md:mr-0 md:mb-6 xl:mb-4 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                    />
                    <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] 3xl:max-w-[6.9rem] 3xl:mx-auto group-hover:text-black transition-all duration-500 ease-in-out">
                      Reserve Car
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
