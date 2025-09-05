import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { softwareData } from "@/data/softwareData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...softwareData} />;
};

export default SoftwareDevelopment;
