import React from "react";
import Link from 'next/link';

const MeetTheTeam = () => {
  return (
    <section>
      <div className="max-1920 relative">
        <div>
          <img
            src="/images/showroom-page/team-bg-mobile.webp"
            alt="Background Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full w-full flex-col justify-between py-[6rem]">
              <div className="text-center text-white">
                <p className="text-[1.12rem] uppercase font-light">BBt Squad</p>
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-1px]">
                  Meet The <b> Passion <br /> Behind BBT</b>
                </h2>
                <p className="font-light text-[1.2rem] mt-[1.5rem]">
                  At BBT, we strive to provide the quickest and most <br /> hassle free
                  car selling service available.
                </p>
              </div>
              <div className="text-center">
                <Link href="/bbt-squad" className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium">Meet The Team</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
