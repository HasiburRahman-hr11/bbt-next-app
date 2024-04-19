import Link from "next/link";
import React from "react";

const GuideCard = ({ data }) => {
  return (
    <Link
      href={`/guides/${data._id}`}
      className="relative block group common-car-item rounded-[4rem] 1xl:rounded-[5.5rem] 3xl:rounded-[5.8rem] overflow-hidden"
    >
      <div>
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt="Thumbnail"
          width="475"
          height="620"
          className="block w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full px-[4rem] py-[4rem] flex flex-col justify-end">
        <p className="font-light text-white text-[1.2rem] mb-[1rem] xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
          {data.publishedDate}
        </p>
        <h5 className="text-white w-full text-[2rem]  xl:text-[2.4rem] 1xl:text-[2.6rem] 2xl:text-[3rem] 3xl:text-[3.5rem]">
          {data.title}
        </h5>
      </div>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[2.5rem] right-[2.5rem] md:top-12 md:right-12 xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <img
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in"
          width="20"
          height="20"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

export default GuideCard;
