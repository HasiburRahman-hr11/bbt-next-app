"use client";
import React, { useEffect, useState } from "react";
import { wallpapers } from "../../../../public/data/dummyData";

import { saveAs } from "file-saver";
import { Avatar } from "./WallpaperList";

const DownloadPopup = ({ wallpaperId, toggleModal }) => {
  const [wallpaper, setWallpaper] = useState(
    wallpapers.find((item) => item._id == "001")
  );

  const downloadHandler = (url) => {
    saveAs(url);
  };
  useEffect(() => {
    const getWallpaper = wallpapers.find((item) => item._id == wallpaperId);
    console.log(getWallpaper);
    setWallpaper(getWallpaper);
  }, []);
  return (
    <>
      <div
        className="fixed z-100 overflow-y-auto top-0 w-full left-0"
        id="modal"
      >
        
        <div className=" relative flex items-center justify-center w-full min-h-[100vh] pt-[3rem] px-[2rem] pb-[4rem] flex-col">
        <div
          className="absolute h-full inset-0 transition-opacity min-h-[100vh] bg-black opacity-[0.5] z-10"
          onClick={toggleModal}
        ></div>
          <div className="bg-[#F4F4F1] z-20 md:max-w-[700px] xl:max-w-[877px] xl:w-[47%] mx-auto rounded-lg px-[3rem] py-[3rem] w-full relative shadow-xl overflow-hidden xl:rounded-[1.5rem] 3xl:px-[4.5rem] 3xl:py-[4.5rem] 1xl:rounded-[3rem] 3xl:rounded-[3.5rem]">
            <div
              className="absolute top-[1.5rem] right-[1.5rem] w-[2rem] h-[2rem] cursor-pointer z-10 flex justify-center items-center 1xl:right-[2rem]  3xl:right-[2.6rem] 3xl:top-[2rem]"
              onClick={toggleModal}
            >
              <img
                src="/images/wallpapers/close-popup.webp"
                alt=""
                className="object-contain w-[1.5rem] h-auto 3xl:w-[1.9rem]" 
              />
            </div>
            <div
              className="block  text-left transform transition-all  max-h-[95vh] overflow-y-auto no-scrollbar w-full"
            >
              <div className="block md:flex md:justify-between">
                <div className="md:w-[30%] lg:w-[40%] xl:h-[inherit] 1xl:w-[45%]">
                  <img
                    src={wallpaper.popupThumbnail ? wallpaper.popupThumbnail : wallpaper.thumbnail}
                    alt={wallpaper.title}
                    className="w-full h-auto block object-contain max-h-[200px] rounded-[1rem] xl:rounded-[1.7rem] sm:max-h-[300px] md:max-h-[unset] xl:h-full xl:object-cover xl:min-h-[400px]"
                  />
                </div>

                <div className="md:w-[60%] lg:w-[55%] xl:pt-[1rem] 1xl:pt-[2rem] 1xl:w-[50%]">
                  <div className="flex items-center justify-between w-full mt-[3rem] md:mt-0">
                    <div className="flex items-center justify-between w-max">
                      <Avatar
                        name={wallpaper.instagramName}
                        bg="#000"
                        color="#fff"
                      />
                      <h4 className="text-[1.3rem] border-r border-r-[#fff] pr-[1rem] mr-[1rem] md:text-[1.1rem] lg:text-[1.4rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] leading-[1]">
                        {wallpaper.instagramName}
                      </h4>
                    </div>

                    <a
                      href={wallpaper.instagramLink}
                      className="flex items-center hover:text-[#EE3024] transition-all duration-500"
                    >
                      <span className="text-[1.1rem] inline-block mr-[0.5rem] 3xl:text-[1.6rem]">
                        Follow On
                      </span>
                      <img
                        src="/images/wallpapers/popup-insta-icon.webp"
                        alt="Insta Icon"
                        className="w-[1.1rem] object-contain h-auto inline-block 2xl:w-[1.4rem] 3xl:w-[1.8rem]"
                      />
                    </a>
                  </div>
                  <h3 className="text-[1.6rem] mt-[1rem] leading-[1.3] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.7rem] 1xl:text-[1.9rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem] capitalize">
                    {wallpaper.title}
                  </h3>
                  {/* Download Buttons */}
                  {wallpaper && wallpaper.downloadOptions.length > 0 && (
                    <div className="grid grid-cols-2 gap-[1rem] mt-[3rem]">
                      {wallpaper.downloadOptions.map((item, index) => (
                        <button
                          key={index}
                          className="bg-white text-center border border-transparent rounded-[0.7rem] px-[1rem] py-[1rem] outline-none cursor-pointer xl:py-[0.7rem] transition-all duration-500 hover:border-[#EE3024] hover:shadow-xl 1xl:mb-[0.5rem] 3xl:py-[1rem]"
                          onClick={() =>
                            downloadHandler(`http://localhost:3000${item.url}`)
                          }
                        >
                          <p className="text-[1.2rem] xl:text-[1rem] 2xl:text-[1.1rem] 3xl:text-[1.4rem] tracking-[1px] font-medium">
                            {item.dimension}
                          </p>
                          <p className="text-[1rem] xl:text-[0.8rem] 2xl:text-[0.85rem] 3xl:text-[1rem] tracking-[1px] uppercase text-[#606060]">
                            {item.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPopup;
