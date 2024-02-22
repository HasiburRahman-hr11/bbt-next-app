import React from "react";

const VisitSection = () => {
  return (
    <section className="bg-black py-[6rem] text-white">
      <div className="max-1920">
        <div className="container">
          <div className="visit-wrapper">
            <div>
              <h2 className="font-normal tracking-[-1px] leading-[1.2]">
                Luxury car showroom packed with bmw, audi range rover more...
              </h2>
              <p className="font-light text-[1.2rem] my-[2.5rem]">
                Confused which Car you should buy? CarDekho helps compare two or
                more cars of your choice with the best car comparison tool.
                Compare cars in India on various parameters like price,
                features, specifications, fuel consumption, mileage,
                performance, dimension, safety & more to make a smart choice for
                you.
              </p>
              <ul>
                <li className="flex mb-[0.6rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem]">
                    Six-DVD changer.
                  </p>
                </li>
                <li className="flex mb-[0.6rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem]">
                    USB & Bluetooth with Assist.
                  </p>
                </li>
                <li className="flex mb-[0.6rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem]">
                    RR all headrests - Contrast.
                  </p>
                </li>
                <li className="flex mb-[0.6rem]">
                  <img
                    src="/images/showroom-page/visit-usp-sign.webp"
                    alt="Sign Icon"
                    width="23"
                    height="15"
                    className="w-[1.3rem] h-auto object-contain"
                  />
                  <p className="flex-1 font-light text-[1.2rem] pl-[1rem]">
                    Silver Satin Bonnet finish.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-[4rem]">
              <div className="bg-[#1F1F1F] py-[2.5rem] px-[3.5rem] rounded-[0.8rem]">
                <h3 className="font-normal text-[2.6rem] mb-[1.5rem] leading-[1.4]">
                  Schedule A <br /> Visit Talk To Us
                </h3>
                <p className="font-light text-[1.2rem] mb-[2.5rem]">
                  Confused which Car you should buy? CarDekho helps compare two
                  or more cars of your choice with the best car comparison tool.
                </p>
                <a
                  href="#"
                  className="flex flex-wrap justify-between items-center w-full h-[4.8rem] bg-white text-black px-[3rem] rounded-[0.6rem]"
                >
                  <span className="text-[1.4rem]">Talk to Us</span>
                  <img
                    src="/images/showroom-page/visit-message-icon.webp"
                    alt="Message icon"
                    width="25"
                    height="22"
                    className=" object-contain h-auto w-[1.9rem]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
