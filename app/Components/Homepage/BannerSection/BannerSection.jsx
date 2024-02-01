"use client";
import React, { useState, useEffect } from "react";
import styles from "./BannerSection.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FilterPopup from "../../FilterPopup/FilterPopup";

const BannerSection = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className="max-1920">
        <div className={`relative`}>
          <div>
            <Image
              src="/images/hp-banner-desk.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden md:block object-cover"
            />
            <Image
              src="/images/hp-banner-mob.webp"
              alt="Banner Image"
              width="390"
              height="685"
              className="block w-full md:hidden object-cover max-h-[685px]"
            />
          </div>
          <div className="absolute top-0 left-0 text-center w-full h-full pt-[12.5rem] pb-[9.5rem] lg:pt-[10.5rem] lg:pb-[5rem]">
            <div className="container h-full">
              <div
                className="flex flex-col justify-between h-full"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="lg:pt-5 xl:pt-9 1xl:pt-11 2xl:pt-14 3xl:pt-28">
                  <p className="banner-sub-title text-white font-light text-base mb-6 hidden lg:block xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:mb-8">
                    We are the best when it comes to Exotic Cars.
                  </p>
                  <h1 className="banner-title text-white font-normal leading-tight">
                    Super Cars{" "}
                    <span className="font-thin block lg:inline-block">
                      For Super Stars
                    </span>
                  </h1>

                  <div className="banner-filter-desktop lg:flex flex-wrap items-center hidden justify-center mt-12 1xl:mt-14 3xl:mt-20">
                    <div
                      className={`${
                        styles.bannerSearchBox
                      } relative flex items-center w-[29rem] h-[4.5rem] rounded-[3rem] mr-[1.5rem] border border-[#808080] 1xl:w-[31rem] 1xl:h-[4.9rem] 2xl:w-[33rem] 2xl:h-[5rem] 3xl:w-[42rem] 3xl:h-[6.3rem] 3xl:rounded-[4rem] ${
                        searchActive ? styles.searchActive : ""
                      }`}
                    >
                      <span className="absolute left-8 top-[50%] translate-y-[-50%] 3xl:left-[3rem]">
                        <Image
                          src="/images/banner-search-icon-white.webp"
                          width="17"
                          height="17"
                          alt="Search Icon"
                          className="w-5 object-contain 2xl:w-[1.4rem] 3xl:w-[1.72rem]"
                        />
                      </span>
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search Your Dream Car Here... "
                        onFocus={() => setSearchActive(true)}
                        onBlur={() => setSearchActive(false)}
                        className="w-full border-0 outline-none bg-transparent text-lg text-white 2xl:text-[1.5rem] py-[1.4rem] pr-[4rem] pl-[5rem] 3xl:py-[1.4rem] 3xl:pl-[6.5rem] 3xl:text-[1.7rem] placeholder:text-lg placeholder:2xl:text-[1.1rem] placeholder:3xl:text-[1.4rem] placeholder:text-[#ffffff] placeholder:font-thin"
                      />
                      <div
                        className="top-[50%] translate-y-[-50%] absolute right-8 z-10 cursor-pointer 3xl:right-10 p-3 rounded-50% hover:bg-white transition-all duration-500 group"
                        onClick={togglePopup}
                      >
                        <Image
                          src="/images/banner-filter-icon-white.webp"
                          width="25"
                          height="25"
                          alt="Filter Button"
                          className="w-6 1xl:w-[1.5rem] 2xl:w-7 hover:scale-110 transition-all duration-500 group-hover:invert 3xl:w-[2.3rem]"
                        />
                      </div>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="bg-white text-black relative text-xl flex items-center font-medium h-[4.5rem] rounded-[3rem] border border-white py-[1.5rem] pr-[8rem] pl-[2rem] tracking-[-1px] transition-all duration-500 ease-in 1xl:h-[4.9rem] 2xl:py-[1.5rem] 2xl:pr-[9rem] 2xl:pl-[2.2rem] 3xl:text-2xl 3xl:py-[1.5rem] 3xl:pl-[2.4rem] 3xl:pr-[11rem] 3xl:h-[6.3rem] 3xl:rounded-[4rem] 3xl:text-[1.6rem] group hover:bg-transparent hover:text-white hover:border-[#808080] "
                      >
                        Discover Collection
                        <span className="bg-black absolute flex justify-center items-center w-[4.2rem] h-[2.7rem] rounded-[3rem] top-[50%] translate-y-[-50%] right-[1rem] p-[1rem] transition-all duration-500 ease-in 3xl:w-[5.5rem] 3xl:h-[3.4rem] 3xl:right-[1.8rem] 3xl:py-[0rem] 3xl:px-[0] group-hover:bg-white ">
                          <Image
                            src="/images/banner-arrow-icon-white.webp"
                            alt="Arrow Icon"
                            width="20"
                            height="20"
                            className="w-full object-contain 3xl:max-w-[2rem] max-w-[1.5rem] transition-all duration-500 ease-in group-hover:invert"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="#"
                  className={`${styles.hpBannerBtnMob} text-white relative w-full text-left text-xl lg:hidden max-w-[29rem] mx-auto py-[1.5rem] px-[4rem] rounded-[4rem]`}
                >
                  Let’s Explore Luxury <br /> Cars Collection
                  <span className="flex items-center justify-center bg-white absolute w-[6.6rem] h-[5.3rem] rounded-[3rem] top-[-1rem] right-[3rem] ">
                    <Image
                      src="/images/banner-btn-arrow-mob.webp"
                      alt="Button Arrow"
                      width="25"
                      height="21"
                      className="object-contain max-w-[2.5rem]"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 left-[50%] translate-x-[-50%] text-center w-max lg:flex flex-col justify-center items-center hidden 3xl:bottom-24 scroll-animation">
            <Image
              src="/images/banner-scroll-icon-white.webp"
              alt="Scroll Down"
              width="19"
              height="29"
              className="inline-block object-contain w-8 1xl:w-6"
            />
            <span className="uppercase text-white mt-5 text-xs 1xl:leading-relaxed 2xl:text-lg">
              Scroll Down
            </span>
          </div>
        </div>
        {filterOpen && (
          <FilterPopup active={filterOpen} togglePopup={togglePopup} />
        )}
      </div>
    </section>
  );
};

export default BannerSection;
