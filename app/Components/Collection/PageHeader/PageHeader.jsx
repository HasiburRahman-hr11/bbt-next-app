"use client";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React, { useState } from "react";
import FilterPopup from "../../FilterPopup/FilterPopup";

const PageHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="py-16 md:border-b md:border-neutral-400">
          <BreadCrumb pageTitle="Collection" />
          <div className="flex flex-wrap items-center justify-between mt-5">
            <h2 className="text-[1.8rem] md:text-[2.2rem]">
              Total 1575 Results Found
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="md:flex cursor-pointer md:items-center">
                <p className="hidden md:inline-block md:mr-4">Filters:</p>
                <div
                  className="w-max md:border md:border-[#E0E0E0] md:w-[4rem] md:h-[4rem] md:p-[1rem] md:rounded-[5px]"
                  onClick={togglePopup}
                >
                  <Image
                    src="/images/collection-filter-icon.webp"
                    width="20"
                    height="20"
                    className="w-[2rem] md:w-full object-contain"
                    alt="Filter Icon"
                  />
                </div>
              </div>
              <div className="ml-5 md:flex cursor-pointer md:items-center md:ml-8">
                <p className="hidden md:inline-block md:mr-4">Sort by:</p>
                <select
                  name="sortCollection"
                  id=""
                  className="w-32 outline-none border border-neutral-400 px-2 py-3 text-lg rounded-md md:border md:border-[#E0E0E0] md:h-[4rem] md:min-w-[12rem] md:rounded-[5px] md:bg-transparent md:text-xl"
                >
                  <option value="high">High to Low</option>
                  <option value="low">Low to High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {filterOpen && (
        <FilterPopup active={filterOpen} togglePopup={togglePopup} />
      )}
    </section>
  );
};

export default PageHeader;
