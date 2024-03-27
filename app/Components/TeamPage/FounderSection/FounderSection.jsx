"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const awardsList = [
  { awardImg: "/images/team/founder-award-1.webp" },
  { awardImg: "/images/team/founder-award-2.webp" },
  { awardImg: "/images/team/founder-award-3.webp" },
  { awardImg: "/images/team/founder-award-4.webp" },
];
const featured = [
  {
    thumbnail: "/images/team/founder-featured-1.webp",
    title: "The Magazine",
  },
  {
    thumbnail: "/images/team/founder-featured-2.webp",
    title: "Ted Talks",
  },
  {
    thumbnail: "/images/team/founder-featured-3.webp",
    title: "Brand By TMM",
  },
  {
    thumbnail: "/images/team/founder-featured-4.webp",
    title: "Elite Magazine",
  },
];

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

const SliderItem = ({ data }) => {
  return (
    <div className="pr-[1.5rem] h-full sm:pr-0 sm:w-[23%] sm:h-[inherit] sm:mt-[1.5rem] 1xl:w-[22%]">
      <div className="bg-[#F4F4F1] pt-[1.5rem] h-full text-center px-[1rem] min-h-[18.8rem] sm:min-h-[unset] md:pt-[1rem] md:px-[0.5rem] md:min-h-[15rem] md:flex md:flex-col md:justify-around lg:min-h-[16rem] xl:min-h-none xl:block xl:pt-[1.5rem] xl:px-[0.7rem] 1xl:px-[1.3rem] 3xl:pt-[2rem]">
        <div className="px-[1.7rem] sm:px-[0] lg:px-[0.5rem] xl:px-[0.8rem] 3xl:px-[1.2rem]">
          <img
            src={data.thumbnail}
            alt="Slider Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-[1.5rem] w-full tracking-[-1px] font-light mt-[1.5rem] pb-[1.5rem] sm:text-[1.2rem] md:pb-[0.7rem] md:text-[1rem] md:mt-[0.7rem] xl:text-[1.2rem] xl:min-h-[4.2rem] xl:pb-[0] xl:flex xl:items-center xl:justify-center 1xl:text-[1.25rem] 1xl:tracking-[-0.5px] 1xl:min-h-[4.5rem] 3xl:text-[1.8rem] 3xl:tracking-[-1px] 3xl:min-h-[7.5rem]">
          {data.title}
        </p>
      </div>
    </div>
  );
};

const FounderSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[6rem] xl:py-[12rem] 1xl:py-[14rem] 2xl:py-[16rem] 3xl:py-[19rem]">
      <div className="max-1920">
        <div className="container">
          <div className="sm:flex sm:flex-wrap sm:justify-between">
            <div
              className="sm:w-[40%] sm:mx-auto md:ml-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="md:hidden">
                <h2 className="text-[2.2rem] tracking-[-1.5px]">Jatin Ahuja</h2>
                <p className="text-[1.2rem] font-light">
                  Founder & Managing Director
                </p>
              </div>
              <div className="mt-[2rem] md:mt-0 ">
                <img
                  src="/images/team/founder-img.webp"
                  alt="Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div
              className="md:w-[51%]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="hidden md:block">
                <h2 className="text-[2.2rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                  Jatin Ahuja
                </h2>
                <p className="text-[1.2rem] font-light lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                  Founder & Managing Director
                </p>
              </div>
              <div className="mt-[3rem] xl:pr-[10%] 2xl:mt-[2rem] md:mt-[2rem]">
                <div className="md:flex md:flex-col-reverse">
                  <div className="flex items-start md:mt-[2rem]">
                    <img
                      src="/images/team/team-quote-icon-black.png"
                      alt="Quote Icon"
                      className="h-auto object-contain w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="flex-1 ml-[1rem] underline text-[1.5rem] leading-[1.4] xl:text-[2rem] 1xl:text-[2.2rem] 3xl:text-[2.8rem] 3xl:ml-[2rem]">
                      Great entrepreneurs are more <br /> born than made.
                    </p>
                  </div>
                  <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] md:mt-0 lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                    Mr Jatin Ahuja is an entrepreneur in the true sense of the
                    word. His passion for the industry saw him initiating his
                    career at the young age of 17. With his dedication,
                    relentless pursuit for impeccable service and vehemence we
                    have seen him build & bring Big Boy Toyz today as one of the
                    strongest names in luxury automotive industry across the
                    length & breadth of the country.
                  </p>
                </div>
                <div className="w-max ml-auto mt-[-1rem] lg:mt-[-4rem] 1xl:mt-[-6rem]">
                  <img
                    src="/images/team/jatin-ahuja-signature.png"
                    alt="Signature"
                    className="h-auto w-[12rem] object-contain 1xl:w-[14.5rem]"
                  />
                </div>
              </div>
              {/* AWARDS SECTION */}
              <div className="border border-[#DEDEDE] rounded-[2rem] px-[2rem] pb-[2rem] mt-[2rem] 1xl:mt-[3rem] 2xl:mt-[5rem]">
                <h5 className="font-normal border border-[#DEDEDE] rounded-[3rem] text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] w-max mx-auto px-[1.5rem] mt-[-0.9rem] bg-white uppercase">
                  Awards Won
                </h5>
                <div className="flex flex-wrap justify-between items-center">
                  {awardsList.map((award, index) => (
                    <div
                      key={index}
                      className="w-[47%] max-w-[15rem] mt-[2rem] sm:w-[23%]"
                    >
                      <img
                        src={award.awardImg}
                        alt="Award Image"
                        className="object-contain h-auto w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* FOR Desktop */}
              <div className=" w-full hidden sm:block mt-[2rem] 2xl:mt-[3rem]">
                <div className="flex flex-wrap justify-between">
                  {featured.map((data, index) => (
                    <SliderItem data={data} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOR MOBILE */}
        {/* FEATURED IN */}
        <div className="pl-[2rem] mt-[3rem] sm:hidden">
          <div className="team-founder-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit] ">
            <Slider {...settings}>
              {featured.map((data, index) => (
                <SliderItem data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
