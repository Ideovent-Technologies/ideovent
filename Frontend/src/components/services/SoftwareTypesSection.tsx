import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SoftwareTypesSection as SoftwareTypesSectionType } from "./types";

interface Props {
  section: SoftwareTypesSectionType;
  sectionId: string;

  // Optional customizations
  fallbackImage?: string;
  fallbackSubtitle?: string;
  iconBgColor?: string;
  iconHoverBgColor?: string;
  iconColor?: string;
  iconHoverColor?: string;
  headingGradientFrom?: string;
  headingGradientTo?: string;
  gridColsSm?: 2 | 3 | 4;
  gridColsLg?: 2 | 3 | 4;
  paddingX?: string;
  paddingY?: string;
  hoverScale?: number;
  tapScale?: number;
}

const SoftwareTypesSection: React.FC<Props> = ({
  section,
  sectionId,
  fallbackImage = "https://cdn.pixabay.com/photo/2023/11/24/16/09/ai-8410298_1280.jpg",
  fallbackSubtitle = "Innovative Solutions",
  iconBgColor = "#E5F0FF",
  iconHoverBgColor = "#2562EA",
  iconColor = "#2562EA",
  iconHoverColor = "white",
  headingGradientFrom = "#2562EA",
  headingGradientTo = "#6B8DFF",
  gridColsSm = 2,
  gridColsLg = 3,
  paddingX = "px-4 sm:px-6 lg:px-24",
  paddingY = "py-16 sm:py-20",
  hoverScale = 1.04,
  tapScale = 0.98,
}) => {
  const softwareTypes = section.items;
  const gridClasses = `sm:grid-cols-${gridColsSm} lg:grid-cols-${gridColsLg}`;

  const getIconComponent = (iconName: string) => {
    return (Icons as any)[iconName] || Icons.HardDrive;
  };

  return (
    <section
      id={sectionId}
      className={`${paddingX} ${paddingY} bg-white font-sans`} // ✅ standard font
    >
      <SectionHeading
        text={section.heading}
        gradientFrom={headingGradientFrom}
        gradientTo={headingGradientTo}
        className="mb-8 text-center"
      />
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
        {section.content}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`grid ${gridClasses} gap-8 sm:gap-10`}
      >
        {softwareTypes.map((item) => {
          const IconComponent = getIconComponent(item.icon);

          return (
            <motion.div
              key={item.id}
              whileHover={{ scale: hoverScale }}
              whileTap={{ scale: tapScale }}
              className="group relative rounded-3xl bg-gradient-to-br from-[#f0f5ff] to-white overflow-hidden transition-all cursor-pointer transform hover:shadow-xl font-sans" // ✅ enforce font
            >
              <div className="relative w-full h-40 sm:h-56 overflow-hidden">
                <motion.img
                  src={item.image || fallbackImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
              </div>

              <div className="p-6 sm:p-8">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 z-10 transition-colors bg-[#E5F0FF] group-hover:bg-[#2562EA]`}
                >
                  <IconComponent className="h-6 w-6 transition-colors text-[#2562EA] group-hover:text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.subtitle || fallbackSubtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SoftwareTypesSection;
