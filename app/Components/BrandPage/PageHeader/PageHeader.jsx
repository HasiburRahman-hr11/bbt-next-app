"use client";
import React from "react";
import FilterBy from '../../CommonComponents/FilterBy/FilterBy'
import SortBy from "../../CommonComponents/SortBy/SortBy";

const PageHeader = () => {

  return (
    <section className="bg-white md:bg-[#f3f3f3] ">
      <div className="container">
        <div className="">
          <p className="text-center font-light py-16 text-[1.3rem] leading-[1.5] lg:font-normal lg:text-left lg:pt-24 [&>br]:hidden lg:[&>br]:block xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 1xl:py-[8rem]">
            Tired of looking for a classy used BMW car? Are dealers striking
            your wallet down with mediocre content? <br /> Worry no more! BBT
            brings to you pre-owned and used BMW cars with an efficient price.
          </p>
          <div className="flex flex-wrap items-center justify-between py-12 border-b border-t border-neutral-[#D9D9D9] lg:pt-0 lg:border-none">
            <h2 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] lg:tracking-tighter">
              Total 23 Results Found
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="md:flex cursor-pointer md:items-center brand-page-filter">
                <FilterBy />
              </div>
              <SortBy/>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PageHeader;
