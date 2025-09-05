import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CarouselHero from "./CarouselHero";
import { CTA } from "./types";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  heroImages?: string[];
  heroMetric?: { label: string; value: string };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  heroImages,
  heroMetric,
}) => {
  return (
    <section className="relative w-full min-h-screen px-4 sm:px-6 lg:px-20 xl:px-24 py-16 lg:py-24 bg-gradient-to-br from-[#f0f5ff] to-[#e6ecff] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16 font-sans">
      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2562EA] to-[#2562EA]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl lg:text-2xl font-medium text-[#2562AA] mb-6"
          >
            {subtitle}
          </motion.h2>
        )}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          {primaryCta && (
            <Link to={primaryCta.link}>
              <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-3xl bg-gradient-to-r from-[#2562EA] to-[#6B8DFF] text-white font-medium text-base sm:text-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-sans">
                {primaryCta.text}
              </button>
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryCta.link}>
              <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-base sm:text-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-sans">
                {secondaryCta.text}
              </button>
            </Link>
          )}
        </motion.div>
      </div>

      {/* RIGHT CONTENT → Carousel */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <CarouselHero images={heroImages} metric={heroMetric} />
      </div>
    </section>
  );
};

export default HeroSection;
