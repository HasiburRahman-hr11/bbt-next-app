import React from "react";

const NoResults = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3] ">
      <div className="max-1920">
        <div className="container">
          <div className="text-center py-[5rem] border-t border-[#D9D9D9] lg:mt-[3rem] 3xl:mt-[4rem] 1xl:pt-[9rem] 1xl:pb-[12rem]">
            <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem]">
              <b>No results found</b> <br />
              With “Honda Bmx”
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
