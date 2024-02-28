import React from "react";

const Chairman = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="text-[2.8rem] tracking-[-1.5px]">S.L. Ahuja</h2>
          <p className="text-[1.2rem]">Chairman</p>
          <div className="relative pr-[3rem] pb-[9rem] mt-[2rem]">
            <img
              src="/images/team-page/chairman-img.webp"
              alt="Chairman"
              className="w-full h-auto object-cover rounded-[2rem]"
            />
            <div className="bg-black absolute right-0 bottom-0 pt-[4rem] pb-[2rem] px-[2rem] w-[17rem] rounded-[1.5rem]">
              <div className="absolute top-[2rem] right-[2rem] w-max">
                <img
                  src="/images/team-page/team-quote-white-1.webp"
                  alt="Quote Icon"
                  className="h-auto object-contain w-[2.19rem]"
                />
              </div>
              <p className="text-[1.5rem] tracking-[-1px] leading-[1.4] pr-[1.1rem] text-white font-light">
                A man with a vision to create a venerable business of excellence
              </p>
              <img
                src="/images/team-page/team-chairman-bbt-logo.webp"
                alt="BBT Logo"
                className="inline-block mt-[2rem] h-auto object-contain w-[4.1rem]"
              />
            </div>
          </div>

          <p className="font-light text-[1.2rem] leading-[1.4] mt-[3rem] [&>b]:font-normal">
            <b>Mr. S. L. Ahuja</b>, B.Com, FCA, LL.B, is the driving force
            behind the company. A man with a vision to create a venerable
            business of excellence, he is the inspiration that spearheads the
            company's management and operations; strategizing and directing it
            through its next phase of growth. Born in Haryana, Mr Ahuja
            qualified as a Fellow Chartered Accountant with specialization in
            Finance. His keen business acumen helped him chart early success in
            consumer and automobile finance that led him to venture into
            business with the establishment of M/s Kiran Securities Pvt Ltd in
            the year 1994, venturing into consumer finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
