import Link from "next/link";
import React from "react";

const teamMembers = [
  { image: "/images/about-us/about-team-member-1.webp" },
  { image: "/images/about-us/about-team-member-2.webp" },
  { image: "/images/about-us/about-team-member-3.webp" },
  { image: "/images/about-us/about-team-member-4.webp" },
  { image: "/images/about-us/about-team-member-5.webp" },
  { image: "/images/about-us/about-team-member-6.webp" },
  { image: "/images/about-us/about-team-member-7.webp" },
  { image: "/images/about-us/about-team-member-8.webp" },
  { image: "/images/about-us/about-team-member-9.webp" },
  { image: "/images/about-us/about-team-member-10.webp" },
  { image: "/images/about-us/about-team-member-11.webp" },
  { image: "/images/about-us/about-team-member-12.webp" },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-[5rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.5px]">
            Motivated <b>Team</b>
          </h2>
          <div className="grid grid-cols-4 auto-rows-fr gap-0 mt-[1.5rem]">
            {teamMembers.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt="Team member Image"
                  className="w-full h-full block object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-[2.5rem]">
            <p className="font-light text-[1.2rem] leading-[1.4]">
              At Big Boy Toyz our vision is to buy and sell modern cars that
              define quality and luxury for the 21st century. Applying our
              expertise in this industry, we aspire to transform the exotic car
              market, where cars are the ultimate expression of modern dynamism
              and luxury.
            </p>
          </div>
          <Link href="#" className="flex items-center mt-[2rem] tracking-[-0.3px]">
            <span className="text-[1.4rem] font-medium inline-block mr-[1rem]">
              Meet Our Team
            </span>
            <img
              src="/images/about-us/about-team-btn-arrow.webp"
              alt="Arrow"
              className="w-[1.4rem] h-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
