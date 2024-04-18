"use client"
import React from "react";
import NewsLetterBox from "../../CommonComponents/NewsLetterBox/NewsLetterBox";

const NewsLetterSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center max-w-[600px] mx-auto lg:max-w-[unset]">
            <div className="w-full text-center mb-[4rem] lg:mb-0 lg:w-[40%] lg:text-left">
              <h2 className="font-light [&>b]:font-normal leading-[1.2]  tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem]  2xl:text-[4.3rem] 3xl:text-[5.8rem] 3xl:tracking-[-3px]">
                Don't miss{" "}
                <b>
                  any <br /> updates on supercars!
                </b>
              </h2>
              <p className="font-light text-[1.2rem] leading-[1.5] mt-[1rem]  sm:mb-[1.5rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] xl:mb-[3rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 2xl:mb-[4.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                Don't worry we don't SPAM
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
                <NewsLetterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
