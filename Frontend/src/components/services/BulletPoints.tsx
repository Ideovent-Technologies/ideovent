// services/BulletPoints.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { BulletPoint } from "./types";

interface BulletPointsProps {
  bulletPoints: BulletPoint[];
  sectionHeading?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const BulletPoints: React.FC<BulletPointsProps> = ({
  bulletPoints,
  sectionHeading = "What We Deliver",
  gradientFrom = "#2562EA",
  gradientTo = "#6B8DFF",
}) => {
  const getIcon = (iconName?: string) => {
    if (!iconName || !(iconName in Icons)) {
      return Icons.CheckCircle;
    }
    return (Icons as any)[iconName];
  };

  return (
    <section
      id="what-we-deliver"
      className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 bg-gray-50"
    >
      <SectionHeading
        text={sectionHeading}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 perspective-1000">
        {bulletPoints.map((point) => {
          const key =
            point.id ||
            point.text ||
            `bullet-point-${point.text.replace(/\s+/g, "-")}`;
          const Icon = getIcon(point.icon);

          return (
            <motion.div
              key={key}
              className="relative group bg-white rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.5 },
              }}
            >
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0f5ff] to-[#e6ecff] opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-6 sm:p-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#E5F0FF] text-[#2562EA] transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#2562EA] group-hover:to-[#6B8DFF] group-hover:text-white group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                {/* ✅ Standard font for paragraph */}
                <p className="text-p font-medium relative z-10">
                  {point.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BulletPoints;
