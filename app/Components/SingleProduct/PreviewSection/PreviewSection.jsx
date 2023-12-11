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
    <section className="bg-black text-white py-24">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex justify-between  items-center flex-wrap">
          <h2 className=" text-25px tracking-tighter">
            Previewing The <br /> Exciting Ride Ahead.
          </h2>
          <div className=" text-center py-5 px-5 border rounded-xl border-neutral-600 cursor-pointer">
            <Image
              src="/images/detail-page/detail-engine-sound-icon.webp"
              width="17"
              height="17"
              className="w-7 object-contain inline-block mx-auto"
            />
            <p className="text-base mt-5">Engine Sound</p>
          </div>
        </div>
        <div className="relative mt-16">
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
              width="54"
              height="54"
              className="w-24 object-contain inline-block mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-20 pt-20 border-t border-gray-300">
          <div className="w-1/4 pr-8 border-r border-gray-300">
            <Image
              src="/images/detail-page/detail-bbt-certified.webp"
              alt="BBT Certified"
              width="53"
              height="72"
              className="w-24 object-contain invert"
            />
          </div>
          <div className="w-70% pl-10">
            <h2 className="text-25px tracking-tight">
              Hurray! This Car Is BBT Certified.
            </h2>
          </div>
        </div>
        <a className="flex justify-between items-center my-16">
          <p>151 Check Points Completed</p>
          <Image
            src="/images/showroom-location-arrow.webp"
            alt="BBT Certified"
            width="12"
            height="12"
            className="w-5 object-contain invert"
          />
        </a>
      </div>
      <PreviewSlider />
    </section>
  );
};

export default PreviewSection;
