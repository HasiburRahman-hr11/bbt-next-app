import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black py-[6rem] 1xl:py-[8rem]">
      <div className="max-1920">
        <div className="container">
          <div className="lg:flex flex-wrap justify-between items-center">
            <div className="text-white text-center lg:flex-1 lg:text-left">
              <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                We get back
              </p>
              <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.5rem] 1xl:text-[3.7rem] 1xl:mt-[2rem] 2xl:text-[4rem] 3xl:text-[4.5rem] lg:[&_br]:hidden">
                Not Finding <b>What You <br /> Looking For?</b>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-[4rem] lg:w-max lg:mt-0">
              <a
                href="tel:+919999999983"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex-wrap w-max bg-white px-[3rem]  h-[4.5rem] flex justify-center items-center rounded-[5px] text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:h-[5.8rem] mr-[1.5rem] tracking-tight 3xl:text-[1.7rem]"
              >
                <img
                  src="/images/phone-icon-black.png"
                  alt="Phone Icon"
                  width="19"
                  height="19"
                  className="w-[1.5rem] h-auto object-contain inline-block mr-[1rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.85rem]"
                />
                Contact Us Now
              </a>

              <a
                href="#"
                className="bg-[#1BD741] w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] 3xl:w-[5.8rem] 3xl:h-[5.8rem]"
              >
                <img
                  src="/images/whatsapp-btn-icon.webp"
                  alt="Whatsapp Icon"
                  className="object-contain w-[1.99rem] h-auto 1xl:w-[2.4rem] 3xl:w-[2.59rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
