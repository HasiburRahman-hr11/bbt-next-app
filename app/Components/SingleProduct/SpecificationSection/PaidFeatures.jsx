"use client";
import React, { useEffect } from "react";
import styles from "./SpecificationSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PaidFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:bg-black lg:py-28 lg:text-white">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h6 className="font-medium pt-10 mt-16 border-t border-gray-300 mb-8 titleWithLine titleWhiteLine lg:pt-0 lg:mt-0 lg:border-none md:text-3.5rem">
          <span className="lg:bg-black lg:pr-5 relative z-10">
            Paid Feature
          </span>
        </h6>
        <p className="hidden md:block text-5xl font-normal md:mb-20 md:mt-10 leading-normal">
          The mission was simple, direct and drove effect - delivering a new
          dimension of luxury while standardising & raising platforms for the
          used car market in India.
        </p>
        <ul className={styles.paidFeatureList}>
          <li className="relative pl-8 text-2xl font-light my-5">
            Six-DVD changer.
          </li>
          <li className="relative pl-8 text-2xl font-light my-5">
            Rear Theatre Configuration.
          </li>
          <li className="relative pl-8 text-2xl font-light my-5">
            USB & Bluetooth with Assist.
          </li>
          <li className="relative pl-8 text-2xl font-light my-5">
            RR all headrests - Contrast.
          </li>
          <li className="relative pl-8 text-2xl font-light my-5">
            Silver Satin Bonnet finish.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaidFeatures;
