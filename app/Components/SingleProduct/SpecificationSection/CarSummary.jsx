"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './SpecificationSection.module.css';


const dummyData = [
  {
    icon: "/images/detail-page/detail-summery-usp-1.webp",
    title: "Engine",
    description: "6592cc, Twin Turbocharged, V12, DOHC",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-2.webp",
    title: "Transmission",
    description: "8 Speed Automatic ZF 8HP90 Transmission",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-3.webp",
    title: "Peak Torque",
    description: "780Nm <br> @1500 RPM",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-4.webp",
    title: "Peak Power",
    description: "571PS / 563BHP <br> @ 5250 RPM",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-5.webp",
    title: "Seating Capacity",
    description: "Available <br> Seats (04) Persons",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-6.webp",
    title: "Vehicle Type",
    description: "Body Type <br> Luxury Sedan",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-7.webp",
    title: "Drive ",
    description: "(RWD) <br> Rear Wheel Drive",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-8.webp",
    title: "Exterior Color",
    description: `Blue With <br> Shades of Silver`,
  },
];

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const CarSummaryCard = ({ data }) => {
  return (
    <div className="py-8 rounded-2xl border border-neutral-400 px-5 mr-7 sm:border-0 sm:mr-0">
      <Image
        src={data.icon}
        width="40"
        height="30"
        alt="Icon"
        className="object-contain h-12"
      />
      <p className="text-sm text-stone-500 my-5 sm:text-lg">{data.title}</p>
      <p
        className="text-base font-medium sm:text-lg"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

const CarSummary = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="lg:pt-16 lg:pb-16">
      <div className="container">
        <h6 className={`font-medium pt-10 mt-16 border-t border-gray-300 mb-8 lg:border-none lg:relative lg:mb-0 lg:pt-0 titleWithLine md:text-3.5rem`}>
          <span className="lg:bg-white lg:pr-5 relative z-10">Car Summary</span>
        </h6>
      </div>

      <div className="block sm:hidden">
        <Slider {...settings} className="details-summary-slider pl-8">
          {dummyData.map((data, index) => (
            <CarSummaryCard data={data} key={index} />
          ))}
        </Slider>
      </div>
      <div className="container hidden sm:block lg:mt-20">
      <ul className="sm:flex sm:flex-wrap">
        {dummyData.map((data, index) => (
          <li key={index} className={`w-1/3 px-8 mb-8 lg:mb-16 lg:w-1/4 ${styles.carSummeryItem}`}>
            <CarSummaryCard data={data}  />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CarSummary;
