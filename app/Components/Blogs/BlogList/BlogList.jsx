"use client"
import React, { useState } from "react";
import { blogs } from "../../../../public/data/dummyData";
import BlogCard from "./BlogCard";

const pages = [1, 2, 3, 4, 5];

const styles = {
  paginationList: "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#161616]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] 3xl:w-[8.2rem] 3xl:h-[8.2rem]",
  paginationBtn:"bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] 3xl:text-[2rem]"
};

const BlogList = () => {
    const [sortBy, setSortBy] = useState("");
  return (
    <section className="bg-white pb-[6rem]">
      <div className="max-1920">
        <div className="container">
          {blogs.length > 0 ? (
            <>
            <div className="max-w-[25rem] ml-auto relative">
                <span className="absolute right-[2rem] top-[2rem] w-[1rem] h-[1rem] inline-block 3xl:w-[1.5rem]">
                    <img src="/images/blogs/blog-dropdown.webp" alt="Arrow" className="w-full block object-contain h-auto" />
                </span>

                <select name="" id="" className="w-full bg-[#F4F4F1] outline-none border-0 px-[2rem] py-[1.2rem] text-[1.3rem] 3xl:text-[1.9rem] font-[500] rounded-[0.7rem] cursor-pointer mb-[5rem] md:mb-0 lg:rounded-[1rem] appearance-none"
                value={sortBy}
                onChange={(e)=> setSortBy(e.target.value)}
                >
                    <option value="default">Sort By</option>
                    <option value="date-asc">Date (ASC)</option>
                    <option value="date-desc">Date (DESC)</option>
                </select>
            </div>
              <ul className="flex flex-wrap justify-between">
                {blogs.map((blog, index) => (
                  <div key={blog._id} className="w-full mb-[4rem] md:w-[48%] h-full">
                    <BlogCard data={blog} />
                  </div>
                ))}
              </ul>
              <div>
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
                  <li className={styles.paginationList}>
                    <button className={styles.paginationBtn}>2</button>
                  </li>
                  <li className={styles.paginationList}>
                    <button className={styles.paginationBtn}>3</button>
                  </li>
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
