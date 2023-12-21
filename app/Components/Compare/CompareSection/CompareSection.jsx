"use client";
import Image from "next/image";
import React, { useState } from "react";

const CompareSection = () => {
  const [selectedBrandOne, setSelectBrandOne] = useState("");
  const [selectedBrandTwo, setSelectBrandTwo] = useState("");

  const handleSelectBrandOne = (event) => {
    setSelectBrandOne(event.target.value);
  };
  const handleSelectBrandTwo = (event) => {
    setSelectBrandTwo(event.target.value);
  };
  return (
    <section className="bg-white py-24">
      <div className="container">
        <h2 className="text-center">Compare Cars</h2>
        <p className="text-center font-light text-xl mt-10 tracking-wide">
          Confused which Car you should buy? CarDekho helps compare two or more
          cars of your choice with the best car comparison tool. Compare cars in
          India on various parameters like price, features, specifications, fuel
          consumption, mileage, performance, dimension, safety & more to make a
          smart choice for you.
        </p>

        <div className="mt-20 pt-16 border-t border-stone-300">
          <div className="flex justify-between">
            <div className="w-5.5/12 py-8 px-5 border-dashed border border-neutral-500">
              <div className="w-16 mx-auto">
                <Image
                  src="/images/compare-add-car-icon.webp"
                  alt="Add Car"
                  width="38"
                  height="38"
                  className="w-full object-contain"
                />
              </div>
              <p className="font-medium text-base mt-5 text-center mb-6">
                Add Car
              </p>
              <select
                className="text-base w-full py-4 pl-2 pr-3 border border-b-0 border-stone-200"
                value={selectedBrandOne}
                onChange={handleSelectBrandOne}
              >
                <option value="">Select Brand/Model</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="toyota">Toyota</option>
                <option value="aston-martin">Aston Martin</option>
              </select>
              <select
                className="text-base w-full py-4 pl-2 pr-3 border border-stone-200"
                disabled={!selectedBrandOne}
              >
                <option value="">Select Variant</option>
                <option value="z4-m401">Z4 M401</option>
                <option value="amg-g63">AMG G63</option>
                <option value="lc-300">LC 300</option>
                <option value="lx-570">LX 570</option>
              </select>
            </div>
            <div className="w-5.5/12 py-8 px-5 border-dashed border border-neutral-500">
              <div className="w-16 mx-auto">
                <Image
                  src="/images/compare-add-car-icon.webp"
                  alt="Add Car"
                  width="38"
                  height="38"
                  className="w-full object-contain"
                />
              </div>
              <p className="font-medium text-base mt-5 text-center mb-6">
                Add Car
              </p>
              <select
                className="text-base w-full py-4 pl-2 pr-3 border border-b-0 border-stone-200"
                value={selectedBrandTwo}
                onChange={handleSelectBrandTwo}
              >
                <option value="">Select Brand/Model</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="toyota">Toyota</option>
                <option value="aston-martin">Aston Martin</option>
              </select>
              <select
                className="text-base w-full py-4 pl-2 pr-3 border border-stone-200"
                disabled={!selectedBrandTwo}
              >
                <option value="">Select Variant</option>
                <option value="z4-m401">Z4 M401</option>
                <option value="amg-g63">AMG G63</option>
                <option value="lc-300">LC 300</option>
                <option value="lx-570">LX 570</option>
              </select>
            </div>
          </div>
          <div className="mt-16">
            <button className="btn roundedBtn border border-[#BEBEBE]">Compare Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
