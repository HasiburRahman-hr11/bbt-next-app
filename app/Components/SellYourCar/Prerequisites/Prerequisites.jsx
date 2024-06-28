import React from "react";

const prerequisites = [
  {
    icon: "/images/sell-your-car/prerequisites-icon-1.webp",
    title: `No Accidental <b>History</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-2.webp",
    title: `No <br> <b>litigations</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-3.webp",
    title: `No Odometer  <b>Tampering</b>`,
    isChecked: false,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-4.webp",
    title: `National Crime  <b>Record Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-5.webp",
    title: `Model 2015 & above  <b>& KMS driven less than 30,000 only.</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-6.webp",
    title: `Service History <b>Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-7.webp",
    title: `Insurance History <b>Check</b>`,
    isChecked: true,
  },
  {
    icon: "/images/sell-your-car/prerequisites-icon-8.webp ",
    title: `Physical <br> <b>Evaluation</b>`,
    isChecked: true,
  },
];

const Prerequisites = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center lg:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
              Prerequisites to sell your <b>luxury car at BBT</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for <br /> Automotive
              Excellence.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1.5rem] mt-[4rem]">
            {prerequisites.map((item, index) => (
              <li
                key={index}
                className="bg-white px-[1.5rem] py-[2rem] rounded-[1.5rem] flex flex-col justify-between min-h-[16rem]"
              >
                <div className="flex justify-between">
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-full max-w-[3rem] 3xl:max-w-[8rem] 3xl:max-h-[8rem] object-contain h-auto"
                  />
                  <img
                    src={
                      item.isChecked
                        ? "/images/sell-your-car/prerequisites-tick.webp"
                        : "/images/sell-your-car/prerequisites-cross.webp"
                    }
                    alt={item.isChecked ? "Checked" : "Not Checked"}
                    className="w-[2.5rem] h-auto object-contain"
                  />
                </div>
                <p dangerouslySetInnerHTML={{__html:item.title}} className="text-[1.3rem] font-normal [&>br]:font-medium mt-[2rem]"></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;
