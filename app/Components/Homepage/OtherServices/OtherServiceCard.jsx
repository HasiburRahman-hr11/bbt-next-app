import React from "react";
import Image from "next/image";
import Link from "next/link";

const OtherServiceCard = () => {
  return (
    <div className="mr-8 lg:mr-10 xl:mr-20 1xl:mr-28 3xl:mr-32">
      <Link href="#">
        <div className="bg-white rounded-xl overflow-hidden">
          <Image
            src="/images/hp-service-item-1.webp"
            width="262"
            height="281"
            className="w-full object-cover block"
            alt="Service Image"
          />
          <div className="py-16 px-10 flex justify-between 1xl:py-20 2xl:py-24 2xl:px-16 3xl:py-28 3xl:px-20">
            <h3 className="font-medium text-4xl 2xl:text-[2.7rem] 3xl:text-6xl">Service Centre</h3>
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

export default OtherServiceCard;
