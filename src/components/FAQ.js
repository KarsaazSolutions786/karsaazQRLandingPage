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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6V18M6 12H18"
        stroke="#666"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const MinusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 12H18" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <section id="faq" className="py-16 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-normal text-purple-600 mb-4">
            Frequently Ask Questions
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="flex flex-wrap justify-center gap-6 items-start max-w-[1400px] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout={false}
              className={`w-full sm:w-[644.93px] ${
                openIndex === index
                  ? "h-auto min-h-56 bg-violet-50"
                  : "h-24 bg-white"
              } rounded-3xl shadow-[0px_4px_4px_0px_rgba(215,217,235,1.00)] shadow-[0px_-4px_11px_0px_rgba(241,241,243,1.00)] shadow-[inset_0px_1px_4px_0px_rgba(101,108,148,0.25)] shadow-[inset_0px_-2px_4px_0px_rgba(101,108,148,0.25)] overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-6">
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
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
                      <div className="pt-4 text-gray-600 text-sm leading-relaxed">
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
