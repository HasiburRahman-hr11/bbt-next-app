import React from "react";

const ServiceItem = ({ data, toggleModal }) => {
  return (
    <div
      className="relative rounded-[2rem] overflow-hidden group mt-[2rem] xl:mt-[3rem]"
      onClick={() => {
        toggleModal(data._id);
      }}
    >
      <div>
        <img src={data.image} alt="" className="w-full block object-cover" />
      </div>
      <div className="w-full h-full bg-[rgba(0,0,00,.3)] absolute left-0 top-0 flex flex-col justify-end px-[2rem] py-[1rem] text-white lg:pb-[2rem] lg:pl-[3rem] xl:pl-[4rem]">
        <h3 className="capitalize text-[1.7rem] xl:text-[2.2rem] 3xl:text-[3.2rem]">
          {data.title}
        </h3>
        <div className="h-[0] overflow-hidden pt-[1.5rem] group-hover:h-auto text-[1.2rem] font-light transition-all duration-500 xl:text-[1.3rem] 3xl:text-[1.9rem]">
          <div>
          {data.description}
          </div>
          <div className="hidden xl:block max-w-[2.5rem] 3xl:max-w-[3.7rem] mt-[1.5rem]">
            <img src="/images/modifications/service-arrow.webp" alt="" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
