"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ShopByCategory.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const categories = [
  {
    title: "SUVs",
    icon: "/images/detail-page/category-icon-suv.webp",
    url: "#",
  },
  {
    title: "Sedan",
    icon: "/images/detail-page/category-icon-sedan.webp",
    url: "#",
  },
  {
    title: "Convertible",
    icon: "/images/detail-page/category-icon-convertable.webp",
    url: "#",
  },
  {
    title: "Coupe",
    icon: "/images/detail-page/category-icon-coupe.webp",
    url: "#",
  },
  {
    title: "Sports",
    icon: "/images/detail-page/category-icon-sports.webp",
    url: "#",
  },
];

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-24">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          Shop By Categories
        </h2>

        <ul className="flex items-center flex-wrap mt-8">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`w-31% three-column-item ${styles.categoryItem}`}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Link
                href={category.url}
                className={`px-2 py-10 w-full h-full rounded-xl border border-neutral-300 mt-5 block text-center`}
              >
                <Image
                  src={category.icon}
                  width="67"
                  height="25"
                  alt={category.title}
                  className="object-contain block w-full max-h-11"
                />
                <p className="text-black text-1xl mt-3">{category.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShopByCategory;
