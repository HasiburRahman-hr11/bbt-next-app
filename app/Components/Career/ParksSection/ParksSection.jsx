import React from "react";

const parks = [
  {
    icon: "/images/career/park-icon-1.webp",
    title: "Travel <b>Allowance</b>",
  },
  {
    icon: "/images/career/park-icon-2.webp",
    title: "Medical <b>Leave</b>",
  },
  {
    icon: "/images/career/park-icon-3.webp",
    title: "Tranquil <b>Work Environment</b>",
  },
  {
    icon: "/images/career/park-icon-4.webp",
    title: "Performance <b>Bonus Benefits</b>",
  },
  {
    icon: "/images/career/park-icon-5.webp",
    title: "Awards & <b>Achievements</b>",
  },
];

const ParksSection = () => {
  return (
    <section className="bg-[#161616] py-[6rem] md:py-[8rem] lg:py-[10rem] xl:py-[14rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light text-white leading-[1.2] tracking-tighter mt-[1rem] text-center xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Some of the{" "}
            <b>
              best <br /> perks at bbt
            </b>
          </h2>
          <div className="mt-[3rem] max-w-[400px] lg:max-w-[560px] mx-auto lg:mt-[5rem]">
            <img
              src="/images/career/park-img.webp"
              alt="Thumbnail"
              className="w-full object-contain h-auto"
            />
          </div>
          <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1rem] text-white sm:grid-cols-3 md:grid-cols-4 lg:mt-[2rem] lg:grid-cols-5 xl:gap-x-[2rem]">
            {parks.map((park, index) => (
              <li
                key={index}
                className="bg-[#212121] px-[1.5rem] py-[1.5rem] rounded-[0.7rem] sm:pr-[1rem] lg:py-[2.5rem] xl:py-[3.5rem] xl:px-[3rem] xl:rounded-[1.5rem] 1xl:pl-[4rem] 1xl:py-[4rem] 3xl:py-[5rem] 3xl:px-[4rem]"
              >
                <div className="flex items-center md:flex-col md:justify-start md:items-start">
                  <div className="w-[2.5rem] sm:w-[3rem] md:w-[2.5rem] md:h-[4rem] xl:w-[3rem] 3xl:w-[4.5rem] md:ml-0 md:max-h-[3rem]">
                    <img
                      src={park.icon}
                      alt="Icon"
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <div className="flex-[1] pl-[1rem] sm:pl-[1.5rem] md:w-full md:pl-0 md:mt-[1rem] xl:mt-[3rem]">
                    <h6
                      className="text-[1.1rem] font-light capitalize [&>b]:font-medium [&>b]:block sm:text-[1.3rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 3xl:text-[2.4rem]"
                      dangerouslySetInnerHTML={{ __html: park.title }}
                    ></h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ParksSection;
