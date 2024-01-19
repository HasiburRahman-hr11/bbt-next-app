"use client";
import React, { useState } from "react";

// Dummy Data
import { cars } from "../../../../public/data/dummyData";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const CollectionListTop = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pb-14">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] lg:mt-8">
        {cars.map((item) => (
          <div key={item._id} className="w-full md:w-[49%] xl:w-[31%]">
            <CollectionItem data={item} popupToggler={togglePopup} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default CollectionListTop;
