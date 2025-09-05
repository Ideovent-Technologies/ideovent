// src/components/sections/WhyChooseUs.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Award,
  UserCheck,
  Flag,
  Code2,
  Smile,
} from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Quick Response",
    desc: "We can log in remotely and resolve issues instantly without waiting for a technician to arrive.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Experienced",
    desc: "30+ years in IT outsourcing with deep expertise across technologies, industries, and applications.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "No Geek Speak",
    desc: "We explain everything in plain English so you fully understand what’s happening with your technology.",
  },
  {
    icon: <Flag className="h-8 w-8 text-primary" />,
    title: "Business Savvy",
    desc: "Solutions designed with a clear focus on your company’s needs and business goals.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "One Stop Shop",
    desc: "From hardware to software, we manage every aspect of your IT infrastructure.",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "100% Satisfaction Guarantee",
    desc: "We ensure your complete satisfaction—no hassles, no problems, just solutions that work.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative w-full bg-accent/20 py-24 px-6 lg:px-24 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      {/* Heading */}
      <div className="relative text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-wider text-primary font-semibold"
        >
          Why Choose Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3"
        >
          The <span className="text-primary">Ideovent Advantage</span>{" "}
          Over Others
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full origin-left"
        />
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex flex-col items-start text-left bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:border-primary/30"
          >
            <div className="mb-5 p-3 rounded-xl bg-primary/10">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {reason.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-700 text-lg">
          Don’t settle for average.{" "}
          <a
            href="/about"
            className="text-primary font-semibold hover:underline"
          >
            Discover why businesses trust Ideovent
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
