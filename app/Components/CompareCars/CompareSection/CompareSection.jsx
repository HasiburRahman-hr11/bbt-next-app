"use client";
import React, { useState } from "react";
import CompareResult from "./CompareResult";

const dummyCars = [
  {
    _id: "001",
    title: "Bmw Z4 M40I",
    price: "76,00,000",
    thumbnail: "/images/compare-cars/car-1.webp",
  },
  {
    _id: "002",
    title: "Bmw M2 Competition",
    price: "72,00,000",
    thumbnail: "/images/compare-cars/car-2.webp",
  },
  {
    _id: "003",
    title: "Bmw X7 lCI Xdrive 40I M sport",
    price: "1,36,00,000",
    thumbnail: "/images/compare-cars/car-3.webp",
  },
  {
    _id: "004",
    title: "Bmw X7 lCI Xdrive Competition",
    price: "1,49,00,000",
    thumbnail: "/images/compare-cars/car-4.webp",
  },
];

const CompareSection = () => {
  const [cars, setCars] = useState([...dummyCars]);
  const [brand, setBrand] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [allSelectedCars, setAllSelectedCars] = useState([]);

  const handleCarSelect = (e) => {
    if (!brand) {
      alert("Please select Brand first!");
      return;
    }
    let carId = e.target.value;
    const getSelectedCar = cars.find((car) => car._id === carId);

    const exists = allSelectedCars.some(
      (item) => item._id === getSelectedCar._id
    );

    if (exists) {
      alert(`${getSelectedCar.title} is already added`);
    } else {
      setAllSelectedCars([...allSelectedCars, getSelectedCar]);
      setBrand("");
      setSelectedCar("");
    }
  };

  const handleRemoveCar = (id) => {
    const restCars = allSelectedCars.filter((car) => car._id !== id);
    setAllSelectedCars(restCars);
  };
  return (
    <section className="bg-white py-[6rem] xl:pb-[13rem] 3xl:pt-[8rem] 3xl:pb-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light text-center [&>b]:font-medium text-[2.5rem] tracking-[-2px] lg:text-left xl:text-[3rem] ] 1xl:text-[3.7rem] 3xl:text-[4.5rem] mb-[4rem] xl:mb-[7rem] 2xl:mb-[9rem] 3xl:mb-[11rem]">
            Please select at least <b>2 cars for comparison</b>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem] xl:gap-x-[1.6rem] md:grid-cols-3 lg:grid-cols-4 1xl:gap-x-[1.8rem] 2xl:gap-x-[2rem] 3xl:gap-x-[2.4rem]">
            {allSelectedCars && allSelectedCars.length > 0 && (
              <>
                {allSelectedCars.map((car, index) => (
                  <div key={index} className="mb-[3rem]">
                    <div className="flex justify-between items-center px-[1rem] mb-[1rem] xl:mb-[0.5rem] xl:px-0">
                      <p className={styles.itemLabel}>
                        Add{" "}
                        <b>
                          {index === 0 && "First "}
                          {index === 1 && "Second "}
                          {index === 2 && "Third "}
                          {index === 3 && "Fourth "}
                          Car
                        </b>
                      </p>
                      <span
                        className=" inline-block cursor-pointer w-[1.7rem] xl:w-[1.5rem] 2xl:w-[1.7rem] 3xl:w-[2rem] xl:mr-[5px]"
                        onClick={() => handleRemoveCar(car._id)}
                      >
                        <img
                          src="/images/compare-cars/cross-icon.webp"
                          alt="Cross icon"
                          className="w-full h-auto object-contain"
                        />
                      </span>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden mb-[1rem] xl:mb-[0.5rem]">
                      <img
                        src={car.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-[1rem] xl:px-0">
                      <p className="font-medium text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] xl:tracking-tighter 2xl:text-[2.1rem] 3xl:text-[2.5rem]">
                        {car.title}
                      </p>
                      <p className="font-medium text-[1.3rem] xl:text-[1.5rem] 1xl:text-[1.7rem] xl:tracking-tighter 2xl:text-[1.9rem] 3xl:text-[2.2rem] 3xl:mt-[0.5rem]">
                        ₹{car.price}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {allSelectedCars.length < 4 && (
              <div>
                <p className={`${styles.itemLabel} mb-[1rem]`}>
                  Add{" "}
                  <b>
                    {allSelectedCars.length === 0 && "First "}
                    {allSelectedCars.length === 1 && "Second "}
                    {allSelectedCars.length === 2 && "Third "}
                    {allSelectedCars.length === 3 && "Fourth "}
                    Car
                  </b>
                </p>
                <div className={styles.inputWrapper}>
                  <span className={styles.selectArrow}>
                    <img
                      src="images/dropdown-arrow-black.webp"
                      alt="Arrow"
                      className="w-full object-contain h-auto"
                    />
                  </span>
                  <select
                    name=""
                    id=""
                    className={styles.selectInput}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option>Select Brand</option>
                    <option value="Aprilia">Aprilia</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Cadillac">Cadillac</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Ducati">Ducati</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Volvo">Volvo</option>
                  </select>
                </div>
                <div className={styles.inputWrapper}>
                  <span className={styles.selectArrow}>
                    <img
                      src="images/dropdown-arrow-black.webp"
                      alt="Arrow"
                      className="w-full object-contain h-auto"
                    />
                  </span>
                  <select
                    name=""
                    id=""
                    className={styles.selectInput}
                    value={selectedCar}
                    onChange={handleCarSelect}
                  >
                    <option>Select Car</option>
                    {cars.map((car, index) => (
                      <option key={index} value={car._id}>
                        {car.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {allSelectedCars.length > 1 && (
            <div className="mt-[4rem] pt-[4rem] border-t border-t-[#C5C5C5] xl:mt-[6rem] xl:pt-[6rem] 1xl:pt-[7rem] 3xl:pt-[10rem] 3xl:mt-[9rem]">
              <CompareResult />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompareSection;

const styles = {
  inputWrapper:
    "relative bg-white border border-[#CCCCCC] rounded-[0.7rem] h-[4.5rem] px-[0.5rem] mb-[1.5rem] 3xl:mb-[2.5rem] emi-select-box 1xl:h-[4.8rem] 2xl:h-[5.3rem] 3xl:h-[6.5rem] 1xl:rounded-[1rem]",
  selectInput:
    "w-full bg-transparent outline-none border-none h-full appearance-none px-[1rem] text-[1.4rem] relative z-10 1xl:text-[1.4rem] 2xl:text-[1.55rem] 3xl:text-[1.8rem]",
  selectArrow:
    "w-[1.5rem] 3xl:w-[1.9rem] h-full absolute top-0 right-[2rem] z-[1] inline-flex items-center justify-center",
  itemLabel:
    "font-light [&>b]:font-medium text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.8rem] xl:tracking-tight 2xl:text-[2rem] 3xl:text-[2.4rem]",
};
