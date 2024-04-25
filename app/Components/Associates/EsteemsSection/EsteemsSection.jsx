import React from "react";
import { esteems } from "../../../../public/data/dummyData";

const EsteemsSection = () => {
  return (
    <section className="bg-white py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden text-center md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Few of <b>our esteems</b>
            </h2>
            <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] md:mt-0 lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
              Our list of Associates share a common vision for Automotive
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          {esteems && esteems.length > 0 ? (
            <ul className="grid grid-cols-2 gap-[2rem]">
                {esteems.map((item , index)=> (
                    <li key={item} className="mt-[2rem]">
                        <div className="border border-[#AAAAAA] rounded-[1rem] p-[1rem] flex justify-center items-center">
                            <img src={item.thumbnail} alt="" className="block w-full h-auto object-contain" />
                        </div>
                        <div className="pt-[1rem]">
                            <p className="text-[1rem]">{item.category}</p>
                            <h6 className="text-[1.4rem] leading-[1.2]">{item.title}</h6>
                        </div>
                    </li>
                ))}
            </ul>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Esteems Found!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EsteemsSection;
