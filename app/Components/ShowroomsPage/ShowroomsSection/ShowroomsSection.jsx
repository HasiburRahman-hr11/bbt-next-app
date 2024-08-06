"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "4%",
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        centerMode: true,
        centerPadding: "3%",
      },
    },
  ],
};

const showrooms = [
  {
    name: "Mumbai Showroom",
    location:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
    ],
  },
  {
    name: "Gurgaon Showroom",
    location: "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001, India",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
    ],
  },

  {
    name: "Hyderabad Showroom",
    location:
      "Road-2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
    ],
  },
  {
    name: "Bengaluru Showroom",
    location:
      "140, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka-560025",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-5.webp",
      "/images/showroom-page/showroom-slide-img-5.webp",
      "/images/showroom-page/showroom-slide-img-5.webp",
      "/images/showroom-page/showroom-slide-img-5.webp",
    ],
  },
  {
    name: "Ahmedabad Showroom",
    location:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat-380001",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
    ],
  },
  {
    name: "Ludhiana Showroom",
    location:
      "1st Floor, Lake Street, Ferozepur - Ludhiana Rd, Dakha, Punjab 141102",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-6.webp",
      "/images/showroom-page/showroom-slide-img-6.webp",
      "/images/showroom-page/showroom-slide-img-6.webp",
      "/images/showroom-page/showroom-slide-img-6.webp",
    ],
  },
];

const showroomTabs = [
  {
    title: "Mumbai",
    icon: "images/showroom-page/showroom-tab-icon-2.webp",
  },
  {
    title: "Gurgaon",
    icon: "images/showroom-page/showroom-tab-icon-1.webp",
  },
  {
    title: "Hyderabad",
    icon: "images/showroom-page/showroom-tab-icon-3.webp",
  },
  {
    title: "Bengaluru",
    icon: "images/showroom-page/showroom-tab-icon-5.webp",
  },
  {
    title: "Ahmedabad",
    icon: "images/showroom-page/showroom-tab-icon-4.webp",
  },
  {
    title: "Ludhiana",
    icon: "images/showroom-page/showroom-tab-icon-3.webp",
  },
];

const ShowroomsSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[6rem] xl:py-[10rem] 3xl:py-[13rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className=" pl-8 titleWithLine mobileLine text-right 1xl:tracking-[-0.2rem] sm:text-left sm:pl-0 xl:pb-[0.5rem]">
            <span className="bg-[#fff] pl-5 inline-block relative z-10 sm:pl-0 sm:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
              Showrooms
            </span>
          </h2>
          <ul className="showroom-tabs flex flex-wrap mt-[3rem] xl:mt-[5rem] xl:justify-between 2xl:mt-[6rem]">
            {showroomTabs.map((showroom, index) => (
              <li
                onClick={() => handleTabChange(`tab-${index + 1}`)}
                className="xl:w-[19%] 1xl:w-[18.5%]"
                key={index}
              >
                <a
                  href={`#showroomList${index + 1}`}
                  className={`flex justify-center items-center leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1.5rem] lg:h-[4rem] xl:h-[5.5rem] xl:text-[1.4rem] xl:w-full xl:py-[1.2rem] xl:mr-0  xl:border xl-border-[#D9D9D9] hover:shadow-showroom-tab transition-all duration-500 ease-in-out 1xl:font-[600] 1xl:text-[1.7rem] 1xl:h-[6.3rem] 1xl:rounded-[4rem] 2xl:h-[6.7rem] 3xl:h-[8.5rem] 3xl:text-[2.2rem] ${
                    activeTab === `tab-${index + 1}`
                      ? "bg-black text-white [&>img]:invert xl:bg-white xl:text-black xl:[&>img]:invert-0 xl:shadow-showroom-tab xl:border-0"
                      : "bg-[#F3F3F3] text-black xl:bg-white"
                  }`}
                >
                  <img
                    src={showroom.icon}
                    alt="Icon"
                    className="hidden lg:inline-block max-w-[2rem] object-contain h-auto mr-[1rem] xl:max-w-[3rem] 1xl:max-w-[3.5rem] 1xl:mr-[1.5rem] 1xl:max-h-[3.5rem] 2xl:max-h-[4rem] 3xl:max-h-[4.9rem] 2xl:max-w-[3.8rem] 3xl:max-w-[5.6rem] 3xl:mr-[2.2rem]"
                  />
                  {showroom.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="showroom-content-wrapper">
          {showrooms.map((showroom, index) => (
            <div
              className="showroom-item pt-[2.5rem] xl:pt-[6rem] 1xl:pt-[7rem] 3xl:pt-[9rem]"
              key={index}
              id={`showroomList${index + 1}`}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="container">
                <div className="flex flex-wrap">
                  <div className="flex-1">
                    <h4 className="text-[2rem] tracking-[-1.5px] xl:text-[3rem] 1xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem]">
                      {showroom.name}
                    </h4>
                    <p className="text-[1.4rem] font-light max-w-[27rem] mt-[0.5rem] sm:mt-[1rem] lg:max-w-[27rem] xl:max-w-[40rem] xl:text-[1.8rem] 1xl:text-[2rem] 1xl:max-w-[50rem] 2xl:text-[2.4rem] 3xl:text-[2.8rem] 2xl:max-w-[60rem] 3xl:max-w-[84rem] ">
                      {showroom.location}
                    </p>
                  </div>
                  <a
                    href={showroom.mapLink}
                    className="flex justify-center items-center w-[4rem] h-[4rem] border border-[#616161] rounded-[1rem] sm:w-[6rem] sm:h-[6rem] xl:w-[9rem] xl:h-[9rem] xl:rounded-[0.6rem] 1xl:w-[11rem] 1xl:h-[11rem] 3xl:w-[14rem] 3xl:h-[13.5rem]"
                  >
                    <img
                      src="/images/showroom-page/showroom-location-icon.webp"
                      alt="Icon"
                      className="w-full h-auto object-contain max-w-[1.5rem] sm:max-w-[2.2rem] xl:max-w-[3.3rem] 1xl:max-w-[3.5rem] 3xl:max-w-[4.74rem]"
                      width="141"
                      height="137"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-[1rem] sm:w-max sm:[&>a]:leading-[1] sm:mt-[1.5rem]">
                  <a
                    href={`tel:${showroom.phoneNumber}`}
                    className="flex items-center text-[1.5rem] font-light xl:text-[1.8rem] 1xl:text-[2rem] 2xl:text-[2.4rem] 3xl:text-[2.8rem]"
                  >
                    <img
                      src="/images/showroom-page/phone-icon-black.webp"
                      alt="Phone"
                      className="w-[1.5rem] h-auto object-contain inline-block mr-[1rem] 1xl:w-[1.8rem] 2xl:w-[2rem] 3xl:w-[2.3rem]"
                      width="23"
                      height="23"
                    />
                    {showroom.phoneNumber}
                  </a>
                  <a
                    href={showroom.meetingLink}
                    className="text-[1.3rem] underline sm:ml-[1rem] sm:pl-[1rem] sm:border-l sm:border-l-[#000] xl:text-[1.7rem] xl:ml-[1.5rem] xl:pl-[1.5rem] 1xl:text-[1.9rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem]"
                  >
                    Schedule A Meetup
                  </a>
                </div>
              </div>
              {showroom.images && (
                <div className="showroom-image-slider pl-[2rem] mt-[2.5rem] lg:pl-[8%] xl:mt-[7rem] 1xl:pl-[8.5%] 3xl:mt-[9rem]">
                  <Slider {...settings}>
                    {showroom.images.map((item, index) => (
                      <div
                        key={index}
                        className="pr-[1rem] lg:pr-[2rem] xl:pr-[4rem] 3xl:pr-[6rem]"
                      >
                        <img
                          src={item}
                          alt="Showroom Image"
                          className="w-full h-auto object-cover"
                          width="1580"
                          height="950"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;
