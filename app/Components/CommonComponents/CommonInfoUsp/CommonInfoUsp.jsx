import React from "react";
import Image from "next/image";
import styles from "./CommonInfoUsp.module.css";

const CommonInfoUsp = ({ data, isDetailPage }) => {
  return (
    <ul
      className={`flex carCommonInfo ${
        isDetailPage ? styles.detailInfoUsp : ""
      } [&>*:first-child]:pl-0 [&>*:first-child]:border-0`}
    >
      <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
        <Image
          src="/images/km-icon-black.webp"
          alt="Icon"
          width="24"
          height="25"
          className={`object-contain h-5 3xl:h-6 3xl:w-6 ${
            !isDetailPage && "1xl:w-4"
          }`}
        />
        <p className="text-base mt-4 mb-2 lg:mt-2 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-3 3xl:text-xl 3xl:mt-4 3xl:mb-3 text-[#888888]">
          Kilometers Driven
        </p>
        <h6
          className={`text-lg 3xl:text-[1.4rem] font-[600] ${
            isDetailPage
              ? " text-[1.5rem] 1xl:text-[1.7rem] 3xl:text-[2.2rem]"
              : ""
          }`}
        >
          {" "}
          {data?.kmDriven ? data.kmDriven : "3500"} km
        </h6>
      </li>
      <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
        <Image
          src="/images/gas-icon-black.webp"
          alt="Icon"
          width="24"
          height="25"
          className={`object-contain h-5 3xl:h-6 3xl:w-6 ${
            !isDetailPage && "1xl:w-4"
          }`}
        />
        <p className="text-base mt-4 mb-2 lg:mt-2 lg:mb-1 lg:text-sm 2xl:text-base 3xl:text-xl 3xl:mt-4 3xl:mb-3 text-[#888888]">
          Fuel / Gas Type
        </p>
        <h6
          className={`text-lg 3xl:text-[1.4rem] font-[600] ${
            isDetailPage
              ? " text-[1.5rem] 1xl:text-[1.7rem] 3xl:text-[2.2rem]"
              : ""
          }`}
        >
          {data?.fuelType ? data.fuelType : "Petrol"}
        </h6>
      </li>
      <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
        <Image
          src="/images/register-icon-black.webp"
          alt="Icon"
          width="24"
          height="25"
          className={`object-contain h-5 3xl:h-6 3xl:w-6 ${
            !isDetailPage && "1xl:w-4"
          }`}
        />
        <p className="text-base mt-4 mb-2 lg:mt-2 lg:mb-1 lg:text-sm 2xl:text-base 3xl:text-xl 3xl:mt-4 3xl:mb-3 text-[#888888]">
          Registration State
        </p>
        <h6
          className={`text-lg 3xl:text-[1.4rem] font-[600] ${
            isDetailPage
              ? " text-[1.5rem] 1xl:text-[1.7rem] 3xl:text-[2.2rem]"
              : ""
          }`}
        >
          {data?.registrationState ? data.registrationState : "Delhi"}
        </h6>
      </li>
    </ul>
  );
};

export default CommonInfoUsp;
