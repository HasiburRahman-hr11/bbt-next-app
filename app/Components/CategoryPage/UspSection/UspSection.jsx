"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const uspList = [
  {
    title: "Go Anywhere ",
    icon: "/images/suv/suv-usp-icon-1.webp",
    description:
      "Utilizes a 4×4/ All Wheel Drive framework that transmits power to each of the four wheels for happier off road mobility.",
  },
  {
    title: "More Space ",
    icon: "/images/suv/suv-usp-icon-3.webp",
    description:
      "The greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travellers.",
  },
  {
    title: "More Comfort ",
    icon: "/images/suv/suv-usp-icon-2.webp",
    description:
      "The higher seating position makes the ride significantly pleasant and gives better on-street perceivability.",
  },
  {
    title: "Feel Like A King ",
    icon: "/images/suv/suv-usp-icon-4.webp",
    description:
      "Owning a SUV ensures that you feel like the King of the Road while driving around the town 3-feet over the ground.",
  },
];

const UspSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-20 md:py-28 md:bg-[#F3F3F3] xl:py-40 3xl:py-[15rem]">
      <div className="container">
        <div
          className="lg:flex lg:flex-wrap lg:justify-between"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="w-full lg:w-[50%] xl:w-[56%]">
            <h2 className="mb-7 tracking-tighter leading-1.2 md:mb-14 lg:leading-[1.4] xl:leading-[1.2]">
              Keep Pre-owned Luxury <br /> SUV as an Option
            </h2>
            <div className="[&>p]:text-xl [&>p]:font-[300] text-justify [&>p]:leading-1.6 xl:[&>p]:text-[1.1rem] xl:[&>p]:tracking-[-0.1px] 1xl:[&>p]:text-[1.22rem] 2xl:[&>p]:text-[1.3rem] 2xl:[&>p]:leading-[1.5] 3xl:[&>p]:text-[1.6rem]">
              <p>
                The SUV puts romping capacities before style, execution or
                mileage. The engineering of SUVs is done to perfection and they
                can break class barriers easily. For example, most SUVs are
                customarily rough terrain vehicles, but the cutting edge of the
                SUVs is their extravagance and ride in comfort feel matching
                numerous advanced cars. By the way, there are a couple of
                carefully rough terrain fit SUVs structured and created by some
                eminent producers of vehicles in India and in different parts of
                the world, specifically Mercedes, Audi, Toyota, Range Rover,
                BMW, Hummer, Cadillac, Porsche at al, which give genuine romping
                capacities to the adventure seekers.
              </p>
              <br />
              <p>
                Owning a superior SUV is a fantasy for many car lovers, yet not
                all can bear the cost of it. In any such case, the enormous
                universe of used SUV’s is the rescue plan. Big Boy Toyz is one
                such player in showcasing the used extravagant vehicles , which
                gives easy access to guaranteed and verified used outlandish
                SUVs of your fantasy, and is the best case scenario cost wise.
                In any case, before you delve deep in your pocket to purchase a
                pre-owned luxurious SUV or look for an enhanced version, check
                out the four fundamental reasons why owning a SUV is a gift you
                give to yourself:
              </p>

              <div className="hidden md:block max-w-[8rem] md:mt-16 3xl:max-w-[12.3rem] 3xl:mt-[6rem]">
                <Image
                  src="/images/circle-arrow-black.webp"
                  width="124"
                  height="124"
                  alt="Arrow Icon"
                  className="w-full inline-block object-contain h-auto "
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] xl:w-[36%]">
            <ul className="mt-6 md:mt-8 md:flex md:flex-wrap md:justify-between lg:pb-[5rem] lg:mt-0 lg:[&>*:nth-child(even)]:translate-y-[5rem]">
              {uspList.map((usp, ind) => (
                <li
                  key={ind}
                  className="flex flex-wrap items-center justify-between py-7 md:w-[48%] md:bg-white md:mt-8 md:flex-col md:items-start md:py-20 md:px-10 xl:py-[3rem] 2xl:py-[4.5rem] 2xl:pl-[3rem] 2xl:pr-[5rem] 1xl:w-[46.5%] 1xl:mt-[3rem] 3xl:mt-[4rem] transition-all duration-500 ease-in-out hover:shadow-xl cursor-pointer"
                >
                  <div className="w-20">
                    <Image
                      src={usp.icon}
                      alt="Icon"
                      width="44"
                      height="44"
                      className="object-contain max-h-16 xl:max-h-[3.5rem] 3xl:max-h-[4.5rem]"
                    />
                  </div>
                  <div className="pl-6 flex-1 md:pl-0 md:mt-12 xl:mt-[2rem]">
                    <h6 className="text-1.4rem xl:text-[1.2rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] font-[600] tracking-[-0.5px] 3xl:text-[1.7rem]">
                      {usp.title}
                    </h6>
                    <p className="text-xl mt-3 tracking-tight xl:text-[1.05rem] xl:leading-[1.2] 1xl:text-[1.15rem] 2xl:text-[1.2rem] 3xl:text-[1.4rem] 3xl:leading-[1.5] font-[400]">
                      {usp.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
