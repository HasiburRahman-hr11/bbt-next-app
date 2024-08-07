import Link from "next/link";
import React from "react";

const pastProjects = [
  {
    title: "Defender X",
    description: "Black Body Kit,  Engine Upgrade, Alloys",
    image: "/images/modifications/past-project-1.webp",
    url: "/projects/001",
  },
  {
    title: "Land Rover Porsche ",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/modifications/past-project-2.webp",
    url: "/projects/002",
  },
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/modifications/past-project-3.webp",
    url: "/projects/003",
  },
  {
    title: "Body Kit, Interiors,  PPF",
    description: "Interiors, Music System Upgrade",
    image: "/images/modifications/past-project-4.webp",
    url: "/projects/004",
  },
];

const ProjectItem = ({ project }) => {
  return (
    <Link
      href={project.url}
      className="block w-full rounded-[1.5rem] overflow-hidden relative"
    >
      <div>
        <img
          src={project.image}
          alt=""
          className="w-full block object-cover h-auto"
        />
      </div>
      <div className="absolute w-full left-0 top-0 h-full px-[2.5rem] py-[2rem] lg:pb-[3rem] lg:pl-[3rem] flex flex-col justify-end xl:pl-[4rem] xl:pb-[4rem] 1xl:pl-[4.5rem] 1xl:pb-[4.5rem]">
        <div className="text-white"> 
          <h4 className="text-[1.7rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">{project.title}</h4>
          <p className="text-[1.2rem] font-light mt-[0.5rem] xl:text-[1.35rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">{project.description}</p>
        </div>
      </div>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[1.5rem] right-[1.5rem] md:top-12 md:right-12 lg:top-[2rem] lg:right-[2rem] xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <img
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in"
          width="20"
          height="20"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

const PastProjects = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center xl:text-left">
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Our Past <b>Projects</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden sm:[&>br]:block">
              Get your dream luxury car in 4 easy steps at Big Boy Toyz, <br />{" "}
              India's trusted used car portal.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-[2rem] md:grid-cols-2 md:gap-x-[2rem] 1xl:gap-x-[3rem]">
            {pastProjects.map((project, index) => (
              <div key={index} className="mt-[3rem] 1xl:mt-[3.5rem]">
                <ProjectItem project={project} />
              </div>
            ))}
          </div>
          <div className="w-max mx-auto mt-[5rem] xl:mt-[7rem] 1xl:mt-[8rem] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
            <Link href="/projects" className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
