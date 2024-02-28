"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  centerPadding: "7%",
};

const featured = [
  {
    thumbnail: "/images/team-page/founder-featured-1.webp",
    title: "The Magazine",
  },
  {
    thumbnail: "/images/team-page/founder-featured-2.webp",
    title: "Ted Talks",
  },
  {
    thumbnail: "/images/team-page/founder-featured-1.webp",
    title: "Brand By TMM",
  },
];
const awards = [
  {
    thumbnail: "/images/team-page/founder-award-1.webp",
    title: "40 Under 40 IndiaBusiness world",
  },
  {
    thumbnail: "/images/team-page/founder-award-2.webp",
    title: "Tech And AutoAwards 2018",
  },
  {
    thumbnail: "/images/team-page/founder-award-1.webp",
    title: "Brand By TMM",
  },
];

const SliderItem = ({ data }) => {
  return (
    <div className="pr-[1.5rem] h-full">
      <div className="bg-[#191919] pt-[1.5rem] h-full text-center px-[1rem] min-h-[18.8rem]">
        <div className="px-[1.7rem]">
          <img
            src={data.thumbnail}
            alt="Slider Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-[1.5rem] tracking-[-1px] font-light mt-[1.5rem] pb-[1.5rem]">
          {data.title}
        </p>
      </div>
    </div>
  );
};

const Founder = () => {
  return (
    <section className="bg-black py-[5rem] text-white">
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine titleWhiteLine mobileLine">
            <span className="bg-[#000] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
              The Founder
            </span>
          </h3>
          <div className="mt-[2rem]">
            <h2 className="text-[2.2rem] tracking-[-1.5px]">Jatin Ahuja</h2>
            <p className="text-[1.2rem] font-light">
              Founder & Managing Director
            </p>
            <div className="mt-[2rem]">
              <img
                src="/images/team-page/founder-img.webp"
                alt="Chairman"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
            </div>
            <div className="mt-[3rem]">
              <div className="flex items-start">
                <img
                  src="/images/team-page/team-quote-white-2.webp"
                  alt="Quote Icon"
                  className="h-auto object-contain w-[2.19rem] mt-[0.5rem]"
                />
                <p className="flex-1 ml-[1rem] underline text-[1.5rem] leading-[1.4]">
                  Great entrepreneurs are more <br /> born than made.
                </p>
              </div>
              <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem]">
                Mr Jatin Ahuja is an entrepreneur in the true sense of the word.
                His passion for the industry saw him initiating his career at
                the young age of 17. With his dedication, relentless pursuit for
                impeccable service and vehemence we have seen him build & bring
                Big Boy Toyz today as one of the strongest names in luxury
                automotive industry across the length & breadth of the country.
              </p>
            </div>
          </div>
        </div>

        <div className="pl-[2rem]">
          <div className="mt-[3rem]">
            <h4 className="mb-[1.8rem] text-[1.8rem] tracking-[-1.5px]">Featured In</h4>
            <div className="team-founder-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit]">
              <Slider {...settings}>
                {featured.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="mt-[3rem]">
            <h4 className="mb-[1.8rem] text-[1.8rem] tracking-[-1.5px]">Awards Won</h4>
            <div className="team-founder-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit]">
              <Slider {...settings}>
                {awards.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
