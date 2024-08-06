"use client";
import React, { useState, useEffect } from "react";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const cars = [
  {
    _id: "001",
    title: "BMW Z4 M40I",
    brand: "BMW",
    model: "Z4 M40I",
    price: "76,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-1.webp",
    gallery: [
      "/images/brand-page/bmw-car-1.webp",
      "/images/brand-page/bmw-car-1.webp",
      "/images/brand-page/bmw-car-1.webp",
    ],
    isBooked: false,
    isSoldOut: false,
    isVerified: false,
  },
  {
    _id: "002",
    title: "BMW M2 Competition",
    brand: "BMW",
    model: "M2",
    price: "72,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-2.webp",
    gallery: [
      "/images/brand-page/bmw-car-2.webp",
      "/images/brand-page/bmw-car-2.webp",
      "/images/brand-page/bmw-car-2.webp",
    ],
    isBooked: false,
    isSoldOut: true,
    isVerified: false,
  },
  {
    _id: "003",
    title: "BMW X7 lCI Xdrive 40I M sport",
    brand: "BMW",
    model: "X7",
    price: "1,36,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-3.webp",
    gallery: [
      "/images/brand-page/bmw-car-3.webp",
      "/images/brand-page/bmw-car-3.webp",
      "/images/brand-page/bmw-car-3.webp",
    ],
    isBooked: false,
    isSoldOut: false,
    isVerified: false,
  },
  {
    _id: "004",
    title: "BMW X7 lCI Xdrive Competition",
    brand: "BMW",
    model: "X7",
    price: "1,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-4.webp",
    gallery: [
      "/images/brand-page/bmw-car-4.webp",
      "/images/brand-page/bmw-car-4.webp",
      "/images/brand-page/bmw-car-4.webp",
    ],
    isBooked: false,
    isSoldOut: false,
    isVerified: false,
  },
  {
    _id: "005",
    title: "BMW 730ld M Sport",
    brand: "BMW",
    model: "X7",
    price: "1,03,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-5.webp",
    gallery: [
      "/images/brand-page/bmw-car-5.webp",
      "/images/brand-page/bmw-car-5.webp",
      "/images/brand-page/bmw-car-5.webp",
    ],
    isBooked: false,
    isSoldOut: false,
    isVerified: false,
  },
  {
    _id: "006",
    title: "BMW M5",
    brand: "BMW",
    model: "M5",
    price: "1,36,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/brand-page/bmw-car-6.webp",
    gallery: [
      "/images/brand-page/bmw-car-6.webp",
      "/images/brand-page/bmw-car-6.webp",
      "/images/brand-page/bmw-car-6.webp",
    ],
    isBooked: false,
    isSoldOut: true,
    isVerified: false,
  },
];

const CarList = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white md:bg-[#f3f3f3] pb-10">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] xl:pb-[12rem]">
          {cars.map((item) => (
            <div
              key={item._id}
              className="w-full md:w-[48%] xl:w-[31%] [&_.item-divider]:hidden"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <CollectionItem data={item} popupToggler={togglePopup} />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="pagination py-12 border-t border-[#D9D9D9] lg:pt-0 lg:mb-[6rem]">
            <ul className="flex fle-wrap items-center justify-center [&>li]:mx-[4px] [&>li]:my-3 w-max px-10 lg:max-w-[43rem] mx-auto lg:bg-[#f3f3f3] lg:mt-[-3rem] [&>li]:bg-white">
              <li className="">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                >
                  <Image
                    src="/images/pagination-arrow-prev.webp"
                    alt="Previous"
                    width="9"
                    height="17"
                    className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                  />
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                >
                  1
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                >
                  2
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                >
                  <Image
                    src="/images/pagination-arrow-next.webp"
                    alt="Nest"
                    width="9"
                    height="17"
                    className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarList;
