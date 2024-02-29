"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem]",
};

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "3%",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-[#F4F4F1] py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.2px]">
            The <b>Team</b>
          </h2>
          <p className="font-light text-[1.2rem] leading-[1.4] mt-[1rem]">
            We believe that without the key value of our people.
          </p>

          <div>
            <ul className="flex flex-wrap mt-[1.5rem]">
              <li onClick={() => handleTabChange(`tab-1`)}>
                <a
                  href="#loanFinance"
                  className={`${styles.tabMenu} ${
                    activeTab === `tab-1`
                      ? " bg-black text-white"
                      : " text-black"
                  }`}
                >
                  Loan & Finance
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
                  Accounts
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
                  After Sales
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
                  Marketing
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
                  Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Loan & Finance */}
          <div id="loanFinance" className="mt-[5rem]">
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem]">
              Loans & Finance Team
            </h3>
            <div className="grid grid-cols-2 auto-rows-fr gap-[2rem]">
              <div>
                <img
                  src="/images/team-page/lf-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Mohd. Danish Siddique
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Loan & Finance
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/lf-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Ajay Khirwar
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Ajay Khirwar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Team */}
          <div id="accountsTeam" className="mt-[10rem]">
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem]">
              Accounts Team
            </h3>
            <div className="grid grid-cols-2 auto-rows-fr gap-[2rem]">
              <div>
                <img
                  src="/images/team-page/accounts-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Suraj Mandal
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Accounts
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/accounts-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Thersiamma Jhony
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Head - Accounts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After Sales */}
          <div id="afterSales" className="mt-[10rem]">
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem]">
              After Sales
            </h3>
            <div className="grid grid-cols-2 auto-rows-fr gap-[2rem]">
              <div>
                <img
                  src="/images/team-page/after-sales-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Mukesh Kumar
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    After Sales
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/after-sales-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Vikram Singh Dhaiya
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    HOD - After Sales & Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div id="marketingTeam" className="mt-[10rem]">
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem]">
              Marketing Team
            </h3>
            <div className="grid grid-cols-2 auto-rows-fr gap-[2rem]">
              <div>
                <img
                  src="/images/team-page/marketing-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Amit Kumar Das
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    SR. Visual Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sales Team */}
        <div id="salesTeam" className=" mt-[10rem]">
          <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] pl-[2rem]">
            Sales Team
          </h3>
          <div className="sales-team-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit] pl-[1rem]">
            <Slider {...settings}>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Steven Sweeney
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Business Head - West
                  </p>
                </div>
              </div>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Anchal Kundra
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    GM Sales - North
                  </p>
                </div>
              </div>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Steven Sweeney
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Business Head - West
                  </p>
                </div>
              </div>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Anchal Kundra
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    GM Sales - North
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
