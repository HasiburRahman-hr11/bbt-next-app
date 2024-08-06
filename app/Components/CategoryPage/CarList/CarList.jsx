"use client";
import React, { useEffect, useState } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
// Dummy Data
import cars from "./cars";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const CarList = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
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
