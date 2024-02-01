"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ isPageHeader }) => {
  return (
    <header
      className={`header w-full h-auto z-[99] ${
        isPageHeader
          ? "page-header relative bg-[#000]"
          : "absolute bg-transparent"
      }`}
    >
      <div className="max-1920">
        <div
          className={`header-wrapper w-full p-[3rem] mx-auto lg:py-[2rem] lg:px-[4rem] 1xl:py-[2.5rem] 3xl:py-[3rem] 3xl:px-[5.5rem] ${
            isPageHeader ? "py-[2rem] px-[3rem] 2xl:py-[3rem] 2xl:px-[4.5rem] 3xl:py-[3.5rem] 3xl:px-[5.5rem]" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center menu-toggler cursor-pointer lg:order-3`}
            >
              <span className="text-white uppercase mr-5 hidden lg:inline-block text-base xl:text-lg 3xl:text-2xl 3xl:mr-6">
                Menu
              </span>
              <div className="menu-bar w-12 lg:w-10 xl:w-[3rem] 3xl:w-[3.9rem] [&>span]:h-[1.5px] [&>span]:bg-white [&>span]:block [&>span]:rounded-[5px] group">
                <span className="w-[80%] mb-[7px] 3xl:mb-[8px]"></span>
                <span className="w-[100%] mb-[7px] 3xl:mb-[8px] group-hover:ml-[5px] transition-all duration-500 ease-in-out"></span>
                <span className="w-[65%]"></span>
              </div>
            </div>
            <div className="header-logo  lg:order-1 hidden lg:block">
              <Link href="/" className="block">
                <Image
                  src="/images/bbt-logo-header.webp"
                  width="105"
                  height="70"
                  alt="BBT Logo"
                  className="w-24 object-contain lg:w-32 2xl:w-32 3xl:w-44"
                  priority="high"
                />
              </Link>
            </div>
            <div
              className={`lg:flex items-center justify-center header-phone-list hidden lg:order-2 [&>a:last-of-type]:border-r [&>a:last-of-type]:border-r-[#fff] group`}
            >
              <Link
                href="#"
                className="text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] group-hover:text-[#ddd] xl:text-[0.95rem] 1xl:text-[1.05rem] 3xl:text-[1.4rem]"
              >
                BUY - 9999 9999 83{" "}
              </Link>
              <Link
                href="#"
                className="text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] group-hover:text-[#ddd] xl:text-[0.95rem] 1xl:text-[1.05rem] 3xl:text-[1.4rem]"
              >
                SELL - 9999 9999 15{" "}
              </Link>
              <Link
                href="#"
                className="text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] group-hover:text-[#ddd] xl:text-[0.95rem] 1xl:text-[1.05rem] 3xl:text-[1.4rem]"
              >
                Car Detailing - 89999 99627{" "}
              </Link>
              <Link
                href="#"
                className="text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] group-hover:text-[#ddd] xl:text-[0.95rem] 1xl:text-[1.05rem] 3xl:text-[1.4rem]"
              >
                Servicing - 89999 99264{" "}
              </Link>
              <Link
                href="#"
                className="text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] group-hover:text-[#ddd] xl:text-[0.95rem] 1xl:text-[1.05rem] 3xl:text-[1.4rem]"
              >
                Modification & Upgrade - 89999 99627{" "}
              </Link>
            </div>

            <div className="mobile-search-bar lg:hidden">
              <Image
                src="/images/banner-search-icon-white.webp"
                width="20"
                height="20"
                alt="Header Search Icon"
                className="w-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
