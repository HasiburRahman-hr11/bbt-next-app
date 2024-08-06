"use client";
import React, { useEffect } from "react";
import FaqAccordion from "../../CommonComponents/FaqAccordion/FaqAccordion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqList = [
  {
    question: "Where Can I Buy The Used BMW 3 Series In Bangalore?",
    answer:
      "You can buy the best used BMW 3 series cars in Bangalore, which excels in quality and performance at only the hub, Big Boy Toyz. which offers the best deal in Bangalore.",
  },
  {
    question: "Where To Buy BMW Used Cars In India?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "How Is The Used BMW X7?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "Where To Find The Best Deal For BMW Pre-Owned India?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "What Is The BMW Second-Hand Price In India?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
];
const FaqSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-20 xl:py-36">
      <div className="max-1920">
        <div className="container">
          <div
            className="xl:flex xl:justify-between"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="text-center font-normal mb-10 tracking-tightest xl:w-[40%] xl:text-left">
              Frequently Asked Questions
            </h2>
            <div className="xl:w-[55%]">
              {faqList.map((faq, ind) => (
                <FaqAccordion key={ind} data={faq} index={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
