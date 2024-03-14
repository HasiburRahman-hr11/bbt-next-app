"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import CommonLocationItem from "../../CommonComponents/CommonLocation/CommonLocationItem";
import LocationCounter from "../../CommonComponents/CommonLocation/LocationCounter";

const locations = [
  { city: "DEL", sector: "Gurgaon, Sector 37", url: "#" },
  { city: "BOM", sector: "Mumbai, Andheri East", url: "#" },
  { city: "HYD", sector: "Hyderabad,  Banjara Hills", url: "#" },
  { city: "AMD", sector: "Gujarat, Ahmedabad", url: "#" },
  { city: "BLR", sector: "Bengaluru, Residency Road", url: "#" },
];

const Showroom = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white py-[5rem] lg:py-[8rem] 1xl:py-[14rem]">
      <div className="max-1920">
        <div className="container">
          <h2
            className={`mb-16 text-black tracking-tighter relative titleWithLine`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="lg:bg-white lg:pr-10 relative z-10">
              BBT Showrooms
            </span>
          </h2>
          <p
            className={`hidden lg:block mt-5 text-6xl leading-snug tracking-tight font-normal 2xl:tracking-[-3px] xl:text-[3.5rem] xl:tracking-[-2px] 2xl:text-[4.4rem] 2xl:leading-1.3 2xl:mt-8 3xl:mt-16 [&>br]:hidden xl:[&>br]:block 3xl:text-[5.5rem]`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            The mission was simple, direct and drove effect - delivering <br />{" "}
            a new dimension of luxury while standardising & raising <br />{" "}
            platforms for the used car market in India.
          </p>
          <div className="lg:flex flex-row-reverse items-center lg:mt-24 3xl:mt-36">
            <LocationCounter />

            <ul
              className="[&>*:last-child]:border-b border-gray-300 lg:w-60% lg:pr-10 xl:w-55% xl:mr-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {locations.map((location, index) => (
                <CommonLocationItem key={index} location={location} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
