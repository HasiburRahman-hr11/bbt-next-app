"use client";

import React, { useState } from "react";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Name is required!");
    }
    if (!email) {
      return alert("Email is required!");
    }
    if (!phone) {
      return alert("Phone No. is required!");
    }
    if (!vehicle) {
      return alert("Vehicle name is required!");
    }
    if (!model) {
      return alert("Model No. is required!");
    }
    console.log({ name, email, phone, vehicle, model });
    alert("Form Submitted. Check console for data.");
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Get your ride <b>Pumped Up</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden sm:[&>br]:block">
              BBT Squad is a new platform inviting car enthusiasts to pursue
              their passion for <br /> automobiles without compromising on their
              existing work areas.
            </p>
          </div>
          <div className="xl:w-[90%] xl:mx-auto">
            <form action="" className="w-full block mt-[3rem]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem]">
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name*"
                    required
                    className={styles.inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email*"
                    required
                    className={styles.inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem]">
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone No*"
                    required
                    className={styles.inputStyle}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Vehicle*"
                    required
                    className={styles.inputStyle}
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-[2rem]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="model and year*"
                  required
                  className={styles.inputStyle}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="mt-[2rem]">
                <button
                  type="submit"
                  className="w-full block border border-[#333333] rounded-[5px] py-[1.2rem] bg-black text-white text-[1.4rem] outline-none xl:py-[1.5rem] xl:text-[1.4rem] 3xl:text-[1.89rem]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

const styles = {
  inputStyle:
    "w-full block border border-[#333333] rounded-[5px] py-[1.2rem] pl-[1.5rem] text-[1.4rem] outline-none xl:text-[1.3rem] xl:py-[1.5rem] 3xl:text-[1.64rem]",
};
