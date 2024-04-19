"use client";
import React, { useState } from "react";
import { blogs } from "../../../../public/data/dummyData";
import BlogCard from "./BlogCard";

const pages = [1, 2, 3, 4, 5];

const styles = {
  paginationList:
    "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
  paginationBtn:
    "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};

const BlogList = () => {
  const [sortBy, setSortBy] = useState("");
  return (
    <section className="bg-white pb-[6rem] xl:pb-[9rem] 2xl:pb-[12rem] 3xl:pb-[15rem]">
      <div className="max-1920">
        <div className="container">
          {blogs.length > 0 ? (
            <>
              <div className="max-w-[25rem] ml-auto relative 1xl:max-w-[28rem] 3xl:max-w-[38rem]">
                <span className="absolute right-[2rem] top-[2rem] w-[1rem] h-[1rem] inline-block xl:top-[2.3rem] 1xl:w-[1.2rem] 3xl:w-[1.5rem] 3xl:top-[3.3rem] 3xl:right-[3rem]">
                  <img
                    src="/images/blogs/blog-dropdown.webp"
                    alt="Arrow"
                    className="w-full block object-contain h-auto"
                  />
                </span>

                <select
                  name=""
                  id=""
                  className="w-full bg-[#F4F4F1] outline-none border-0 px-[2rem] py-[1.2rem] text-[1.3rem] 3xl:text-[1.9rem] font-[500] rounded-[0.7rem] cursor-pointer mb-[5rem] md:mb-0 lg:rounded-[1rem] appearance-none xl:py-[1.5rem] 1xl:text-[1.5rem] 1xl:py-[1.6rem] 3xl:py-[2.2rem] 3xl:rounded-[1.7rem] 3xl:px-[3.5rem]"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Sort By</option>
                  <option value="date-asc">Date (ASC)</option>
                  <option value="date-desc">Date (DESC)</option>
                </select>
              </div>
              <ul className="flex flex-wrap justify-between md:[&>*:nth-child(even)]:translate-y-[9rem] md:mt-[-4rem] xl:[&>*:nth-child(even)]:translate-y-[12rem] 1xl:mt-[-5rem] 3xl:[&>*:nth-child(even)]:translate-y-[17rem] 3xl:mt-[-7rem]">
                {blogs.map((blog, index) => (
                  <li
                    key={blog._id}
                    className="w-full mb-[4rem] md:w-[48%] h-[inherit] xl:w-[46.5%] xl:mb-[6rem] 3xl:mb-[9rem]"
                  >
                    <BlogCard data={blog} />
                  </li>
                ))}
              </ul>
              <div className="md:mt-[10rem] xl:mt-[15rem] 3xl:mt-[20rem]">
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
              <h2>No Blog Found!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
