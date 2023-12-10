"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PopularBrans.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const brands = [
  { title: "BMW", logo: "/images/detail-page/brand-icon-bmw.webp", url: "#" },
  { title: "AUDI", logo: "/images/detail-page/brand-icon-audi.webp", url: "#" },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "#",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "#",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "#",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "#",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "#",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "#",
  },
];

const PopularBrands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pt-24 bg-white">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          Popular Brands
        </h2>
        <ul
          className={`${styles.brandsList} flex flex-wrap mt-5 pb-20 border-b border-stone-300`}
        >
          {brands.map((brand, index) => (
            <li
              key={index}
              title={brand.title}
              className="w-1/4 h-24 my-8"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Link
                href={brand.url}
                className="flex px-5 py-3 items-center justify-between w-full h-full"
              >
                <Image
                  src={brand.logo}
                  width="100"
                  height="100"
                  alt={brand.title}
                  className="object-contain block w-full max-h-16"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularBrands;
