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
    {
      id: 5,
      question: "How long until we deliver your first blog post?",
      answer:
        "We provide regular updates throughout the process to keep you informed about the progress of your blog post.",
    },
    {
      id: 6,
      question: "How long until we deliver your first blog post?",
      answer:
        "Our professional writers ensure that every blog post meets your brand voice and marketing objectives.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-4">
            Frequently Ask Questions
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                openIndex === index
                  ? "bg-purple-100 border-2 border-purple-200"
                  : "bg-white border-2 border-gray-100 hover:border-purple-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>

                {/* Plus/Minus Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    openIndex === index
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
