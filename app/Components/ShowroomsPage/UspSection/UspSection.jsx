import React from "react";

const uspList = [
  {
    title: "Automated <b>Technology</b>",
    icon: "/images/showroom-page/showroom-usp-icon-1.webp",
  },
  {
    title: "Guest  <b>Lounge Area</b>",
    icon: "/images/showroom-page/showroom-usp-icon-2.webp",
  },
  {
    title: "Covid Protective  <b>Measures</b>",
    icon: "/images/showroom-page/showroom-usp-icon-3.webp",
  },
  {
    title: "State of the art  <b>Interiors</b>",
    icon: "/images/showroom-page/showroom-usp-icon-4.webp",
  },
];

const UspSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <div className="px-[2rem]">
            <div className="text-center">
              <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem]">
                With State of The Art <br /> <b>Infrastructure</b>{" "}
              </h2>
              <p className="text-[1.2rem] mt-[1.5rem] font-light">
                At BBT, we strive to provide the quickest and most <br /> hassle
                free car selling service available.
              </p>
            </div>
            <ul className="flex justify-between flex-wrap mt-[2rem] list-none">
              {uspList.map((item, index) => (
                <li
                  className="bg-white w-[47.5%] mt-[2rem] pt-[3rem] pb-[2rem] pl-[2rem] pr-[1rem] rounded-[1rem]"
                  key={index}
                >
                  <div className="h-[2.8rem]">
                  <img
                    src={item.icon}
                    alt="Icon"
                    width="32"
                    height="32"
                    className="object-contain h-auto max-w-[3.2rem] max-h-[2.77rem] w-full"
                  />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className="text-[1.5rem] font-[200] [&>b]:font-[500] mt-[1.5rem] [&>b]:block leading-[1.4]"
                  ></p>
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
