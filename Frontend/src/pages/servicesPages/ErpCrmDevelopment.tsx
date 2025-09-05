import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ermCrmData } from "@/data/erpCrmData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...ermCrmData} />;
};

export default SoftwareDevelopment;