"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const uspList = [
  {
    title: "5 Series",
    description:
      "It was initially started as sedans, later they advanced the body style like Wagon/estate. Now you have the 5 series with a timeless design and 233km/h of top speed. It is built with advanced technology, ActiveHybrid, which saves fuel and reduces emissions by 10%. Also, the top model of the 5 series, 530d M Sport a 2993 cc, carries 8-speed automatic transmission. The model is developed with smart features and more safety measures.",
    link: "#",
  },
  {
    title: "6 Series",
    description:
      "The 6 series is truly a winner and heart robber, it is a range of grand tourers begun in 1975. The 6 cylinder Gran Coupe offers you the top speed of 250 km/h. Built with a stylish outlook, that includes kidney-styled grills and a warm interior. Dual engine option of petrol and gasoline with automatic transmission. The 6 Series mileage ranges from 14.28 to 17.09 Kmpl based on the model and fuel type.",
    link: "#",
  },
  {
    title: "7 Series",
    description:
      "This series is a full-size luxury sedan, which has a long base wheel and limousine models. The 7 series is the successor of E3 and it is powerful when it runs on the road. This series has a top speed of 250 km/h with 8 cylinders and twin-turbocharged engines. The model is available in dual-fuel type, petrol and diesel, 2998 cc and 2993 cc engines respectively. The mileage varies depending on models and fuel type, ranging from 7.96 to 39.53 Kmpl.",
    link: "#",
  },
  {
    title: "Z4 Series",
    description:
      "This series will fascinate speedy riders, it is a roadster and a rear-wheel-drive to make it powerful. Also, the top speed it offers is 250 km/h with a 6 cylinder engine. The model has an automatic transmission and BMW TwinPower Turbo engine for the high torque and less fuel consumption. The low rear seats of the model give you a chance and experience to feel the road.",
    link: "#",
  },
  {
    title: "M Series",
    description:
      "This series has a wide range of variants, which includes sedans, coupes, convertible, GranCoupe. A perfect series for every driver, it is available in models such as M3, M5, and M6 with TwinPower Turbo engine technology. The M series has advanced interior features with excellent drive performance.",
    link: "#",
  },
  {
    title: "BMW X-Series",
    description:
      "This series is one of the most popular among all and across the world. The German automakers built with an agenda to showcase that everything is possible to accomplish, and the series proved the same. Models like X5 and X6 completely focus on aerodynamics, both the models leading the series and most popular among the fans of BMW.",
    link: "#",
  },
  {
    title: "BMW I-Series",
    description:
      "The I series is based on the BMW I mobility concept. It mainly depends on plug-in electric vehicles. This series has been acknowledged worldwide, but only two models have been released, such as the I3 and I8 respectively. Among both I8 is a plug-in hybrid sports car. Keeping the safety of the environment in mind, the materials used to build the car are lightweight and recyclable. Also, it revives the other features of BMW, such as low fuel consumption, high torque, etc.",
    link: "#",
  },
];

const UspSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F6F6F6] py-24 1xl:py-36 3xl:py-44">
      <div className="max-1920">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="pb-16">
              <h2 className="text-[2.9rem] font-normal leading-[1.1] mb-8 xl:text-[3.4rem] 1xl:text-[4rem] 1xl:mb-14 3xl:text-[4.5rem] capitalize">
                Searching to buy used bmw car? Have a look....
              </h2>
              <p className="text-[1.3rem] font-light [&>strong]:font-medium [&>b]:font-medium xl:text-[1.8rem] xl:leading-[1.6] 1xl:text-[2.2rem] 3xl:text-[2.8rem]">
                Finding it difficult to get a used BMW car? Tired of surfing for
                the car? Welcome, we got an exclusive range of second-hand BMW
                cars in our portfolio, check out! Before we spill the beans, you
                know why BMW is that exotic? It is a German manufactured luxury
                vehicle, established in 1916. The brand has made its models
                advanced and innovative timely. Also, it comes under the top 3
                in the list of best brands in the world. BMW has excelled in the
                competition in India, however, Big Boy Toyz has got the best
                used BMW cars in India at a competitive price range.
              </p>
            </div>

            <div className="py-16 border-t border-b border-[#D9D9D9]">
              <h2 className="text-[2.9rem] font-normal leading-[1.1] mb-8 xl:text-[3.4rem] 1xl:text-[4rem] 1xl:mb-14 3xl:text-[4.5rem] capitalize">
                The most reliable used bmw cars at big boy toyz
              </h2>
              <p className="text-[1.3rem] font-light [&>strong]:font-medium [&>b]:font-medium xl:text-[1.8rem] xl:leading-[1.6] 1xl:text-[2.2rem] 3xl:text-[2.8rem]">
                Yes, you read it right! We have the most reliable pre-owned BMW
                cars. We have the top-notch quality of cars that is unbeatable
                across India. Which performs extremely well and carries features
                on point. Check out the best match for you from the used BMW
                brand series.
              </p>
            </div>

            <div className="pt-16 mb-16">
              <h2 className="text-[2.9rem] font-normal leading-[1.1] mb-8 xl:text-[3.4rem] 1xl:text-[4rem] 1xl:mb-14 3xl:text-[4.5rem] capitalize">
                Check out wide-ranging pre-owned bmw cars
              </h2>
              <p className="text-[1.3rem] font-light [&>strong]:font-medium [&>b]:font-medium xl:text-[1.8rem] xl:leading-[1.6] 1xl:text-[2.2rem] 3xl:text-[2.8rem]">
                <strong>BMW</strong> has experience of 100 years in delivering
                various series of models across the world. But not everyone can
                make their wish come true by owning a BMW car. So Big Boy Toyz
                is here to complete your dream of purchasing top-quality used
                BMW cars. We have a wide range of series at an affordable price
                range, choose the best suitable for you!
              </p>
            </div>
          </div>

          <ul className="sm:flex sm:flex-wrap sm:justify-between">
            {uspList.map((usp, index) => (
              <li
                key={index}
                className=" mt-10 common-car-item transition-all duration-500 ease-in-out sm:w-[48%] xl:flex 1xl:mt-14 3xl:mt-[5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Link
                  href={usp.link}
                  className="block w-full bg-white py-10 px-8 relative xl:pb-[9rem] xl:h-[inherit] xl:px-[3rem] xl:pt-16"
                >
                  <h6 className="font-medium text-[1.4rem] xl:text-[1.8rem] 1xl:text-[2rem] 3xl:text-[2.2rem]">
                    {usp.title}
                  </h6>
                  <p className="text-[1.2rem] mt-5 font-light xl:text-[1.3rem] xl:leading-[1.7] 1xl:text-[1.5rem] 3xl:text-[1.7rem]">
                    {usp.description}
                  </p>
                  <p className="mt-8 inline-flex items-center group transition-all duration-500 ease-in-out xl:absolute xl:left-[3rem] xl:bottom-[4rem]">
                    <span className="text-[1.2rem] transition-all duration-500 ease-in-out xl:text-[1.3rem] 1xl:text-[1.5rem] 3xl:text-[1.7rem] font-normal">
                      Explore More
                    </span>
                    <Image
                      src="/images/explore-arrow-black.webp"
                      className="w-[1.4rem] object-contain h-auto inline-block ml-4 transition-all duration-500 ease-in-out xl:w-[1.6rem] 1xl:w-[1.6rem] 3xl:w-[2rem]"
                      width="21"
                      height="14"
                      alt="Arrow Icon"
                    />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
