import React, { useState } from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const teamData = {
  "Our Leadership": [
    {
      name: "Abhishek Tiwari",
      role: "Director & Founder",
      image:
        "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
      socials: { linkedin: "#", facebook: "#" },
    },
    {
      name: "Animesh Raturi",
      role: "Co-Founder & CEO",
      image: "animeshprofile.jpeg",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Dipti Kumari",
      role: "CHRO",
      image:
        "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Alam",
      role: "SDE",
      image:
        "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
      socials: { linkedin: "#", facebook: "#" },
    },
  ],
  "Product & Management": [],
  Developers: [],
  "Operations & Support": [],
};

const teamTabs = Object.keys(teamData);

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Our Leadership");

  return (
    <section className="bg-white py-20 text-gray-900 font-sans">
      {/* Heading */}
      <div className="text-center mb-12 px-4 overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Reach out to the world’s most reliable{" "}
          <span className="relative inline-block text-blue-600">
            IT services.
            <motion.span
              className="absolute left-0 -bottom-1 h-[3px] w-full bg-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ideovent's leadership team has a long history of success in technology,
          business management, and franchising.
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 border-b border-gray-200 pb-3 mb-10 px-4">
        {teamTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium text-base transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
        {teamData[activeTab].map((member, idx) => (
          <div
            key={idx}
            className="group relative bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              {/* Social icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-700 hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-700 hover:text-white transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="p-3 bg-white text-blue-600 rounded-full hover:bg-sky-500 hover:text-white transition"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="p-3 bg-white text-blue-600 rounded-full hover:bg-pink-500 hover:text-white transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Name & Role */}
            <div className="p-4 text-center bg-gray-50">
              <h3 className="font-bold text-xl text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-md text-blue-600 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
