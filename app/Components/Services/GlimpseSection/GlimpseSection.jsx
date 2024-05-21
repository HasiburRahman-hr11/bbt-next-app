"use client";
import React, { useState, useRef } from "react";

const GlimpseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] [&>br]:hidden md:[&>br]:block 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              A glimpse of state of the art <br /> <b>machines and experts</b>
            </h2>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <div className="mt-[2rem]">
                <img
                  src="/images/services/glimpse-img-1.webp"
                  alt="Feature Image"
                  className="w-full h-auto object-cover rounded-[1rem] max-h-[23rem] 3xl:max-h-[42.5rem]"
                />
              </div>
              <div className="mt-[2rem]">
                <img
                  src="/images/services/glimpse-img-2.webp"
                  alt="Feature Image"
                  className="w-full h-auto object-cover rounded-[1rem] max-h-[23rem] 3xl:max-h-[42.5rem]"
                />
              </div>
            </div>
            <div>
              <div className="relative mt-[2rem]">
                <video
                  src="/images/services/glimpse-video.mp4"
                  className="w-full-h-full object-cover rounded-[1rem] max-h-[62rem] 3xl:max-h-[89rem]"
                  playsInline
                  muted
                  loop
                  poster="/images/services/glimpse-vid-thumb.webp"
                  ref={videoRef}
                  width="500"
                  height="889"
                  onClick={handleVideoClick}
                ></video>
                {!isPlaying && (
                  <div
                    className="absolute left-[50%] top-[50%] w-[60px] h-[60px] cursor-pointer z-10 translate-y-[-50%] translate-x-[-50%]"
                    onClick={handlePlayButtonClick}
                  >
                    <img
                      src="/images/services/glimpse-vid-play.webp"
                      alt="Play Icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="mt-[2rem]">
                <img
                  src="/images/services/glimpse-img-3.webp"
                  alt="Feature Image"
                  className="w-full h-auto object-cover rounded-[1rem] max-h-[23rem] 3xl:max-h-[42.5rem]"
                />
              </div>
              <div className="mt-[2rem]">
                <img
                  src="/images/services/glimpse-img-4.webp"
                  alt="Feature Image"
                  className="w-full h-auto object-cover rounded-[1rem] max-h-[23rem] 3xl:max-h-[42.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpseSection;
