import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="bg-black text-white text-center py-24">
      <div className="container">
        <div className="flex items-center justify-center">
          <Image
            src="/images/bbt-logo-header.webp"
            alt="BBT Logo"
            width="23"
            height="15"
            className="w-9 object-contain"
          />
          <p className="text-base font-normal ml-4 [&>strong]:font-semibold">
            {" "}
            <strong>BBT</strong> Recommender
          </p>
        </div>
        <h2 className="font-light [&>strong]:font-normal mt-4 mb-5 leading-1.2 tracking-tighter">
          Getting <strong>expert advice</strong> <br /> on luxury cars.
        </h2>
        <p className="text-xl font-light">Let us help you find the dream car</p>
        <div className="flex justify-center my-10">
          <Image
            src="/images/compare/compare-contact-img.webp"
            alt="Contact Image"
            width="185"
            height="200"
            className="object-contain w-72"
          />
        </div>
        <div className="px-10">
            <Link href="#" className="btn btnWhite roundedBtn">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
