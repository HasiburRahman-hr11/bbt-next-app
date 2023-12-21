import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="bg-black text-white relative pt-24">
      <Image
        src="/images/sell-car/sell-car-testimonial-img.webp"
        width="390"
        height="723"
        alt="Testimonial Image"
        className="w-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full text-center pt-24">
        <div className="container">
          <div className="flex justify-center">
            <Image
              src="/images/sell-testimonial-quote.webp"
              width="28"
              height="25"
              className="w-[2.8rem] object-contain inline-block"
            />
          </div>
          <h2 className="font-light tracking-tighter leading-1.4 my-12">
            BBT helped me to <br /> sell my used Audi S5 it was a wonderful experience.
          </h2>
          <p className="text-lg font-light uppercase">GAURAV SHARMA</p>
          <p className="text-sm font-light uppercase mt-2">GM MICROSOFT</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
