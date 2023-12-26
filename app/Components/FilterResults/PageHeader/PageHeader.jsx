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
    <section className="bg-white">
      <div className="container">
        <div className="py-16">
          <BreadCrumb pageTitle="Collection" />
          <div className="flex flex-wrap items-center justify-between mt-5">
            <h2 className="text-[1.8rem]">Total 5 Results Found</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-max cursor-pointer" onClick={togglePopup}>
                <Image
                  src="/images/collection-filter-icon.webp"
                  width="20"
                  height="20"
                  className="w-[2rem] object-contain"
                  alt="Filter Icon"
                />
              </div>
              <select
                name="sortCollection"
                id=""
                className="w-32 border border-neutral-400 px-2 py-3 text-lg rounded-md ml-5"
              >
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
              </select>
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
