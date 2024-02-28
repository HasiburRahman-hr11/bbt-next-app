import React from "react";

const CooSection = () => {
  return (
    <section className="bg-white py-[4rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="text-[2.8rem] tracking-[-1.5px]">
            Mrs. Ritika Jatin Ahuja
          </h2>
          <p className="text-[1.2rem]">COO-Merchandise</p>
          <div className="mt-[2rem]">
            <img
              src="/images/team-page/coo-img.webp"
              alt="Chairman"
              className="w-full h-auto object-cover rounded-[2rem]"
            />
          </div>
          <div>
            <p className="font-light text-[1.2rem] leading-[1.4] mt-[2rem]">
              A budding entrepreneur, Mrs. Ritika Jatin Ahuja spearheads the
              Merchandising section at Big Boy Toyz. She has been an avid
              collector of miniature perfumes since childhood which she
              cultivated as a hobby and a passion. She has been awarded the
              ‘Certificate of Excellence’ by the Golden Book of World Records
              for the same. An interior designer by profession, she has also
              specialized in the interior designing of jets and yachts from the
              University of Arts London. The manner in which she has balanced
              motherhood and profession with great harmony and precision has
              been commendable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooSection;
