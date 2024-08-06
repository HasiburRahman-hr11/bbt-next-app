"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const searchedList = [
  {
    title: "Most Searched Brands On Big Boy Toyz.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
  {
    title: "Searched By Top Models.",
    tags: [
      { tagName: "Used Lamborghini Huracan", url: "#" },
      { tagName: "Used Rolls Royce Ghost", url: "#" },
      { tagName: "Used Range Rover Vogue", url: "#" },
      { tagName: "Used Porsche Panamera", url: "#" },
      { tagName: "Used Porsche Cayenne", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes S class", url: "#" },
      { tagName: "Used Land Rover Discovery", url: "#" },
      { tagName: "Used Bentley Flying Spur", url: "#" },
      { tagName: "Used Bentley Continental GT", url: "#" },
      { tagName: "Used Audi Q8", url: "#" },
      { tagName: "Used Lamborghini Aventador", url: "#" },
      { tagName: "Used Volvo XC 90", url: "#" },
      { tagName: "Used Bentley Mulsanne", url: "#" },
      { tagName: "Used BMW M3", url: "#" },
      { tagName: "Used BMW M4", url: "#" },
      { tagName: "Used Maserati Granturismo", url: "#" },
      { tagName: "Used Mercedes GLS", url: "#" },
      { tagName: "Used Mercedes GLE", url: "#" },
      { tagName: "Used BMW X7", url: "#" },
      { tagName: "Used BMW X5", url: "#" },
      { tagName: "Used BMW 7 series", url: "#" },
      { tagName: "Used Audi A8", url: "#" },
      { tagName: "Used Porsche 718 Boxster", url: "#" },
      { tagName: "Used BMW i8", url: "#" },
      { tagName: "Used Audi RS5", url: "#" },
      { tagName: "Used BMW Z4", url: "#" },
      { tagName: "Used Lexus LS 500H", url: "#" }
    ]
  },
  {
    title: "Most Searched Brands From Mumbai.",
    tags: [
      { tagName: "Used BMW in Mumbai", url: "#" },
      { tagName: "Used Mercedes in Mumbai", url: "#" },
      { tagName: "Used Aston Martin in Mumbai", url: "#" },
      { tagName: "Used Audi in Mumbai", url: "#" },
      { tagName: "Used Bentley in Mumbai", url: "#" },
      { tagName: "Used Ferrari in Mumbai", url: "#" },
      { tagName: "Used Ford in Mumbai", url: "#" },
      { tagName: "Used Harley Davidson in Mumbai", url: "#" },
      { tagName: "Used Hummer in Mumbai", url: "#" },
      { tagName: "Used Indian in Mumbai", url: "#" },
      { tagName: "Used Jaguar in Mumbai", url: "#" },
      { tagName: "Used Jeep in Mumbai", url: "#" },
      { tagName: "Used Lamborghini in Mumbai", url: "#" },
      { tagName: "Used Land Rover in Mumbai", url: "#" },
      { tagName: "Used Lexus in Mumbai", url: "#" },
      { tagName: "Used Maserati in Mumbai", url: "#" },
      { tagName: "Used Maybach in Mumbai", url: "#" },
      { tagName: "Used Mercedes-Benz in Mumbai", url: "#" },
      { tagName: "Used Mini in Mumbai", url: "#" },
      { tagName: "Used Nissan in Mumbai", url: "#" },
      { tagName: "Used Porsche in Mumbai", url: "#" },
      { tagName: "Used Rolls-Royce in Mumbai", url: "#" },
      { tagName: "Used Toyota in Mumbai", url: "#" },
      { tagName: "Used Triumph in Mumbai", url: "#" },
      { tagName: "Used Volkswagen in Mumbai", url: "#" },
      { tagName: "Used Volvo in Mumbai", url: "#" }
    ]
  },
  {
    title: "Most Searched Brands From Hyderabad.",
    tags: [
      { tagName: "Used BMW in Hyderabad", url: "#" },
      { tagName: "Used Mercedes in Hyderabad", url: "#" },
      { tagName: "Used Aston Martin in Hyderabad", url: "#" },
      { tagName: "Used Audi in Hyderabad", url: "#" },
      { tagName: "Used Bentley in Hyderabad", url: "#" },
      { tagName: "Used Ferrari in Hyderabad", url: "#" },
      { tagName: "Used Ford in Hyderabad", url: "#" },
      { tagName: "Used Harley Davidson in Hyderabad", url: "#" },
      { tagName: "Used Hummer in Hyderabad", url: "#" },
      { tagName: "Used Indian in Hyderabad", url: "#" },
      { tagName: "Used Jaguar in Hyderabad", url: "#" },
      { tagName: "Used Jeep in Hyderabad", url: "#" },
      { tagName: "Used Lamborghini in Hyderabad", url: "#" },
      { tagName: "Used Land Rover in Hyderabad", url: "#" },
      { tagName: "Used Lexus in Hyderabad", url: "#" },
      { tagName: "Used Maserati in Hyderabad", url: "#" },
      { tagName: "Used Maybach in Hyderabad", url: "#" },
      { tagName: "Used Mercedes-Benz in Hyderabad", url: "#" },
      { tagName: "Used Mini in Hyderabad", url: "#" },
      { tagName: "Used Nissan in Hyderabad", url: "#" },
      { tagName: "Used Porsche in Hyderabad", url: "#" },
      { tagName: "Used Rolls-Royce in Hyderabad", url: "#" },
      { tagName: "Used Toyota in Hyderabad", url: "#" },
      { tagName: "Used Triumph in Hyderabad", url: "#" },
      { tagName: "Used Volkswagen in Hyderabad", url: "#" },
      { tagName: "Used Volvo in Hyderabad", url: "#" }
    ]
  },
  {
    title: "Most Searched Brands From Delhi.",
    tags: [
      { tagName: "Used BMW in Delhi", url: "#" },
      { tagName: "Used Mercedes in Delhi", url: "#" },
      { tagName: "Used Aston Martin in Delhi", url: "#" },
      { tagName: "Used Audi in Delhi", url: "#" },
      { tagName: "Used Bentley in Delhi", url: "#" },
      { tagName: "Used Ferrari in Delhi", url: "#" },
      { tagName: "Used Ford in Delhi", url: "#" },
      { tagName: "Used Harley Davidson in Delhi", url: "#" },
      { tagName: "Used Hummer in Delhi", url: "#" },
      { tagName: "Used Indian in Delhi", url: "#" },
      { tagName: "Used Jaguar in Delhi", url: "#" },
      { tagName: "Used Jeep in Delhi", url: "#" },
      { tagName: "Used Lamborghini in Delhi", url: "#" },
      { tagName: "Used Land Rover in Delhi", url: "#" },
      { tagName: "Used Lexus in Delhi", url: "#" },
      { tagName: "Used Maserati in Delhi", url: "#" },
      { tagName: "Used Maybach in Delhi", url: "#" },
      { tagName: "Used Mercedes-Benz in Delhi", url: "#" },
      { tagName: "Used Mini in Delhi", url: "#" },
      { tagName: "Used Nissan in Delhi", url: "#" },
      { tagName: "Used Porsche in Delhi", url: "#" },
      { tagName: "Used Rolls-Royce in Delhi", url: "#" },
      { tagName: "Used Toyota in Delhi", url: "#" },
      { tagName: "Used Triumph in Delhi", url: "#" },
      { tagName: "Used Volkswagen in Delhi", url: "#" },
      { tagName: "Used Volvo in Delhi", url: "#" }
    ]
  },
];

const locations = [
  {
    city: "Delhi",
    icon: "/images/brand-page/most-searched-delhi.webp",
    url: "#",
  },
  {
    city: "Mumbai",
    icon: "/images/brand-page/most-searched-mumbai.webp",
    url: "#",
  },
  {
    city: "Hyderabad",
    icon: "/images/brand-page/most-searched-hyderabad.webp",
    url: "#",
  },
  {
    city: "Pune",
    icon: "/images/brand-page/most-searched-pune.webp",
    url: "#",
  },
  {
    city: "Bengaluru",
    icon: "/images/brand-page/most-searched-bengaluru.webp",
    url: "#",
  },
  {
    city: "Ahmedabad",
    icon: "/images/brand-page/most-searched-ahmedabad.webp",
    url: "#",
  },
  {
    city: "Chennai",
    icon: "/images/brand-page/most-searched-chennai.webp",
    url: "#",
  },
  {
    city: "Chandigarh",
    icon: "/images/brand-page/most-searched-chandigarh.webp",
    url: "#",
  },
  {
    city: "Kolkata",
    icon: "/images/brand-page/most-searched-kolkata.webp",
    url: "#",
  },
];
const MostSearched = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-20 bg-[#f6f6f6] xl:py-36 3xl:py-40">
      <div className="max-1920">
        <div className="container">
          <ul>
            {searchedList.map((item, ind) => (
              <li
                key={ind}
                className="py-10 border-t border-neutral-300 first-of-type:border-none first-of-type:pt-0 xl:py-14 2xl:py-16"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h2 className="tracking-tightest font-normal mb-8 pr-8 leading-[1.2] xl:mb-12 2xl:mb-16">
                  {item.title}
                </h2>
                <p className=" text-xl leading-1.7 font-light ">
                  {item.tags.map((tag, ind) => (
                    <Link
                      href={tag.url}
                      key={ind}
                      className="relative collection-search-tag text-black tracking-wide leading-0 px-2 border-l border-neutral-800 first-of-type:border-none first-of-type:pl-0 xl:text-[2rem] 1xl:text-[2.2rem] 2xl:text-[2.5rem] 3xl:text-[2.8rem] 3xl:px-4"
                    >
                      {tag.tagName}
                    </Link>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          {/* Locations */}
          <ul className="flex flex-wrap justify-between lg:justify-center">
            {locations.map((location, index) => (
              <li
                key={index}
                className="bg-white w-[47%] mt-8 rounded-[1rem] shadow-sm common-car-item transition-all duration-500 ease-in-out sm:w-[32%] lg:w-[23%] mx-[1%] xl:w-[14%] xl:mx-[1.33%] my-4 3xl:shadow-lg 3xl:mt-14"
              >
                <Link href="#" className="pt-20 pb-12 px-5 text-center 3xl:pt-28 3xl:pb-20 block">
                  <Image
                    src={location.icon}
                    className=" object-contain h-[6.5rem] w-auto inline-block mx-auto xl:h-[8rem] 1xl:h-[8.5rem] 2xl:h-[9rem] 3xl:h-[9.5rem]"
                    width="128"
                    height="95"
                    alt={location.city}
                  />
                  <h6 className="text-[1.6rem] text-[#161616] mt-6 xl:text-[1.8rem] xl:mt-10 1xl:text-[2rem] 1xl:mt-12 3xl:text-[2.2rem] font-medium">
                    {location.city}
                  </h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MostSearched;
