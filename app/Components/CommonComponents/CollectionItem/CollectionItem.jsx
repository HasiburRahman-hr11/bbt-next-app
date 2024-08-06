"use client";
import React, { useState } from "react";
import CommonInfoUsp from "../CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CertifiedPopup from "../../CertifiedPopup/CertifiedPopup";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const CollectionItem = ({ data, popupToggler }) => {
  const [certifiedPopup, setCertifiedPopup] = useState(false);
  const togglePopup = () => {
    setCertifiedPopup(!certifiedPopup);
  };

  return (
    <>
      {certifiedPopup && (
        <CertifiedPopup active={certifiedPopup} togglePopup={togglePopup} />
      )}
      <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
        <Link
          href={`/cars/${data._id}`}
          className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
          >
            Reg.Year : {data.registrationYear}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
            {data.title}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
          >
            ₹ {data.price}
          </p>
        </Link>

        <div className="relative">
          {data?.isCertified && (
            <div
              className="absolute top-[3rem] left-[3rem] z-10 w-[4.8rem] h-[4.8rem] xl:w-[5.7rem] xl:h-[4.2rem] cursor-pointer"
              onClick={togglePopup}
            >
              <img
                src="/images/bbt-certified-icon.webp"
                alt="Product Image"
                className="w-full object-contain "
                width="58"
                height="42"
              />
            </div>
          )}
          <Link href={`/cars/${data._id}`} className="block">
            <Slider {...settings} className="collection-gallery-slider">
              {data.gallery.map((galleryImage, index) => (
                <div key={index} className="relative pt-2">
                  <img
                    src={galleryImage}
                    alt="Product Image"
                    className="w-full object-cover block"
                    width="400"
                    height="310"
                  />
                  {data.isBooked && (
                    <img
                      src="/images/collection-booked.webp"
                      alt="Booked"
                      width="33"
                      height="84"
                      className="object-contain absolute right-6 z-10 w-12 top-0 collection-sold-mark"
                    />
                  )}
                  {data.isSoldOut && (
                    <img
                      src="/images/collection-sold.webp"
                      alt="Sold"
                      width="33"
                      height="84"
                      className="object-contain absolute right-6 z-20 w-12 top-0 collection-sold-mark"
                    />
                  )}
                </div>
              ))}
            </Slider>
          </Link>
        </div>

        <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
          <Link href={`/cars/${data._id}`} className="block">
            <CommonInfoUsp data={data} />
          </Link>

          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            {data.isBooked || data.isSoldOut ? (
              <div className="flex-grow">
                <div
                  className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                  onClick={popupToggler}
                >
                  <img
                    src="/images/square-btn-call-icon.webp"
                    width="20"
                    height="20"
                    alt="Call Icon"
                    className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                  />
                  Request A Call Back
                </div>
              </div>
            ) : (
              <div className="flex-grow">
                <a
                  href="tel:+919999999983"
                  className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                >
                  <img
                    src="/images/square-btn-call-icon.webp"
                    width="20"
                    height="20"
                    alt="Call Icon"
                    className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                  />
                  Call Big Boy Toyz
                </a>
              </div>
            )}

            <div className="callBtnRight ml-4">
              <a
                href="#"
                className="whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] 3xl:w-[5.8rem] 3xl:h-[5.8rem]  "
              >
                <img
                  src="/images/whatsapp-btn-icon.webp"
                  width="18"
                  height="18"
                  alt="Call Icon"
                  className="object-contain w-9 h-auto 1xl:w-[2.6rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionItem;
