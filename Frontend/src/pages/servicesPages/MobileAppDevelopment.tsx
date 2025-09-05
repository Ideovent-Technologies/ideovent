import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { mobileAppData } from "@/data/mobileAppData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...mobileAppData} />;
};

export default SoftwareDevelopment;