"use client";
import React from "react";

import FilterBy from "../../CommonComponents/FilterBy/FilterBy";
import SortBy from "../../CommonComponents/SortBy/SortBy";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PageHeader = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3] pt-16 xl:pt-28 xl:pb-10 3xl:pt-44 3xl:pb-20">
      <div className="container">
        <div className=" block xl:flex xl:flex-wrap xl:items-center xl:justify-between px-5">
          <p className="text-center text-1.4rem xl:text-left xl:text-[1.6rem] 3xl:text-[2.4rem]">
            Crude. Ground-breaking. Rough - The three words that characterize
            each Luxury SUV.
          </p>
          <div className="flex flex-wrap items-center mt-16 pt-16 border-t border-[#D9D9D9] justify-end xl:mt-0 xl:pt-0 xl:border-0">
            <div className="md:flex cursor-pointer md:items-center brand-page-filter">
              <FilterBy />
            </div>
            <SortBy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
