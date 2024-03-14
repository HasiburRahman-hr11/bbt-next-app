import Link from "next/link";
import React from "react";

const VisionSection = () => {
  return (
    <section className="bg-black text-white pt-[5rem] lg:pt-[8rem] xl:pt-[12rem] 3xl:pt-[14rem]">
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine titleWhiteLine mobileLine">
            <span className="bg-[#000] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
              Vision
            </span>
          </h3>
          <div className="mt-[3rem] 3xl:mt-[6rem]">
            <p className="font-extralight [&>b]:font-normal text-[2rem] leading-[1.5] [&>b]:underline xl:text-[3rem] xl:tracking-[-1px] 1xl:text-[3.5rem] 3xl:text-[4.4rem] xl:max-w-[93%]">
              At Big Boy Toyz our vision is to buy and sell modern cars that
              define quality and{" "}
              <b>luxury for the 21st century. Applying our expertise</b> in this
              industry, we aspire to transform the exotic car market, where cars
              are the ultimate expression of <b>modern dynamism and luxury.</b>
            </p>
          </div>
          <div className="mt-[5rem] sm:hidden">
            <Link href="#" className="bg-white text-black text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] h-[5rem]">Why Us?</Link>
          </div>
          <div className="mt-[7rem] w-[90%] mx-auto max-w-[303px] sm:max-w-none sm:w-[75%] xl:w-[69%] xl:mt-[9rem] 1xl:mt-[11rem] 3xl:mt-[13rem]">
            <img src="/images/about-us/about-vision-img.webp" alt="BBT Vision" className="w-full block object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
