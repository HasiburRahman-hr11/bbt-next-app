import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[49%] text-center lg:text-left 2xl:w-[45%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                Unleash the Power of Custom{" "}
                <b>Detailing and Performance Upgrades!</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light tracking-[-1px] 2xl:tracking-[-1.9px]">
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
              <p className="text-[1.2rem] lg:text-left mt-[2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem] font-light xl:pr-[14%]">
                Want to make your car shine brighter than a shooting star?{" "}
                <br /> <br />
                We've got the detailing magic to make it happen. Fancy adding
                some flair with custom decals or a killer paint job? Consider it
                done. <br /> <br />
                But wait, there's more! We're not just about making your car
                look pretty, we're all about making it perform like a champ too.
                From turbocharging your engine to upgrading your suspension for
                that buttery smooth ride!
              </p>
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
