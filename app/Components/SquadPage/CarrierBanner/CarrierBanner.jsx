import React from "react";
import Link from 'next/link';

const CarrierBanner = () => {
  return (
    <section>
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/bbt-squad/squad-carrier-banner-mobile.webp"
            alt="Background Image"
            className="w-full object-cover h-full block"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/bbt-squad/squad-carrier-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto block min-h-[400px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full w-full flex-col justify-between py-[8rem] sm:justify-center">
              <div className="text-center text-white sm:text-left">
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-1px]">
                Looking For <b>A Full Time Carrier At BBT</b>
                </h2>
                <p className="font-light text-[1.2rem] mt-[1.5rem] max-w-[29.5rem] mx-auto">
                BBT Squad is a new platform inviting car enthusiasts to pursue their passion for automobiles without compromising on their existing work areas. You can exploit the opportunity of earning by procuring cars for us.
                </p>
              </div>
              <div className="text-center sm:text-left sm:mt-[3rem] 3xl:mt-[5rem]">
                <Link href="/bbt-squad" className="w-full max-w-[31rem] h-[5rem] flex justify-center items-center text-[1.4rem] bg-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium">View Openings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrierBanner;
