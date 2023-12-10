import Image from "next/image";
import React from "react";
import styles from "./CommonLocationItem.module.css";

// 330X440

const CommonLocationItem = ({ location }) => {
  return (
    <li className={`border-t border-gray-300 ${styles.listItem}`}>
      <a href={location?.url ? location.url : '#'} className="transition-all duration-500 ease-in relative block">
        <div
          className={`${styles.mapImageBox} hidden lg:block absolute z-10`}
        >
          <Image
            src="/images/dummy-map.webp"
            width="330"
            height="440"
            alt="Map Image"
            className="block object-contain w-full h-full"
          />
        </div>
        <div
          href="#"
          className="flex justify-between py-8 px-8 xl:py-10 2xl:py-12 3xl:py-16"
        >
          <div className="w-9/12 xl:flex xl:items-center">
            <h3 className="text-5xl font-semibold xl:w-5.5/12 3xl:text-6xl transition-all duration-300 ease-in">
              {location.city}
            </h3>
            <p className="text-2xl font-light text-gray-500 mt-2 3xl:text-3xl transition-all duration-300 ease-in">
              {location.sector}
            </p>
          </div>
          <Image
            src="/images/showroom-location-arrow.webp"
            className="w-6 object-contain xl:w-8 3xl:w-11"
            width="15"
            height="15"
            alt="Arrow Icon"
          />
        </div>
      </a>
    </li>
  );
};

export default CommonLocationItem;