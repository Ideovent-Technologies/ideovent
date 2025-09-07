import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
        <Navbar />
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden min-h-screen flex items-center"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg')`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          {/* Hero content */}
          <div className="relative z-10 container mx-auto px-4 text-center mt-20 sm:mt-28">
            <motion.h1
              initial={{ opacity: 0, y: -60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6"
            >
              Our Story & Mission
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2"
            >
              We're a team of passionate innovators dedicated to transforming
              ideas into digital reality. Our mission is to craft seamless
              digital experiences that empower, inspire, and leave a lasting
              impact.
            </motion.p>
          </div>
        </section>
      </main>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default AboutHero;
