import React from "react";
import FaqAccordion from "../../CommonComponents/FaqAccordion/FaqAccordion";

const faqList = [
  {
    question: "Why Buy The Used Aston Martin DBX Is A Good Choice?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "How Many Aston Martin Models Available In India?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "How Aston Martin Rapide Makes A Good Choice",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "What Are The Updates Of Aston Martin Vantage 2017?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    question: "Which Are Models Of Used Aston Martin Are On Sale In India?",
    answer:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
];
const FaqSection = () => {
  return (
    <section className="bg-white py-20 xl:py-36">
      <div className="max-1920">
        <div className="container">
          <div className="xl:flex xl:justify-between">
            <h2 className="text-center mb-10 tracking-tightest xl:w-[40%]">
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
