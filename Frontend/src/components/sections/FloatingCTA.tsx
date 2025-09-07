import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import ChatbotWidget from "../chatbot/ChatbotWidget";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Widget */}
      {isOpen && <ChatbotWidget onClose={() => setIsOpen(false)} />}

      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // Or use z- for absolute highest priority
         className="fixed bottom-6 right-6 z-[9999]"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#2562EA] to-[#4f8efc] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          {isOpen ? "Close" : "Let’s Talk"}
        </button>
      </motion.div>
    </>
  );
};

export default FloatingCTA;
