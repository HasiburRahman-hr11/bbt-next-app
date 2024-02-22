"use client";
import React, { useState } from "react";
import styles from "./LatestCars.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LatestCarCard from "./LatestCarCard";
import Image from "next/image";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "7%",
      },
    },
  ],
};
const LatestCars = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="pt-24 pb-28 bg-[#FAFAFA]">
      <div className="pl-8">
        <h2>Latest Updated Cars</h2>

        <ul
          className={`flex overflow-x-auto no-scroll-bar pr-5 [&>li]:font-medium relative [&>li]:relative border-b border-[#D9D9D9] mt-10`}
        >
          <li
            className={` text-[1.7rem] py-5 mr-20 group last-of-type:mr-0 ${
              activeTab === `tab-1` ? styles.active : ""
            }`}
            onClick={() => handleTabChange(`tab-1`)}
          >
            Hatchback
          </li>
          <li
            className={` text-[1.7rem] py-5 mr-20 group last-of-type:mr-0 ${
              activeTab === `tab-2` ? styles.active : ""
            }`}
            onClick={() => handleTabChange(`tab-2`)}
          >
            Sedan
          </li>
          <li
            className={` text-[1.7rem] py-5 mr-20 group last-of-type:mr-0 ${
              activeTab === `tab-3` ? styles.active : ""
            }`}
            onClick={() => handleTabChange(`tab-3`)}
          >
            SUV
          </li>
          <li
            className={` text-[1.7rem] py-5 mr-20 group last-of-type:mr-0 ${
              activeTab === `tab-4` ? styles.active : ""
            }`}
            onClick={() => handleTabChange(`tab-4`)}
          >
            MUV
          </li>

          <li
            className={` text-[1.7rem] py-5 mr-20 group last-of-type:mr-0 ${
              activeTab === `tab-5` ? styles.active : ""
            }`}
            onClick={() => handleTabChange(`tab-5`)}
          >
            Lusury
          </li>
        </ul>

        <div className="mt-20">
          <div
            className={`tabContainer ${activeTab === `tab-1` ? "active" : ""}`}
          >
            <Slider {...settings} className="recent-uploads-slider">
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
            </Slider>
          </div>
          <div
            className={`tabContainer ${activeTab === `tab-2` ? "active" : ""}`}
          >
            <Slider {...settings} className="recent-uploads-slider">
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
            </Slider>
          </div>
          <div
            className={`tabContainer ${activeTab === `tab-3` ? "active" : ""}`}
          >
            <Slider {...settings} className="recent-uploads-slider">
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
            </Slider>
          </div>
          <div
            className={`tabContainer ${activeTab === `tab-4` ? "active" : ""}`}
          >
            <Slider {...settings} className="recent-uploads-slider">
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
            </Slider>
          </div>
          <div
            className={`tabContainer ${activeTab === `tab-5` ? "active" : ""}`}
          >
            <Slider {...settings} className="recent-uploads-slider">
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
              <LatestCarCard />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCars;
