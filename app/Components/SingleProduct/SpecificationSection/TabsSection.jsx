"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SpecificationSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
      <ul
        className={`${styles.specTabList} detailPageTabs flex items-center mt-20 pl-8 mb-16`}
      >
        <li
          className={`${
            styles.specTabItem
          } flex items-center pl-5 pr-12 py-3 rounded-2rem mr-4 group ${
            activeTab === "tab-1" ? "active" : ""
          }`}
          onClick={() => handleTabChange("tab-1")}
        >
          <Image
            src="/images/detail-page/detail-tab-icon-1.webp"
            alt=""
            width="18"
            height="18"
            className="object-contain w-6 h-6"
          />
          <span className="text-black text-lg font-normal ml-3 whitespace-nowrap inline-block">
            Overview
          </span>
        </li>
        <li
          className={`${
            styles.specTabItem
          } flex items-center pl-5 pr-12 py-3 rounded-2rem mr-4 ${
            activeTab === "tab-2" ? "active" : ""
          }`}
          onClick={() => handleTabChange("tab-2")}
        >
          <Image
            src="/images/detail-page/detail-bbt-engine-black.webp"
            alt=""
            width="18"
            height="18"
            className="object-contain w-6 h-6"
          />
          <span className="text-black text-lg font-normal ml-3 whitespace-nowrap inline-block">
            Engine & Transmission
          </span>
        </li>
        <li
          className={`${
            styles.specTabItem
          } flex items-center pl-5 pr-12 py-3 rounded-2rem mr-4 ${
            activeTab === "tab-3" ? "active" : ""
          }`}
          onClick={() => handleTabChange("tab-3")}
        >
          <Image
            src="/images/detail-page/detail-tab-icon-3.webp"
            alt=""
            width="18"
            height="18"
            className="object-contain w-6 h-6"
          />
          <span className="text-black text-lg font-normal ml-3 whitespace-nowrap inline-block">
            Hybrid System
          </span>
        </li>
      </ul>

      <div className="container">
        {/* Tab Container - 1 */}
        <div
          className={`tabContainer ${activeTab === "tab-1" ? "active" : ""}`}
        >
          <div className="flex items-center mb-6">
            <Image
              src="/images/detail-page/detail-bbt-engine-black.webp"
              alt=""
              width="20"
              height="20"
              className="object-contain w-7 h-7 mr-4"
            />
            <h6 className="font-medium">Overview</h6>
          </div>
          <ul>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Engine Displacement</p>
              <p className="text-lg font-light text-gray-500">
                1993cc, Turbocharged, In-Line 4 Cyl, DOHC
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Power Figure</p>
              <p className="text-lg font-light text-gray-500">
                197PS / 194BHP @ 3600 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Torque Figure</p>
              <p className="text-lg font-light text-gray-500">
                440 NM @ 1800 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Drivetrain</p>
              <p className="text-lg font-light text-gray-500">RWD</p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Transmission</p>
              <p className="text-lg font-light text-gray-500">
                9G-TRONIC Automatic Transmission
              </p>
            </li>
          </ul>
        </div>

        {/* Tab Container - 2 */}

        <div
          className={`tabContainer ${activeTab === "tab-2" ? "active" : ""}`}
        >
          <div className="flex items-center mb-6">
            <Image
              src="/images/detail-page/detail-bbt-engine-black.webp"
              alt=""
              width="20"
              height="20"
              className="object-contain w-7 h-7 mr-4"
            />
            <h3 className="font-medium">Engine & Transmission</h3>
          </div>
          <ul>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Engine Displacement</p>
              <p className="text-lg font-light text-gray-500">
                1993cc, Turbocharged, In-Line 4 Cyl, DOHC
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Power Figure</p>
              <p className="text-lg font-light text-gray-500">
                197PS / 194BHP @ 3600 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Torque Figure</p>
              <p className="text-lg font-light text-gray-500">
                440 NM @ 1800 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Drivetrain</p>
              <p className="text-lg font-light text-gray-500">RWD</p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Transmission</p>
              <p className="text-lg font-light text-gray-500">
                9G-TRONIC Automatic Transmission
              </p>
            </li>
          </ul>
        </div>

        {/* Tab Container - 3 */}
        <div
          className={`tabContainer ${activeTab === "tab-3" ? "active" : ""}`}
        >
          <div className="flex items-center mb-6">
            <Image
              src="/images/detail-page/detail-bbt-engine-black.webp"
              alt=""
              width="20"
              height="20"
              className="object-contain w-7 h-7 mr-4"
            />
            <h3 className="font-medium">Hybrid System</h3>
          </div>
          <ul>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Engine Displacement</p>
              <p className="text-lg font-light text-gray-500">
                1993cc, Turbocharged, In-Line 4 Cyl, DOHC
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Power Figure</p>
              <p className="text-lg font-light text-gray-500">
                197PS / 194BHP @ 3600 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Torque Figure</p>
              <p className="text-lg font-light text-gray-500">
                440 NM @ 1800 RPM
              </p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Drivetrain</p>
              <p className="text-lg font-light text-gray-500">RWD</p>
            </li>
            <li
              className={`${styles.tabContentList} flex justify-between py-6`}
            >
              <p className="text-lg font-medium">Transmission</p>
              <p className="text-lg font-light text-gray-500">
                9G-TRONIC Automatic Transmission
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
