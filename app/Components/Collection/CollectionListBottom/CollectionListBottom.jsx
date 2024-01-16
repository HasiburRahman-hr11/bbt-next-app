import React from "react";

// Dummy Data
import { cars } from "../../../../public/data/dummyData";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";

const CollectionListBottom = () => {
  const newCars = cars.slice(0, 3);
  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pt-24 lg:pb-36">
      <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] md:pb-20 mx-auto lg:w-[83%] lg:mb-20">
        {newCars.map((item) => (
          <div key={item._id} className="w-full md:w-[49%] xl:w-[31%]">
            <CollectionItem data={item} />
          </div>
        ))}
      </div>
      <div className="container">
        <div className="hidden lg:block h-1 border-t border-black"></div>
        <div className="px-3 pb-20 lg:pb-0 lg:flex lg:justify-center lg:mt-[-3rem] lg:bg-[#f3f3f3] lg:px-10 lg:w-max lg:mx-auto">
          <button className="bg-transparent font-medium text-black flex justify-center items-center border border-black rounded-lg py-7 text-2xl text-center w-full hover:bg-black hover:text-white transition-all duration-300 ease-in lg:inline-flex lg:w-[20rem] lg:h-[5rem] lg:rounded-[4rem]">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionListBottom;
