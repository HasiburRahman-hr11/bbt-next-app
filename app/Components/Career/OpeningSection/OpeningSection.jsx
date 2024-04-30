import React from "react";

const openings = [
  {
    title: "Sales Managers/ Supercar Enthusiasts",
    description:
      "Gurgaon, Ahmedabad, Bengaluru | 1-2 years Automobile Enthusiasts",
    type: "Full Time",
  },
  {
    title: "Data Analyst",
    description: "Gurugram | 1-2 years of Experience",
    type: "Full Time",
  },
  {
    title: "Creative Head/Creative Director",
    description: "Gurugram | 3-4 years of experience",
    type: "Full Time",
  },
  {
    title: "Graphic Designer",
    description:
      "Gurgaon, Mumbai, Ahmedabad, Bengaluru, Hyderabad | 1-2 years of experience",
    type: "Full Time",
  },
  {
    title: "Registrar for BIG BOY TOYZ Automotive University ( Gurgaon )",
    description: "Gurgaon | 2-6 Years Experience",
    type: "Full Time",
  },
  {
    title: "Sales Managers",
    description:
      "Gurgaon, Mumbai, Ahmedabad, Bengaluru, Hyderabad | 0 - 2 years of Experience",
    type: "Full Time",
  },
  {
    title: "Videographer and Photographer",
    description:
      "Gurgaon, Mumbai, Ahmedabad, Bengaluru, Hyderabad | 3+ years of experience",
    type: "Full Time",
  },
  {
    title: "Senior Graphic Designer",
    description:
      "Gurgaon, Mumbai, Ahmedabad, Bengaluru, Hyderabad | 3-5 years of experience",
    type: "Full Time",
  },
  {
    title: "Automobile Technician",
    description: "Gurgaon | 0-3 years of Experience",
    type: "Full Time",
  },
];

const OpeningSection = () => {
  return (
    <section className="bg-white py-[6rem] md:py-[8rem] lg:py-[10rem] xl:py-[12rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center md:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            current openings <b>at Big Boy Toyz</b>
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between mt-[4rem]">
            <div className="md:w-[55%] xl:w-[64%]">
              <ul className="">
                {openings.map((item, index) => (
                  <li
                    key={index}
                    className="border border-[#CACACA] py-[2rem] px-[2rem] rounded-[1rem] mb-[2rem] relative xl:mb-[3rem]"
                  >
                    <div className="pr-[5rem]">
                      <h6 className="text-[1.5rem] xl:text-[2rem] xl:tracking-tight 1xl:text-[2.2rem] 3xl:text-[3rem]">
                        {item.title}
                      </h6>
                      <p className="text-[1.1rem] 3xl:text-[1.6rem] py-[1rem]">
                        {item.description}
                      </p>
                      <span className="w-max inline-block px-[1.5rem] py-[0.5rem] rounded-[5px] text-[1.1rem] bg-[#F4F4F1]">
                        {item.type}
                      </span>
                    </div>
                    <div className="absolute right-[2rem] bottom-[2rem] w-[3rem] h-[3rem] border border-[#000] rounded-[5px] flex justify-center items-center p-[1rem] xl:w-[3.4rem] xl:h-[3.4rem] xl:p-[1.1rem]">
                      <img
                        src="/images/career/opening-plus-icon.webp"
                        alt="Plus Icon"
                        className="object-contain h-auto w-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[40%] xl:w-[29%]">
              <div className="bg-[#F4F4F1] py-[3rem] px-[2rem] rounded-[1.5rem] md:max-w-[45rem] md:ml-0 xl:px-[3rem] xl:py-[4rem]">
                <h2 className="flex-1 font-light [&>b]:font-[500] XL:[&>b]:block xl:leading-[1.3] leading-[1.1] pr-[2rem] tracking-[-1.2px] lg:tracking-[-2px] capitalize text-center xl:text-left">
                  are you looking for a <b>short term internship</b> interesting
                  career?
                </h2>
                <div className="text-center mt-[4rem] xl:mt-[8rem] 3xl:mt-[12rem]">
                  <a
                    href="mailto:"
                    className="w-full max-w-[32rem] mx-auto h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] tracking-tight font-medium xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[6rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[7.3rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
