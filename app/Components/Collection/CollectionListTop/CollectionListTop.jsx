import React from "react";

// Dummy Data
import { cars } from "../../../../public/data/dummyData";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";

const CollectionListTop = () => {
  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20">
        {cars.map((item) => (
          <div key={item._id} className="w-full md:w-[49%] xl:w-[31%]">
            <CollectionItem data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default CollectionListTop;
