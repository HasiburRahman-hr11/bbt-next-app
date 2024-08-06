"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy Data
import cars from "./collection-list";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const CollectionListTop = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] lg:mt-8 3xl:mt-12">
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
      </div>
    </section>
  );
};
export default CollectionListTop;
