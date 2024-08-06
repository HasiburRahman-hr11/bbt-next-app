import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";

const RelatedCarsCard = () => {
  return (
    <Link
      href="/cars/114325"
      className="mr-9 bg-white lg:mx-4 block transition-all duration-500 ease-in-out common-car-item xl:mx-7 1xl:mx-6 2xl:mx-8"
    >
      <div
        className={`bg-white px-8 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 2xl:py-10 3xl:px-20 3xl:pt-12 3xl:pb-16 1xl:px-12 `}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-xl 3xl:px-8`}
        >
          Reg.Year : 2022
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 1xl:text-4xl 2xl:tracking-tighter 3xl:text-4.2xl 3xl:mt-8 3xl:text-5xl">
          Rolls-Royce Ghost Series II
        </h4>
        <p className="font-medium lg:mt-2 mb-12 sm:mb-8 lg:mb-6 text-1.6xl 1xl:text-3xl 1xl:mt-5 1xl:mb-8 3xl:text-4xl 3xl:mt-7 3xl:mb-10">
          ₹ 4,99,00,000
        </p>

        {/* ---- Common Components ---- */}
        <div className="[&_li:nth-child(3n)]:hidden [&_li]:w-[45%] sm:[&_li:nth-child(3n)]:block sm:[&_li]:w-[33%]">
          <CommonInfoUsp />
        </div>
        {/* ---- Common Components ---- */}
      </div>
      <div className=" overflow-hidden">
        <Image
          src="/images/detail-page/detail-related-car-1.webp"
          alt="Icon"
          width="390"
          height="285"
          className="object-cover w-full block h-full"
        />
      </div>
    </Link>
  );
};

export default RelatedCarsCard;
