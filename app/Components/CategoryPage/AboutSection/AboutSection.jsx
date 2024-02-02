"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-dark-800 py-28 text-white xl:py-40 2xl:py-48 3xl:py-[20rem]">
      <div className="container">
        <div
          className="lg:flex lg:justify-between lg:items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="mb-16 lg:w-[25%] lg:mb-0 xl:w-[20%] 1xl:w-[23%]">
            <Image
              src="/images/bbt-logo-2.webp"
              alt="BBT Logo"
              width="389"
              height="258"
              className=" object-contain w-44 lg:w-full"
            />
          </div>
          <div className="font-light [&>p]:text-xl [&>p]:leading-1.6 lg:w-[70%] xl:w-[75%] 1xl:w-[70%] 2xl:[&>p]:text-[1.6rem]">
            <h2 className="font-light mb-8 tracking-tighter [&>strong]:font-normal leading-1.3 lg:leading-[1.4]">
              Second Hand{" "}
              <strong>
                Exotic <br /> SUVs are in Trend Now!
              </strong>
            </h2>
            <p className="1xl:text-[1.55rem] 3xl:text-[1.65rem]">
              Indeed, you read it right! The field of recycled extravagant SUVs
              or pre-adored extravagant SUVs is immense to cater to your
              preferred need and finding the vehicle is not any more tedious or
              dreary when you have Big Boy Toyz at your service.You don't need
              to think twice about your choice as we assure you that our
              specialists here have experience to deal with any query you have
              and to address every single inquiry without much ado.
            </p>
            <br />
            <p className="1xl:text-[1.55rem] 3xl:text-[1.65rem]">
              Probably the most blazing colourful SUVs that you can take your
              hands on at the Big Boy Toyz showroom incorporate the 2013
              utilized Porsche Cayenne Turbo and Diesel, 2011 utilized
              Mercedes-Benz G55 AMG, 2012 utilized Toyota Land Cruiser Prado VXL
              and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
