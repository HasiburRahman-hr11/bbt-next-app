import React from "react";

const processList = [
  {
    title: "Premium Selection & Quality Assurance",
    description: "",
    bgImage: "/images/sell-your-car/process-img-1.webp",
    bgColor: "",
    textColor: "#fff",
    icon: "",
  },
  {
    title: "Zero Tolerance Policy",
    description:
      "We believe in transparent and fair dealings,no refurbished cars.",
    bgImage: "",
    bgColor: "#F4F4F1",
    textColor: "#000",
    icon: "/images/sell-your-car/process-icon-1.webp",
  },
  {
    title: "Client's Confidentiality",
    description: "",
    bgImage: "/images/sell-your-car/process-img-2.webp",
    bgColor: "",
    textColor: "#fff",
    icon: "",
  },
  {
    title: "151 check Points",
    description:
      "Car comes with 360° inspection report with comfort and ease in driving pleasure.",
    bgImage: "",
    bgColor: "#000",
    textColor: "#fff",
    icon: "/images/sell-your-car/process-icon-2.webp",
  },
  {
    title: "Non Accidental Cars",
    description:
      "We don't buy car's with any accidental record not even a body part been changed as per service history.",
    bgImage: "",
    bgColor: "#000",
    textColor: "#fff",
    icon: "/images/sell-your-car/process-icon-3.webp",
  },
  {
    title: "Hassle free buying process",
    description: "",
    bgImage: "/images/sell-your-car/process-img-3.webp",
    bgColor: "",
    textColor: "#fff",
    icon: "",
  },
  {
    title: "RTO Physical Check",
    description:
      "We believe in transparent and fair dealings,no refurbished cars.",
    bgImage: "",
    bgColor: "#F4F4F1",
    textColor: "#000",
    icon: "/images/sell-your-car/process-icon-4.webp",
  },
  {
    title: "Personalized Customer Experience",
    description: "",
    bgImage: "/images/sell-your-car/process-img-4.webp",
    bgColor: "",
    textColor: "#fff",
    icon: "",
  },
];

const CardWithBgImage = ({ process }) => {
  return (
    <div className={`overflow-hidden rounded-[1rem] relative h-full w-full`}>
      <img
        src={process.bgImage}
        alt=""
        className="w-full h-full object-cover block"
      />
      <div className="absolute left-0 top-0 w-full h-full flex flex-col py-[1.5rem] pl-[1.5rem] pr-[1rem] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.06)] justify-end">
        <h5 className="text-[1.3rem] 3xl:text-2.4rem  leading-[1.3] font-light text-white">
          {process.title}
        </h5>
      </div>
    </div>
  );
};

const CardWithoutBgImage = ({ process }) => {
  return (
    <div className={`overflow-hidden rounded-[1rem] relative h-full w-full`}>
      <div
        className="absolute left-0 top-0 w-full h-full flex flex-col py-[1.5rem] pl-[1.5rem] pr-[1rem] justify-between"
        style={{ background: process?.bgColor ? process.bgColor : "#F4F4F1" }}
      >
        {process && process?.icon && (
          <div className="w-[3rem]">
            <img
              src={process.icon}
              alt="Icon"
              className="w-full object-contain h-auto max-h-[2.5rem]"
            />
          </div>
        )}
        <div
          className="flex flex-col justify-end"
          style={{ color: process?.textColor ? process.textColor : "#000" }}
        >
          <h5 className="text-[1.3rem] 3xl:text-2.4rem leading-[1.3] font-light">
            {process.title}
          </h5>
          {process && process?.description && (
            <p className="text-[0.95rem] 3xl:text-1.4rem mt-[0.5rem] line-clamp-3">{process.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center lg:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
              a process designed and <b>simplified for luxury</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our process is meticulously designed and simplified to make
              acquiring your <br /> luxury car as seamless and enjoyable as
              possible.
            </p>
          </div>

          <ul className=" grid grid-cols-2 gap-x-[1.5rem] gap-y-[1.5rem] mt-[4rem]">
            {processList.map((process, index) => (
              <li key={index}>
                {process.bgImage && process.bgImage !== "" ? (
                  <CardWithBgImage process={process} />
                ) : (
                  <CardWithoutBgImage process={process} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
