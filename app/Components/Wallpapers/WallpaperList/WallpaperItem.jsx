import React from "react";

const DownloadPopup = ({ downloadOptions }) => {
  return <div></div>;
};

function Avatar({ name }) {
  const getAvatarLetters = (name) => {
    const words = name.trim().split(" ");
    let avatarLetters = "";

    for (let i = 0; i < 2 && i < words.length; i++) {
      avatarLetters += words[i].charAt(0).toUpperCase(); // Get the first letter of each word
    }

    return avatarLetters;
  };

  const avatarLetters = getAvatarLetters(name);
  return (
    <div className="w-[3rem] h-[3rem] rounded-[50%] bg-white mr-[0.7rem] uppercase text-[1.3rem] text-black flex justify-center items-center font-medium text-center">
      {avatarLetters}
    </div>
  );
}

const WallpaperItem = ({ wallpaper }) => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem]">
      <div>
        <img
          src={wallpaper.thumbnail}
          alt={wallpaper.title}
          className="w-100 block object-contain h-auto"
        />
      </div>
      <div className={styles.overlay}>
        <div className="flex flex-wrap justify-between text-white">
          <div className="flex-1">
            <div className="flex items-center w-full">
              <a
                href={wallpaper.instagramLink}
                className="flex items-center w-max"
              >
                <Avatar name={wallpaper.instagramName} />
                <h4 className={styles.instaName}>{wallpaper.instagramName}</h4>
              </a>
              <img
                src="/images/wallpapers/insta-icon.webp"
                alt="Insta Icon"
                className="w-[1.1rem] object-contain h-auto inline-block"
              />
            </div>
            <h3 className={styles.title}>{wallpaper.title}</h3>
          </div>
          <div className="w-max text-right">
            <div className={styles.downloadIcon}>
              <img
                src="/images/wallpapers/dwonload-icon.webp"
                alt="Download"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className={styles.downloadText}>Downloads</p>
            <p className={styles.downloadText}>15071</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  downloadIcon:
    "w-[3rem] h-[3rem] flex justify-center items-center cursor-pointer ml-auto mb-[0.5rem]",
  overlay:
    "absolute left-0 top-0 w-full h-full flex flex-col justify-end bg-[rgba(0,0,0,0.3)] px-[2.5rem] pb-[3rem]",
  title:
    "text-[1.6rem] mt-[1rem] leading-[1.3] md:text-[1.4rem] xl:text-[1.9rem] 2xl:text-[2rem] 3xl:text-[2.4rem] capitalize",
  instaName:
    "text-[1.3rem] border-r border-r-[#fff] pr-[1rem] mr-[1rem] md:text-[1.1rem] xl:text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] leading-[1]",
  downloadText: "text-[1rem] w-max xl:text-[1.1rem] 2xl:text-[1.2rem]",
};

export default WallpaperItem;
