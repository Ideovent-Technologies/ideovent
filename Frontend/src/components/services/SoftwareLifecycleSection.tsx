// services/SoftwareLifecycleSection.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SoftwareLifecycleSection as SoftwareLifecycleSectionType } from "./types";

interface Props {
  section: SoftwareLifecycleSectionType;
  sectionId: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const getFlowchartIcon = (stepNumber: number) => {
  switch (stepNumber) {
    case 1:
      return <Icons.Lightbulb className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    case 2:
      return <Icons.FileText className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    case 3:
      return <Icons.Code className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    case 4:
      return <Icons.ShieldCheck className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    case 5:
      return <Icons.Rocket className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    case 6:
      return <Icons.Wrench className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
    default:
      return <Icons.Circle className="h-8 w-8 text-[#2562EA] group-hover:text-white" />;
  }
};

const SoftwareLifecycleSection: React.FC<Props> = ({
  section,
  sectionId,
  gradientFrom = "#2562EA",
  gradientTo = "#6B8DFF",
}) => {
  const steps = section.items ?? [];

  return (
    <section id={sectionId} className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 bg-gray-50">
      <SectionHeading
        text={section.heading}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        className="mb-8 text-center"
      />
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16 text-base sm:text-lg leading-relaxed">
        {section.content}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {steps.map((item, i) => {
          return (
            <motion.div
              key={item.id}
              className="bg-gradient-to-br from-[#f0f5ff] to-white rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-[#E5F0FF] mb-4 sm:mb-5 group-hover:bg-[#2562EA] transition-colors duration-500 relative">
                {getFlowchartIcon(i + 1)}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#6B8DFF] text-white text-base sm:text-lg font-bold">
                  {i + 1}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#2562EA] mb-2">
                {item.step}
              </h3>

              {/* Step Description */}
              {item.description && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SoftwareLifecycleSection;
