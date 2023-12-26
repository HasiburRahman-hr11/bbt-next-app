import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="bg-black text-white relative">
      <Image
        src="/images/sell-car/sell-car-banner-mob.webp"
        width="390"
        height="787"
        alt="Banner Image"
        className="w-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full text-center pt-44 pb-24 flex flex-col justify-between">
        <div>
          <div className="container">
            <h1 className="font-light tracking-tightest leading-1.3 text-[3.6rem]">
              Sell Your Luxury <br /> Car Within <strong>29 Minutes</strong> In
              3 Easy Steps.
            </h1>
            <ul className="flex flex-wrap mt-16">
              <li className="w-2/6 px-5 py-2 text-center border-l border-zinc-800 last-of-type:border-r">
                <Image
                  src="/images/sell-car/sell-banner-icon-1.webp"
                  alt="USP Icon"
                  width="24"
                  height="24"
                  className=" w-max-[2.3rem] object-contain inline-block"
                />
                <p className="font-light [&>strong]:font-normal text-xl mt-3">
                  <strong>151</strong> check <br /> point
                </p>
              </li>
              <li className="w-2/6 px-5 py-2 text-center border-l border-zinc-800 last-of-type:border-r">
                <Image
                  src="/images/sell-car/sell-banner-icon-2.webp"
                  alt="USP Icon"
                  width="24"
                  height="24"
                  className=" w-max-[2.3rem] object-contain inline-block"
                />
                <p className="font-light [&>strong]:font-normal text-xl mt-3">
                  Get offer in <strong>29 minutes</strong>
                </p>
              </li>
              <li className="w-2/6 px-5 py-2 text-center border-l border-zinc-800 last-of-type:border-r">
                <Image
                  src="/images/sell-car/sell-banner-icon-3.webp"
                  alt="USP Icon"
                  width="24"
                  height="24"
                  className=" w-max-[2.3rem] object-contain inline-block"
                />
                <p className="font-light [&>strong]:font-normal text-xl mt-3">
                  <strong>10000+ </strong> satisfied customers
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="flex items-center justify-between callBtnGroup overflow-hidden flex-wrap">
              <div className="callBtnLeft">
                <Link href="#" className="btn btnWhite btnSquare">
                  <Image
                    src="/images/square-btn-call-icon.webp"
                    width="16"
                    height="16"
                    alt="Call Icon"
                    className="object-contain w-7 mr-6 invert"
                  />
                  CALL NOW: 9999 9999 15
                </Link>
              </div>
              <div className="callBtnRight ml-4">
                <a href="#" className="btn smallCallBtn whatsAppBtn">
                  <Image
                    src="/images/whatsapp-btn-icon.webp"
                    width="18"
                    height="18"
                    alt="Call Icon"
                    className="object-contain w-9"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
