import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-dark-800 py-28 text-white xl:py-40 2xl:py-48">
      <div className="container">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="mb-16 lg:w-[25%] lg:mb-0 xl:w-[20%] 1xl:w-[23%]">
            <Image
              src="/images/bbt-logo-2.webp"
              alt="BBT Logo"
              width="389"
              height="258"
              className=" object-contain w-44 lg:w-full"
            />
          </div>
          <div className="font-light [&>p]:text-xl [&>p]:leading-1.6 lg:w-[70%] xl:w-[75%] 1xl:w-[70%] 2xl:[&>p]:text-[1.6rem]">
            <h2 className="font-light mb-8 tracking-tighter [&>strong]:font-normal leading-1.3 lg:leading-[1.4] [&>br]:hidden lg:[&>br]:block">
              Why Buy{" "}
              <strong>
                Second Hand <br /> Bmw
              </strong>{" "}
              Cars From Big Boy Toyz?
            </h2>
            <p>
              What if we say that your second-hand BMW car is still a new one?
              Yes! You read it right, we offer you used BMW cars that are still
              new in look (polished) and resemble all the features that a luxury
              car needs. Along with that, you get certified and pre-owned BMW
              passed through checkpoints. Which gives you a feel of new at a
              reasonable price range. We offer you one of the best deals across
              India with high quality and we are the most trusted company in the
              nation for used luxury cars, while we offer myriad brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
