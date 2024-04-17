"use client";
import React, { useState } from "react";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.9rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[2rem] xl:py-[1rem] xl:mx-[0.7rem] 1xl:text-[1.6rem] 2xl:text-[1.8rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2.19rem] 3xl:px-[2.8rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 1xl:min-w-[8rem] 3xl:min-w-[10rem] cursor-pointer",
  tabListItem:
    "text-[1.2rem] lg:text-[1.4rem] relative before:content-[''] before:absolute before:left-0 before:top-[0.8rem] lg:before:top-[50%] lg:before:translate-y-[-50%] before:w-[0.7rem] before:h-[1px] pl-[1.5rem] lg:pl-[2rem] xl:text-[1.6rem] xl:before:w-[1rem] xl:before:h-[2px] before:bg-black 1xl:text-[1.8rem] 2xl:before:w-[1.3rem] 2xl:before:h-[2.5px] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:before:w-[1.5rem] 3xl:before:h-[3px] 3xl:pl-[3rem] font-light",
  tabBtn:
    "bg-black w-full text-white text-center text-[1.2rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] lg:text-[1.4rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]",
  tabContentItem:
    "bg-white p-[2rem] lg:p-[3rem] rounded-[1rem] mt-[3rem] xl:mt-[4rem] 3xl:mt-[5rem] xl:py-[5rem] xl:pl-[6rem] xl:pr-[4rem] 3xl:py-[6rem] 3xl:pl-[7rem] 3xl:pr-[5rem] 3xl:rounded-[1.5rem]",
  tabContentIcon:
    "object-contain h-auto w-[2rem] lg:w-[3rem] xl:w-[3.5rem] 1xl:w-[4.5rem] 3xl:w-[5.5rem]",
  tabContentTitle:
    "flex-1 font-normal leading-[1] text-[2rem] lg:text-[2.8rem] xl:text-[3.5rem] 1xl:tracking-tighter 2xl:text-[3.8rem] 3xl:text-[4.5rem]",
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-[#F4F4F2] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden text-center md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Experience{" "}
            <b>
              {" "}
              a world of automotive <br /> solutions{" "}
            </b>{" "}
            tailored to your needs
          </h2>
          <div className="mb-[5rem] 1xl:mb-[8rem] 3xl:mb-[10rem]">
            <ul className="flex flex-wrap mt-[1.5rem] justify-center 1xl:mt-[3rem] 3xl:mt-[5rem]">
              <li onClick={() => handleTabChange(`tab-1`)}>
                <span
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-1`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  All
                </span>
              </li>
              <li onClick={() => handleTabChange(`tab-2`)}>
                <span
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-2`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Periodic Maintenance
                </span>
              </li>
              <li onClick={() => handleTabChange(`tab-3`)}>
                <span
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-3`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  External Service
                </span>
              </li>
              <li onClick={() => handleTabChange(`tab-4`)}>
                <span
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-4`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Internal Service
                </span>
              </li>
              <li onClick={() => handleTabChange(`tab-5`)}>
                <span
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-5`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Spare Parts
                </span>
              </li>
            </ul>
          </div>

          {/* Tab Content Item -1 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" || activeTab === "tab-2"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Full Body Paint</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* Tab Content Item -2 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" || activeTab === "tab-3"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Car Detailing Service</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* Tab Content Item -3 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" ||
              activeTab === "tab-4" ||
              activeTab === "tab-5"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Car AC Service</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* Tab Content Item -4 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" || activeTab === "tab-3"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Insurance Claims</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* Tab Content Item -5 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" || activeTab === "tab-4"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Denting and Painting Service</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* Tab Content Item -6 */}
          <div
            className={`${styles.tabContentItem} ${
              activeTab === "tab-1" ||
              activeTab === "tab-2" ||
              activeTab === "tab-5"
                ? "block"
                : "hidden"
            }`}
          >
            <div className="flex justify-between flex-wrap">
              <div className="flex-1 flex flex-wrap items-start md:items-center">
                <div className="mr-[1rem] xl:mr-[2rem] 1xl:mr-[2.5rem] 3xl:mr-[3.5rem]">
                  <img
                    src="/images/workshop/service-icon-1.webp"
                    alt="Icon"
                    className={styles.tabContentIcon}
                  />
                </div>
                <h3 className={styles.tabContentTitle}>Periodic Maintenance Service</h3>
              </div>
              <div className="w-max hidden md:block xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[214px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
            <div className="py-[2rem] xl:pl-[5.5rem] xl:pr-[3rem] 1xl:pl-[7rem] 3xl:pl-[9rem] 3xl:pr-[5rem] 3xl:py-[2rem]">
              <h4 className="text-[1.7rem] 1xl:text-[2.6rem] 3xl:text-[3.5rem] tracking-tighter font-normal">
                Includes
              </h4>
              <ul className="mt-[1.5rem] 3xl:mt-[2rem]">
                <li className={styles.tabListItem}>
                  Restoration services at Big Boy Toyz is an art.
                </li>
                <li className={styles.tabListItem}>
                  We make your car shine and glow along with paint restoration.
                </li>
                <li className={styles.tabListItem}>
                  Making sure your car stands out in that car crowd.
                </li>
              </ul>
              <p className="text-[1.2rem] xl:text-[1.3rem] mt-[2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:mt-[3rem]">
                Experience the Art of Automotive Restoration Unleashed. We don’t
                simply paint; we craft a masterpiece that transforms your car
                into a radiant symbol of excellence, ensuring it captivates
                every eye. Rely on us to elevate your vehicle's allure to its
                zenith with our meticulous paint restoration services.
              </p>
              <div className="w-max mx-auto mt-[3rem] block md:hidden min-w-[200px]">
                <a href="#" className={styles.tabBtn}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
