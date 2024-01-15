"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FormSection = () => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        <div className="px-3 md:flex md:flex-wrap md:justify-between md:items-center">
          <div className="md:w-[40%] ">
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden md:inline-block mb-14 object-contain md:w-28 lg:w-32 xl:w-40 3xl:w-48"
            />
            <h2 className="font-normal text-white tracking-tighter text-4.5xl md:mb-8">
              <span className="block font-light">Planning To Sell?</span> Sell
              Your Car In 29 Minutes
            </h2>
            <div className="hidden md:block">
              <p className="text-white text-[1rem]">
                For further enquiry, you can call or whatsapp
              </p>
              <div className=" flex flex-wrap items-center">
                <p className="text-[1rem] text-white font-light [&>a]:font-normal">
                  Call us :{" "}
                  <a
                    href="tel:+919999999915"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+91) 9999 9999 15
                  </a>
                </p>
                <p className="text-[1rem] text-white font-light [&>a]:font-normal">
                  WhatsApp :{" "}
                  <a
                    href="tel:+919999999983"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+91) 99999 99983
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[55%]">
            <div>
              <form action="" className="block">
                <div className="flex flex-wrap items-center">
                  <div className="w-[6.3rem] h-[6.3rem] rounded-lg border border-neutral-400 flex items-center justify-center cursor-pointer relative my-10 p-3">
                    <input
                      accept="image/*"
                      type="file"
                      onChange={imageChange}
                      className="block opacity-0 w-full h-full absolute"
                    />
                    {selectedImage ? (
                      <Image
                        src={URL.createObjectURL(selectedImage)}
                        width="65"
                        height="65"
                        className="w-full h-full object-cover block"
                        alt="Car Image"
                      />
                    ) : (
                      <Image
                        src="/images/collection-photo-upload.webp"
                        alt="Add Photo"
                        width="20"
                        height="20"
                        className="w-8 object-contain"
                      />
                    )}
                  </div>
                  <p className="text-2xl font-light ml-5">
                    Upload Your <br /> Car Photo
                  </p>
                </div>

                <div className="mb-10">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-9 border border-neutral-500 rounded-lg outline-none bg-transparent"
                  />
                </div>
                <div className="mb-10">
                  <input
                    type="tel"
                    placeholder="Phone*"
                    required
                    className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-9 border border-neutral-500 rounded-lg outline-none bg-transparent"
                  />
                </div>
                <button
                  className="w-full block bg-white text-black py-7 text-center text-2xl font-medium rounded-lg outline-none border border-white hover:bg-transparent hover:text-white transition-all duration-500"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="divider relative h-px w-full bg-neutral-500 my-20">
              <span className="w-14 h-14 rounded-50% bg-black text-white text-xl text-center flex items-center justify-center p-1 uppercase absolute-center border border-neutral-500">
                OR
              </span>
            </div>
            <div>
              <p className="text-white font-light text-[1.4rem]">
                For further enquiry, you can call or whatsapp
              </p>

              <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
                <div className="callBtnLeft">
                  <Link
                    href="#"
                    className="btn btnBlack btnSquare border border-neutral-500 h-extra"
                  >
                    <Image
                      src="/images/square-btn-call-icon.webp"
                      width="19"
                      height="19"
                      alt="Call Icon"
                      className="object-contain w-7 mr-6 h-auto"
                    />
                    Call Big Boy Toyz
                  </Link>
                </div>
                <div className="callBtnRight ml-4">
                  <a
                    href="#"
                    className="whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px]"
                  >
                    <Image
                      src="/images/whatsapp-btn-icon.webp"
                      width="18"
                      height="18"
                      alt="Call Icon"
                      className="object-contain w-9"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
