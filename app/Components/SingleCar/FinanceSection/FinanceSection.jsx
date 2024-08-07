"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const FinanceSection = () => {
  const [carPrice, setCarPrice] = useState(4900000);
  const [downPaymentAmount, setDownPaymentAmount] = useState(
    Math.round((50 / 100) * 4900000)
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState(50);
  const [annualInterest, setAnnualInterest] = useState(10);
  const [termPeriod, setTermPeriod] = useState(12);
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [totalInterestToPay, setTotalInterestToPay] = useState(0);

  const downPaymentPercentChange = (e) => {
    setDownPaymentPercent(e.target.value);
    setDownPaymentAmount(Math.round((e.target.value / 100) * carPrice));
  };
  const annualInterestRateChange = (e) => {
    setAnnualInterest(e.target.value);
  };
  const termPeriodChange = (e) => {
    setTermPeriod(e.target.value);
  };

    //   Calculate EMI
    useEffect(() => {
      const loanAmount = carPrice - downPaymentAmount;
      const monthlyInterestRate = annualInterest / (12 * 100); // Convert annual interest rate to a monthly interest rate
      const emi =
        (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, termPeriod)) /
        (Math.pow(1 + monthlyInterestRate, termPeriod) - 1);
      const totalAmountToPay = emi * termPeriod;
      const totalInterestToPay = totalAmountToPay - loanAmount;
      setMonthlyEmi(emi.toFixed(2));
      setTotalAmountToPay(totalAmountToPay.toFixed(2));
      setTotalInterestToPay(totalInterestToPay.toFixed(2));
    }, [downPaymentAmount, annualInterest, termPeriod]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-black py-24 lg:py-36 1xl:py-44 2xl:py-52 3xl:py-64"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="max-1920">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">
          <div className="px-10 sm:px-16 md:px-20 lg:w-40% lg:px-36 1xl:pr-44">
            <div className="text-center">
              <h2 className=" lg:font-normal text-white mb-10 lg:mb-5 lg:leading-tight xl:text-6xl 1xl:leading-1.3 1xl:text-7xl 1xl:tracking-tighter 3xl:text-[5.8rem] 3xl:mb-10">
                {" "}
                <span className="block font-light">Get Your Ride</span> Financed
                Today!
              </h2>
              <p className="text-zinc-500 text-1.6xl lg:text-xl 3xl:text-3xl">
                Easy and hassle free Emi options available.
              </p>
            </div>
            <div className="relative text-white text-center mx-auto px-5 py-8 mt-16 border border-[#ffffff80] rounded-[1rem] max-w-[24rem] lg:w-max lg:rounded-[0.6rem] lg:mt-10 lg:py-5 lg:px-8 xl:mt-12 3xl:mt-20 3xl:px-16 3xl:py-9 3xl:max-w-[40rem]">
              <p className="absolute w-max px-[1.5rem] left-[50%] top-[-1rem] translate-x-[-50%] text-xl bg-black lg:top-[-0.8rem] lg:text-base 3xl:text-1xl before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-[50%] before:bg-[#ffffff80] before:top-[50%] before:translate-y-[-50%] before:left-0 after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-[#ffffff80] after:top-[50%] after:translate-y-[-50%] after:right-0">
                EMI Starts @
              </p>
              <h5 className="lg:text-1xl xl:text-xl 1xl:text-2xl 3xl:text-3.5xl">
                ₹ {monthlyEmi}/- <span className="font-extralight">Per Month</span>
              </h5>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between flex-wrap items-center text-white mt-20 3xl:mt-24">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Down Payment
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  ₹ {downPaymentAmount}
                </p>
              </div>
              <div className="mt-8">
                {/* <RangeSlider
                  className="emiSlider"
                  value={downPaymentPercent}
                  onInput={setDownPaymentPercent}
                  step={1}
                  max={70}
                /> */}
                <input
                  type="range"
                  name=""
                  id=""
                  min="20"
                  max="80"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={downPaymentPercent}
                  onChange={downPaymentPercentChange}
                />
                <div className="relative overflow-hidden emiPercentBox h-[3rem] [&>span]:top-[1rem] [&>span]:text-[0.9rem] lg:[&>span]:text-[0.7rem] lg:[&>span]:pt-[0.7rem] 3xl:[&>span]:text-[1rem]">
                  <span className="absolute text-white font-light emiPercent leftOne left-0 lg:h-[4rem]">
                    10%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftTwo left-[14%]">
                    20%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftThree left-[28%]">
                    30%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftFour left-[41.5%]">
                    40%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftFive left-[55%] sm:left-[55.7%]">
                    50%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftSix left-[68.5%] sm:left-[69.5%]">
                    60%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftSeven left-[82%] sm:left-[83%]">
                    70%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftEight left-[unset] right-0">
                    80%
                  </span>
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mt-8 3xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Annual Interest Rate (%)
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  {annualInterest}
                </p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="7"
                  max="15"
                  step="0.1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={annualInterest}
                  onChange={annualInterestRateChange}
                />
              </div>
            </div>

            {/* Term Period Slider */}
            <div className="mt-10 3xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white ">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Term/Period (Month)
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  {termPeriod}
                </p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="1"
                  max="84"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={termPeriod}
                  onChange={termPeriodChange}
                />
              </div>
            </div>

            <div className=" mt-10 hidden sm:text-center lg:block 1xl:mt-14 3xl:mt-20">
              <a href="#" className="btn btnWhite roundedBtn">
                Get More Details
              </a>
            </div>
          </div>

          <div className="block w-full lg:w-60% lg:pl-40 1xl:pl-52 1xl:pr-5 3xl:pl-64">
            <Image
              src="/images/detail-page/detail-finance-thumb.webp"
              width="965"
              height="644"
              className="w-full object-cover block"
              alt="Car Image"
            />
          </div>
        </div>

        <div className="px-8 mt-16 sm:text-center lg:hidden">
          <a href="#" className="btn btnWhite roundedBtn">
            Get More Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
