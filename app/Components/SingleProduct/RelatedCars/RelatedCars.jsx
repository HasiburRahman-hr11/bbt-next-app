"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RelatedCarsCard from "./RelatedCarsCard";
import AOS from "aos";
import "aos/dist/aos.css";

const RelatedCars = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-24 bg-inclusionBG">
      <div className="container">
        <div
          className="flex justify-between items-center mb-10"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <span className="h-px w-auto grow bg-black lg:hidden"></span>
          <h2 className=" pl-8 lg:pl-0">Related Cars</h2>
        </div>
      </div>

      <div
        className="pl-8"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Slider {...settings} className="hp-services-slider">
          <RelatedCarsCard />
          <RelatedCarsCard />
          <RelatedCarsCard />
        </Slider>
      </div>
    </section>
  );
};

export default RelatedCars;
