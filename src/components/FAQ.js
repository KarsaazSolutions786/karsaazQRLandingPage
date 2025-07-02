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

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1250px] mx-auto">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            background:
              "linear-gradient(90.77deg, #B048B0 9.76%, #A550B9 31.16%, #8073E0 98.02%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "350",
            textTransform: "capitalize",
            lineHeight: "60px",
            wordWrap: "break-word",
          }}
        >
            Frequently Ask Questions
        </motion.div>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1350px] mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* First FAQ - Can expand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative"
              style={{
                background: openIndex === 0 ? "#F6F4FF" : "white",
                boxShadow: "0px 4px 4px #D7D9EB",
                borderRadius: "27.34px",
                padding: "40px 50px",
                minHeight: "100px",
              }}
              onClick={() => toggleFAQ(0)}
            >
              {/* Icon */}
              <div
                className="absolute left-12 top-12"
                style={{ width: "24px", height: "24px" }}
              >
                {openIndex === 0 ? (
                  // Minus Icon
                  <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "24px",
                      height: "3px",
                      background: "black",
                      borderRadius: "20px",
                      opacity: 0.8,
                    }}
                  />
                ) : (
                  // Plus Icon
                  <div className="relative">
                    <div
                      style={{
                        width: "20px",
                        height: "3px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "20px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                        position: "absolute",
                        top: "-8.5px",
                        left: "8.5px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Question */}
              <div
                className="mb-4"
                style={{
                  marginLeft: "60px",
                  opacity: 0.88,
                  color: "#1B1139",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  lineHeight: "23.40px",
                  wordWrap: "break-word",
                }}
              >
                {faqs[0].question}
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.7, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    style={{
                      marginLeft: "60px",
                      color: "#363049",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "400",
                      lineHeight: "21.10px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                      paddingTop: "10px",
                    }}
                  >
                    {faqs[0].answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Fourth FAQ - Can expand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative"
              style={{
                background: openIndex === 3 ? "#F6F4FF" : "white",
                boxShadow: "0px 4px 4px #D7D9EB",
                borderRadius: "27.34px",
                padding: "40px 50px",
                minHeight: "100px",
              }}
              onClick={() => toggleFAQ(3)}
            >
              {/* Icon */}
              <div
                className="absolute left-12 top-12"
                style={{ width: "24px", height: "24px" }}
              >
                {openIndex === 3 ? (
                  // Minus Icon
                <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                    style={{
                      width: "24px",
                      height: "3px",
                      background: "black",
                      borderRadius: "20px",
                      opacity: 0.8,
                    }}
                  />
                ) : (
                  // Plus Icon
                  <div className="relative">
                    <div
                      style={{
                        width: "20px",
                        height: "3px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "20px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                        position: "absolute",
                        top: "-8.5px",
                        left: "8.5px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Question */}
              <div
                className="mb-4"
                style={{
                  marginLeft: "60px",
                  opacity: 0.88,
                  color: "#1B1139",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  lineHeight: "23.40px",
                  wordWrap: "break-word",
                }}
              >
                {faqs[3].question}
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.7, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    style={{
                      marginLeft: "60px",
                      color: "#363049",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "400",
                      lineHeight: "21.10px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                      paddingTop: "10px",
                    }}
                  >
                    {faqs[3].answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Second FAQ - Can expand */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative"
              style={{
                background: openIndex === 1 ? "#F6F4FF" : "white",
                boxShadow: "0px 4px 4px #D7D9EB",
                borderRadius: "27.34px",
                padding: "40px 50px",
                minHeight: "100px",
              }}
              onClick={() => toggleFAQ(1)}
            >
              {/* Icon */}
              <div
                className="absolute left-12 top-12"
                style={{ width: "24px", height: "24px" }}
              >
                {openIndex === 1 ? (
                  // Minus Icon
                  <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "24px",
                      height: "3px",
                      background: "black",
                      borderRadius: "20px",
                      opacity: 0.8,
                    }}
                  />
                ) : (
                  // Plus Icon
                  <div className="relative">
                    <div
                      style={{
                        width: "20px",
                        height: "3px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "20px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                        position: "absolute",
                        top: "-8.5px",
                        left: "8.5px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Question */}
              <div
                className="mb-4"
                style={{
                  marginLeft: "60px",
                  opacity: 0.88,
                  color: "#1B1139",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  lineHeight: "23.40px",
                  wordWrap: "break-word",
                }}
              >
                {faqs[1].question}
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.7, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    style={{
                      marginLeft: "60px",
                      color: "#363049",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "400",
                      lineHeight: "21.10px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                      paddingTop: "10px",
                    }}
                  >
                    {faqs[1].answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Third FAQ - Can expand */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative"
              style={{
                background: openIndex === 2 ? "#F6F4FF" : "white",
                boxShadow: "0px 4px 4px #D7D9EB",
                borderRadius: "27.34px",
                padding: "40px 50px",
                minHeight: "100px",
              }}
              onClick={() => toggleFAQ(2)}
            >
              {/* Icon */}
              <div
                className="absolute left-12 top-12"
                style={{ width: "24px", height: "24px" }}
              >
                {openIndex === 2 ? (
                  // Minus Icon
                  <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "24px",
                      height: "3px",
                      background: "black",
                      borderRadius: "20px",
                      opacity: 0.8,
                    }}
                  />
                ) : (
                  // Plus Icon
                  <div className="relative">
                    <div
                      style={{
                        width: "20px",
                        height: "3px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                      }}
                    />
                    <div
                      style={{
                        width: "3px",
                        height: "20px",
                        background: "#1B1139",
                        borderRadius: "20px",
                        opacity: 0.8,
                        position: "absolute",
                        top: "-8.5px",
                        left: "8.5px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Question */}
              <div
                className="mb-4"
                style={{
                  marginLeft: "60px",
                  opacity: 0.88,
                  color: "#1B1139",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  lineHeight: "23.40px",
                  wordWrap: "break-word",
                }}
              >
                {faqs[2].question}
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.7, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    style={{
                      marginLeft: "60px",
                      color: "#363049",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "400",
                      lineHeight: "21.10px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                      paddingTop: "10px",
                    }}
                  >
                    {faqs[2].answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
