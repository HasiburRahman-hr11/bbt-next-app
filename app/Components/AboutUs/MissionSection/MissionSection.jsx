"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#EAEAEA] rounded-[3rem] py-[0.4rem] md:text-[1.4rem] md:py-[0.6rem]",
};

const missionList = [
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2009",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2010-2011",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2012",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2013",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2015",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2016",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2017",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2018",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk, Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2019",
  },
  {
    title: "Down of the incredible rising",
    subtitle:
      "Opened a grand 36000sq feet showroom <br /> at Hero Honda Chowk Gurgaon.",
    description:
      "Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI National Racing Championship 2016 held at Buddh International Circuit",
    year: "2020",
  },
];

const MissionSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[5rem] lg:py-[8rem] xl:py-[10rem] 2xl:py-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine">
              <span className="bg-[#fff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
                Mission
              </span>
            </h3>
            <h2 className="font-normal tracking-[-2px] leading-[1.1] mt-[3rem] mb-[2rem] [&>br]:hidden lg:[&>br]:block xl:text-[3.9rem] xl:leading-[1.3] xl:mb-[3rem] 1xl:text-[4.3rem] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:tracking-[-3px] 3xl:mt-[4.5rem]">
              The journey began in 2009 when BBT <br /> was founded in New
              Delhi, India.
            </h2>
            <p className="font-light text-[1.2rem] leading-[1.3] text-justify md:text-[1.4rem] xl:text-[1.13rem] xl:tracking-tighter xl:font-normal 1xl:text-[1.35rem] 2xl:text-[1.4rem]  3xl:text-[1.7rem] 3xl:tracking-tight">
              Since then our mission has been to provide quality exotic cars
              with highly personalized care at a competitive price. Creating a
              new benchmark for excellence in every aspect of our business.
            </p>
          </div>

          {/* For Mobile */}
          <div className="block xl:hidden">
            {/* Tab Menu */}
            <div className="mt-[2.2rem] mb-[3rem] xl:hidden">
              <ul className="grid grid-cols-4 gap-[1rem]">
                {missionList.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles.tabMenu} ${
                      activeTab === `tab-${index + 1}`
                        ? " bg-black text-white"
                        : " text-black"
                    }`}
                    onClick={() => handleTabChange(`tab-${index + 1}`)}
                  >
                    {item.year}
                  </li>
                ))}
              </ul>
            </div>
            {missionList.map((item, index) => (
              <div
                key={index}
                className={`${
                  activeTab === `tab-${index + 1}` ? "block" : "hidden"
                } sm:max-w-[400px] sm:mx-auto md:max-w-[500px]`}
              >
                <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                        {item.title}
                      </h3>
                      <p className="text-[1.4rem] md:text-[1.6rem]">
                        {item.year}
                      </p>
                    </div>
                    <div className="pr-[2rem]">
                      <p
                        className="my-[1.6rem] text-[1.2rem] leading-[1.3] md:text-[1.4rem]"
                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                      ></p>
                      <p className="font-light text-[1.2rem] leading-[1.3] md:text-[1.4rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-[3.5rem]">
                  <div className="relative">
                    <img
                      src="/images/about-us/about-mission-line.webp"
                      alt="Line"
                      className="w-full h-auto object-cover md:hidden"
                    />
                    <img
                      src="/images/about-us/about-mission-line-desktop.webp"
                      alt="Line"
                      className="w-full h-auto object-cover hidden md:block"
                    />
                    <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
                  </div>
                  <p className="text-center text-[1.4rem] mt-[0.5rem] md:text-[1.6rem]">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FOR DESKTOP */}
          <div
            className="hidden xl:block mt-[6rem] relative 2xl:mt-[9rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="flex flex-wrap justify-between">
              {missionList.slice(0, 3).map((item, index) => (
                <div
                  className="w-[23.5%] h-[inherit] pb-[8rem] relative 3xl:pb-[11rem]"
                  key={index}
                >
                  <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem] xl:px-[1.5rem] xl:pt-[1.7rem] xl:pb-[1.4rem] 3xl:px-[2.2rem] 3xl:pt-[2.2rem] 3xl:pb-[2rem]">
                    <div>
                      <div className="flex justify-between">
                        <h3 className=" font-normal leading-[1.1] w-[70%] text-[1.6rem] xl:font-medium 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                          {item.title}
                        </h3>
                        <p className="text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.45rem]">
                          {item.year}
                        </p>
                      </div>
                      <div className="pr-[1rem]">
                        <p
                          className="leading-[1.3] text-[1rem] my-[1.3rem] tracking-tighter 1xl:text-[1.15rem] 2xl:text-[1.25rem] 3xl:text-[1.45rem]"
                          dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        ></p>
                        <p className="font-light leading-[1.3] text-[1rem] tracking-tighter 1xl:text-[1.15rem] 2xl:text-[1.25rem] 3xl:text-[1.45rem]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center z-[10]">
                    <div className="w-[1px] h-[2.5rem] 3xl:h-[4.1rem] bg-black"></div>
                    <div className="w-[1.3rem] h-[1.3rem] rounded-[50%] border-[3.5px] border-black bg-white mx-auto 2xl:w-[1.5rem] 2xl:h-[1.5rem] 3xl:border-[4.5px] 3xl:w-[1.8rem] 3xl:h-[1.8rem]"></div>
                    <p className="text-center  mt-[0.4rem] text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.45rem]">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-evenly mx-auto mt-[-5.3rem] 3xl:mt-[-6.8rem]">
              {missionList.slice(3, 5).map((item, index) => (
                <div
                  className="w-[23.5%] pt-[8rem] relative 3xl:pt-[11rem]"
                  key={index}
                >
                  <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem] xl:px-[1.5rem] xl:pt-[1.7rem] xl:pb-[1.4rem]">
                    <div>
                      <div className="flex justify-between">
                        <h3 className=" font-normal leading-[1.1] w-[70%] text-[1.6rem] xl:font-medium 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                          {item.title}
                        </h3>
                        <p className="text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.45rem]">
                          {item.year}
                        </p>
                      </div>
                      <div className="pr-[1rem]">
                        <p
                          className="leading-[1.3] text-[1rem] my-[1.3rem] tracking-tighter 1xl:text-[1.15rem] 2xl:text-[1.25rem] 3xl:text-[1.45rem]"
                          dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        ></p>
                        <p className="font-light leading-[1.3] text-[1rem] tracking-tighter 1xl:text-[1.15rem] 2xl:text-[1.25rem] 3xl:text-[1.45rem]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center z-[10]">
                    <p className="text-center  mb-[0.4rem] text-[1.1rem] 2xl:text-[1.2rem]  3xl:text-[1.45rem]">
                      {item.year}
                    </p>
                    <div className="w-[1.3rem] h-[1.3rem] rounded-[50%] border-[3.5px] border-black bg-white mx-auto 2xl:w-[1.5rem] 2xl:h-[1.5rem] 3xl:border-[4.5px] 3xl:w-[1.8rem] 3xl:h-[1.8rem]"></div>

                    <div className="w-[1px] h-[2.5rem] 3xl:h-[4.1rem] bg-black"></div>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="/images/about-us/about-mission-line-desktop.webp"
              alt="Line"
              className="w-full h-auto object-cover hidden md:block absolute top-[50%] 1xl:top-[50.3%] 2xl:top-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
