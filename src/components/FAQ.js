"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      id: 1,
      question: "How long until we deliver your first blog post?",
      answer:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
    },
    {
      id: 2,
      question: "How long until we deliver your first blog post?",
      answer:
        "We typically deliver your first blog post within 3-5 business days after receiving all necessary information and requirements from you.",
    },
    {
      id: 3,
      question: "How long until we deliver your first blog post?",
      answer:
        "Our team works efficiently to ensure quick turnaround times while maintaining high quality standards for all deliverables.",
    },
    {
      id: 4,
      question: "How long until we deliver your first blog post?",
      answer:
        "The delivery timeline depends on the complexity of your requirements, but we always aim to exceed your expectations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const PlusIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="sm:w-6 sm:h-6"
    >
      <path
        d="M12 6V18M6 12H18"
        stroke="#666"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const MinusIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="sm:w-6 sm:h-6"
    >
      <path d="M6 12H18" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-purple-600 mb-4">
            Frequently Ask Questions
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="flex flex-col space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout={false}
              className={`w-full ${
                openIndex === index
                  ? "min-h-[120px] sm:min-h-[140px] bg-violet-50"
                  : "h-16 sm:h-20 lg:h-24 bg-white"
              } rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-4 sm:p-6">
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 pr-4 flex-1 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                      layout={false}
                    >
                      <div className="pt-3 sm:pt-4 text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
