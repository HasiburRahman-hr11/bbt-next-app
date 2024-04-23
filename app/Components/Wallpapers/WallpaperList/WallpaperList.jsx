"use client";
import React, { useState } from "react";
import { wallpapers } from "../../../../public/data/dummyData";
import WallpaperItem from "./WallpaperItem";
import DownloadPopup from "./DownloadPopup";

export function Avatar({ name, bg, color }) {
  const getAvatarLetters = (name) => {
    const words = name.trim().split(" ");
    let avatarLetters = "";

    for (let i = 0; i < 2 && i < words.length; i++) {
      avatarLetters += words[i].charAt(0).toUpperCase(); // Get the first letter of each word
    }

    return avatarLetters;
  };

  const avatarLetters = name ? getAvatarLetters(name) : "Big Boy Toyz";
  return (
    <div
      className={`w-[3rem] h-[3rem] rounded-[50%] bg-[${bg}] mr-[0.7rem] uppercase text-[1.3rem] text-[${color}] flex justify-center items-center font-medium text-center 3xl:w-[4.2rem] 3xl:h-[4.2rem] 3xl:text-[1.6rem]`}
      style={{ color: color }}
    >
      {avatarLetters}
    </div>
  );
}

const WallpaperList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [wallpaperId, setWallpaperId] = useState("");

  const toggleModal = (id) => {
    setWallpaperId(id);
    setOpenModal(!openModal);
  };
  return (
    <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem] 2xl:pb-[14rem] 3xl:pb-[16rem]">
      <div className="max-1920">
        {openModal && (
          <DownloadPopup toggleModal={toggleModal} wallpaperId={wallpaperId} />
        )}
        <div className="container">
          {wallpapers.length > 0 ? (
            <>
              <ul className="block md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-[3rem] xl:gap-[5rem]">
                {wallpapers.map((wallpaper, index) => (
                  <li className="mb-[3rem] xl:mb-0" key={wallpaper._id}>
                    <WallpaperItem
                      wallpaper={wallpaper}
                      toggleModal={toggleModal}
                    />
                  </li>
                ))}
              </ul>
              <div className="w-max mx-auto mt-[3rem] xl:mt-[5rem] 1xl:mt-[7rem] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
                <button className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]">
                  Show More
                </button>
              </div>
            </>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Wallpaper Available Now!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WallpaperList;
