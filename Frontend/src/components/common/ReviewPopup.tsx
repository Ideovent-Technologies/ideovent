import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ReviewPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 60000); // 1 min = 60000 ms

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border-t-4"
        style={{ borderColor: "#027BFF" }}
      >
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="text-4xl mb-4" style={{ color: "#027BFF" }}>
          ⭐
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">
          We’d love your feedback!
        </h2>
        <p className="text-gray-600 mb-6">
          Your review helps us grow. Please share your experience on Google.
        </p>

        <a
          href="YOUR_GOOGLE_REVIEW_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 text-white"
          style={{ backgroundColor: "#027BFF" }}
        >
          ✍️ Write a Review
        </a>
      </motion.div>
    </div>
  );
};

export default ReviewPopup;
