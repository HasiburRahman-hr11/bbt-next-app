import Image from "next/image";
import React from "react";
import Link from "next/link";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";

const SliderItem = ({data}) => {
  return (
    <Link
      href={`/cars/${data._id}`}
      className="sm:mx-3 sm:bg-white lg:mx-8 block transition-all ease-in-out common-car-item duration-500"
    >
      <div
        className={`px-14 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 3xl:px-20 3xl:pt-12 3xl:pb-16`}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8`}
        >
          Reg.Year : {data.registrationYear}
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-[2.8rem] 3xl:mt-8">
          {data.title}
        </h4>
        <p className="text-[1.8rem] font-medium sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.875rem] lg:mt-2 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6 3xl:text-[2.2rem] 3xl:mb-10">
          ₹ {data.price}
        </p>

        {/* ---- Common Components ---- */}
        <CommonInfoUsp data={data} />
        {/* ---- Common Components ---- */}
        
      </div>
      <div className=" overflow-hidden">
        <Image
          src={data.thumbnail}
          alt="Icon"
          width="390"
          height="285"
          className="object-cover w-full block h-full"
        />
      </div>
    </Link>
  );
};

export default SliderItem;
