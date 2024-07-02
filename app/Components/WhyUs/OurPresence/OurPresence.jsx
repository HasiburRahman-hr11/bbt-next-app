'use client'
import React, { useState } from "react";

const OurPresence = () => {
  const [expandedColumn, setExpandedColumn] = useState(0); // Default to the first column

  const handleColumnClick = (index) => {
    setExpandedColumn(index);
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize [&>br]:hidden md:[&>br]:block">
                our presence and <b>infrastructure</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
                Big Boy Toyz offers used cars & services across a wide <br />{" "}
                range of and available car models in the market.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden xl:inline-block object-contain invert xl:w-[8.5rem] xl:mt-[4rem] 3xl:mt-[6rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
            </div>
          </div>

          <div>
            {/* <div className="flex w-full">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={`flex-[0.7] transition-all duration-500 bg-[#ddd] ${
                    expandedColumn === index ? "flex-[3]" : ""
                  }`}
                  onClick={() => handleColumnClick(index)}
                >
                  Column {index + 1}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
