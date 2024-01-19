"use client";
import React, { useState } from "react";
import CommonInfoUsp from "../CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import Image from "next/image";
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
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-neutral-400 md:hidden"></div>
        <Link
          href={`/products/${data._id}`}
          className="block px-14 pt-16 md:px-10"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8`}
          >
            Reg.Year : {data.registrationYear}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-4.2xl 3xl:mt-8 line-clamp-1">
            {data.title}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6`}
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
              <Image
                src="/images/bbt-certified-icon.webp"
                alt="Product Image"
                className="w-full object-contain "
                width="58"
                height="42"
              />
            </div>
          )}
          <Link href={`/products/${data._id}`} className="block">
            <Slider {...settings} className="collection-gallery-slider">
              {data.gallery.map((galleryImage, index) => (
                <div key={index} className="relative pt-2">
                  <Image
                    src={galleryImage}
                    alt="Product Image"
                    className="w-full object-cover block"
                    width="400"
                    height="310"
                  />
                  {data.isBooked && (
                    <Image
                      src="/images/collection-booked.webp"
                      alt="Booked"
                      width="33"
                      height="84"
                      className="object-contain absolute right-6 z-10 w-12 top-0 collection-sold-mark"
                    />
                  )}
                  {data.isSoldOut && (
                    <Image
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

        <div className="px-14 pt-8 md:px-10">
          <Link href={`/products/${data._id}`} className="block">
            <CommonInfoUsp data={data} />
          </Link>

          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            <div className="callBtnLeft">
              <div
                className="btn btnBlack btnSquare cursor-pointer"
                onClick={popupToggler}
              >
                <Image
                  src="/images/square-btn-call-icon.webp"
                  width="19"
                  height="19"
                  alt="Call Icon"
                  className="object-contain w-7 mr-6 h-auto"
                />
                Request A Call Back
              </div>
            </div>
            <div className="callBtnRight ml-4">
              <a
                href="#"
                className="whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px]"
              >
                <Image
                  src="/images/whatsapp-btn-icon.webp"
                  width="18"
                  height="18"
                  alt="Call Icon"
                  className="object-contain w-9"
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
