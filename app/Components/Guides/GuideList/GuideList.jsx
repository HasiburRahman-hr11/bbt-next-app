"use client";
import React from "react";
import { guides } from "../../../../public/data/dummyData";
import GuideCard from "./GuideCard";

const pages = [1, 2, 3, 4, 5];

const styles = {
  paginationList:
    "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
  paginationBtn:
    "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};

const GuideList = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          {guides.length > 0 ? (
            <>
              <ul className="flex flex-wrap justify-between">
                {guides.map((guide) => (
                  <li
                    key={guide._id}
                    className="w-full mb-[4rem] md:w-[48%] h-[inherit] xl:w-[30%] xl:mb-[6rem]"
                  >
                    <GuideCard data={guide} />
                  </li>
                ))}
              </ul>
              <div className="xl:mt-[1rem]">
                <ul className="flex justify-center">
                  <li className={styles.paginationList}>
                    <button className={styles.paginationBtn}>
                      <img
                        src="/images/pagination-arrow-prev.webp"
                        alt="Previous"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                      />
                    </button>
                  </li>
                  {pages.map((page, index) => (
                    <li className={styles.paginationList} key={index}>
                      <button className={styles.paginationBtn}>{page}</button>
                    </li>
                  ))}
                  <li className={styles.paginationList}>
                    <button className={styles.paginationBtn}>
                      <img
                        src="/images/pagination-arrow-next.webp"
                        alt="Nest"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Guide Available Now!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GuideList;
