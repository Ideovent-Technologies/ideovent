import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ } from "./types";

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  heading = "Frequently Asked Questions",
  gradientFrom = "#2562EA",
  gradientTo = "#6B8DFF",
}) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faqs"
      className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 bg-gray-50"
    >
      <SectionHeading
        text={heading}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        className="mb-14 text-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          className="space-y-4 sm:space-y-6 max-w-4xl mx-auto"
        >
          {faqs.map((faq, idx) => {
            const stableKey = `${faq.question.replace(/\s+/g, "-")}-${idx}`;

            return (
              <AccordionItem
                key={stableKey}
                value={stableKey}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 group hover:border-[#2562EA]"
              >
                <AccordionTrigger
                  className="flex justify-between items-center text-h3 font-semibold text-gray-800 p-4 sm:p-6 pr-4 hover:bg-gradient-to-r hover:from-[#2562EA]/10 hover:to-[#6B8DFF]/10 transition-all duration-300 rounded-3xl group"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-p text-gray-700 p-4 sm:p-6 border-t border-gray-100 bg-[#f0f5ff] leading-relaxed rounded-b-3xl"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
