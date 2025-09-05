import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "Ideovent Technologies was established with a vision to provide innovative digital solutions, laying the groundwork for future success.",
  },
  {
    year: "2025",
    title: "First Major Client Secured",
    description:
      "We proudly secured our first enterprise client, marking a significant milestone and expanding our team to 5 dedicated employees.",
  },
  {
    year: "2025",
    title: "International Expansion",
    description:
      "Expanded our presence to serve a growing global client base, bringing our innovative digital solutions to new markets and continents.",
  },
  {
    year: "2026",
    title: "Product Innovation Hub",
    description:
      "Launched our dedicated R&D hub, focusing on AI-driven solutions and advanced analytics to push technological boundaries.",
  },
  {
    year: "2027",
    title: "Industry Recognition",
    description:
      "Received prestigious industry awards for our groundbreaking work in web and mobile application development, validating our commitment to excellence.",
  },
];

const MilestonesTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="container mx-auto text-center">
        {/* Standard font for heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-16 tracking-tight">
          Our Journey: Key{" "}
          <span className="text-blue-800">Milestones</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white 
                                font-semibold text-base shadow-lg ring-4 ring-blue-200/50">
                  {milestone.year.slice(-2)}
                </div>
              </div>

              {/* Milestone Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl shadow-lg bg-white border border-blue-200 
                            max-w-md w-full relative group transform hover:-translate-y-1 
                            hover:shadow-2xl transition-all duration-300 ${
                              index % 2 === 0
                                ? "mr-auto md:mr-[calc(50%+2rem)]"
                                : "ml-auto md:ml-[calc(50%+2rem)]"
                            }`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {milestone.description}
                </p>
                <div className="text-sm font-medium text-blue-600 mt-4">
                  {milestone.year}
                </div>

                {/* Decorative pointer */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] 
                              border-r-[10px] border-l-[10px] border-t-transparent border-b-transparent 
                              border-white ${
                                index % 2 === 0
                                  ? "right-[-10px] border-l-0"
                                  : "left-[-10px] border-r-0"
                              }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesTimeline;
