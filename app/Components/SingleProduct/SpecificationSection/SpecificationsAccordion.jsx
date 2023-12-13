"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const SpecificationsAccordion = ({ specifications }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="py-28 hidden lg:block bg-white accordion-box">
      <div className="container">
        <h6 className="font-medium text-3.5rem mb-20">Full Specification</h6>
        {specifications?.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="border-b border-b-blue-gray-100"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="w-full py-8 border-none"
            >
              <div
                className={`${
                  open === index + 1
                    ? "flex items-center justify-between w-full  active"
                    : "flex items-center justify-between w-full "
                }`}
              >
                <div className="flex items-center w-max">
                  <Image
                    src={item.icon}
                    alt=""
                    width="20"
                    height="20"
                    className="object-contain w-7 h-7 inline-block mr-3"
                  />
                  <p className="font-normal text-3xl">{item.title}</p>
                </div>
                <div className="w-max">
                  <Image
                    src="/images/dropdown-icon.webp"
                    alt="Arrow Icon"
                    width="17"
                    height="9"
                    className="w-7 object-contain transition-all duration-500 ease-in-out accordion-arrow"
                  />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <ul className="pb-5 px-10">
                {item.detailList.map((listItem, index) => (
                  <li key={index} className={`flex justify-between py-5`}>
                    <p className="text-lg font-medium sm:text-xl">
                      {listItem.title}
                    </p>
                    <p className="text-lg font-light text-gray-500 sm:text-xl">
                      {listItem.description}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SpecificationsAccordion;
