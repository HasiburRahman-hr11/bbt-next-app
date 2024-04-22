import React from "react";
import { wallpapers } from "../../../../public/data/dummyData";
import WallpaperItem from "./WallpaperItem";

const WallpaperList = () => {
  return (
    <section className="bg-white">
      <div className="max-1920">
        <div className="container">
          {wallpapers.length > 0 ? (
            <>
              <ul className="block md:grid md:grid-cols-2 md:gap-[3rem]">
                {wallpapers.map((wallpaper, index) => (
                  <li className="mb-[3rem]" key={wallpaper._id}>
                    <WallpaperItem wallpaper={wallpaper} />
                  </li>
                ))}
              </ul>
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
