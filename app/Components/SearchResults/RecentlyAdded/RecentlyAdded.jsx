"use client";

import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import CollectionItem from "./CollectionItem";

// Dummy Data
import { cars } from "../../../../public/data/dummyData";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "5%",
      },
    },
  ],
};

const RecentlyAdded = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`overflow-x-hidden bg-[#F6F6F6] py-[5rem] md:py-[7rem] lg:py-[8rem] 1xl:py-[10rem] 2xl:py-[12rem] 3xl:py-[14rem]`}
    >
      <div className="max-1920">
        <div
          className={`px-8 mb-[4rem] md:mb-0 md:px-28 lg:w-[90%] lg:mx-auto lg:px-0 lg:flex lg:flex-wrap lg:justify-between lg:items-center relative lg:mb-[2rem] xl:w-[82%] 2xl:mb-[4rem] 3xl:mb-36`}
          //   data-aos="fade-up"
          //   data-aos-easing="linear"
          //   data-aos-duration="500"
        >
          <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem] text-center lg:text-left lg:[&>br]:hidden lg:flex-1 1xl:text-[3.2rem] xl:[&>b]:font-[500] 1xl:leading-[1.2] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
            {" "}
            <b>Recently Added</b> Cars <br /> to the Garage.
          </h2>

          <div className="hidden lg:inline-block lg:pl-[4rem]">
            <Link href="/collection" className="btn btnBlack roundedBtn">
              Explore All
            </Link>
          </div>
        </div>
        <div className="recently-added-cars lg:w-[90%] xl:w-[85%] lg:mx-auto">
          <Slider {...settings}>
            {cars.map((car) => (
              <div
                key={car._id}
                className=" rac-item px-[0.5rem] xl:px-[1.7rem] 1xl:px-[2rem]"
              >
                <CollectionItem data={car} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
