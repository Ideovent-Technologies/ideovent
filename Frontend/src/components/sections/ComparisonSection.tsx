import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  CheckCircle,
  Zap,
  Palette,
  Headphones,
  XCircle,
  Lightbulb,
  Package,
  Users,
  Clock,
  Globe,
  Plus,
} from "lucide-react";

const ComparisonSection = () => {
  const primary = "#027BFF";

  const features = [
    {
      title: "Creative Excellence",
      desc: "Designs that speak — Crafted to impress, engage, and convert",
      icon: <Palette className="w-6 h-6 text-white sm:w-5 sm:h-5" />,
      good: "Designs that speak",
      bad: "Cookie-cutter templates",
      auraColor: primary,
    },
    {
      title: "Unmatched Speed",
      desc: "Your vision delivered faster than you expect",
      icon: <Zap className="w-6 h-6 text-white sm:w-5 sm:h-5" />,
      good: "Unmatched speed",
      bad: "Delays, missed deadlines",
      auraColor: primary,
    },
    {
      title: "Innovation First",
      desc: "Solutions tailored uniquely for your brand",
      icon: <Lightbulb className="w-6 h-6 text-white sm:w-5 sm:h-5" />,
      good: "Innovation first",
      bad: "Generic solutions",
      auraColor: primary,
    },
    {
      title: "Always There for You",
      desc: "Dedicated support, anytime, every time",
      icon: <Headphones className="w-6 h-6 text-white sm:w-5 sm:h-5" />,
      good: "Always there for you",
      bad: "Disappearing support",
      auraColor: primary,
    },
    {
      title: "Future-ready Technology",
      desc: "Built for performance, built to last",
      icon: <Plus className="w-6 h-6 text-white sm:w-5 sm:h-5" />,
      good: "Future-ready technology",
      bad: "Outdated technology",
      auraColor: primary,
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: 120, icon: <Package className="w-5 h-5 text-white" /> },
    { label: "Happy Clients", value: 95, icon: <Users className="w-5 h-5 text-white" /> },
    { label: "Years of Experience", value: 10, icon: <Clock className="w-5 h-5 text-white" /> },
    { label: "Countries Served", value: 8, icon: <Globe className="w-5 h-5 text-white" /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [features.length]);

  const comparisonRowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const ideoventCardVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const othersCardVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 bg-blue-50 overflow-hidden">
      <motion.div className="relative w-full max-w-7xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Heading */}
        <h2 className="text-h2 text-gray-900 text-center mb-6 sm:mb-8 font-extrabold">
          How <span className="text-primary">Ideovent Technologies</span> Stands Apart
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* LEFT - Comparison */}
          <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[600px]">
            {features.map((row, i) => (
              <motion.div
                key={i}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-3 shadow-inner"
                variants={comparisonRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-h4 mb-2 font-semibold">{row.title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <motion.div
                    className="rounded-lg p-2 flex items-center gap-2 bg-primary text-white text-small"
                    variants={ideoventCardVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    {row.good}
                  </motion.div>
                  <motion.div
                    className="rounded-lg p-2 flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-600 text-small"
                    variants={othersCardVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    {row.bad}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - Stats + Carousel */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-2 sm:p-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-md"
                  variants={statCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-1">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary shadow-md">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-h3 text-primary font-bold">
                    <CountUp end={stat.value} duration={2} />+
                  </p>
                  <p className="text-small text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Carousel */}
            <div className="h-full flex flex-col justify-center p-2 sm:p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={features[activeIndex].title}
                  className="w-full flex flex-col items-center p-4 sm:p-6 bg-white/70 backdrop-blur-lg rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary mb-2 sm:mb-3">
                    {features[activeIndex].icon}
                  </div>
                  <h3 className="text-h3 text-gray-900 mb-1 font-bold">
                    {features[activeIndex].title}
                  </h3>
                  <p className="text-p text-gray-600 text-center">
                    {features[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Discover Now Button */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-lg text-white bg-primary hover:bg-blue-600 transition-colors duration-300 text-p font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Now
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
