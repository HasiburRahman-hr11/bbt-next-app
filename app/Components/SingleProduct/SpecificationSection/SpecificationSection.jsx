import Image from "next/image";
import React from "react";
import styles from "./SpecificationSection.module.css";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import BasicDetails from "./BasicDetails";
import TabsSection from "./TabsSection";
import CarSummary from "./CarSummary";
import PaidFeatures from "./PaidFeatures";

const SpecificationSection = () => {
  return (
    <section className="relative z-10 py-12 rounded-t-3xl bg-white -mt-10">

      <BasicDetails />

      <CarSummary />

      <PaidFeatures/>

      <TabsSection />
    </section>
  );
};

export default SpecificationSection;
