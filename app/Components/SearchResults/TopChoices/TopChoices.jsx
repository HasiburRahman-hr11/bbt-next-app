import React from "react";
import TopBrands from "./TopBrands";
import TopCategories from "./TopCategories";

const TopChoices = () => {
  return (
    <section className="bg-white py-[5rem] md:py-[7rem] border-t border-[#D9D9D9] md:border-0 lg:py-[8rem] 1xl:py-[10rem] 2xl:py-[12rem] 3xl:py-[14rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center mb-[3rem] xl:flex xl:justify-between xl:text-left xl:mb-[5rem] 2xl:mb-[8rem] 3xl:mb-[10rem]">
            <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem] 1xl:text-[3.2rem] xl:[&>b]:font-[500] 1xl:leading-[1.2] 2xl:text-[3.6rem] 3xl:text-[4.5rem] xl:flex-1 [&>br]:hidden xl:[&>br]:block">
              You May Also Like <br /> <b>Explore Top Choices</b>
            </h2>
            <p className="hidden xl:block xl:w-[53%] font-light text-[1.15rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:w-[55%]">
              BBT started in 2009 as a benchmark model for the Pre-Used, or how
              we prefer to see it as, Pre-Loved Car Brand. The mission was
              simple, direct and drove effect - delivering a new dimension of
              luxury while standardising & raising platforms for the used car
              market in India.
            </p>
          </div>
          <TopBrands />
          <TopCategories />
        </div>
      </div>
    </section>
  );
};

export default TopChoices;
