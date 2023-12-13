"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="container container-lg-full lg:px-12 lg:py-12 lg:shadow-detail-space"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="block lg:flex lg:flex-wrap lg:justify-between">
        <div className="flex items-center mb-20 lg:mb-0 lg:w-40%">
          <div className="w-36 pr-8 border-r border-stone-400">
            <Image
              src="/images/detail-page/detail-bbt-certified.webp"
              alt="BBT Certified"
              width="53"
              height="72"
              className="w-full object-contain"
            />
          </div>
          <div className="w-auto pl-8">
            <p
              className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4 lg:text-sm lg:pt-1 3xl:text-lg 3xl:px-8`}
            >
              Reg.Year : 2015 | EMI STARTS @ 6,20,270.04
            </p>
            <h4 className="leading-tight text-1.9xl tracking-tight">
              Rolls-Royce Ghost Series II
            </h4>
            <p className="text-red font-medium text-1.6xl mt-3">
              ₹ 4,99,00,000
            </p>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between lg:w-60%">
          <div className="sm:w-60%">
            <CommonInfoUsp isDetailPage={true} />
          </div>

          <div className="flex items-center justify-between callBtnGroup detailsCallBtnGroup mt-12 overflow-hidden flex-wrap sm:flex-col sm:w-40% sm:mt-0 sm:items-end">
            <div className="callBtnLeft">
              <Link href="#" className="btn btnBlack btnSquare sm:text-left">
                <Image
                  src="/images/reserve-btn-icon-white.webp"
                  width="25"
                  height="25"
                  alt="Call Icon"
                  className="object-contain w-7 hidden sm:inline-block sm:mr-6 sm:w-8"
                />
                <span>Reserve The Car</span>
              </Link>
            </div>
            <div className="callBtnRight ml-4 sm:ml-0 sm:mt-5">
              <a
                href="#"
                className="btn smallCallBtn sm:text-left sm:justify-start"
              >
                <Image
                  src="/images/call-btn-icon-black.webp"
                  width="25"
                  height="25"
                  alt="Call Icon"
                  className="object-contain w-7 sm:w-8"
                />
                <span className="hidden sm:inline-block sm:ml-6">
                  Call For Price
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
