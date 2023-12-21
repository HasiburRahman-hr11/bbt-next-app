import React from "react";
import Image from "next/image";
import Link from "next/link";

const carList = [
  {
    url: "#",
    image: "/images/sell-car/sell-car-img-1.webp",
    title: `I want to <strong>sell my used Audi</strong> car`,
  },
  {
    url: "#",
    image: "/images/sell-car/sell-car-img-2.webp",
    title: `I want to <strong>sell my used Mercedes Benz</strong> Car`,
  },
  {
    url: "#",
    image: "/images/sell-car/sell-car-img-3.webp",
    title: `I want to <strong>sell my used BMW</strong> Car`,
  },
  {
    url: "#",
    image: "/images/sell-car/sell-car-img-4.webp",
    title: `I want to <strong>sell my used Land Rover</strong> Car`,
  },
  {
    url: "#",
    image: "/images/sell-car/sell-car-img-5.webp",
    title: `I want to <strong>sell my used Porsche</strong> Car`,
  },
];

export const SellCarListItem = ({ data }) => {
  return (
    <Link
      href="#"
      className="relative flex justify-between items-center w-full mt-6 rounded-md pt-16 pb-8 px-7 bg-[#212121]"
    >
      <Image
        src="/images/showroom-location-arrow.webp"
        alt="Arrow Icon"
        width="13"
        height="13"
        className="w-5 object-contain absolute top-6 right-6 invert"
      />
      <p
        className="w-3/5 pr-5 text-1.6xl font-light [&>strong]:font-normal"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></p>
      <div className="w-2/5 ml-auto text-right">
        <Image
          src={data.image}
          alt="Car Image"
          width="141"
          height="66"
          className="w-full object-contain"
        />
      </div>
    </Link>
  );
};

const SellCarList = () => {
  return (
    <section className="bg-[#161616] text-white py-24">
      <div className="container">
        <h2 className="font-light [&>strong]:font-normal tracking-tighter leading-1.3 mb-14">
          Which <strong>Luxury Car</strong> <br /> Would You Like To Sell.
        </h2>
        {carList.map((item, ind) => (
          <SellCarListItem key={ind} data={item} />
        ))}
      </div>
    </section>
  );
};

export default SellCarList;
