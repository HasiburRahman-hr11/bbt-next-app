import React from "react";

const usps = [
  {
    icon: "/images/car-detailing/about-usp-1.webp",
    title: "Paint <b>Correction</b>",
  },
  {
    icon: "/images/car-detailing/about-usp-2.webp",
    title: "Ceramic <b>Coating</b>",
  },
  {
    icon: "/images/car-detailing/about-usp-3.webp",
    title: "Graphene <b>Coating</b>",
  },
  {
    icon: "/images/car-detailing/about-usp-4.webp",
    title: "Paint <b>Protection Film (PPF)</b>",
  },
  {
    icon: "/images/car-detailing/about-usp-5.webp",
    title: "Coloured </br> <b>PPF</b>",
  },
  {
    icon: "/images/car-detailing/about-usp-6.webp",
    title: "Teflon  <b>Coating</b>",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[50%] text-center lg:text-left 2xl:w-[47%] 3xl:w-[50%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize xl:pr-[5rem]">
                Unleash the Power of Custom{" "}
                <b>Detailing and Performance Upgrades!</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light tracking-[-1px] 2xl:tracking-[-1.9px] 3xl:pr-[3rem] 3xl:mt-[3rem]">
                Your car isn't just a machine, it's your trusty steed, your
                partner in crime, and your ticket to endless adventures. And
                guess what? We totally get it.
              </p>
              <div className="my-[4rem] max-w-[400px] mx-auto lg:hidden">
                <img
                  src="/images/car-detailing/about-thumb.webp"
                  alt="Thumbnail"
                  className="w-full h-auto object-cover rounded-[2rem]"
                />
              </div>
              <p className="text-[1.2rem] lg:text-left mt-[2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem] font-light xl:pr-[5rem] 3xl:mt-[3rem]">
                Want to make your car shine brighter than a shooting star?{" "}
                <br /> <br />
                We've got the detailing magic to make it happen. Fancy adding
                some flair with custom decals or a killer paint job? Consider it
                done.
              </p>
              <ul className="grid grid-cols-2 gap-y-[2.5rem] mt-[5rem] sm:grid-cols-3 cd-about-usp lg:[&>li]:border-r lg:[&>li]:border-[#8E8B8B] ml-[-2rem] lg:ml-0 xl:gap-y-[5rem] 3xl:gap-y-[7rem] 3xl:mt-[8rem]">
                {usps.map((usp, index) => (
                  <li key={index} className="px-[2rem] flex items-center">
                    <div className="w-[3rem] xl:w-[3.2rem] 1xl:w-[3.7rem] 3xl:w-[6.3rem]">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        width="64"
                        height="53"
                        className="h-auto w-full object-contain xl:max-h-[4rem] 1xl:max-h-[4.5rem] 3xl:max-h-[5.3rem]"
                      />
                    </div>
                    <h5
                      className="flex-[1] pl-[1rem] text-[1.4rem] font-light [&>b]:font-medium text-left leading-[1.2] 1xl:text-[1.65rem] 3xl:text-[2.2rem] 3xl:tracking-tight"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></h5>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:w-[42.5%] lg:block">
              <img
                src="/images/car-detailing/about-thumb.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
