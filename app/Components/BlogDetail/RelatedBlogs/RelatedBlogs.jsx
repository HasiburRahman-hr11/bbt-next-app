import React from "react";
import RelatedBlogCard from "./RelatedBlogCard";

import { blogs } from "../../../../public/data/dummyData";

const RelatedBlogs = ({ sectionBg, sectionTitle, cardBg }) => {
  const relatedBlogs = blogs.slice(2, 5);
  return (
    <section
      className={`${
        sectionBg ? `bg-[${sectionBg}]` : "bg-white"
      } py-[6rem] lg:py-[8rem] xl:py-[12rem] 3xl:py-[15rem]`}
    >
      <div className="max-1920">
        <div className="container">
          <h2
            className="font-light text-center [&>b]:font-medium 3xl:text-[4.5rem] tracking-tighter capitalize"
            dangerouslySetInnerHTML={{
              __html: sectionTitle
                ? sectionTitle
                : " Other Related <b>blogs</b>",
            }}
          ></h2>

          {blogs.length > 0 ? (
            <>
              <ul className="flex flex-wrap justify-between">
                {relatedBlogs.map((blog, index) => (
                  <li
                    key={blog._id}
                    className="w-full mt-[4rem] md:w-[48%] xl:mt-[5rem] h-[inherit] xl:w-[31%] "
                  >
                    <RelatedBlogCard
                      data={blog}
                      cardBg={cardBg ? cardBg : "#F4F4F1"}
                    />
                  </li>
                ))}
              </ul>
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

export default RelatedBlogs;
