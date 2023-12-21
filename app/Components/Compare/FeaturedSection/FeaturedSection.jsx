import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="container">
        <Link href="#" className="relative block group">
          <div>
            <Image
              src="/images/compare/compare-browse-wallpaper.webp"
              alt="BBT Wallpapers"
              width="335"
              height="300"
              className="block w-full h-full rounded-3rem"
            />
          </div>
          <h5 className="text-white absolute bottom-9 left-12">
            Browse Wallpapers
          </h5>
          <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-8 right-8 group-hover:bg-black transition-all duration-500 ease-in">
            <Image
              src="/images/showroom-location-arrow.webp"
              className="object-contain w-4 2xl:w-6 3xl:w-8 group-hover:invert transition-all duration-500 ease-in"
              width="20"
              height="20"
              alt="Arrow Icon"
            />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSection;
