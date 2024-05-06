"use client";

import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import {modificationServices} from '../../../../public/data/dummyData';
import ServicePopup from './ServicePopup'

const ServicesSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [serviceId, setServiceId] = useState("");

  const toggleModal = (id) => {
    setServiceId(id);
    setOpenModal(!openModal);
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
      {openModal && (
          <ServicePopup toggleModal={toggleModal} serviceId={serviceId} />
        )}
        <div className="container">
          <div className="text-center">
            <h2 className="font-extralight text-[4rem] tracking-tighter leading-[1] mt-6 [&>b]:font-normal lg:mt-10 lg:text-[4.5rem] xl:text-[5rem] xl:leading-[1.2] xl:mt-[1rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7.5rem] 3xl:mt-[2rem] [&>br]:hidden sm:[&>br]:block">
            Services Curated & Mastered <br /> <b>For Blink looking Ride</b>
            </h2>
            <p className="text-[1.5rem] text-[#3C3C3C] xl:text-[1.9rem] 3xl:text-[2.8rem] mt-[3rem]">
              BBT Modifiers stands as the foremost destination for <br /> customizing
              your vehicle.
            </p>
          </div>
          {modificationServices && modificationServices.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-[1.5rem] mt-[3rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-x-[2rem]">
              {modificationServices.map((service, index) => (
                <ServiceItem data={service} key={service._id} toggleModal={toggleModal} />
              ))}
            </div>
          ) : (
            <div className="py-[7rem] text-center">
            <h2>No Service Available Now!</h2>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
