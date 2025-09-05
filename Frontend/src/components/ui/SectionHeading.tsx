import { motion } from "framer-motion";

interface SectionHeadingProps {
  text: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  text,
  className = "",
  gradientFrom = "#2562EA", // updated primary color
  gradientTo = "#6B8DFF",   // complementary gradient
}) => {
  return (
    <motion.h3
  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center relative leading-tight ${className}`}
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{
    backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // textShadow: `0 4px 15px ${gradientFrom}55`, // subtle glow
  }}
>
  {text}

  {/* Animated gradient underline */}
  <motion.span
    className="block h-1 mt-4 rounded-full mx-auto"
    initial={{ width: 0 }}
    whileInView={{ width: "6rem" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
      // boxShadow: `0 4px 12px ${gradientFrom}80`,
    }}
  />

  {/* Optional subtle floating glow effect */}
  <span
    className="absolute left-1/2 -bottom-2 w-40 h-4 rounded-full opacity-30 blur-xl bg-gradient-to-r from-[#2562EA] to-[#6B8DFF] transform -translate-x-1/2 animate-pulse"
  />
</motion.h3>

  );
};

export default SectionHeading;
