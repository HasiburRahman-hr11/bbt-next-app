import React from "react";
import Link from "next/link";
import Image from "next/image";

const uspList = [
  {
    icon: "/images/sell-car/sell-mondate-usp-1.webp",
    title: `No <strong> Accidental History</strong>.`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-2.webp",
    title: `No <strong> litigations</strong>.`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-3.webp",
    title: `No <strong> Odometer Tampering</strong>.`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-4.webp",
    title: `<strong>National Crime </strong> Record Check.`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-5.webp",
    title: `<strong>Model 2015</strong> & above and KMS drivenless than <strong>30,000 only.</strong>`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-6.webp",
    title: `<strong>Service History </strong> Check`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-7.webp",
    title: `<strong>Insurance History </strong> Check`,
  },
  {
    icon: "/images/sell-car/sell-mondate-usp-8.webp",
    title: `<strong>Physical </strong> Evaluation`,
  },
];

const MondateCheck = () => {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="container">
        <div className="text-center">
          <Image
            src="/images/sell-car/sell-mondate-check-thumb.webp"
            alt="Thumbnail"
            width="257"
            height="206"
            className="w-[25.6rem] object-contain block mx-auto"
          />
          <p className="uppercase text-lg mt-10 mb-6">
            We maintain your luxury
          </p>
          <h2 className="font-light [&>strong]:font-normal tracking-tighter leading-1.2">
            BBT <strong>Mandate Check</strong> For Purchasing Used Car
          </h2>
        </div>
        <ul className="mt-14">
          {uspList.map((item, index) => (
            <li
              key={index}
              className="flex items-center pl-14 py-6 border-t border-[#D9D9D9] last-of-type:border-b"
            >
              <div className="w-14 text-center">
                <Image
                  src={item.icon}
                  alt="Icon"
                  width="26"
                  height="21"
                  className="max-h-9 object-contain inline-block"
                />
              </div>
              <p
                className="flex-1 text-2xl font-light [&>strong]:font-normal tracking-tight pl-5"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between callBtnGroup mt-16 overflow-hidden flex-wrap">
          <div className="callBtnLeft">
            <Link href="#" className="btn btnBlack btnSquare text-xl">
              <Image
                src="/images/square-btn-call-icon.webp"
                width="16"
                height="16"
                alt="Call Icon"
                className="object-contain w-7 mr-6"
              />
              CALL NOW: 9999 9999 15
            </Link>
          </div>
          <div className="callBtnRight ml-4">
            <a href="#" className="btn smallCallBtn whatsAppBtn">
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
    </section>
  );
};

export default MondateCheck;
