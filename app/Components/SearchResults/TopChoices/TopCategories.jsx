"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const categories = [
  {
    title: "SUVs",
    icon: "/images/detail-page/category-icon-suv.webp",
    url: "/category/suv",
  },
  {
    title: "Sedan",
    icon: "/images/detail-page/category-icon-sedan.webp",
    url: "/category/sedan",
  },
  {
    title: "Convertible",
    icon: "/images/detail-page/category-icon-convertable.webp",
    url: "/category/convertible",
  },
  {
    title: "Coupe",
    icon: "/images/detail-page/category-icon-coupe.webp",
    url: "/category/coupe",
  },
  {
    title: "Sports",
    icon: "/images/detail-page/category-icon-sports.webp",
    url: "/category/sports",
  },
];

const TopCategories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="mt-[3rem] xl:mt-[5rem] 2xl:mt-[8rem]"
      // data-aos="fade-up"
      // data-aos-easing="linear"
      // data-aos-duration="500"
    >
      <h3 className="titleWithLine mobileLine">
        <span className="bg-[#fff] pr-[2rem] inline-block relative z-10 text-[1.51rem] tracking-[-1px] mb-[1rem] xl:text-[2rem] xl:pr-[4rem] 1xl:text-[2.5rem] 3xl:text-[3.2rem]">
          Top Categories
        </span>
      </h3>
      <ul
        className="flex items-center flex-wrap [&>*:nth-child(3n)]:mr-0 lg:[&>*:nth-child(3n)]:mr-[2.5%] lg:[&>*:nth-child(5n)]:mr-0 1xl:mt-[2.5rem] 3xl:mt-[3rem] "
      >
        {categories.map((category, index) => (
          <li
            key={index}
            className={`w-31% three-column-item mr-[3.5%] lg:w-[18%] lg:mr-[2.5%] `}
          >
            <Link
              href={category.url}
              className={`px-2 py-10 w-full h-full rounded-xl border border-neutral-300 mt-5 block text-center lg:py-20 xl:pb-16 xl:pt-20 2xl:py-24 3xl:py-32 hover:bg-black transition-all duration-500 group`}
            >
              <Image
                src={category.icon}
                width="67"
                height="25"
                alt={category.title}
                className="object-contain block w-full max-h-11 xl:max-h-16 3xl:max-h-20"
              />
              <p className="text-black font-medium text-1xl mt-3 xl:text-1.6xl xl:mt-12 1xl:text-3xl 2xl:mt-16 3xl:text-[2.6rem] 3xl:mt-20 group-hover:text-white  transition-all duration-500">
                {category.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
