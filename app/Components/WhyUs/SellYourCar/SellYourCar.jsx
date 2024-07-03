import React from "react";

const usps = [
  {
    icon: "/images/why-us/best-car-usp-1.webp",
    title: "Zero Tolerance <br> Policy",
    description:
      "We believe in transparent and fair dealings,no refurbished cars.",
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-2.webp",
    title: "151 check <br> points",
    description:
      "Car comes with 360° inspection report with comfort and ease in driving pleasure.",
    link: "#",
  },
  {
    icon: "/images/why-us/best-car-usp-3.webp",
    title: "Non Accidental <br> Cars",
    description: `We don't buy car's with any accidental record not even a body part been changed as per service history.`,
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-4.webp",
    title: "RTO Physical <br> Check",
    description:
      "We do a complete check of owner and vehicle history with no litigation case on it.",
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-5.webp",
    title: "NCR Check",
    description:
      "Every car goes through a National Crime Record check  at the time of procurement to eliminate any possibility of purchasing a  car with an NCR case",
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-6.webp",
    title: "Fixed price",
    description: `Our complete stock is listed online as we don't believe in inflating the prices to waste your time.`,
    link: "#",
  },
  {
    icon: "/images/why-us/best-car-usp-7.webp",
    title: "Buy Back <br> Agreement",
    description: `We never disclose our customer details with any third-party as we respect your privacy.`,
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-8.webp",
    title: `Client's <br> Confidentiality`,
    description: `Assured buy back policy - drive any car from BBT for a  year with 25% depreciation with kms limitation on it and 75% will be  refunded back to your account.`,
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-9.webp",
    title: "Hassle free <br> buying process",
    description: `We have 24*7 active board-line with constant update of  our stock over social media and have a dedicated website to book your  dream car online with secured banking options available Pan India.`,
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-10.webp",
    title: "Limited period engine & transmission warranty",
    description: `All cars that we sell comes with a backed up six months warranty on engine and transmission from BBT.`,
    link: "",
  },
  {
    icon: "/images/why-us/best-car-usp-11.webp",
    title: "Service & Insurance <br> History Check",
    description: `Cars comes with complete previous service history  checked with authorized dealership and we also check that the previous  insurance policy does't comes with any kind of accidental claims on it.`,
    link: "",
  },
];

const SellYourCar = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center lg:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize [&>br]:hidden md:[&>br]:block">
              Only the best Cars Reach <b>our customers</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block text-[#313131]">
              BIG BOY TOYZ is the right stop when you wish to sell your <br />{" "}
              Used Luxury Car to the right hands.
            </p>
          </div>

          <div className="flex flex-wrap justify-between mt-[4rem] md:max-w-[640px] md:mx-auto lg:max-w-none 3xl:mt-[8rem]">
            <div className="w-full lg:w-[65%] xl:w-[69%] 2xl:w-[70%]">
              <ul>
                {usps.map((usp, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap items-center py-[3rem] border-t border-t-[#B2B2B2] pr-[1rem] sm:items-start 1xl:pr-[2rem] 3xl:pr-[4rem]"
                  >
                    <div className="w-[3.5rem] xl:w-[4.2rem] 1xl:w-[4.7rem] 2xl:w-[5rem] 3xl:w-[6.4rem]">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="flex-[1] flex flex-wrap flex-col pl-[2rem] sm:flex-row sm:justify-between sm:pl-[4rem] xl:pl-[7.5rem] 2xl:pl-[8.5rem]">
                      <h5 className="text-[1.7rem] xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-medium capitalize sm:w-[40%] lg:tracking-tight" dangerouslySetInnerHTML={{ __html: usp.title }}>
                      
                      </h5>
                      <p className="text-[1.2rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-normal mt-[1rem] sm:w-[53%] sm:mt-0 xl:w-[54%] 2xl:w-[53%] 2xl:tracking-tight">
                        {usp.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full mt-[5rem] lg:w-[30%] lg:mt-0 xl:w-[25%] relative">
              <div className="bg-[#F4F4F1] py-[4rem] px-[3rem] rounded-[2rem] w-full mx-auto max-w-[400px] xl:sticky xl:top-0 1xl:px-[3.5rem] 2xl:px-[4rem]">
                <h3 className="text-[2rem] xl:text-[2.2rem] 1xl:text-[2.6rem] 2xl:text-[2.8rem] 3xl:text-[3.5rem] font-light [&>b]:font-medium 1xl:tracking-tight 1xl:leading-[1.5]">
                  Planning To Sell ? <br /> <b>Sell Your Car In 29 Minutes</b>
                </h3>

                <p className="text-[1.2rem] xl:text-[1.25rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] mt-[3rem] mb-[3rem] xl:mt-[5rem] xl:tracking-tight leading-[1.3] 3xl:mt-[7rem] 3xl:mb-[4rem]">
                  For further enquiry, <br />
                  you can call or whatsapp
                </p>

                <a
                  href="https://api.whatsapp.com/send?phone=+919999999915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap mb-[2.5rem] xl:mb-[2rem] 1xl:mb-[1.8rem] 3xl:mb-[2.5rem]"
                >
                  <div className="w-[4rem] h-[4rem] border border-[#111111] rounded-[0.7rem] p-[1rem] flex justify-center items-center xl:w-[3.3rem] xl:h-[3.3rem] xl:p-[0.7rem] 3xl:w-[4.4rem] 3xl:h-[4.4rem] 3xl:p-[1rem]">
                    <img
                      src="/images/why-us/best-car-whatsapp.webp"
                      alt=""
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <p className="flex-[1] pl-[1.5rem] [&>b]:font-normal [&>b]:block font-light text-[1.3rem] 3xl:text-[1.6rem]">
                    WhatsApp
                    <b>(+91) 9999 9999 15</b>
                  </p>
                </a>
                <a
                  href="tel:919999999915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap"
                >
                  <div className="w-[4rem] h-[4rem] border border-[#111111] rounded-[0.7rem] p-[1rem] flex justify-center items-center xl:w-[3.3rem] xl:h-[3.3rem] xl:p-[0.7rem] 3xl:w-[4.4rem] 3xl:h-[4.4rem] 3xl:p-[1rem]">
                    <img
                      src="/images/why-us/best-car-call.webp"
                      alt=""
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <p className="flex-[1] pl-[1.5rem] [&>b]:font-normal [&>b]:block font-light text-[1.3rem] 3xl:text-[1.6rem]">
                    Call us
                    <b>(+91) 9999 9999 15</b>
                  </p>
                </a>

                <div className="flex justify-center items-center mt-[4rem]">
                  <a
                    href="mailto:"
                    className="bg-black flex justify-center items-center text-white h-[5rem] rounded-[4rem] text-[1.4rem] border-none outline-none  mx-auto cursor-pointer px-[4rem] w-full xl:text-[1.2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[7.4rem] 3xl:px-[5rem] capitalize hover:bg-[#333333] transition-all duration-500"
                  >
                    Email Us
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

export default SellYourCar;
