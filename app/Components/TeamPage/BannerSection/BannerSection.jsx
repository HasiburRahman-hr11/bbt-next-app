import Link from "next/link";
import React from "react";

const styles = {
  uspItem: 'w-2/6 px-[0.5rem] py-2 text-center border-l border-[#D9D9D9] first-of-type:border-l-0 sm:first-of-type:border-l sm:last-of-type:border-r',
  uspTitle:
    "text-[1.1rem] font-[300] [&>b]:font-[400] mt-[1rem] leading-[1.4] lg:text-[1.8rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:mt-[3.5rem] 3xl:leading-[1.6]",
};

const BannerSection = () => {
  return (
    <section className="bg-black text-white relative">
      <img
        src="/images/team/team-banner-mobile.webp"
        width="390"
        height="787"
        alt="Banner Image"
        className="block w-full object-cover sm:hidden"
      />
      <img
        src="/images/team/team-banner.webp"
        width="390"
        height="787"
        alt="Banner Image"
        className="w-full object-cover hidden sm:block"
      />
      <div className="absolute top-0 left-0 h-full w-full text-center pt-[10rem] pb-[7rem] flex flex-col justify-between sm:pt-[7rem] md:pb-[5rem] lg:pt-[12rem] lg:pb-[7rem] xl:pt-[10rem] 1xl:pt-[14rem] 2xl:pt-[16rem] 3xl:pt-[18rem]">
        <div>
          <div className="container">
            <p className="text-[1.12rem] uppercase mb-[1rem] lg:hidden">
              the Team
            </p>
            <p className="hidden lg:block [&_img]:invert text-white text-center font-light mb-[1.5rem] xl:mb-0">
              <Link
                href="/"
                className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
              >
                Home
              </Link>
              <img
                src="/images/breadcrumb-arrow.webp"
                className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                width="6"
                height="11"
                alt="Arrow Icon"
              />
              <span className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                The Team
              </span>
            </p>
            <h1 className="font-extralight [&>b]:font-normal text-[3.6rem] tracking-[-2px] leading-[1.15] lg:text-[4rem] xl:text-[5rem] 1xl:text-[5.45rem] 1xl:leading-[1.25] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:leading-[1.15]">
              Discover <b>our team</b> <br /> at Big boy toyz
            </h1>
          </div>
        </div>
        <div className="px-[1rem] sm:w-[60%] sm:mx-auto lg:w-[60%] lg:max-w-[70rem]">
          <ul className="flex flex-wrap mt-16">
            <li className={styles.uspItem}>
              <img
                src="/images/team/banner-usp-1.webp"
                alt="USP Icon"
                width="60"
                height="60"
                className="object-contain inline-block w-[2.3rem] lg:w-[3.5rem]"
              />
              <p className={styles.uspTitle}>
                Virtual{" "}
                <b>
                  BBT <br /> Onboarding
                </b>
              </p>
            </li>
            <li className={styles.uspItem}>
              <img
                src="/images/team/banner-usp-2.webp"
                alt="USP Icon"
                width="60"
                height="60"
                className="object-contain inline-block w-[2.3rem] lg:w-[3.5rem]"
              />
              <p className={styles.uspTitle}>
                Freelance <b>Business Development</b>
              </p>
            </li>
            <li className={styles.uspItem}>
              <img
                src="/images/team/banner-usp-3.webp"
                alt="USP Icon"
                width="60"
                height="60"
                className="object-contain inline-block w-[2.3rem] lg:w-[3.5rem]"
              />
              <p className={styles.uspTitle}>
                More than <b>50+ Car Enthusiasts</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
