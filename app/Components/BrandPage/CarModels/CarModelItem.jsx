import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarModelItem = ({data}) => {
  return (
    <div className="mr-8 lg:mr-10 1xl:mr-12 3xl:mr-16">
      <Link href={data?.link}>
        <div className="bg-white rounded-xl overflow-hidden">
          <Image
            src={data?.image}
            width="262"
            height="281"
            className="w-full object-cover block"
            alt="Service Image"
          />
          <div className="py-10 px-10 flex justify-between 1xl:py-14 2xl:py-20 2xl:px-16 3xl:px-20">
            <h3 className="font-medium text-[2.1rem] 2xl:text-[2.7rem] 3xl:text-6xl">
              {data?.title}
            </h3>
            <Image
              src="/images/showroom-location-arrow.webp"
              width="12"
              height="12"
              className="w-7 object-contain 3xl:w-12"
              alt="Service Image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarModelItem;
