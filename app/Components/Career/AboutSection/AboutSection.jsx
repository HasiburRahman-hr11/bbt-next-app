import React from "react";

const usps = [
  {
    title: "1200<span>+</span>",
    description: "Employees at BBT",
  },
  {
    title: "30<span>+</span>",
    description: "Years of dealing car",
  },
  {
    title: "7600<span>+</span>",
    description: "Satisfied Customers",
  },
];

const AboutSection = () => {
  return (
    <section className="py-[6rem] bg-[#F6F6F6] md:py-[8rem] lg:py-[10rem] xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center md:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            looking to join for a big boy toyz <br /> for{" "}
            <b>interesting career?</b>
          </h2>
          <div className="flex flex-col justify-center items-center md:justify-between md:flex-row md:flex-wrap md:items-start md:mt-[4rem]">
            <div className="md:w-[42%] mt-[2rem] md:mt-0 1xl:w-[41%] 3xl:w-[42%]">
              <p className="text-[1.2rem] text-center md:text-left xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.48rem] 3xl:text-[1.9rem] font-light">
                Among the many technical jargons that you keep on hearing about
                the automobile, the one that comes up repeatedly in the
                conversation is about torque vectoring. Today we will like to
                demystify this term and tell you what it means and why it is so
                important. Our Vision is to grow along with the team to be
                Number one luxury car dealers in India
              </p>
            </div>
            <div className="md:w-[41%] mt-[2rem] md:mt-0 1xl:w-[39.5%] 3xl:w-[40.5%]">
              <p className="text-[1.2rem] text-center md:text-left xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.48rem] 3xl:text-[1.9rem] font-light">
                Among the many technical jargons that you keep on hearing about
                the automobile, the one that comes up repeatedly in the
                conversation is about torque vectoring. Today we will like to
                demystify this term and tell you what it means and why it is so
                important.
              </p>
            </div>
            <div className="mt-[4rem] w-max md:mt-0">
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="inline-block w-[5rem]  object-contain  invert xl:w-[8.5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[5rem] lg:flex-wrap lg:flex-row-reverse lg:justify-between 1xl:mt-[7rem] 3xl:mt-[9rem]">
            <div className="lg:w-[53%]">
              <ul className="grid grid-cols-2 gap-x-[2rem] gap-y-[1rem] sm:grid-cols-3">
                {usps.map((usp, index) => (
                  <li key={index} className="border border-[#AAAAAA] rounded-[1.5rem] px-[1rem] py-[2rem] sm:px-[3rem] lg:border-0 lg:p-0">
                    <h3
                      className="text-[3rem] flex items-start [&>span]:text-[2rem] leading-[1.2] sm:text-[4rem] sm:[&>span]:text-[3rem] font-medium xl:text-[5rem] xl:[&>span]:text-[4rem] 1xl:text-[6rem] 1xl:[&>span]:text-[4rem] 1xl:tracking-tight 3xl:text-[7.5rem] 3xl:[&>span]:text-[6rem] [&>span]:font-light xl:leading-[1.1]"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></h3>
                    <p className="text-[1.2rem] font-medium xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem]">
                      {usp.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[4rem] lg:mt-0 lg:w-[34%] 2xl:w-[33%]">
              <div className="flex items-start md:mt-[2rem] xl:mt-0">
                <img
                  src="/images/team/team-quote-icon-black.png"
                  alt="Quote Icon"
                  className="h-auto object-contain w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                />
                <p className="flex-1 ml-[1rem] underline text-[1.5rem] leading-[1.4] xl:text-[1.9rem] 1xl:text-[2.2rem] 3xl:text-[2.8rem] 3xl:ml-[2rem]">
                  Our Vision is to grow along with the team to be Number one
                  luxury car dealers in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
