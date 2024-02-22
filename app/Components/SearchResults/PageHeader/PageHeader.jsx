import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageHeader = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="py-12 xl:py-24 md:border-b md:border-[#D9D9D9]">
          <p className="flex flex-wrap items-center font-normal">
            <Link
              href="/"
              className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]"
            >
              Home
            </Link>
            <Image
              src="/images/breadcrumb-arrow.webp"
              className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
              width="6"
              height="11"
              alt="Arrow Icon"
            />
            <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
              Search
            </span>
          </p>
          <div className="flex flex-wrap justify-between items-center mt-5 xl:mt-16 1xl:mt-[3.5rem] 3xl:mt-[5rem]">
            <h2 className="text-3xl leading-0 1xl:text-[4rem]  3xl:text-[4.5rem] 1xl:tracking-tightest">
              Search By “ Audi ”
            </h2>
            <p className="text-lg leading-0 1xl:text-[2rem] 3xl:text-[2.5rem]">
              Total 136 Results Found
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
