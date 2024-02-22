"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "6rem",
  autoplay: true,
  autoplaySpeed: 3000,
};

const showrooms = [
  {
    name: "Gurgaon Showroom",
    location: "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana, 122001",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
    ],
  },
  {
    name: "Mumbai Showroom",
    location:
      "Shop No 7, Hubtown Sunmist, Solaris, Telli Galli, Opposite HubTown, Vijay Nagar, Andheri East, Mumbai, 400053",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-5.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
    ],
  },
  {
    name: "Hyderabad Showroom",
    location:
      "Road No 2, Banjara Hills Shangrila Plaza, opp. KBR, Hyderabad, Telangana - 34",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
    ],
  },
  {
    name: "Ahmedabad Showroom",
    location:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
      "/images/showroom-page/showroom-slide-img-2.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
    ],
  },
  {
    name: "Bengaluru Showroom",
    location:
      "140, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka 560025",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",
    images: [
      "/images/showroom-page/showroom-slide-img-5.webp",
      "/images/showroom-page/showroom-slide-img-3.webp",
      "/images/showroom-page/showroom-slide-img-4.webp",
      "/images/showroom-page/showroom-slide-img-1.webp",
    ],
  },
];

const ShowroomsSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-white py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className=" pl-8 lg:pl-0 titleWithLine mobileLine text-right 2xl:tracking-tighter">
            <span className="bg-[#fff] pl-5 inline-block relative z-10">
              Showrooms
            </span>
          </h2>
          <ul className="showroom-tabs flex flex-wrap mt-[3rem]">
            <li onClick={() => handleTabChange(`tab-1`)}>
              <a
                href="#showroomList1"
                className={`inline-block leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1rem] ${
                  activeTab === `tab-1`
                    ? "bg-black text-white"
                    : "bg-[#F3F3F3] text-black"
                }`}
              >
                Gurgaon
              </a>
            </li>
            <li onClick={() => handleTabChange(`tab-2`)}>
              <a
                href="#showroomList2"
                className={`inline-block leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1rem] ${
                  activeTab === `tab-2`
                    ? "bg-black text-white"
                    : "bg-[#F3F3F3] text-black"
                }`}
              >
                Mumbai
              </a>
            </li>
            <li onClick={() => handleTabChange(`tab-3`)}>
              <a
                href="#showroomList3"
                className={`inline-block leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1rem] ${
                  activeTab === `tab-3`
                    ? "bg-black text-white"
                    : "bg-[#F3F3F3] text-black"
                }`}
              >
                Hyderabad
              </a>
            </li>
            <li onClick={() => handleTabChange(`tab-4`)}>
              <a
                href="#showroomList4"
                className={`inline-block leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1rem] ${
                  activeTab === `tab-4`
                    ? "bg-black text-white"
                    : "bg-[#F3F3F3] text-black"
                }`}
              >
                Ahmedabad
              </a>
            </li>
            <li onClick={() => handleTabChange(`tab-5`)}>
              <a
                href="#showroomList5"
                className={`inline-block leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1rem] ${
                  activeTab === `tab-5`
                    ? "bg-black text-white"
                    : "bg-[#F3F3F3] text-black"
                }`}
              >
                Bengaluru
              </a>
            </li>
          </ul>
        </div>
        <div className="showroom-content-wrapper">
          {showrooms.map((showroom, index) => (
            <div
              className="showroom-item pt-[2.5rem]"
              key={index}
              id={`showroomList${index + 1}`}
            >
              <div className="container">
                <div className="flex flex-wrap">
                  <div className="flex-1">
                    <h4 className="text-[2rem] tracking-[-1.5px]">
                      {showroom.name}
                    </h4>
                    <p className="text-[1.4rem] font-light max-w-[27rem] mt-[0.5rem]">
                      {showroom.location}
                    </p>
                  </div>
                  <a
                    href={showroom.mapLink}
                    className="flex justify-center items-center w-[4rem] h-[4rem] border border-[#000000] rounded-[1rem]"
                  >
                    <img
                      src="/images/showroom-page/showroom-location-icon.webp"
                      alt="Icon"
                      className="w-full h-auto object-contain max-w-[1.5rem]"
                      width="141"
                      height="137"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-[1rem]">
                  <a
                    href={`tel:${showroom.phoneNumber}`}
                    className="flex items-center text-[1.5rem] font-light"
                  >
                    <img
                      src="/images/showroom-page/phone-icon-black.webp"
                      alt="Phone"
                      className="w-[1.5rem] h-auto object-contain inline-block mr-[1rem]"
                      width="23"
                      height="23"
                    />
                    {showroom.phoneNumber}
                  </a>
                  <a
                    href={showroom.meetingLink}
                    className="text-[1.3rem] underline"
                  >
                    Schedule A Meetup
                  </a>
                </div>
              </div>
              {showroom.images && (
                <div className="showroom-image-slider pl-[2rem] mt-[2.5rem]">
                  <Slider {...settings}>
                    {showroom.images.map((item, index) => (
                      <div key={index} className="pr-[1rem]">
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
