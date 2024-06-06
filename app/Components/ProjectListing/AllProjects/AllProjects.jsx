import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Lamborghini",
    description: "Black Body Kit,  Engine Upgrade, Alloys",
    image: "/images/project-listing/project-listing-img-1.webp",
    url: "/projects/id-1",
  },
  {
    title: "Land Rover Porsche",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/project-listing/project-listing-img-2.webp",
    url: "/projects/id-2",
  },
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/project-listing/project-listing-img-3.webp",
    url: "/projects/id-3",
  },
  {
    title: "Mercedes-AMG G 63",
    description: "Interiors, Music System Upgrade",
    image: "/images/project-listing/project-listing-img-4.webp",
    url: "/projects/id-4",
  },
  {
    title: "Defender X",
    description: "Black Body Kit,  Engine Upgrade, Alloys",
    image: "/images/project-listing/project-listing-img-5.webp",
    url: "/projects/id-5",
  },
  {
    title: "Land Rover Porsche",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/project-listing/project-listing-img-6.webp",
    url: "/projects/id-6",
  },
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/project-listing/project-listing-img-7.webp",
    url: "/projects/id-7",
  },
  {
    title: "Mercedes-AMG G 63",
    description: "Interiors, Music System Upgrade",
    image: "/images/project-listing/project-listing-img-8.webp",
    url: "/projects/id-8",
  },
];
const pages = [1, 2, 3, 4, 5];

const styles = {
  paginationList:
    "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
  paginationBtn:
    "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};

const AllProjects = () => {
  return (
    <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-[48%] mb-[3rem] xl:mb-[4rem] 1xl:mb-[5rem]">
                <ProjectItem project={project} />
              </div>
            ))}
          </div>
          <div className="xl:mt-[2rem] 1xl:mt-[4rem]">
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
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
