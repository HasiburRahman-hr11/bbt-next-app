import Link from "next/link";
import React from "react";

const ServiceCenter = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <div>
            <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.5px]">
              Dedicated <br /> <b>Service Center</b>
            </h2>
            <p className="font-light text-[1.2rem] leading-[1.3] w-[81%] mt-[1.5rem]">
              We believe in the philosophy, that If you can’t keep your
              customers Happy better not to do that business. At Big Boy Toyz
              the aim has always been to dream big and achieve great. Welcome to
              our showroom's tour.
            </p>
          </div>
          <div className="mt-[2rem]">
            <img
              src="/images/about-us/about-service-center-img.webp"
              alt="Thumbnail"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-[3rem]">
            <Link href="" className="bg-black text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] h-[5rem]">View Our Workshops</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
