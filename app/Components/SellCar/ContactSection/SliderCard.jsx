import React from "react";
import Image from "next/image";

const SliderCard = () => {
  return (
    <div className="mr-6 px-5 py-12 border border-[#F1F1F1] rounded-xl">
      <div className="mb-8">
        <Image
          src="/images/sell-car/sell-authorized-mark.webp"
          alt="Authorized Mark"
          width="17"
          height="17"
          className="object-contain w-7"
        />
      </div>
      <p className="font-light [&>strong]:font-normal text-xl tracking-tight">
        One of the biggest and most <strong>trusted brand</strong> in the
        industry.
      </p>
    </div>
  );
};

export default SliderCard;
