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
      className="container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="flex items-center mb-20">
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
          <p className="text-red font-medium text-1.6xl mt-3">₹ 4,99,00,000</p>
        </div>
      </div>

      {/* ---- Common Components ---- */}
      <CommonInfoUsp />
      {/* ---- Common Components ---- */}

      <div className="flex items-center justify-between callBtnGroup mt-12">
        <div className="callBtnLeft">
          <Link href="#" className="btn btnBlack btnSquare">
            Reserve The Car
          </Link>
        </div>
        <div className="callBtnRight">
          <a href="#" className="btn smallCallBtn">
            <Image
              src="/images/detail-page/detail-call-icon.webp"
              width="18"
              height="18"
              alt="Call Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
