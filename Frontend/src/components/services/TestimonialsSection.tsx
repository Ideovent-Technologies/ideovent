// services/TestimonialsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Testimonial } from "./types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  heading?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  heading = "What Our Clients Say",
  gradientFrom = "#2562EA",
  gradientTo = "#6B8DFF",
}) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-24 py-16 bg-white font-sans">
      {/* Heading */}
      <h2
        className="text-2xl sm:text-3xl font-extrabold text-center mb-12 text-transparent bg-clip-text leading-tight"
        style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
      >
        {heading}
      </h2>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
        {testimonials.map((t, idx) => {
          const stableKey = `${t.name.replace(/\s+/g, "-")}-${idx}`;
          const rating = t.rating || 5;

          return (
            <motion.div
              key={stableKey}
              className="bg-white border-4 border-transparent hover:border-[#6B8DFF] transition-all duration-500 rounded-3xl p-6 sm:p-10 relative overflow-hidden group font-sans"
              style={{
                background: "linear-gradient(135deg, #f5f8ff 0%, #ffffff 50%, #f0f7ff 100%)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Icons.Quote
                className="absolute top-8 right-8 w-16 h-16 sm:w-24 sm:h-24 text-[#E5F0FF] opacity-70 rotate-180 -z-0 transform group-hover:scale-110 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Icons.Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-800 italic mb-6 text-sm sm:text-base leading-relaxed">
                  “{t.feedback}”
                </p>

                {/* Name */}
                <p className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                  {t.name}
                </p>

                {/* Role */}
                <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
