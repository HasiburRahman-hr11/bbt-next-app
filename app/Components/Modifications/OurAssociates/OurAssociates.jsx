import React from "react";

const associates = [
  {
    icon:"/images/modifications/brand-1.webp",
    name:"yokohama"
  },
  {
    icon:"/images/modifications/brand-2.webp",
    name:"jbl"
  },
  {
    icon:"/images/modifications/brand-3.webp",
    name:"fabula"
  },
  {
    icon:"/images/modifications/brand-4.webp",
    name:"jotun"
  },
  {
    icon:"/images/modifications/brand-5.webp",
    name:"harman"
  },
  {
    icon:"/images/modifications/brand-6.webp",
    name:"b&o"
  },
  {
    icon:"/images/modifications/brand-7.webp",
    name:"hankook"
  },
  {
    icon:"/images/modifications/brand-8.webp",
    name:"yokohama"
  },
  {
    icon:"/images/modifications/brand-9.webp",
    name:"firelli"
  },
  {
    icon:"/images/modifications/brand-10.webp",
    name:"borbet"
  },
  {
    icon:"/images/modifications/brand-11.webp",
    name:"enkei"
  },
  {
    icon:"/images/modifications/brand-12.webp",
    name:"magnaflow"
  },
  {
    icon:"/images/modifications/brand-13.webp",
    name:"borla"
  },
  {
    icon:"/images/modifications/brand-14.webp",
    name:"quick silver"
  },
  {
    icon:"/images/modifications/brand-15.webp",
    name:"seibon"
  }
]

const OurAssociates = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              We Work Only With The <b>Best Of The Industry</b>
            </h2>
            <p className="text-[1.5rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden sm:[&>br]:block">
              Our list of Associates share a common vision for Automotive
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-[1.5rem] gap-y-[2rem] mt-[4rem] items-stretch">
            {associates.map((item , index)=> (
              <div className="bg-white px-[2rem] py-[3rem] rounded-[1rem] flex justify-center items-center h-[inherit] min-h-[11rem]" key={index}>
                <img src={item.icon} alt="Logo" className="w-full h-auto object-contain inline-block max-h-[5rem]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAssociates;
