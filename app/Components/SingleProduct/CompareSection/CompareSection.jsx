"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CompareSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #F4F4F1 -13.45%, rgba(244, 244, 241, 0.5) 137.55%)",
      }}
    >
      <div className="container">
        <div
          className="flex justify-between items-center mb-10"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <span className="h-px w-auto grow bg-black lg:hidden"></span>
          <h2 className=" pl-8 lg:pl-0">Compare Cars</h2>
        </div>
        <div className="bg-white px-5 py-8 rounded-lg shadow-compare-card">
          <ul>
            <li
              className="flex justify-between items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src="/images/detail-page/detail-compare-car-thumb.webp"
                alt="Car Image"
                width="141"
                height="101"
                className="w-56 object-contain inline-block rounded-lg"
              />
              <div className="w-3/6">
                <h5 className="font-medium text-2xl">
                  Rolls Royce Phantom Centenary Edition
                </h5>
                <div className="flex justify-between items-center mt-4">
                  <p className="flex items-center font-medium text-lg">
                    ₹ 4,99,00,000
                  </p>
                  <p className="text-zinc-500 text-base">
                    R Year :{" "}
                    <strong className="font-medium text-zinc-800">2022</strong>
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div
            className="mt-10"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <button className="addBtn">
              <span className="uppercase font-medium">Add Cars</span>
              <Image
                src="/images/detail-page/detail-compare-plus-icon.webp"
                width="13"
                height="13"
                alt="Plus Icon"
                className="object-contain w-5 ml-8"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
