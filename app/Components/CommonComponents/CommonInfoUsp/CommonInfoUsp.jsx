import React from "react";
import Image from "next/image";
import styles from "./CommonInfoUsp.module.css";

const CommonInfoUsp = () => {
  return (
    <ul className={`flex ${styles.newIncUsp} `}>
      <li className="w-2/6">
        <Image
          src="/images/km-icon-black.webp"
          alt="Icon"
          width="11"
          height="12"
          className="object-contain h-5 3xl:h-6 3xl:w-6"
        />
        <p className="text-sm mt-4 mb-2 lg:mt-2 lg:mb-1 3xl:text-xl 3xl:mt-4 3xl:mb-3">
          Kilometers Driven
        </p>
        <h6 className="text-lg 3xl:text-1xl">3500 km</h6>
      </li>
      <li className="w-2/6">
        <Image
          src="/images/gas-icon-black.webp"
          alt="Icon"
          width="11"
          height="12"
          className="object-contain h-5 3xl:h-6 3xl:w-6"
        />
        <p className="text-sm mt-4 mb-2 lg:mt-2 lg:mb-1 3xl:text-xl 3xl:mt-4 3xl:mb-3">
          Fuel / Gas Type
        </p>
        <h6 className="text-lg 3xl:text-1xl">Petrol</h6>
      </li>
      <li className="w-2/6">
        <Image
          src="/images/register-icon-black.webp"
          alt="Icon"
          width="11"
          height="12"
          className="object-contain h-5 3xl:h-6 3xl:w-6"
        />
        <p className="text-sm mt-4 mb-2 lg:mt-2 lg:mb-1 3xl:text-xl 3xl:mt-4 3xl:mb-3">
          Registration State
        </p>
        <h6 className="text-lg 3xl:text-1xl">Delhi</h6>
      </li>
    </ul>
  );
};

export default CommonInfoUsp;
