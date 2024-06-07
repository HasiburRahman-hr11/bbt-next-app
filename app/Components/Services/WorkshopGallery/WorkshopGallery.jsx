"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "4%",
  // responsive: [
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       slidesToShow: 1,
  //       centerMode: true,
  //       centerPadding: "5%",
  //     },
  //   },
  // ],
};

const WorkshopGallery = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container text-center">
          <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
            Workshop <b>Gallery</b>
          </h2>
          <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block">
            Our list of Associates share a common vision for Automotive <br />{" "}
            Excellence and a deep passion for Exotic cars.
          </p>
        </div>
        <div className="sm:pl-[3%] lg:pl-[7%]">
          <div className="celebration-slider pl-[2rem] mt-[5rem]">
            <Slider {...settings}>
              <div className="pr-[3rem] xl:pr-[4rem]">
                <img
                  src="/images/services/workshop-gallery-1.webp"
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-[1.5rem] overflow-hidden xl:rounded-[2.5rem]"
                />
              </div>
              <div className="pr-[3rem] xl:pr-[4rem]">
                <img
                  src="/images/services/workshop-gallery-1.webp"
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-[1.5rem] overflow-hidden xl:rounded-[2.5rem]"
                />
              </div>
              <div className="pr-[3rem] xl:pr-[4rem]">
                <img
                  src="/images/services/workshop-gallery-1.webp"
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-[1.5rem] overflow-hidden xl:rounded-[2.5rem]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
