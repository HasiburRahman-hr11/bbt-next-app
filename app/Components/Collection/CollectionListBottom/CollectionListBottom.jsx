"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy Data
import cars  from "./collection-list";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const CollectionListBottom = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pt-24 lg:pb-36 3xl:py-[12rem]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] md:pb-20 mx-auto lg:w-[83%] lg:mb-20 3xl:mb-[7rem]">
          {cars.map((item) => (
            <div
              key={item._id}
              className="w-full md:w-[49%] xl:w-[31%]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <CollectionItem data={item} popupToggler={togglePopup} />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="hidden lg:block h-1 border-t border-black"></div>
          <div className="px-3 pb-20 lg:pb-0 lg:flex lg:justify-center lg:mt-[-3rem] lg:bg-[#f3f3f3] lg:px-10 lg:w-max lg:mx-auto">
            <button className="bg-transparent font-medium text-black flex justify-center items-center border border-black rounded-lg py-7 text-2xl text-center w-full hover:bg-black hover:text-white transition-all duration-300 ease-in lg:inline-flex lg:w-[20rem] lg:h-[5rem] lg:rounded-[4rem] 3xl:text-[1.8rem] 3xl:min-w-[27rem] 3xl:min-h-[6.5rem]">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionListBottom;
