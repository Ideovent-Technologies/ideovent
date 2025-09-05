// src/components/sections/TechStackSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Tilt from "react-parallax-tilt";

interface TechItem {
  name: string;
  logo: string;
  description: string;
}

const techStacks: { category: string; items: TechItem[] }[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "ReactJS",
        logo: "/tech-logos/React.png",
        description: "Fast & Scalable Frontend Development",
      },
      {
        name: "Next.js",
        logo: "/tech-logos/Next.js.png",
        description: "SSR & SEO friendly frontend framework",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "/tech-logos/node.js.png",
        description: "High-performance server-side JavaScript",
      },
      {
        name: "Express",
        logo: "/tech-logos/ExpressJS.png",
        description: "Lightweight backend framework",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        name: "Flutter",
        logo: "/tech-logos/Flutter.png",
        description: "Cross-platform mobile apps",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        logo: "/tech-logos/MongoDBV2.png",
        description: "NoSQL Database for flexible data",
      },
      {
        name: "PostgreSQL",
        logo: "/tech-logos/PostgreSQL.png",
        description: "Reliable relational database",
      },
    ],
  },
  {
    category: "Cloud",
    items: [
      {
        name: "AWS",
        logo: "/tech-logos/aws.png",
        description: "Cloud infrastructure & services",
      },
      {
        name: "Firebase",
        logo: "/tech-logos/Firebase.png",
        description: "Realtime database & hosting",
      },
    ],
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

const TechStackSection: React.FC = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <section
        id="tech-stack"
        className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:to-gray-800 py-24 px-6 lg:px-24 overflow-hidden font-sans"
      >
        {/* Background blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2562EA]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Heading */}
        <div className="relative text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
          >
            Our <span className="text-[#2562EA]">Tech Stack</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#2562EA] to-[#6C63FF] mx-auto mt-6 rounded-full origin-center"
          />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {techStacks.map((category, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Tilt glareEnable glareMaxOpacity={0.2} scale={1.05} transitionSpeed={250}>
                <div
                  className="
                    flex flex-col items-start text-left
                    bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
                    p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700
                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                  "
                >
                  <h3 className="text-xl font-semibold mb-6 text-[#2562EA] dark:text-[#6C63FF]">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {category.items.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={iconVariants}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className="
                                relative w-24 h-24 flex items-center justify-center p-4 
                                bg-white dark:bg-gray-900 rounded-xl cursor-pointer 
                                shadow-md transition-transform duration-300
                                hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-[#2562EA]/50
                              "
                            >
                              <img
                                src={tech.logo}
                                alt={tech.name}
                                className="max-h-16"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            className="
                              bg-gradient-to-r from-[#2562EA] to-[#6C63FF]
                              text-white rounded-lg px-4 py-2 text-sm font-medium
                              shadow-lg transition-opacity duration-300
                            "
                          >
                            {tech.description}
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechStackSection;
