"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ isPageHeader }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  }, []);
  return (
    <header
      className={`header ${scroll ? "sticky" : ""} ${
        isPageHeader ? "page-header" : ""
      }`}
    >
      <div className="max-1920">
        <div className={`header-wrapper`}>
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center menu-toggler cursor-pointer lg:order-3`}
            >
              <span className="text-white uppercase mr-5 hidden lg:inline-block text-base xl:text-lg 3xl:text-2xl 3xl:mr-6">
                Menu
              </span>
              <div className="menu-bar w-12 lg:w-10 xl:w-12 3xl:w-16 [&>span]:h-[1.5px] [&>span]:bg-white [&>span]:block [&>span]:rounded-[5px] group">
                <span className="w-[85%] mb-[6px]"></span>
                <span className="w-[85%] mb-[6px] group-hover:ml-[5px] transition-all duration-500 ease-in-out"></span>
                <span className="w-[85%]"></span>
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
              className={`lg:flex items-center justify-center header-phone-list hidden lg:order-2`}
            >
              <Link
                href="#"
                className={`text-white relative px-6 uppercase text-sm`}
              >
                BUY - 9999 9999 83{" "}
              </Link>
              <Link
                href="#"
                className={`text-white relative px-6 uppercase text-sm`}
              >
                SELL - 9999 9999 15{" "}
              </Link>
              <Link
                href="#"
                className={`text-white relative px-6 uppercase text-sm`}
              >
                Car Detailing - 89999 99627{" "}
              </Link>
              <Link
                href="#"
                className={`text-white relative px-6 uppercase text-sm`}
              >
                Servicing - 89999 99264{" "}
              </Link>
              <Link
                href="#"
                className={`text-white relative px-6 uppercase text-sm`}
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
