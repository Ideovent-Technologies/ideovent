import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { domainHostingData } from "@/data/domainHostingData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...domainHostingData} />;
};

export default SoftwareDevelopment;