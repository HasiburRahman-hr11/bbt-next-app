import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <section className="text-white bg-black">
      <div className="relative">
        <div>
          <Image
            src="/images/hp-banner-desk.webp"
            alt="Banner Image"
            width="1920"
            height="1100"
            className="hidden md:block"
          />
          <Image
            src="/images/compare/compare-page-banner-mob.webp"
            alt="Banner Image"
            width="390"
            height="673"
            className="block w-full md:hidden"
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-48 pb-24">
          <div className="text-center px-12">
            <p className="text-lg font-light">Compare Cars</p>
            <h1 className="font-light text-3.3rem tracking-tighter leading-1.4 mt-5 [&>strong]:font-normal">
              <strong>Confused?</strong> Easy way to compare cars
            </h1>
          </div>
          <div
            className={`text-center flex flex-col justify-center items-center`}
          >
            <Image
              src="/images/banner-scroll-icon-white.webp"
              alt="Scroll Down"
              width="19"
              height="29"
              className="inline-block object-contain w-8 1xl:w-6"
            />
            <span className="uppercase mt-5 text-base">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
