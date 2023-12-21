"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="font-light text-black [&>strong]:font-normal tracking-tighter leading-1.2 pr-7">
          Authorized luxury car buyers in <strong>india big boy toyz</strong>
        </h2>
      </div>
      <div className="pl-8 mt-12">
        <Slider {...settings}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </Slider>
      </div>
      <div className="container">
        <div
          className="progress mt-16 mb-20"
          style={{
            backgroundColor: "rgb(27 27 27 / 10%)",
            height: "1px",
          }}
        >
          <div
            style={{
              width: `${progressWidth}%`,
              backgroundColor: "rgba(27, 27, 27, 1)",
              height: "100%",
            }}
            className="progressFill"
          ></div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#F8F8F8] px-8 py-12">
            <h3 className="font-normal text-4xl mb-10 tracking-tighter">Contact Us</h3>
            <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
