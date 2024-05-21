"use client";
import React, { useState } from "react";

const styles = {
  inputField:
    "bg-transparent block w-full border border-[#777777] rounded-[0.5rem] md:rounded-[0.7rem] px-[2rem] py-[1.5rem] text-[1.2rem] xl:text-[1.3rem] xl:py-[1.5rem] 1xl:py-[1.8rem] xl:px-[2.5rem] 3xl:px-[3rem] 3xl:py-[2.5rem] 3xl:text-[1.65rem] outline-none",
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name,
      email,
      phone,
      message
    };
    console.log(formData);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              We spread <b>some love</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for <br /> Automotive
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-[4rem]">
            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[2.5rem] pt-[0.5rem]">
                  <img
                    src="/images/services/love-quote-icon.webp"
                    alt="Quote"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-[1] pl-[2rem]">
                  <p className="font-light text-[#313131] leading-[1.2] text-[2rem] 3xl:text-[5.5rem]">
                    I love the sound of a car’s engine, like a symphony of
                    pistons and gears singing in harmony.
                  </p>
                  <div className="mt-[2rem]">
                    <h6 className="font-normal text-[#313131] mb-[0.5rem] text-[1.4rem] 3xl:text-[3.2rem]">
                      Gaurav Sharma
                    </h6>
                    <p className="text-[#858585] text-[1rem] 3xl:text-[2.2rem]">
                      GM Microsoft
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[3rem] pt-[2rem] border-t border-[#8E8B8B] flex justify-between">
                <div className="w-[47%] flex justify-between items-center">
                  <div className="w-[2.5rem]">
                    <img
                      src="/images/services/call-icon.webp"
                      alt="Phone Icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex-[1] pl-[10px]">
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
                      Call Us @
                    </p>
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] font-medium">
                      (+91) 89999 99264
                    </p>
                  </div>
                </div>
                <div className="w-[47%] flex justify-between items-center">
                  <div className="w-[2.5rem]">
                    <img
                      src="/images/services/whatsapp-icon.webp"
                      alt="Whatsapp Icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex-[1] pl-[10px]">
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
                      Whatsapp
                    </p>
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] font-medium">
                      (+91) 89999 99264
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[4rem]">
              <div className="bg-white p-[2rem] md:p-[4rem] rounded-[1rem] lg:mt-[-2rem] xl:mt-[-3rem] 1xl:p-[6rem] 3xl:mt-[-4rem] 3xl:px-[8rem] 3xl:py-[7rem] 3xl:rounded-[1.5rem]">
                <h2 className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] capitalize">
                  Request a Call Back
                </h2>
                <form
                  className="w-full block mt-[2rem] 3xl:mt-[3rem]"
                  onSubmit={handleSubmit}
                >
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="text"
                      required
                      placeholder="Your Name*"
                      className={styles.inputField}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="tel"
                      required
                      placeholder="Phone No*"
                      className={styles.inputField}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="email"
                      required
                      placeholder="Email Address*"
                      className={styles.inputField}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <textarea
                      type="email"
                      required
                      placeholder="Message*"
                      className={`${styles.inputField} min-h-[15rem]`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <button
                      type="submit"
                      className="bg-black text-white text-center w-full border border-black cursor-pointer px-[3rem] py-[1.5rem] text-[1.3rem] xl:text-[1.4rem] xl:py-[1.7rem] 3xl:text-[1.9rem] 3xl:py-[2.4rem] rounded-[0.7rem] hover:bg-transparent hover:text-black transition-all duration-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
