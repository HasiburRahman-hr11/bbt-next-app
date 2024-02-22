"use client";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React, { useState } from "react";
import FilterPopup from "../../FilterPopup/FilterPopup";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PageHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSorBy] = useState("");
  const [sortTitle, setSorTitle] = useState("Price");

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  const sortChangeHandle = (title, value) => {
    setSorTitle(title);
    setSorBy(value);
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3] ">
      <div className="container">
        <div className="">
          <p className="text-center font-light py-16 text-[1.3rem] leading-[1.5] lg:font-normal lg:text-left lg:pt-24 [&>br]:hidden lg:[&>br]:block xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 1xl:py-[8rem]">
            Tired of looking for a classy used BMW car? Are dealers striking
            your wallet down with mediocre content? <br /> Worry no more! BBT
            brings to you pre-owned and used BMW cars with an efficient price.
          </p>
          <div className="flex flex-wrap items-center justify-between py-12 border-b border-t border-neutral-[#D9D9D9] lg:pt-0 lg:border-none">
            <h2 className="text-[1.8rem] lg:text-[2.2rem] xl:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] lg:tracking-tighter">
              Total 23 Results Found
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="md:flex cursor-pointer md:items-center">
                <p className="hidden md:inline-block md:mr-4 xl:text-[1.7rem] 3xl:text-[2rem]">
                  Filters:
                </p>
                <div
                  className="w-max md:border md:border-[#C6C6C6] md:w-[4rem] md:h-[4rem] md:p-[1rem] md:rounded-[5px] xl:w-[4rem] xl:h-[4rem] 3xl:w-[5.9rem] 3xl:h-[6rem] flex justify-center items-center"
                  onClick={togglePopup}
                >
                  <Image
                    src="/images/collection-filter-icon.webp"
                    width="29"
                    height="29"
                    className="w-[2rem] md:w-full object-contain h-auto xl:w-[2.8rem]"
                    alt="Filter Icon"
                  />
                </div>
              </div>
              <div className="ml-5 md:flex cursor-pointer md:items-center md:ml-8 1xl:ml-10">
                <p className="hidden md:inline-block md:mr-4 xl:text-[1.7rem] 3xl:text-[2rem]">
                  Sort by:
                </p>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className=" w-[6.5rem] whitespace-nowrap  inline-flex justify-between items-center gap-x-1.5 outline-none border border-neutral-400 pl-4 pr-3 py-1 overflow-hidden text-lg rounded-md md:border md:border-[#C6C6C6] md:h-[4rem] md:min-w-[12rem] md:rounded-[5px] md:bg-transparent md:text-xl xl:text-[1.6rem] 1xl:min-w-[15rem] 3xl:min-w-[19rem] 1xl:text-[1.7rem] 1xl:py-6 xl:h-[4rem] 3xl:h-[6rem] 3xl:text-[2rem] 3xl:pl-6">
                      {sortTitle}
                      <ChevronDownIcon
                        className="h-8 w-8 object-contain  1xl:w-[2.8rem] 1xl:h-[2.8rem] 3xl:w-[3.5rem] 3xl:h-[3.5rem] text-[#333] font-light"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 1xl:min-w-[19rem]">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg md:px-6 md:py-4  md:text-xl xl:text-[1.6rem] xl:py-6 1xl:text-[1.7rem] 3xl:text-[2rem]"
                              )}
                              onClick={() =>
                                sortChangeHandle("High To Low", "high")
                              }
                            >
                              High To Low
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg md:px-6 md:py-4  md:text-xl xl:text-[1.6rem] xl:py-6 1xl:text-[1.7rem] 3xl:text-[2rem]"
                              )}
                              onClick={() =>
                                sortChangeHandle("Low To High", "low")
                              }
                            >
                              Low To High
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      {filterOpen && (
        <FilterPopup active={filterOpen} togglePopup={togglePopup} />
      )}
    </section>
  );
};

export default PageHeader;
