import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { maintenanceServicesData } from "@/data/MaintenanceServicesData";

const SoftwareDevelopment: React.FC = () => {
  return <ServicePageLayout {...maintenanceServicesData} />;
};

export default SoftwareDevelopment;