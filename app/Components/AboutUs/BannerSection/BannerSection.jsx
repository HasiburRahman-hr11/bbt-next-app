import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-white pt-[3rem]">
      <div className="max-1920">
        <div className="container relative z-10">
          <div>
            <h1 className="font-extralight [&>b]:font-normal tracking-[-2.5px]">
              The <b>Company</b>
            </h1>
            <p className="text-[1.2rem] font-medium mt-[1rem]">
              BBT started in 2009 as a benchmark model for the Pre-Used, or how
              we prefer to see it as, Pre-Loved Car Brand. The mission was
              simple, direct and drove effect - delivering a new dimension of
              luxury while standardising & raising platforms for the used car
              market in India.
            </p>
          </div>
          <div className="relative mt-[2.5rem] mb-[4rem]">
            <div>
              <video
                src=""
                className="w-full block h-auto min-h-[43.3rem]"
                poster="/images/about-us/about-video-thumb.webp"
              ></video>
            </div>
            <div className="play-btn absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[7.5rem] h-[7.5rem] cursor-pointer">
              <img
                src="/images/about-us/about-play-btn.webp"
                alt="Play button"
                className="w-full object-contain h-auto"
              />
            </div>
          </div>

          <div>
            <h2 className="font-normal tracking-[-2px] leading-[1.1] pb-[2.5rem] mb-[2.5rem] border-b border-b-black">
              Big boy toyz, a pre-owned luxury car dealer deals with 24 brands.
            </h2>
            <div className="[&>p]:font-light [&_b]:font-[500] [&>p]:text-[1.2rem] [&>p]:leading-[1.3]">
              <p>
                <b>BBT started in 2009</b> as a benchmark model for the
                Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand.
                The mission was simple, direct and drove effect - delivering a
                new dimension of luxury while standardising & raising platforms
                for the used car market in India.
              </p>
              <p className="mt-[2.5rem]">
                <b>Since our inception</b> our primary aim has been our passion
                for delivering excellence which became our mission. YOU (our
                patrons) are the driving force behind our company and making
                sure you get the best is what we thrive on.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[-3rem]">
          <img
            src="/images/about-us/about-banner-bottom.webp"
            alt="Thumbnail"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
