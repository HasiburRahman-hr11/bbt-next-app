import Link from "next/link";
import React from "react";

const uspList = [
  {
    icon: "/images/services/exist-usp-1.webp",
    title: "Multiband </br><b>Service Solution</b> ",
  },
  {
    icon: "/images/services/exist-usp-2.webp",
    title: "Genuine  </br><b>Original Parts</b> ",
  },
  {
    icon: "/images/services/exist-usp-3.webp",
    title: "Expert <b>Trained </br> Mechanics</b> ",
  },
  {
    icon: "/images/services/exist-usp-4.webp",
    title: "After <b>Sales </br> Support</b> ",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine mobileLine block">
            <span className="bg-[#ffffff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
              Why We Exist
            </span>
          </h3>
          <div className="flex flex-wrap mt-[3rem]">
            <div className="w-full">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize mb-[3rem]">
                Big Boy Toyz has firmly established itself as the preeminent
                provider <b>of luxury car sales and services in India.</b>
              </h2>
              <p className="font-[300] text-[1.2rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500]">
                At BBT, we strive to provide the quickest and most hassle free
                car selling service available. Getting a great deal on the
                client’s vehicle can often be tricky to do by themselves, here
                the BBT Squad comes into picture and connects us to value their
                vehicle based on its condition and current market value. <br />
                You can grow with us by expanding your existing freelance and
                agency relationships by working across PAN India, furthermore to
                improve accessibility one can firm their presence on various
                social media platforms on behalf of us. Our target is to
                simplify processing to succeed.
              </p>
              <div className="hidden">
                <Link
                  href="#"
                  className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="w-full mt-[4rem]">
              <ul className="flex justify-between flex-wrap">
                {uspList.map((usp, index) => (
                  <li
                    key={index}
                    className="w-[50%] flex py-[0.5rem] my-[1.5rem] pl-[2rem] [&:nth-child(odd)]:pl-0"
                  >
                    <div className="w-[4rem] h-[4rem] p-[0.9rem] flex justify-center items-center rounded-full bg-[#F4F4F1]">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="object-contain h-auto w-full"
                      />
                    </div>
                    <h6
                      className="flex-[1] pl-[1rem] text-[1.3rem] 3xl:text-[2.2rem] font-light [&>b]:font-medium capitalize"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></h6>
                  </li>
                ))}
              </ul>
              <div className="mt-[3rem]">
                <Link
                  href="#"
                  className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
