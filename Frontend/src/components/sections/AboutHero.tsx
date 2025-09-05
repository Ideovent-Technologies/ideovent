import React from 'react';
import { motion } from 'framer-motion';
import SubNavbar from '../layout/SubNavbar';

const AboutHero = () => {
  return (
    <>
      {/* Hero Section with background image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg')`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 py-32 px-4 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Story & Mission
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We're a team of passionate innovators dedicated to transforming ideas into digital reality.
            Our mission is to craft seamless digital experiences that empower, inspire, and leave a lasting impact.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
