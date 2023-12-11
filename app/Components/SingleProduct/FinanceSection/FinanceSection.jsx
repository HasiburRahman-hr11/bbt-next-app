"use client";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "./FinanceSection.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const FinanceSection = () => {
  const [percent, setPercent] = useState([0, 40]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-black py-24"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="px-8">
          <div className="text-center">
            <h2 className=" text-white mb-10">Get Your Ride Financed Today!</h2>
            <p className="text-zinc-500 text-1.6xl">
              Easy and hassle free Emi options available.
            </p>
          </div>
          <div
            className={`relative text-white text-center mx-auto px-5 py-8 mt-16 ${styles.emiBox}`}
          >
            <p className="absolute text-xl bg-black">Emi Starts @</p>
            <h5>
              ₹ 45,000/- <span className="font-extralight">Per Month</span>
            </h5>
          </div>

          <div className="flex justify-between flex-wrap items-center text-white mt-20">
            <p className="text-xl">Down Payment</p>
            <p className="text-xl">₹ 3,000,00,0</p>
          </div>
          <div className="mt-10 mb-16">
            <RangeSlider
              className="emiSlider"
              value={percent}
              onInput={setPercent}
              step={1}
              max={70}
            />
            <div className="relative overflow-x-hidden emiPercentBox">
              <span className="absolute text-white font-light emiPercent leftOne">
                10%
              </span>
              <span className="absolute text-white font-light emiPercent leftTwo">
                20%
              </span>
              <span className="absolute text-white font-light emiPercent leftThree">
                30%
              </span>
              <span className="absolute text-white font-light emiPercent leftFour">
                40%
              </span>
              <span className="absolute text-white font-light emiPercent leftFive">
                50%
              </span>
              <span className="absolute text-white font-light emiPercent leftSix">
                60%
              </span>
              <span className="absolute text-white font-light emiPercent leftSeven">
                70%
              </span>
              <span className="absolute text-white font-light emiPercent leftEight">
                80%
              </span>
            </div>
          </div>
        </div>

        {/* <h2 className="text-white mt-16">{value[1] + 10}</h2> */}
      </div>
      <Image
        src="/images/detail-page/detail-finance-thumb.webp"
        width="390"
        height="298"
        className="w-full object-cover block"
      />

      <div className="px-8 mt-16">
        <a href="#" className="btn btnWhite roundedBtn">
          Get More Details
        </a>
      </div>
    </section>
  );
};

export default FinanceSection;
