import Link from "next/link";
import React from "react";

const LifeStyle = () => {
  return (
    <section className="bg-[#F3F3F3] py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <div>
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem]">
              Be a Part of The <br /> <b>BBT Fun, Work & Lifestyle</b>
            </h2>
          </div>
          <div className="pt-[1.5rem]">
            <div>
              <img
                src="images/bbt-squad/squad-lifestyle-2.webp"
                alt="Lifestyle Image"
                className="w-full object-cover h-auto"
                width="510"
                height="344"
              />
            </div>
            <div className="flex flex-wrap justify-between my-[1.8rem]">
              <div className="w-[47.6%]">
                <img
                  src="images/bbt-squad/squad-lifestyle-1.webp"
                  alt="Lifestyle Image"
                  className="w-full object-cover h-auto"
                  width="505"
                  height="720"
                />
              </div>
              <div className="w-[47.6%]">
                <img
                  src="images/bbt-squad/squad-lifestyle-4.webp"
                  alt="Lifestyle Image"
                  className="w-full object-cover h-auto"
                  width="505"
                  height="720"
                />
              </div>
            </div>
            <div>
              <img
                src="images/bbt-squad/squad-lifestyle-3.webp"
                alt="Lifestyle Image"
                className="w-full object-cover h-auto"
                width="510"
                height="344"
              />
            </div>
          </div>

          <div className="mt-[2.5rem]">
            <Link
              href="#"
              className="w-full h-[5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
