import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-black">
      <div className="max-1920">
        <div className="relative">
          <div>
            <img
              src="/images/team-page/team-banner-mobile.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden w-full h-auto sm:block sm:min-h-[600px] object-cover"
            />
            <img
              src="/images/team-page/team-banner-mobile.webp"
              alt="Banner Image"
              width="391"
              height="686"
              className="block w-full h-auto object-cover sm:hidden"
            />
          </div>
          <div className="text-center absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-[9rem] pb-[5rem]">
            <div className="container text-white">
              <p className="uppercase text-[1.12rem] mb-[1.5rem]">the Team</p>
              <h1 className="font-extralight [&>b]:font-normal text-[3.6rem] tracking-[-2px] leading-[1.15]">
                Discover our team of luxury{" "}
                <b>car enthusiasts ready to assist</b>
              </h1>
            </div>
            <div className="container">
              <div className="flex justify-between px-[1.5rem]">
                <div className="w-[47.2%] bg-white py-[3rem] rounded-[1rem] h-[inherit] text-center">
                  <img
                    src="/images/team-page/team-banner-icon-1.webp"
                    alt="Icon"
                    className="object-contain w-auto h-[5.7rem] inline-block"
                  />
                  <p className="text-[1.2rem] tracking-[-0.19px] mt-[2.2rem] font-medium">
                    Management Team
                  </p>
                </div>
                <div className="w-[47.2%] bg-white bg-opacity-20 backdrop-blur-[2px] py-[3rem] rounded-[1rem] h-[inherit] text-center">
                  <img
                    src="/images/team-page/team-banner-icon-2.webp"
                    alt="Icon"
                    className="object-contain w-auto h-[5.7rem] inline-block"
                  />
                  <p className="text-[1.2rem] tracking-[-0.19px] mt-[2.2rem] font-medium text-white">
                    The Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
