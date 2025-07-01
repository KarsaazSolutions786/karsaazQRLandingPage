"use client";

import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const inspirationalPhrases = [
  {
    text: "weeknight dinner idea",
    colors: "from-yellow-600 to-orange-500",
    dotColor: "bg-yellow-500",
  },
  {
    text: "new look outfit",
    colors: "from-blue-500 to-cyan-400",
    dotColor: "bg-blue-500",
  },
  {
    text: "home decor inspiration",
    colors: "from-green-500 to-teal-500",
    dotColor: "bg-green-500",
  },
  {
    text: "DIY project to try",
    colors: "from-pink-500 to-rose-500",
    dotColor: "bg-pink-500",
  },
];

const generateImages = (count = 24) => {
  // Create stepped pattern that mimics the reference layout
  const imageConfigs = [
    // First row - natural stepped pattern
    { width: 236, height: 350, span: 1 }, // taller

    { height: 320, width: 236, span: 1 }, // left start
    { width: 236, height: 240, span: 1 }, // step down
    { width: 236, height: 180, span: 1 }, // shortest
    { width: 236, height: 280, span: 1 }, // step up

    // Natural varied heights for organic flow
    { width: 236, height: 300, span: 1 },
    { width: 236, height: 400, span: 1 },
    { width: 236, height: 260, span: 1 },
    { width: 236, height: 340, span: 1 },
    { width: 236, height: 220, span: 1 },
    { width: 236, height: 380, span: 1 },
    { width: 236, height: 310, span: 1 },
    { width: 236, height: 420, span: 1 },
    { width: 236, height: 290, span: 1 },
    { width: 236, height: 360, span: 1 },
    { width: 236, height: 250, span: 1 },
    { width: 236, height: 330, span: 1 },
    { width: 236, height: 410, span: 1 },
    { width: 236, height: 285, span: 1 },
    { width: 236, height: 355, span: 1 },
    { width: 236, height: 295, span: 1 },
    { width: 236, height: 375, span: 1 },
    { width: 236, height: 315, span: 1 },
    { width: 236, height: 345, span: 1 },
  ];

  return Array.from({ length: count }, (_, i) => {
    const config = imageConfigs[i % imageConfigs.length];
    return {
      src: `https://picsum.photos/${config.width}/${config.height}?random=${
        Date.now() + i
      }`,
      width: config.width,
      height: config.height,
      span: config.span,
      id: `img-${Date.now()}-${i}`,
    };
  });
};

const CurveSvgMask = () => (
  <svg
    className="absolute top-0 left-0 w-full h-[150px] z-10"
    viewBox="0 0 1440 150"
    preserveAspectRatio="none"
  >
    <path d="M0,150 C480,50 960,50 1440,150 L1440,0 L0,0 Z" fill="white" />
  </svg>
);

export default function InspirationFeed() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Pre-load initial images on mount
    setImages(generateImages());

    const interval = setInterval(() => {
      setPhraseIndex(
        (prevIndex) => (prevIndex + 1) % inspirationalPhrases.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate new images when phraseIndex changes, but not on initial mount
    if (images.length > 0) {
      setImages(generateImages());
    }
  }, [phraseIndex]);

  const breakpointColumnsObj = {
    default: 5,
    1536: 5,
    1280: 4,
    1024: 4,
    738: 3,
    640: 2,
  };

  const textVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.5 } },
  };

  const imageContainerVariants = {
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative pt-24 pb-8 overflow-hidden bg-white">
      {/* Centered Heading */}
      <div className="relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Get your next
          </h2>
          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                className={`text-4xl font-bold bg-gradient-to-r ${inspirationalPhrases[phraseIndex].colors} bg-clip-text text-transparent`}
                variants={textVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {inspirationalPhrases[phraseIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            {inspirationalPhrases.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  phraseIndex === index
                    ? `${inspirationalPhrases[index].dotColor} scale-125`
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid with Fade Effect */}
      <div className="relative h-[600px] -mt-16">
        <AnimatePresence>
          <motion.div
            key={phraseIndex}
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 pt-[60px] px-12 max-w-6xl mx-auto -left-80 right-0"
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  variants={imageVariants}
                  className="mb-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={image.src}
                    alt="Inspiration image"
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
        {/* Fade Out Effect */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
