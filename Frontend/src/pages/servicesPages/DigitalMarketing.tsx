import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { digitalMarketingData } from "@/data/digitalMarketingData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...digitalMarketingData} />;
};

export default SoftwareDevelopment;