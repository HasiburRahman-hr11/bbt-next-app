import Image from "next/image";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ pageTitle }) => {
  return (
    <p className="flex flex-wrap items-center">
      <Link href="/" className="text-lg md:text-xl xl:text-[1.2rem] 3xl:text-[1.4rem]">
        Home
      </Link>
      <Image src="/images/breadcumb-arrow.webp" className="object-contain w-2 xl:w-3 inline-block mx-2 h-auto" width="6" height="11" alt="Arrow Icon" />
      <span className="text-lg md:text-xl xl:text-[1.2rem] 3xl:text-[1.4rem]">{pageTitle}</span>
    </p>
  );
};

export default BreadCrumb;
