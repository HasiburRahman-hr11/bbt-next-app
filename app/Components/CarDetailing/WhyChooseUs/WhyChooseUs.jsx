import React from "react";

const usps = [
  {
    icon: "/images/car-detailing/wc-icon-1.webp",
    title: "Expertise <b>& Experience</b>",
  },
  {
    icon: "/images/car-detailing/wc-icon-2.webp",
    title: "State-of-the-Art <b> Facilities</b>",
  },
  {
    icon: "/images/car-detailing/wc-icon-3.webp",
    title: "Customization  <b>Options</b>",
  },
  {
    icon: "/images/car-detailing/wc-icon-4.webp",
    title: "Attention  <b>to Detail</b>",
  },
  {
    icon: "/images/car-detailing/wc-icon-5.webp",
    title: "Quality  <b>Assurance</b>",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center lg:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Why <b>Choose Us?</b>
          </h2>
          <p className="text-[1.5rem] text-center lg:text-left xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
            We're not just car enthusiasts – we're car experts.
          </p>
          <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[2rem] mt-[5rem] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-[3rem]">
            {usps.map((item, index) => (
              <div className="border border-[#AEAEAE] py-[3rem] px-[2rem] rounded-[2rem] xl:px-[3rem] xl:py-[4rem] xl:rounded-[2.5rem] 1xl:py-[4.5rem]" key={index}>
                <div className="max-w-[5rem] 1xl:max-w-[6rem] 3xl:max-w-[7.5rem]">
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h5 className="text-[1.8rem] 1xl:text-[2.2rem] 3xl:text-[3rem] mt-[4rem] font-light [&>b]:font-medium 1xl:mt-[5rem]" dangerouslySetInnerHTML={{__html:item.title}}></h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
