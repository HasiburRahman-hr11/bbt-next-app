import React from "react";

const ServiceItem = ({ data, toggleModal }) => {
  return (
    <div
      className="relative rounded-[2rem] overflow-hidden group mt-[2rem]"
      onClick={() => {
        toggleModal(data._id);
      }}
    >
      <div>
        <img src={data.image} alt="" className="w-full block object-cover" />
      </div>
      <div className="w-full h-full bg-[rgba(0,0,00,.3)] absolute left-0 top-0 flex flex-col justify-end px-[2rem] py-[1rem] text-white">
        <h3 className="capitalize text-[1.7rem] 3xl:text-[3.2rem]">
          {data.title}
        </h3>
        <div className="h-[0] overflow-hidden pt-[1.5rem] group-hover:h-auto text-[1.2rem] font-light">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
