import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    title: "Most Searched Brands From Mumbai.",
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
    title: "Most Searched Brands From Hyderabad.",
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
    title: "Most Searched Brands From Delhi.",
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
  return (
    <section className="py-20 bg-[#f6f6f6] xl:py-36 3xl:py-40">
      <div className="max-1920">
        <div className="container">
          <ul>
            {searchedList.map((item, ind) => (
              <li
                key={ind}
                className="py-10 border-t border-neutral-300 first-of-type:border-none first-of-type:pt-0 xl:py-14 2xl:py-16"
              >
                <h2 className="tracking-tightest mb-8 pr-8 leading-[1.2] xl:mb-12 2xl:mb-16">
                  {item.title}
                </h2>
                <p className=" text-xl leading-1.7 font-light ">
                  {item.tags.map((tag, ind) => (
                    <Link
                      href={tag.url}
                      key={ind}
                      className="relative collection-search-tag text-black tracking-wide leading-0 px-2 border-l border-neutral-600 first-of-type:border-none first-of-type:pl-0 xl:text-[2rem] 1xl:text-[2.2rem] 2xl:text-[2.5rem] 3xl:text-[2.8rem]"
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
              <li key={index} className="bg-white w-[47%] mt-8 rounded-[1rem] shadow-sm common-car-item transition-all duration-500 ease-in-out sm:w-[32%] lg:w-[23%] mx-[1%] xl:w-[14%] xl:mx-[1.33%] my-4" >
                <div className="pt-20 pb-12 px-5 text-center 3xl:pt-28 3xl:pb-20">
                  <Image
                    src={location.icon}
                    className=" object-contain h-[6.5rem] w-auto inline-block mx-auto xl:h-[8rem] 1xl:h-[8.5rem] 2xl:h-[9rem] 3xl:h-[9.5rem]"
                    width="128"
                    height="95"
                    alt={location.city}
                  />
                  <h6 className="text-[1.6rem] text-[#161616] mt-6 xl:text-[1.8rem] xl:mt-10 1xl:text-[2rem] 1xl:mt-12 3xl:text-[2.2rem]">{location.city}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MostSearched;
