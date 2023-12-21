"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [imageThree, setImageThree] = useState();

  const imageChangeOne = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageOne(e.target.files[0]);
    }
  };
  const imageChangeTwo = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageTwo(e.target.files[0]);
    }
  };
  const imageChangeThree = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageThree(e.target.files[0]);
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = {
        name : name,
        email: email,
        mobileNumber : mobile,
        brand : brand,
        model: model,
        variant: variant,
        message: message,
        images: [imageOne, imageTwo, imageThree]
    }
    console.log(formData);

    // Clear Form
    setName("");
    setEmail("");
    setMobile("");
    setBrand("");
    setModel("");
    setVariant("");
    setMessage("");
    setImageOne("");
    setImageTwo("");
    setImageThree("");
  }
  return (
    <form className="w-full block" onSubmit={handleSubmit}>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-8">
        <input
          type="email"
          placeholder="Email Address"
          className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-8">
        <input
          type="tel"
          placeholder="Mobile Number"
          className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="mb-8 w-31%">
          <input
            type="text"
            placeholder="Brand"
            className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-8 w-31%">
          <input
            type="text"
            placeholder="Model"
            className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="mb-8 w-31%">
          <input
            type="text"
            placeholder="Variant"
            className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div
          className={`mb-8 w-31% flex justify-center items-center relative border border-dashed border-[#9B9B9B] rounded-lg square-flex-item ${
            imageOne ? "p-4" : "p-8"
          }`}
        >
          <input
            accept="image/*"
            type="file"
            onChange={imageChangeOne}
            className="block opacity-0 w-full h-full absolute"
          />
          {imageOne ? (
            <Image
              src={URL.createObjectURL(imageOne)}
              width="100"
              height="100"
              className="w-full h-full object-contain block"
              alt="Car Image"
            />
          ) : (
            <Image
              src="/images/sell-car/sell-form-camera.webp"
              alt="Add Photo"
              width="40"
              height="31"
              className="w-16 object-contain"
            />
          )}
        </div>

        <div
          className={`mb-8 w-31% flex justify-center items-center relative border border-dashed border-[#9B9B9B] rounded-lg square-flex-item ${
            imageTwo ? "p-4" : "p-8"
          }`}
        >
          <input
            accept="image/*"
            type="file"
            onChange={imageChangeTwo}
            className="block opacity-0 w-full h-full absolute"
          />
          {imageTwo ? (
            <Image
              src={URL.createObjectURL(imageTwo)}
              width="100"
              height="100"
              className="w-full h-full object-contain block"
              alt="Car Image"
            />
          ) : (
            <Image
              src="/images/sell-car/sell-form-camera.webp"
              alt="Add Photo"
              width="40"
              height="31"
              className="w-16 object-contain"
            />
          )}
        </div>

        <div
          className={`mb-8 w-31% flex justify-center items-center relative border border-dashed border-[#9B9B9B] rounded-lg square-flex-item ${
            imageThree ? "p-4" : "p-8"
          }`}
        >
          <input
            accept="image/*"
            type="file"
            onChange={imageChangeThree}
            className="block opacity-0 w-full h-full absolute"
          />
          {imageThree ? (
            <Image
              src={URL.createObjectURL(imageThree)}
              width="100"
              height="100"
              className="w-full h-full object-contain block"
              alt="Car Image"
            />
          ) : (
            <Image
              src="/images/sell-car/sell-form-camera.webp"
              alt="Add Photo"
              width="40"
              height="31"
              className="w-16 object-contain"
            />
          )}
        </div>
      </div>
      <div className="mb-10">
        <textarea
          placeholder="Message"
          className="text-black text-xl py-3 border-0 border-b border-[#D9D9D9] block w-full bg-transparent outline-none min-h-12"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button className="btn btnBlack btnSquare">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
