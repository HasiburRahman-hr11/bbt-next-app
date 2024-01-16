import Image from "next/image";
import React from "react";

const DescriptionSection = () => {
  return (
    <section className="bg-black py-24 xl:py-36 3xl:py-44">
      <div className="container">
        <div className="relative pb-[10rem] sm:pb-[26rem] md:pb-[14rem] xl:pb-[10rem] 3xl:pb-[5rem]">
          <div className="flex flex-wrap justify-between">
            <div className=" w-50% md:w-[25%] lg:w-[30%] xl:w-[28%] 1xl:w-[30%]">
              <Image
                src="/images/suv/suv-description-img-1.webp"
                width="445"
                height="587"
                alt="Description Image"
                className="w-full object-contain h-auto"
              />
            </div>
            <div className="w-full mt-14 md:w-[70%] md:pr-[14rem] lg:w-[65%] xl:w-[68%] 1xl:w-[65%] 3xl:pr-[20rem]">
              <p className="text-neutral-300 text-center text-xl leading-1.6 font-light md:text-left lg:text-2xl lg:leading-[1.7] xl:text-[2rem] 3xl:text-[2.8rem]">
                If you've lived by the 'Work sincerely and Play Harder' theory
                of life and it cuts across all aspects of your life including
                the kind of vehicle you drive, then, the Sports Utility Vehicle
                (SUV) is the ideal type for you. An unassuming carrier for you
                during the weekdays and a street hungry mammoth during the
                weekends, the top notch extravagant SUVs offer something to
                satisfy both the necessities.
              </p>
              <div className="max-w-[3rem] mx-auto mt-8 md:mr-auto md:ml-0 xl:max-w-[5rem] xl:mt-16 3xl:max-w-[8rem]">
                <Image
                  src="/images/suv-down-arrow.webp"
                  width="80"
                  height="96"
                  alt="Arrow Icon"
                  className="w-full inline-block object-contain h-auto "
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[10rem] sm:w-[20rem] md:w-[14rem] xl:w-[15rem] 3xl:w-[16rem]">
          <Image
                  src="/images/suv/suv-description-img-2.webp"
                  width="162"
                  height="214"
                  alt="Description Image"
                  className="w-full inline-block object-contain h-auto"
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
