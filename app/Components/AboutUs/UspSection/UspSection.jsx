"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const uspList = [
  {
    title: "Asia's Biggest Studio",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-1.webp",
  },
  {
    title: "7600+ Happy Customers",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-1.webp",
  },
  {
    title: "151 Quality Checkpoints",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-1.webp",
  },
  {
    title: "30 Luxury Car Brands",
    description:
      "At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    thumbnail: "/images/about-us/about-usp-img-1.webp",
  },
];

const UspSection = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="bg-black py-[5rem] text-white">
      <div className="max-1920">
        <div className="container">
          <div className="w-[84%] mx-auto">
            <div className="text-center">
              <h2 className="font-normal">Our Usps </h2>
              <p className="font-light text-[1.2rem] leading-[1.5] mt-[1rem]">
                Since then our mission has been to provide quality exotic cars
                with highly personalized care at a competitive price. Creating a
                new benchmark for excellence in every aspect of our business.
              </p>
            </div>
            <div>
              {uspList.map((usp, index) => (
                <Accordion
                  open={open === index + 1}
                  className="border border-[#343434] rounded-[1rem] overflow-hidden mt-[2.5rem]"
                  key={index+1}
                >
                  <AccordionBody className="p-0">
                    <img
                      src={usp.thumbnail}
                      alt="USP Image"
                      className="w-full object-cover"
                    />
                  </AccordionBody>
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className="py-[3rem] px-[2rem] border-0"
                  >
                    <div className="relative">
                      <h3 className="text-[2rem] font-normal mb-[1.5rem] tracking-[-1px] pr-[1.5rem]">{usp.title}</h3>
                      <p className="font-light text-[1.2rem] leading-[1.4]">
                        {usp.description}
                      </p>
                      <div className={open === index + 1 ? 'hidden' : 'block absolute top-[-1.2rem] right-[-1.5rem] w-max'}>
                      <img src="/images/about-us/about-accordion-plus.webp" alt="Plus Icon" className=" object-contain h-auto w-[1.6rem]" />
                      </div>
                    </div>
                  </AccordionHeader>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
