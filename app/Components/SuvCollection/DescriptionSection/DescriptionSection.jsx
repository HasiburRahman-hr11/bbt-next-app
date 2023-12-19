import Image from "next/image";
import React from "react";

const DescriptionSection = () => {
  return (
    <section className="bg-black pt-20">
      <div className="container">
        <p className="text-neutral-300 text-center text-xl mb-10 leading-1.6 font-light">
          If you've lived by the 'Work sincerely and Play Harder' theory of life
          and it cuts across all aspects of your life including the kind of
          vehicle you drive, then, the Sports Utility Vehicle (SUV) is the ideal
          type for you. An unassuming carrier for you during the weekdays and a
          street hungry mammoth during the weekends, the top notch extravagant
          SUVs offer something to satisfy both the necessities.
        </p>
      </div>
      <div className="relative">
        <div className="absolute-center-x w-max h-max top-0">
          <Image
            src="/images/square-box-arrow-single.webp"
            alt="Arrow Icon"
            width="29"
            height="53"
            className="w-12 object-contain"
          />
        </div>
        <Image
          src="/images/suv/suv-neon-image.webp"
          alt="SUV Car"
          width="391"
          height="272"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default DescriptionSection;
