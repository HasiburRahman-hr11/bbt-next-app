"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

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
    description: `780Nm <br> @1500 RPM`,
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
    <div className="py-8 rounded-2xl border border-neutral-400 px-5 mr-7">
      <Image
        src={data.icon}
        width="40"
        height="30"
        alt="Icon"
        className="object-contain h-12"
      />
      <p className="text-sm text-stone-500 my-5">{data.title}</p>
      <p
        className="text-base font-medium"
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
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
      <div className="container">
        <h6 className="font-medium pt-10 mt-16 border-t border-gray-300 mb-8">
          Car Summary
        </h6>
      </div>
      <Slider {...settings} className="details-summary-slider pl-8">
        {dummyData.map((data, index) => (
          <CarSummaryCard data={data} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default CarSummary;
