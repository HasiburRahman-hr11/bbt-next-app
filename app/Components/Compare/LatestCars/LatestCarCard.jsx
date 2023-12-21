import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestCarCard = () => {
  return (
    <Link
      href="/products/114325"
      className="mr-9 bg-white lg:mx-4 block transition-all ease-in-out hover:shadow-lg 1xl:mx-6 2xl:mx-8"
    >
      <div
        className={`bg-white px-8 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 2xl:py-10 3xl:px-20 3xl:pt-12 3xl:pb-16 1xl:px-12 `}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 pt-2 py-1 leading-4 lg:text-sm lg:pt-1 3xl:text-xl 3xl:px-8`}
        >
          Reg.Year : 2022
        </p>
        <h4 className="mt-4 text-1.9xl">
          Rolls-Royce Ghost Series II
        </h4>
        <p className="font-medium text-1.6xl mt-2">
          ₹ 4,99,00,000
        </p>

        <ul className="flex flex-wrap mt-8">
          <li className="w-3/6 px-7 border-l border-[#CFCFCF] last-of-type:border-r ">
            <Image
              src="/images/km-icon-black.webp"
              alt="Icon"
              width="24"
              height="25"
              className={`object-contain h-5 3xl:h-6 3xl:w-6 `}
            />
            <p className="text-lg mt-4 mb-2">Kilometers Driven</p>
            <h6 className="text-[1.3rem]">3500 km</h6>
          </li>
          <li className="w-3/6 px-7 border-l border-[#CFCFCF] last-of-type:border-r">
            <Image
              src="/images/gas-icon-black.webp"
              alt="Icon"
              width="24"
              height="25"
              className={`object-contain h-5 3xl:h-6 3xl:w-6 `}
            />
            <p className="text-lg mt-4 mb-2">Fuel / Gas Type</p>
            <h6 className="text-[1.3rem]">Petrol</h6>
          </li>
        </ul>
      </div>
      <div className=" overflow-hidden">
        <Image
          src="/images/detail-page/detail-related-car-1.webp"
          alt="Icon"
          width="390"
          height="285"
          className="object-cover w-full block h-full transition-all ease-in-out duration-500 hover:scale-150"
        />
      </div>
    </Link>
  );
};

export default LatestCarCard;
