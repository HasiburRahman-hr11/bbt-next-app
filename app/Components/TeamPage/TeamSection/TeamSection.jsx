"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = {
  loanTeam: [
    {
      name: "Mohd. Danish Siddique",
      designation: "Loan & Finance",
      image: "/images/team/lf-img-1.webp",
    },
    {
      name: "Ajay Khirwar",
      designation: "Head - Finance & Loans",
      image: "/images/team/lf-img-2.webp",
    },
  ],
  accountsTeam: [
    {
      name: "Suraj Mandal",
      designation: "Accounts",
      image: "/images/team/accounts-img-1.webp",
    },
    {
      name: "Thersiamma Jhony",
      designation: "Head - Accounts",
      image: "/images/team/accounts-img-2.webp",
    },
  ],
  afterSalesTeam: [
    {
      name: "Mukesh  Kumar",
      designation: "After Sales",
      image: "/images/team/after-sales-1.webp",
    },
    {
      name: "Vikram Singh Dhaiya",
      designation: "HOD- After Sales & Service",
      image: "/images/team/after-sales-2.webp",
    },
  ],
  marketingTeam: [
    {
      name: "Ankit Kumar Das",
      designation: "SR Visual Designer",
      image: "/images/team/marketing-img-1.webp",
    },
  ],
  salesTeam: [
    {
      name: "Steven Sweeney",
      designation: "Business Head - West",
      image: "/images/team/sales-img-1.webp",
    },
    {
      name: "Anchal Kundra",
      designation: "GM Sales-North",
      image: "/images/team/sales-img-2.webp",
    },
    {
      name: "Dharam Vora",
      designation: "Executive Sales",
      image: "/images/team/sales-img-3.webp",
    },
  ],
};

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[2rem] xl:py-[1rem] xl:mx-[0.7rem] xl:bg-[#F4F4F1] 1xl:text-[1.55rem] 2xl:text-[1.7rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2rem] 3xl:px-[2.8rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 3xl:mb-[1rem]",
  teamMemberItem:
    "grid grid-cols-2 auto-rows-fr gap-[2rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 xl:gap-[3rem] xl:[&_img]:max-h-[20rem] 1xl:[&_img]:max-h-[22rem] 2xl:[&_img]:max-h-[23rem] 3xl:xl:gap-[5.5rem] 3xl:[&_img]:max-h-[25rem]",
  teamMemberTitle:
    "text-[1.5rem] tracking-[-0.5px] font-medium xl:text-[1.5rem] xl:tracking-[-1px] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]",
  teamMemberSub:
    "font-light text-[1.1rem] mt-[0.2rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]",
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

const TeamMember = ({ data }) => {
  return (
    <div>
      <img
        src={data.image}
        alt="Team member"
        className="w-full object-cover h-full block"
      />
      <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
        <p className={styles.teamMemberTitle}>{data.name}</p>
        <p className={styles.teamMemberSub}>{data.designation}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#ffffff] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine hidden md:block">
              <span className="bg-[#ffffff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
                Meet The Team
              </span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="block xl:flex xl:flex-wrap xl:justify-between xl:mt-[6rem] 3xl:mt-[8rem]">
            <div
              className="xl:w-[34%]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.2px] md:hidden">
                The <b>Team</b>
              </h2>
              <div className="md:mt-[2rem] xl:mt-0">
                <p className="font-light text-[1.2rem] leading-[1.4] mt-[1rem] [&>br]:hidden md:text-center md:text-[2rem] md:[&>br]:block xl:text-[3.9rem] xl:text-left xl:leading-[1.2] xl:tracking-[-1.8px] xl:[&>br]:hidden 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.9rem] 3xl:leading-[1.1]">
                  We believe that without the key <br /> value of{" "}
                  <b>our people.</b>
                </p>

                <div>
                  <ul className="flex flex-wrap mt-[1.5rem] md:justify-center xl:justify-start xl:flex-col xl:max-w-[18rem] xl:mt-[3rem] 2xl:max-w-[21rem] 3xl:mt-[5rem] 3xl:max-w-[23rem]">
                    <li onClick={() => handleTabChange(`tab-1`)}>
                      <a
                        href="#loanFinance"
                        className={`${styles.tabMenu} ${
                          activeTab === `tab-1`
                            ? " bg-black text-white xl:bg-black"
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
                            ? " bg-black text-white xl:bg-black"
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
                            ? " bg-black text-white xl:bg-black"
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
                            ? " bg-black text-white xl:bg-black"
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
                            ? " bg-black text-white xl:bg-black"
                            : " text-black"
                        }`}
                      >
                        Sales
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="xl:w-[55%]">
              {/* Loan & Finance */}
              <div
                id="loanFinance"
                className="mt-[5rem] xl:mt-0"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem]">
                  Loans & Finance Team
                </h3>
                <div className={styles.teamMemberItem}>
                  {teamMembers.loanTeam.map((team, index) => (
                    <TeamMember key={index} data={team} />
                  ))}
                </div>
              </div>

              {/* Accounts Team */}
              <div
                id="accountsTeam"
                className="mt-[10rem] xl:mt-[6rem] 1xl:mt-[8rem] 3xl:mt-[6rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem]">
                  Accounts Team
                </h3>
                <div className={styles.teamMemberItem}>
                  {teamMembers.accountsTeam.map((team, index) => (
                    <TeamMember key={index} data={team} />
                  ))}
                </div>
              </div>

              {/* After Sales */}
              <div
                id="afterSales"
                className="mt-[10rem] xl:mt-[6rem] 1xl:mt-[8rem] 3xl:mt-[6rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem]">
                  After Sales
                </h3>
                <div className={styles.teamMemberItem}>
                  {teamMembers.afterSalesTeam.map((team, index) => (
                    <TeamMember key={index} data={team} />
                  ))}
                </div>
              </div>

              {/* Marketing */}
              <div
                id="marketingTeam"
                className="mt-[10rem] xl:mt-[6rem] 1xl:mt-[8rem] 3xl:mt-[6rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem]">
                  Marketing Team
                </h3>
                <div className={styles.teamMemberItem}>
                  {teamMembers.marketingTeam.map((team, index) => (
                    <TeamMember key={index} data={team} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sales Team */}
        <div
          id="salesTeam"
          className=" mt-[10rem] xl:mt-[6rem] 1xl:mt-[8rem] 3xl:mt-[6rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem] pl-[2rem] md:pl-[4.5%] lg:pl-[8.5%] xl:w-[54%] xl:ml-auto xl:pl-0">
            Sales Team
          </h3>

          {/* For Desktop */}
          <div className="hidden md:block container xl:w-[45%] xl:mr-[9%]">
            <div className={styles.teamMemberItem}>
              {teamMembers.salesTeam.map((team, index) => (
                <TeamMember key={index} data={team} />
              ))}
            </div>
          </div>

          {/* For Mobile */}
          <div className="sales-team-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit] pl-[1rem] md:hidden">
            <Slider {...settings}>
              {teamMembers.salesTeam.map((team, index) => (
                <div className="pr-[2rem]" key={index}>
                  <img
                    src={team.image}
                    alt="Team member"
                    className="w-full object-cover h-full block"
                  />
                  <div className="mt-[0.8rem]">
                    <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                      {team.name}
                    </p>
                    <p className="font-light text-[1.1rem] mt-[0.2rem]">
                      {team.designation}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
