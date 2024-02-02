import React from "react";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";

const PageHeader = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="py-12 xl:py-24 md:border-b md:border-[#D9D9D9]">
          <BreadCrumb pageTitle="Search" />
          <div className="flex flex-wrap justify-between items-center mt-5 xl:mt-16 2xl:mt-[5rem]">
            <h2 className="text-3xl leading-0 xl:text-[4.5rem] 1xl:tracking-tighter">Search By “ Audi ”</h2>
            <p className="text-lg leading-0 xl:text-[2.5rem]">Total 136 Results Found</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
