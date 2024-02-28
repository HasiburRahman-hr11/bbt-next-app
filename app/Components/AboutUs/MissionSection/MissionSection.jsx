"use client";
import React, { useState } from "react";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#EAEAEA] rounded-[3rem] py-[0.4rem]",
};

const MissionSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-white py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine mobileLine">
            <span className="bg-[#fff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
              Mission
            </span>
          </h3>
          <h2 className="font-normal tracking-[-2px] leading-[1.1] mt-[3rem] mb-[2rem]">
            The journey began in 2009 when BBT was founded in new delhi, India.
          </h2>
          <p className="font-light text-[1.2rem] leading-[1.3] text-justify">
            Since then our mission has been to provide quality exotic cars with
            highly personalized care at a competitive price. Creating a new
            benchmark for excellence in every aspect of our business.
          </p>

          {/* Tab Menu */}
          <div className="mt-[2.2rem] mb-[3rem]">
            <ul className="grid grid-cols-4 gap-[1rem]">
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-1` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-1`)}
              >
                {" "}
                2009{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-2` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-2`)}
              >
                {" "}
                2010-11{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-3` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-3`)}
              >
                {" "}
                2012{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-4` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-4`)}
              >
                {" "}
                2013{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-5` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-5`)}
              >
                {" "}
                2014{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-6` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-6`)}
              >
                {" "}
                2015{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-7` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-7`)}
              >
                {" "}
                2016{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-8` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-8`)}
              >
                {" "}
                2017{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-9` ? " bg-black text-white" : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-9`)}
              >
                {" "}
                2018{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-10`
                    ? " bg-black text-white"
                    : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-10`)}
              >
                {" "}
                2019{" "}
              </li>
              <li
                className={`${styles.tabMenu} ${
                  activeTab === `tab-11`
                    ? " bg-black text-white"
                    : " text-black"
                }`}
                onClick={() => handleTabChange(`tab-11`)}
              >
                {" "}
                2020{" "}
              </li>
            </ul>
          </div>

          {/* Tab Content 1 */}
          <div className={activeTab === `tab-1` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2009</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2009</p>
            </div>
          </div>
          {/* Tab Content 2 */}
          <div className={activeTab === `tab-2` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2010-11</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2010-11</p>
            </div>
          </div>
          {/* Tab Content 3 */}
          <div className={activeTab === `tab-3` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2012</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2012</p>
            </div>
          </div>
          {/* Tab Content 4 */}
          <div className={activeTab === `tab-4` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2013</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2013</p>
            </div>
          </div>
          {/* Tab Content 5 */}
          <div className={activeTab === `tab-5` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2014</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2014</p>
            </div>
          </div>
          {/* Tab Content 6 */}
          <div className={activeTab === `tab-6` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2015</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2015</p>
            </div>
          </div>
          {/* Tab Content 7 */}
          <div className={activeTab === `tab-7` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2016</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2016</p>
            </div>
          </div>
          {/* Tab Content 8 */}
          <div className={activeTab === `tab-8` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2017</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2017</p>
            </div>
          </div>
          {/* Tab Content 9 */}
          <div className={activeTab === `tab-9` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2018</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2018</p>
            </div>
          </div>
          {/* Tab Content 10 */}
          <div className={activeTab === `tab-10` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2019</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2019</p>
            </div>
          </div>
          {/* Tab Content 11 */}
          <div className={activeTab === `tab-11` ? "block" : "hidden"}>
            <div className="bg-[#FAFAFA] py-[3rem] px-[2.5rem] rounded-[1rem]">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-[2.2rem] font-normal leading-[1.1] w-[70%]">
                    Down of the incredible rising
                  </h3>
                  <p className="text-[1.4rem]">2020</p>
                </div>
                <div className="pr-[2rem]">
                  <p className="my-[1.6rem] text-[1.2rem] leading-[1.3]">
                    Opened a grand 36000sq feet showroom <br /> at Hero Honda
                    Chowk Gurgaon.
                  </p>
                  <p className="font-light text-[1.2rem] leading-[1.3] ">
                    Sponsored MTV Roadies and Splitsvilla 19th JK Tyre FMSCI
                    National Racing Championship 2016 held at Buddh
                    International Circuit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[3.5rem]">
              <div className="relative">
                <img
                  src="/images/about-us/about-mission-line.webp"
                  alt="Line"
                  className="w-full h-auto object-cover"
                />
                <div className="w-[1.9rem] h-[1.9rem] rounded-[50%] border-[4px] border-black bg-white mx-auto mt-[-0.95rem] relative z-[2]"></div>
              </div>
              <p className="text-center text-[1.4rem] mt-[0.5rem]">2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
