import React from "react";
const processData = [
  {
    title: "Share Your <b>Ideas With Us</b>",
    icon: "/images/modifications/process-icon-1.webp",
  },
  {
    title: "We Will Create A <b>Graphic Prototype</b>",
    icon: "/images/modifications/process-icon-2.webp",
  },
  {
    title: "Approve The Cad <b>Prototype</b>",
    icon: "/images/modifications/process-icon-3.webp",
  },
  {
    title: "We Will Carve <b>Your Vision</b>",
    icon: "/images/modifications/process-icon-4.webp",
  },
];

const ProcessCard = ({ data, index }) => {
  return (
    <div className="bg-[#131313] px-[2rem] pt-[2.5rem] pb-[5rem] overflow-hidden relative text-white rounded-[1rem] my-[1rem] xl:pb-[7rem] xl:pl-[3rem]">
      <div>
        <img
          src={data.icon}
          alt=""
          className="w-full object-contain h-auto max-w-[3rem]"
        />
      </div>
      <h4
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-[1.5rem] mt-[3rem] font-light [&>b]:font-medium xl:text-[1.9rem] xl:mt-[5rem] 3xl:text-[3rem]"
      ></h4>
      <div className="absolute right-[-0.5rem] bottom-[-2.5rem] font-medium text-[#424242] text-[5rem] tracking-tight xl:text-[7rem] 3xl:text-[10rem] xl:bottom-[-3.5rem]">
        0{index + 1}
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <p className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
              Our Process
            </p>
            <h2 className="font-light text-white leading-[1.2] tracking-tighter mt-[1rem] text-center xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              How It <b>Works</b>
            </h2>
            <p className="text-[1.5rem] text-white xl:text-[1.9rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
              Our customization process begins with you <br /> specifying your
              requirements.
            </p>
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="inline-block object-contain mt-[3rem] w-[6rem] xl:w-[8.5rem] xl:mt-[5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
            />
          </div>
          {processData && processData.length > 0 && (
            <div className="grid grid-cols-2 gap-x-[1.5rem] mt-[3rem] max-w-[450px] mx-auto md:max-w-none md:grid-cols-4 lg:w-[90%] xl:mt-[5rem] xl:gap-x-[3.5rem] xl:w-[88%]">
              {processData.map((process, index) => (
                <ProcessCard data={process} key={index} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
