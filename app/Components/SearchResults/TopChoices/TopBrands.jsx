"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const brands = [
  {
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "/brand/bmw",
  },
  {
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "/brand/audi",
  },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "/brand/mercedes",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "/brand/jaguar",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "/brand/land-rover",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "/brand/bently",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "/brand/porche",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "/brand/lamborghini",
  },
];

const TopBrands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
    // data-aos="fade-up"
    // data-aos-easing="linear"
    // data-aos-duration="500"
    >
      <h3 className="titleWithLine mobileLine">
        <span className="bg-[#fff] pr-[2rem] inline-block relative z-10 text-[1.51rem] tracking-[-1px] mb-[1rem] xl:text-[2rem] xl:pr-[4rem] 1xl:text-[2.5rem] 3xl:text-[3.2rem]">
          Top Brands
        </span>
      </h3>
      <ul
        className={`flex flex-wrap [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r 1xl:mt-[2rem] 3xl:mt-[2.5rem]`}
      >
        {brands.map((brand, index) => (
          <li
            key={index}
            title={brand.title}
            className="w-1/4 h-24 my-8 lg:w-1/6 lg:h-36 xl:w-1/8 1xl:h-40 1xl:my-10 2xl:h-40 3xl:h-60 border-l border-[#D9D9D9] last-of-type:border-r"
          >
            <Link
              href={brand.url}
              className="flex px-5 py-3 items-center justify-between w-full h-full lg:px-12 lg:py-10 xl:px-12 xl:py-8"
            >
              <Image
                src={brand.logo}
                width="100"
                height="100"
                alt={brand.title}
                className="object-contain block w-full max-h-16 xl:max-h-18 1xl:max-h-20 1xl:max-w-7r 1xl:mx-auto 2xl:max-w-8r 2xl:max-h-24 3xl:max-h-32 hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBrands;
