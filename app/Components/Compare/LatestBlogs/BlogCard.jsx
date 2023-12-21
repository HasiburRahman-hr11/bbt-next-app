import React from "react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="mr-6">
      <div className="bg-white px-8 py-10">
        <p className="text-base font-300">22 Sep 2023</p>
        <h4 className="text-[1.7rem] my-4">
          Hyundai Will Sell 70 Street-Legal Examples Of Its Dreamy Angular EV
          Sports Car
        </h4>
        <p className="text-base font-300">
          Hyundai claims the concept produces 671 horsepower from a set of
          electric motors and a small-ish high-voltage battery.
        </p>
      </div>
      <div>
        <Image
          src="/images/compare/compare-blog-img.webp"
          alt="Blog Post THumbnail"
          width="270"
          height="152"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BlogCard;
