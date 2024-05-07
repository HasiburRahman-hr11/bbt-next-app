"use client";

import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import { modificationServices } from "../../../../public/data/dummyData";
import ServicePopup from "./ServicePopup";

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
            <p className="text-[1.5rem] text-[#3C3C3C] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[3rem]">
              BBT Modifiers stands as the foremost destination for <br />{" "}
              customizing your vehicle.
            </p>
          </div>
          {modificationServices && modificationServices.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-[1.5rem] mt-[3rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-x-[2rem] 2xl:gap-x-[2.5rem] 3xl:gap-x-[3rem]">
              {modificationServices.map((service, index) => (
                <ServiceItem
                  data={service}
                  key={service._id}
                  toggleModal={toggleModal}
                />
              ))}
              <div className="relative rounded-[1rem] md:rounded-[2rem] overflow-hidden group mt-[2rem] xl:mt-[3rem] bg-black 2xl:mt-[3.5rem] 3xl:mt-[4.5rem] 2xl:rounded-[2.5rem]">
                <div className="w-full h-full absolute left-0 top-0 flex flex-col justify-between px-[2rem] py-[2rem] sm:py-[4rem] sm:px-[4rem] text-white xl:px-[3rem] xl:py-[3rem] 1xl:py-[4rem] 1xl:pl-[4rem] 2xl:pt-[6rem] 2xl:pb-[5rem]">
                  <h3 className="capitalize text-[1.7rem] font-light [&>b]:font-medium xl:text-[2.2rem] 1xl:text-[2.4rem] 3xl:text-[3.2rem] [&>br]:hidden xl:[&>br]:block 2xl:text-[2.8rem]">
                    For More Information <b>Call <br /> us at </b>
                  </h3>
                  <a href="tel:918999999627" className="flex items-center">
                    <div className="w-[3rem] h-[3rem] hidden lg:flex rounded-[5px] justify-center items-center p-[0.8rem] border border-[#ccc] 1xl:w-[4rem] 1xl:h-[4rem] 1xl:p-[1rem] 3xl:w-[5rem] 3xl:h-[5rem]">
                      <img
                        src="/images/modifications/call-icon.webp"
                        alt=""
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <div className="flex-[1] lg:pl-[1rem]">
                      <h5 className="text-[1.2rem] font-normal sm:text-[1.5rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">(+91) 89999 99627</h5>
                      <p className="text-[0.9rem] font-light sm:text-[1.2rem] xl:text-[1rem] 1xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">We are always happy to help</p>
                    </div>
                  </a>
                </div>
              </div>
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
