import React from "react";
import Image from "next/image";
import ContactForm from "../ContactSection/ContactForm";

const processList = [
  {
    image: "/images/sell-car/sell-process-img-1.webp",
    title: "Instant Valuation",
    description:
      "At BBT, we strive to provide the quickest and most hassle free car selling service available.",
  },
  {
    image: "/images/sell-car/sell-process-img-2.webp",
    title: " Book an appointment",
    description:
      "At BBT, we strive to provide the quickest and most hassle free car selling service available.",
  },
  {
    image: "/images/sell-car/sell-process-img-3.webp",
    title: "Sell Your Car",
    description:
      "At BBT, we strive to provide the quickest and most hassle free car selling service available.",
  },
];

const processUsp = [
  {
    icon: "/images/sell-car/sell-process-usp-1.webp",
    title: "Outright Sale (Not Only Exchange)",
    description:
      "Sell you cars with us without the boundation of exchange only offers.",
  },
  {
    icon: "/images/sell-car/sell-process-usp-2.webp",
    title: "Best Offer In 29 Mins",
    description:
      "Get the best offer of your super car in 29 mins post physical/virtual valuation.",
  },
  {
    icon: "/images/sell-car/sell-process-usp-3.webp",
    title: "On Spot",
    description:
      "Easy and quick on the spot payment method when you sell/exchange your cars with us.",
  },
  {
    icon: "/images/sell-car/sell-process-usp-4.webp",
    title: "Confidentiality Of Seller.",
    description:
      "All your personal details are safe with us and is not passed on to the new buyers.",
  },
];

const SellProcess = () => {
  return (
    <section className="bg-white">
      <div className="py-24 bg-white">
        <div className="container">
          <div>
            <h2 className="font-light [&>strong]:font-normal text-center tracking-tighter leading-1.3">
              How{" "}
              <strong>
                Sell Your <br /> Used Car
              </strong>
            </h2>
            <p className="text-center font-light text-xl mt-4 px-5">
              At BBT, we strive to provide the quickest and most hassle free car
              selling service available. Getting a great deal on your vehicle
              can often be tricky, that’s why at Big Boys Toyz we’ll value your
              vehicle based on its condition and current market value.
            </p>
          </div>
          <ul>
            {processList.map((process, index) => (
              <li
                key={index}
                className="text-center px-8 py-20 border-t border-[#D9D9D9] first-of-type:border-t-0 last-of-type:pb-0"
              >
                <div className="px-8">
                  <Image
                    src={process.image}
                    width="275"
                    height="215"
                    alt=""
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-[2.7rem] h-[2.7rem] rounded-50% bg-black text-white text-xl flex justify-center items-center mx-auto">
                  {index + 1}
                </div>
                <h4 className="text-[2rem] my-3">{process.title}</h4>
                <p className="text-xl font-light">{process.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 py-20">
        <div className="container">
          <ul>
            {processUsp.map((usp, index) => (
              <li
                key={index}
                className="flex border-b border-[#D9D9D9] last-of-type:border-b-0 py-6 items-center"
              >
                <div className="w-[8.4rem] h-[8.4rem] bg-white flex justify-center items-center p-4">
                  <Image
                    src={usp.icon}
                    alt="USP Icon"
                    width="34"
                    height="34"
                    className="max-w-[3.3rem] object-contain"
                  />
                </div>
                <div className="flex-1 pl-7">
                  <h6 className="text-1xl tracking-tighter">{usp.title}</h6>
                  <p className="text-xl font-light mt-2">{usp.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-white px-8 py-12 mt-14">
            <h3 className="font-normal text-4xl mb-10 tracking-tighter">
              Contact Us
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellProcess;
