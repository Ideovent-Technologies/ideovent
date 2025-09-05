// services/OtherServicesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import * as Icons from "lucide-react";
import { OtherService } from "./types";

interface OtherServicesSectionProps {
  otherServices: OtherService[];
}

const OtherServicesSection: React.FC<OtherServicesSectionProps> = ({ otherServices }) => {
  if (!otherServices || otherServices.length === 0) return null;

  return (
    <section id="other-services" className="px-4 sm:px-6 lg:px-24 pb-16 sm:pb-24">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2562EA] to-[#6B8DFF]">
        Explore Other Services
      </h2>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherServices.map((service, idx) => {
          const stableKey = `${service.name.replace(/\s+/g, '-')}-${idx}`;

          return (
            <motion.div
              key={stableKey}
              className="relative overflow-hidden group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.path}
                className="block p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#6B8DFF] transition-all duration-300 text-center relative z-10 hover:shadow-md"
                aria-label={`Learn more about ${service.name}`}
              >
                <p className="text-base sm:text-lg font-medium text-[#2562EA] relative z-10 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </p>
                <Icons.ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2562EA] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2562EA] to-[#6B8DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-0 group-hover:scale-x-100 transform origin-left"></div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OtherServicesSection;
