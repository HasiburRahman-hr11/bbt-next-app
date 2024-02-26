import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <section className="bg-[#F3F3F3] py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <p className="uppercase text-center text-[1.12rem] mb-[1.5rem]">
            Join us Now
          </p>
          <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.05rem] mb-[2rem]">
            Join The <b>Best Team</b> <br /> of Car Enthusiast.
          </h2>
          <div>
            <div className="join-us-usp">
              <ul>
                <li className="flex flex-wrap items-center py-[1.8rem] border-t border-[#D9D9D9] last-of-type:border-b">
                  <div className="usp-icon w-[7.94rem] h-[7.94rem] rounded-[50%] bg-white flex justify-center items-center p-[2.2rem]">
                    <img
                      src="/images/bbt-squad/squad-join-usp-1.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className="flex-1 font-light [&>b]:font-normal text-[1.8rem] pl-[1.5rem] tracking-[-0.02rem] leading-[1.3]">
                    Connect: Virtual Interviews & Onboarding <b>BBT Squad</b>
                  </p>
                </li>
                <li className="flex flex-wrap items-center py-[1.8rem] border-t border-[#D9D9D9] last-of-type:border-b">
                  <div className="usp-icon w-[7.94rem] h-[7.94rem] rounded-[50%] bg-white flex justify-center items-center p-[2.2rem]">
                    <img
                      src="/images/bbt-squad/squad-join-usp-2.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className="flex-1 font-light [&>b]:font-normal text-[1.8rem] pl-[1.5rem] tracking-[-0.02rem] leading-[1.3]">
                    Freelance with BBT <br />
                    in a Business <b>Development Job Role</b>
                  </p>
                </li>
                <li className="flex flex-wrap items-center py-[1.8rem] border-t border-[#D9D9D9] last-of-type:border-b">
                  <div className="usp-icon w-[7.94rem] h-[7.94rem] rounded-[50%] bg-white flex justify-center items-center p-[2.2rem]">
                    <img
                      src="/images/bbt-squad/squad-join-usp-3.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className="flex-1 font-light [&>b]:font-normal text-[1.8rem] pl-[1.5rem] tracking-[-0.02rem] leading-[1.3]">
                    Get Paid For Every <b>Transaction Closed</b>
                  </p>
                </li>
              </ul>
            </div>
            <div className="join-us-text text-center mt-[3rem]">
                <p className="font-light text-[1.2rem] px-[1.2rem] mb-[3rem]">At BBT, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on the client’s vehicle can often be tricky to do by themselves, here the BBT Squad comes into picture and connects us to value their vehicle based on its condition and current market value.</p>
                <Link href="#" className="w-full flex text-center justify-center items-center bg-black text-white rounded-[3rem] font-normal text-[1.4rem] py-[1.5rem] px-[2rem]">Join Us Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
