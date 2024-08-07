"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import PreviewSlider from "./PreviewSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const PreviewSection = () => {
  const videoRef = useRef();
  const playRef = useRef();

  const playPauseVideo = () => {
    if (videoRef.current.paused) {
      console.log("video is stopped");
      videoRef.current.play();
      playRef.current.classList.add("opacity-0");
    } else {
      console.log("video is playing");
      videoRef.current.pause();
      playRef.current.classList.remove("opacity-0");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-black text-white py-24 lg:py-40 xl:py-44 1xl:py-48 3xl:py-60">
      <div className="max-1920">
        <div
          className=""
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="flex justify-between  items-center flex-wrap">
              <div>
                <p className="uppercase hidden lg:block text-lg mb-8 xl:text-xl 1xl:text-1xl tracking-wide 2xl:text-2xl 2xl:mb-10 3xl:text-3xl 3xl:mb-16">
                  highly maintained
                </p>
                <h2 className=" text-25px tracking-tighter xl:text-5xl lg:font-normal xl:leading-relaxed 1xl:leading-1.4 1xl:text-5.5xl 3xl:text-[4.5rem]">
                  <span className="lg:font-light block">Previewing The</span>{" "}
                  Exciting Ride Ahead.
                </h2>
              </div>
              <div className=" text-center py-5 px-5 border rounded-xl border-[#333] cursor-pointer lg:px-8 lg:py-8 xl:py-12 3xl:py-20 3xl:px-10 group transition-all ease-in-out duration-300 hover:bg-white">
                <Image
                  src="/images/detail-page/detail-engine-sound-icon.webp"
                  width="17"
                  height="17"
                  className="w-7 object-contain inline-block mx-auto 2xl:w-9 3xl:w-11 transition-all ease-in-out duration-300 group-hover:invert"
                  alt="Speaker Icon"
                />
                <p className="text-base mt-5 xl:text-xl 2xl:text-1xl 2xl:mt-7 3xl:text-3xl group-hover:text-black transition-all ease-in-out duration-300">
                  Engine Sound
                </p>
              </div>
            </div>
            <div className="relative mt-16 xl:mt-28 2xl:mt-32">
              <video
                src="http://52.66.135.132/wp-content/uploads/2023/07/mark-banner-video.mp4"
                width="335"
                height="262"
                className="w-full object-cover block"
                poster="/images/detail-page/detail-engine-sound-car.webp"
                ref={videoRef}
              ></video>
              <div
                className="playBtnCenter cursor-pointer "
                onClick={playPauseVideo}
                ref={playRef}
              >
                <Image
                  src="/images/detail-page/detail-engine-sound-play.webp"
                  width="130"
                  height="130"
                  className="w-24 object-contain inline-block mx-auto h-auto xl:w-40 3xl:w-[13rem]"
                  alt="Play Icon"
                />
              </div>
            </div>
          </div>

          {/* lg:pt-24 lg:mt-24 lg:border-t lg:border-gray-300 */}
          <div className="lg:pt-32 xl:pt-44 1xl:pt-48 3xl:pt-60">
            <div className="container divider hidden lg:block h-1 lg:border-t lg:border-neutral-500"></div>
            <div className="lg:flex lg:flex-wrap lg:pl-20 lg:pt-32 xl:pt-44 xl:pl-28 overflow-x-hidden 1xl:pt-48 2xl:pl-36 3xl:pt-64 3xl:pl-48">
              <div className="flex flex-wrap items-center px-8 sm:px-16 md:px-20 lg:w-30% lg:block lg:pr-0 3xl:w-28%">
                <div className="divider w-full h-1 border-t border-gray-300 mt-20 pt-20 lg:hidden"></div>
                <div className="w-1/4 sm:w-max pr-8 border-r border-gray-300 lg:w-40 lg:border-none lg:pr-0 lg:mb-6 xl:w-full xl:mb-10">
                  <Image
                    src="/images/detail-page/detail-bbt-certified-white.webp"
                    alt="BBT Certified"
                    width="110"
                    height="150"
                    className="w-[5.4rem] object-contain xl:w-[6rem] 1xl:w-[9.5rem] 3xl:w-[10.9rem]"
                  />
                </div>
                <div className="w-70% sm:flex-grow pl-10 lg:w-full lg:pl-0">
                  <h2 className="text-25px tracking-tight lg:font-normal xl:text-5xl xl:leading-relaxed 1xl:text-5.5xl 3xl:text-7xl 3xl:leading-1.4">
                    <span className="lg:font-light lg:block">
                      Hurray! This Car is
                    </span>{" "}
                    BBT Certified.
                  </h2>
                </div>
                <img
                  src="/images/down-circle-arrow-white.png"
                  width="94"
                  height="94"
                  alt="Arrow Icon"
                  className="hidden lg:inline-block mt-20 object-contain lg:w-24 h-auto 2xl:w-28 2xl:mt-28 3xl:w-[9.3rem]"
                />
              </div>

              <div className="lg:w-70% 3xl:w-72% mt-24 lg:mt-0">
                <div className="px-10 sm:px-16 md:px-20 lg:pl-0 lg:pr-44 1xl:pr-56 3xl:pr-72">
                  <a href="#" className="flex justify-between items-center my-16 lg:mt-0 1xl:mb-24 group cursor-pointer">
                    <p className="1xl:text-3xl 3xl:text-4xl 3xl:tracking-wide">
                      151 Check Points Completed
                    </p>
                    <Image
                      src="/images/showroom-location-arrow.webp"
                      alt="BBT Certified"
                      width="12"
                      height="12"
                      className="w-5 object-contain invert 1xl:w-7 3xl:w-9 transition-all duration-300 ease-in-out group-hover:rotate-[45deg]"
                    />
                  </a>
                </div>
                <PreviewSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
