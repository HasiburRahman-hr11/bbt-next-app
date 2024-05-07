"use client";
import React, { useEffect, useState } from "react";
import { modificationServices } from "../../../../public/data/dummyData";


const ServicePopup = ({ serviceId, toggleModal }) => {
  const [service, setService] = useState(
    modificationServices.find((item) => item._id == "001")
  );

  useEffect(() => {
    const getService = modificationServices.find(
      (item) => item._id == serviceId
    );
    console.log(getService);
    setService(getService);
  }, []);
  return (
    <>
      <div
        className="fixed z-100 overflow-y-auto top-0 w-full left-0"
        id="modal"
      >
        <div className=" relative flex items-center justify-center w-full min-h-[100vh] pt-[3rem] px-[2rem] pb-[4rem] flex-col">
          <div
            className="absolute h-full inset-0 transition-opacity min-h-[100vh] bg-black opacity-[0.5] z-10"
            onClick={toggleModal}
          ></div>
          <div className="bg-[#F4F4F1] z-20 md:max-w-[700px] xl:max-w-[877px] xl:w-[47%] mx-auto rounded-lg px-[3rem] py-[3rem] w-full relative shadow-xl overflow-hidden xl:rounded-[1.5rem] 3xl:px-[4.5rem] 3xl:max-w-[1000px] 3xl:py-[4.5rem] 1xl:rounded-[3rem] 3xl:rounded-[3.5rem]">
            <div
              className="absolute top-[1.5rem] right-[1.5rem] w-[2rem] h-[2rem] cursor-pointer z-10 flex justify-center items-center 1xl:right-[2rem] 1xl:w-[3rem] 1xl:h-[3rem] 3xl:right-[2.6rem] 3xl:top-[2rem]"
              onClick={toggleModal}
            >
              <img
                src="/images/wallpapers/close-popup.webp"
                alt=""
                className="object-contain w-[1.5rem] h-auto 3xl:w-[1.9rem]"
              />
            </div>
            <div className="block  text-left transform transition-all  max-h-[95vh] overflow-y-auto no-scrollbar w-full">
              <div className="block md:flex md:justify-between">
                <div className="md:w-[35%] lg:w-[40%] xl:h-[inherit] 1xl:w-[45%]">
                  <img
                    src={service?.image && service.image}
                    alt={service.title}
                    className="w-full h-auto block object-contain max-h-[200px] rounded-[1rem] xl:rounded-[1.7rem] sm:max-h-[300px] md:max-h-[unset] xl:h-full"
                  />
                </div>

                <div className="md:w-[60%] lg:w-[55%] 1xl:w-[50%]">
                  <div className="mt-[3rem] md:mt-0">
                    <h3 className="capitalize text-[2.5rem] 1xl:text-[2.8rem] 2xl:text-[3rem] 3xl:text-[3.2rem]">{service?.title}</h3>
                    <div className="text-[1.2rem] font-light mt-[1rem] 1xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">{service?.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePopup;
