"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SortBy from "../../CommonComponents/SortBy/SortBy";
import FilterBy from "../../CommonComponents/FilterBy/FilterBy";


const PageHeader = () => {


  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="pt-16 xl:pt-[7rem] 1xl:pt-[8rem] 3xl:pt-[11rem]">
          <p className="hidden lg:flex flex-wrap items-center font-normal">
            <Link
              href="/"
              className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]"
            >
              Home
            </Link>
            <Image
              src="/images/breadcrumb-arrow.webp"
              className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
              width="6"
              height="11"
              alt="Arrow Icon"
            />
            <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
              Collection
            </span>
          </p>
          <div className="lg:mt-[1rem] 1xl:mt-[2rem] 3xl:mt-[3rem]">
            <h1 className="font-[200] [&>b]:font-[400] text-[4.5rem] leading-[1.1] tracking-[-2px] xl:text-[5rem] xl:tracking-[-3px] 1xl:text-[5.5rem] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:tracking-[-5px]">
              All Cars At BBT <b>Used Luxury</b>{" "}
            </h1>
            <p className="font-[300] text-[1.2rem] mt-[2rem] pr-[4rem] lg:text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.25rem] 3xl:text-[2.8rem] text-[#000000]">
              At BBT, we strive to provide the quickest and most hassle free car
              selling service available.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-[5rem] border-t border-[#D9D9D9] py-[3rem] lg:pb-0 xl:mt-[7rem] 1xl:mt-[7.5rem] 3xl:mt-[9.5rem] 3xl:pt-[4rem] 3xl:mb-[2rem]">
            <div className="flex flex-wrap items-center lg:flex-row-reverse">
              <div className="flex flex-wrap items-center ">
                <div className="md:flex cursor-pointer md:items-center lg:mx-[2rem] lg:px-[2rem] lg:border-l lg:border-[#D9D9D9] 1xl:px-[2.5rem] 1xl:mx-[2.5rem] 3xl:px-[3.5rem] 3xl:mx-[3.5rem]">
                  <FilterBy/>
                </div>
                
              </div>

              <h2 className="text-[1.5rem] md:text-[1.6rem] xl:text-[1.4rem] xl:tracking-[-0.5px] 1xl:text-[1.5rem] 1xl:tracking-[-1px] 2xl:text-[1.8rem] 3xl:text-[2rem]">
                Total 1575 Results Found
              </h2>
            </div>

            <SortBy/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PageHeader;
