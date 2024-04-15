"use client";
import React, { useState } from "react";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[2rem] xl:py-[1rem] xl:mx-[0.7rem] 1xl:text-[1.6rem] 2xl:text-[1.8rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2.19rem] 3xl:px-[2.8rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 3xl:min-w-[10rem]",
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-[#F4F4F2] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light text-[1.2rem] leading-[1.4] mt-[1rem] [&>br]:hidden text-center md:text-[2rem] md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Experience{" "}
            <b>
              {" "}
              a world of automotive <br /> solutions{" "}
            </b>{" "}
            tailored to your needs
          </h2>
          <div className="mb-[5rem] 3xl:mb-[10rem]">
            <ul className="flex flex-wrap mt-[1.5rem] md:justify-center 1xl:mt-[3rem] 3xl:mt-[5rem]">
              <li onClick={() => handleTabChange(`tab-1`)}>
                <a
                  href="#loanFinance"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-1`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  All
                </a>
              </li>
              <li onClick={() => handleTabChange(`tab-2`)}>
                <a
                  href="#accountsTeam"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-2`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Periodic Maintenance
                </a>
              </li>
              <li onClick={() => handleTabChange(`tab-3`)}>
                <a
                  href="#afterSales"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-3`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  External Service
                </a>
              </li>
              <li onClick={() => handleTabChange(`tab-4`)}>
                <a
                  href="#marketingTeam"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-4`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Internal Service
                </a>
              </li>
              <li onClick={() => handleTabChange(`tab-5`)}>
                <a
                  href="#salesTeam"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-5`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Spare Parts
                </a>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div
            className={`bg-white py-[3rem] px-[3rem] rounded-[1rem] mt-[3rem] 3xl:mt-[5rem] 3xl:py-[6rem] 3xl:px-[5rem] ${
              activeTab === "tab-1" || activeTab === "tab-2"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-center">
                <div className="mr-[1rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className="object-contain h-auto w-[3.5rem] 3xl:w-[5.5rem]"
                  />
                </div>
                <h3 className="font-normal 3xl:text-[4.5rem] tracking-tighter">
                  Full Body Paint
                </h3>
              </div>
              <div className="w-max xl:min-w-[214px]">
                <a
                  href="#"
                  className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="3xl:mt-[2rem] 3xl:[&>li]:text-[2.4rem]">
                <li>Restoration services at Big Boy Toyz is an art.</li>
                <li>
                  {" "}
                  We make your car shine and glow along with paint restoration.
                </li>
                <li>Making sure your car stands out in that car crowd.</li>
              </ul>
              <p className="3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
