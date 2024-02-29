"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import BbtFeaturedSlider from "../../CommonComponents/BbtFeaturedSlider/BbtFeaturedSlider";

const data = [
  {
    title: "BBT World",
    thumbnail: "/images/bbt-world-item-1.webp",
    url: "#",
  },
  {
    title: "Wallpapers",
    thumbnail: "/images/bbt-world-item-2.webp",
    url: "#",
  },
  {
    title: "BBT World",
    thumbnail: "/images/bbt-world-item-1.webp",
    url: "#",
  },
];

const BbtFeatured = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white py-20 lg:py-40 xl:py-48 2xl:py-56 3xl:py-72">
      <div className="max-1920">
        <div className="pl-8 md:pl-20 lg:flex lg:justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 2xl:pl-56 3xl:pl-64">
          <div
            className="section-heading md:pl-8 lg:w-30% lg:pl-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden lg:inline-block mb-14 object-contain lg:w-32 invert 3xl:w-44"
            />
            <h2 className="mb-16 text-black tracking-tighter leading-tight 2xl:mb-7">
              From The <br className="hidden lg:block" /> BBT World
            </h2>
            <p className="hidden lg:block text-black leading-10 text-lg 1xl:leading-8 1xl:text-xl 2xl:text-1xl 2xl:tracking-normal 2xl:leading-relaxed 3xl:text-1.6xl 3xl:leading-loose">
              Get your dream luxury car in 4 easy steps at <br /> Big Boy Toyz,
              India's trusted used car portal.
            </p>
          </div>

          {/* Featured Slider */}
          <BbtFeaturedSlider sliderList={data} />
        </div>
      </div>
    </section>
  );
};

export default BbtFeatured;
