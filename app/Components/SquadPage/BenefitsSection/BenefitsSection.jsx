import React from "react";

const uspList1 = [
  {
    icon: "/images/bbt-squad/squad-benefit-usp-1.webp",
    title: "Get instant offer",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-2.webp",
    title: "Get Paid on the Spot",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-3.webp",
    title: "Freedom to work",
  },
];

const uspList2 = [
  {
    icon: "/images/bbt-squad/squad-benefit-usp-4.webp",
    title: "Flexible timing",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-5.webp",
    title: "Pan India reach",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-6.webp",
    title: "Exposure on a larger scale",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-7.webp",
    title: "Sharpen communication skills",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-8.webp",
    title: "Be a part of the BBT Family",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-9.webp",
    title: "Support by BBT Professionals",
  },
];

const BenefitsSection = () => {
  return (
    <section className="pt-[6rem] bg-white">
      <div className="max-1920">
        <div>
          <div>
            <div className="px-[2.2rem] mb-[3.5rem]">
              <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem]">
                The BBT Squad <br /> Benefits- <b>Join The Party</b>{" "}
              </h2>
              <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion for automobiles without compromising on their
                existing work areas. You can exploit the opportunity of earning
                by procuring cars for us. It is possible to do this, by
                centralizing your independent freelance relationships,
                collaborating, quoting prices and using the BBT brand to take
                you to the next level.
              </p>
              <ul className="grid grid-cols-3 gap-[1.2rem] mt-[3rem]">
                {uspList1.map((usp, index) => (
                  <li
                    key={index}
                    className="bg-[#F3F3F3] py-[2rem] px-[1.5rem] text-center rounded-[1rem]"
                  >
                    <div className="flex justify-center">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="h-auto object-contain max-h-[2.4rem]"
                        width="57"
                        height="57"
                      />
                    </div>
                    <p className="text-[1.1rem] mt-[1.2rem] leading-[1.2]">
                      {usp.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/images/bbt-squad/squad-benefit-thumb-2.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover"
                width="685"
                height="858"
              />
            </div>
          </div>
          <div>
            <div className="px-[2.2rem] my-[3.5rem]">
              <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion for automobiles without compromising on their
                existing work areas. You can exploit the opportunity of earning
                by procuring cars for us.
              </p>
              <ul className="grid grid-cols-3 gap-[1.2rem] mt-[3rem]">
                {uspList2.map((usp, index) => (
                  <li
                    key={index}
                    className="bg-[#F3F3F3] py-[2rem] px-[1.5rem] text-center rounded-[1rem]"
                  >
                    <div className="flex justify-center">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="h-auto object-contain max-h-[2.4rem]"
                        width="57"
                        height="57"
                      />
                    </div>
                    <p className="text-[1.1rem] mt-[1.2rem] leading-[1.2]">
                      {usp.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/images/bbt-squad/squad-benefit-thumb-1.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover"
                width="685"
                height="858"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
