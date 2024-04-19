import React from "react";
import Link from "next/link";

const CollectionItem = () => {
  return (
    <Link
      href="/products/114325"
      className="mr-9 bg-white lg:mx-4 block transition-all ease-in-out hover:shadow-lg 1xl:mx-6 2xl:mx-8 3xl:mx-[2.5rem]"
    >
      <div
        className={`bg-white px-8 pt-[2rem] pb-[2rem] sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 xl:px-[3rem] 2xl:py-10 3xl:pt-12 1xl:px-12 3xl:py-[3rem] 3xl:px-[4.8rem]`}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-8 3xl:py-[0.45rem] 3xl:rounded-[2rem] 3xl:leading-[1]`}
        >
          Reg.Year : 2022
        </p>
        <h4 className="mt-4 text-1.9xl 3xl:text-[2.5rem] 3xl:tracking-[-0.15rem]">
          Rolls-Royce Ghost Series II
        </h4>
        <p className="font-medium text-1.6xl mt-2 3xl:text-[2.5rem] 3xl:mt-[0.3rem] 3xl:tracking-[-0.15rem]">
          ₹ 4,99,00,000
        </p>

        <ul className="flex flex-wrap mt-8">
          <li className="w-3/6 px-7 border-l border-[#CFCFCF] xl:w-2/6 xl:px-0 xl:border-l-0">
            <img
              src="/images/km-icon-black.webp"
              alt="Icon"
              width="24"
              height="25"
              className={`object-contain h-5 3xl:h-auto xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.16rem]`}
            />
            <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">Kilometers Driven</p>
            <h6 className="text-[1.3rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">3500 km</h6>
          </li>
          <li className="w-3/6 px-7 border-l border-[#CFCFCF] border-r xl:border-r-0 xl:w-2/6 xl:px-[1rem] xl:pl-[1.5rem]">
            <img
              src="/images/gas-icon-black.webp"
              alt="Icon"
              width="24"
              height="25"
              className={`object-contain h-5 3xl:h-auto xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.16rem]`}
            />
            <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">Fuel / Gas Type</p>
            <h6 className="text-[1.3rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">Petrol</h6>
          </li>
          <li className="w-3/6 px-7 border-l border-[#CFCFCF] hidden xl:block xl:w-2/6 xl:pl-[1.5rem] xl:pr-0">
            <img
              src="/images/gas-icon-black.webp"
              alt="Icon"
              width="24"
              height="25"
              className={`object-contain h-5 3xl:h-6 xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.13rem]`}
            />
            <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">Registration State</p>
            <h6 className="text-[1.3rem] xl:texauto-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.6rem]">Petrol</h6>
          </li>
        </ul>
      </div>
      <div className=" overflow-hidden">
        <img
          src="/images/detail-page/detail-related-car-1.webp"
          alt="Icon"
          width="390"
          height="285"
          className="object-cover w-full block h-full transition-all ease-in-out duration-500 hover:scale-[1.2]"
        />
      </div>
    </Link>
  );
};

export default CollectionItem;
