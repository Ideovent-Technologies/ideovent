import React, { useState, useEffect, useLayoutEffect } from "react"; // Import useLayoutEffect
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SubNavbarProps {
  sections: { id: string; name: string }[];
}

const SubNavbar: React.FC<SubNavbarProps> = ({ sections }) => {
  // `active` state tracks the ID of the currently visible section
  const [active, setActive] = useState<string>("");
  // `navTop` stores the dynamic height of the main navbar
  const [navTop, setNavTop] = useState<number>(72); 

  // 🔹 FIX: Use useLayoutEffect for immediate, synchronous DOM measurements
  useLayoutEffect(() => {
    const measure = () => {
      const navbar = document.querySelector<HTMLElement>(".custom-navbar");
      if (navbar) {
        setNavTop(navbar.offsetHeight);
      }
    };

    measure(); // Call once on mount
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []); // Empty dependency array ensures this runs once

  // 🔹 Effect 2: Highlight the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      // Loop through all sections to find the one currently in the viewport
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // This condition checks if the section's top is just below the sticky sub-navbar
          // and if its bottom is still visible. This is a very reliable method.
          if (rect.top <= navTop + 10 && rect.bottom >= navTop + 10) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, navTop]); // Dependencies ensure this re-runs if sections or navbar height change

  return (
    <nav
      className="z-30 backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm w-full"
      style={{ position: "sticky", top: navTop }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          flex flex-wrap sm:flex-nowrap
          items-center justify-start
          gap-3 sm:gap-6 md:gap-10
          px-4 sm:px-6 md:px-8
          py-2 sm:py-3
          overflow-x-auto sm:overflow-x-visible no-scrollbar
          snap-x snap-mandatory
        "
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "group relative whitespace-nowrap text-sm sm:text-base md:text-lg font-medium transition-all duration-300 px-3 py-2 rounded-md min-h-[44px] flex items-center justify-center snap-start",
              active === section.id
                ? "text-[#2562EA] bg-blue-50 shadow-sm"
                : "text-gray-600 hover:text-[#2562EA] hover:bg-blue-50/40"
            )}
          >
            {section.name}

            {/* Hover underline animation */}
            <span
              className="absolute left-1/2 bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#2562EA] to-[#4f8efc] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"
            />

            {/* Active underline */}
            {active === section.id && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-[#2562EA] to-[#4f8efc]"
              />
            )}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default SubNavbar;