import React from "react";
import Image from "next/image";

const uspList = [
  {
    title: "Go Anywhere ",
    icon: "/images/suv/suv-usp-icon-1.webp",
    description:
      "Utilizes a 4×4/ All Wheel Drive framework that transmits power to each of the four wheels for happier off road mobility.",
  },
  {
    title: "More Comfort ",
    icon: "/images/suv/suv-usp-icon-2.webp",
    description:
      "The higher seating position makes the ride significantly pleasant and gives better on-street perceivability.",
  },
  {
    title: "More Space ",
    icon: "/images/suv/suv-usp-icon-3.webp",
    description:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
  {
    title: "Feel Like A King ",
    icon: "/images/suv/suv-usp-icon-4.webp",
    description:
      "Greater the better! An exceptional extravagant SUV provides room that permits more space for payload and leg space for the travelers.",
  },
];

const UspSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="mb-7 tracking-tighter leading-1.2">Keep Pre-owned Luxury SUV as an Option</h2>
        <div className="[&>p]:text-xl text-justify [&>p]:leading-1.6 [&>p]:font-light">
          <p>
            The SUV puts romping capacities before style, execution or mileage.
            The engineering of SUVs is done to perfection and they can break
            class barriers easily. For example, most SUVs are customarily rough
            terrain vehicles, but the cutting edge of the SUVs is their
            extravagance and ride in comfort feel matching numerous advanced
            cars. By the way, there are a couple of carefully rough terrain fit
            SUVs structured and created by some eminent producers of vehicles in
            India and in different parts of the world, specifically Mercedes,
            Audi, Toyota, Range Rover, BMW, Hummer, Cadillac, Porsche at al,
            which give genuine romping capacities to the adventure seekers.
          </p>
          <br />
          <p>
            Owning a superior SUV is a fantasy for many car lovers, yet not all
            can bear the cost of it. In any such case, the enormous universe of
            used SUV’s is the rescue plan. Big Boy Toyz is one such player in
            showcasing the used extravagant vehicles , which gives easy access
            to guaranteed and verified used outlandish SUVs of your fantasy, and
            is the best case scenario cost wise. In any case, before you delve
            deep in your pocket to purchase a pre-owned luxurious SUV or look
            for an enhanced version, check out the four fundamental reasons why
            owning a SUV is a gift you give to yourself:
          </p>
        </div>
        <ul className="mt-6">
          {uspList.map((usp, ind) => (
            <li
              key={ind}
              className="flex flex-wrap items-center justify-between py-7"
            >
              <div className="w-20">
                <Image
                  src={usp.icon}
                  alt="Icon"
                  width="44"
                  height="44"
                  className="object-contain max-h-16"
                />
              </div>
              <div className="pl-6 flex-1">
                <h6 className="text-1.4rem">{usp.title}</h6>
                <p className="text-xl mt-3 tracking-tight font-light">{usp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UspSection;
