"use client";
import React, { useEffect } from "react";
import LocationCounter from "../../CommonComponents/CommonLocation/LocationCounter";
import CommonLocationItem from "../../CommonComponents/CommonLocation/CommonLocationItem";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  { city: "DEL", sector: "Gurgaon, Sector 37", url: "#" },
  { city: "BOM", sector: "Mumbai, Andheri East", url: "#" },
  { city: "HYD", sector: "Hyderabad,  Banjara Hills", url: "#" },
  { city: "AMD", sector: "Gujarat, Ahmedabad", url: "#" },
  { city: "BLR", sector: "Bengaluru, Residency Road", url: "#" },
];
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-24" style={{ background: "#F5F5F2" }}>
      <div className="container">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <p>About Us</p>
          <h2 className="font-normal tracking-tighter my-4">
            {" "}
            BigBoyToyz Is In Your City !
          </h2>
          <p className="font-light text-2xl text-stone-700">
            Visit our super cars showroom and get a feel <br /> of the ride
            awaiting your presence.
          </p>
        </div>

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
    </section>
  );
};

export default AboutUs;
