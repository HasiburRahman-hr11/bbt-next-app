import Link from "next/link";
import React from "react";

const styles = {
  listStyle:
    "flex flex-wrap items-center py-[1.8rem] border-t border-[#D9D9D9] last-of-type:border-b md:first-of-type:border-t-0 md:last-of-type:border-b-0",
  iconStyle:
    "usp-icon w-[7.94rem] h-[7.94rem] rounded-[50%] bg-white flex justify-center items-center p-[2.2rem] xl:w-[8.5rem] xl:h-[8.5rem]",
  textStyle:
    "flex-1 font-light [&>b]:font-normal text-[1.8rem] pl-[1.5rem] tracking-[-0.02rem] leading-[1.3] xl:text-[1.6rem]",
};

const JoinUs = () => {
  return (
    <section className="bg-[#F3F3F3] py-[6rem] md:py-[10rem]">
      <div className="max-1920">
        <div className="container">
          <p className="uppercase text-center text-[1.12rem] mb-[1.5rem] md:hidden">
            Join us Now
          </p>
          <h2 className=" hidden md:block titleWithLine mobileLine text-left 1xl:tracking-[-0.2rem]  xl:pb-[0.5rem]">
            <span className="bg-[#F3F3F3] inline-block relative z-10  md:pr-10 xl:text-[3rem] xl:pr-[4rem] xl:tracking-tight 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
              Join Us
            </span>
          </h2>
          <h2 className=" font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.05rem] mb-[2rem] md:hidden">
            Join The <b>Best Team</b> <br /> of Car Enthusiast.
          </h2>
          <div className="sm:max-w-[410px] sm:mx-auto md:max-w-none md:flex md:flex-wrap md:justify-between md:flex-row-reverse md:mt-[4rem]">
            <div className="join-us-usp md:w-[45%] lg:w-[34%]">
              <ul>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-1.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Connect: Virtual Interviews & Onboarding <b>BBT Squad</b>
                  </p>
                </li>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-2.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Freelance with BBT <br />
                    in a Business <b>Development Job Role</b>
                  </p>
                </li>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-3.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Get Paid For Every <b>Transaction Closed</b>
                  </p>
                </li>
              </ul>
            </div>
            <div className="join-us-text text-center mt-[3rem] md:w-[52%] md:text-left">
              <h2 className=" font-light [&>b]:font-normal leading-[1.1] tracking-[-0.05rem] mb-[2rem] hidden md:block">
                Join The <b>Best Team</b> <br /> of Car Enthusiast.
              </h2>
              <p className="font-light text-[1.2rem] px-[1.2rem] mb-[2rem] md:px-0 md:mb-[3rem]">
                At BBT, we strive to provide the quickest and most hassle free
                car selling service available. Getting a great deal on the
                client’s vehicle can often be tricky to do by themselves, here
                the BBT Squad comes into picture and connects us to value their
                vehicle based on its condition and current market value.
              </p>
              <Link
                href="#"
                className="w-full flex text-center justify-center items-center bg-black text-white rounded-[3rem] font-normal text-[1.4rem] py-[1.5rem] px-[2rem] md:max-w-[27rem] lg:max-w-none lg:w-max lg:px-[5rem] lg:py-[1.2rem]"
              >
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
