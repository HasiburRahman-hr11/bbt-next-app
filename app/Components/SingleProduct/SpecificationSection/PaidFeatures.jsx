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
    <div
      className="container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <h6 className="font-medium pt-10 mt-16 border-t border-gray-300 mb-8">
        Paid Feature
      </h6>
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
  );
};

export default PaidFeatures;
