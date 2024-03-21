import React from "react";

const NoResults = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3] ">
      <div className="max-1920">
        <div className="container">
          <div className="text-center py-[5rem] border-t border-[#D9D9D9] lg:mt-[3rem] 3xl:mt-[4rem] 1xl:pt-[9rem] 1xl:pb-[12rem]">
            <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem]">
              <b>
                No results found <br />
              </b>{" "}
              try removing strict filters
            </h2>
            <div className="flex justify-center items-center border border-black px-[2.5rem] py-[1rem] w-max mx-auto cursor-pointer mt-[2rem] md:h-[4rem] rounded-[3rem] lg:w-max 1xl:h-[4.3rem] 2xl:px-[3rem] 3xl:h-[5.6rem] 3xl:px-[4rem] 3xl:mt-[4rem]">
              <p className="text-[1.2rem] mr-[1.5rem] 3xl:text-[1.5rem]">
                Clear Fiters
              </p>
              <img
                src="/images/clear-filter-icon.webp"
                alt="Clear FIlter"
                width="12"
                height="12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
