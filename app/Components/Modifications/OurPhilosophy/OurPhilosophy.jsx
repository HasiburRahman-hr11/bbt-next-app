import React from "react";

const OurPhilosophy = () => {
  return (
    <section className="bg-[#F3F3F3] ">
      <div className="max-1920 py-[7rem] lg:py-[10rem] xl:py-[18rem] 2xl:py-[21rem] 3xl:py-[25rem] 3xl:pb-[30rem] relative overflow-hidden">
        <img
          src="/images/team/founder-quote-before.webp"
          alt=""
          className="hidden xl:inline-block object-contain absolute top-[-9rem] left-0 w-[40%] max-w-[40rem] 1xl:max-w-[45rem] 2xl:max-w-[48rem] 3xl:top-[-19rem] 3xl:max-w-[68rem]"
        />
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center sm:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Our <b>Philosophy</b>
          </h2>
          <div className="flex flex-col mt-[4rem] sm:flex-row sm:justify-between">
            <div className="text-center w-[90%] mx-auto sm:w-[50%] sm:ml-0 xl:w-[59%] 1xl:w-[62%] 2xl:w-[60%]">
              <img
                src="/images/modifications/bant-text.webp"
                alt=""
                className="w-full object-contain h-auto"
              />
            </div>
            <div className="mt-[4rem] sm:mt-0 sm:w-[40%] xl:w-[31%] 2xl:w-[32%]">
              <h2 className="leading-[1.2] font-normal tracking-tighter text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                Budget
              </h2>
              <p className="text-[1.5rem] xl:text-[1.8rem] 1xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem] mt-[1rem] font-light 2xl:mt-[2rem]">
                The automobile industry in India has come a long way and cars
                today look and perform far better than they did about 25 years
                ago.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/team/founder-quote-after.webp"
          alt=""
          className="hidden xl:inline-block object-contain absolute bottom-[-8rem] right-[-3rem] w-[40%] max-w-[40rem] 1xl:max-w-[45rem] 2xl:max-w-[48rem] 3xl:max-w-[68rem] 3xl:bottom-[-15rem]"
        />
      </div>
    </section>
  );
};

export default OurPhilosophy;
