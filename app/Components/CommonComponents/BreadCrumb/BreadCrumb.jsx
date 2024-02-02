import Image from "next/image";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ pageTitle }) => {
  return (
    <p className="flex flex-wrap items-center">
      <Link href="/" className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
        Home
      </Link>
      <Image src="/images/breadcrumb-arrow.webp" className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]" width="6" height="11" alt="Arrow Icon" />
      <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">{pageTitle}</span>
    </p>
  );
};

export default BreadCrumb;
