import React from "react";

const OurPhilosophy = () => {
  return (
    <section className="bg-[#F3F3F3] py-[7rem] lg:py-[10rem] xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center sm:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Our <b>Philosophy</b>
          </h2>
          <div className="flex flex-col mt-[4rem] sm:flex-row sm:justify-between">
            <div className="text-center w-[90%] mx-auto sm:w-[50%] sm:ml-0 xl:w-[59%]">
              <img
                src="/images/modifications/bant-text.webp"
                alt=""
                className="w-full object-contain h-auto"
              />
            </div>
            <div className="mt-[4rem] sm:mt-0 sm:w-[40%] xl:w-[31%]">
              <h2 className="leading-[1.2] tracking-tighter text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                Budget
              </h2>
              <p className="text-[1.5rem] xl:text-[1.8rem] 3xl:text-[2.8rem] mt-[1rem] font-light">
                The automobile industry in India has come a long way and cars
                today look and perform far better than they did about 25 years
                ago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
