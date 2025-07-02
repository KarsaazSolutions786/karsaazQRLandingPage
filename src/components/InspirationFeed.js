"use client";

import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";

const inspirationalPhrases = [
  {
    text: "Generate unlimited QR",
    colors: "from-purple-600 to-pink-500",
    dotColor: "bg-purple-500",
  },
  {
    text: "Customize  QR",
    colors: "from-purple-600 to-pink-500",
    dotColor: "bg-blue-500",
  },
];

// Different image sets for each tab
const imagesByTab = {
  0: [
    // QR Code inspiration images
    "bf1c3f211e7fd2d8ff5b3f06492adeb4ca91e314.jpg",
    "bb1dee4a80f9ef1ef268290801b509c824018130.jpg",
    "b3446b8a06d06c5ed14ea86199eca894b3c0c2db.jpg",
    "885c0844ceaa11cf5dcea502c8af76894615f415.jpg",
    "512a7cee82d1f41c5968eb88c978ba8cfa20afe4.jpg",
    "55d8b2b252ec793e3bef3e16420e57e439704483.jpg",
    "52b43bc2bb55a8a3f2f8b526baccdf42535799c7.jpg",
  ],
  1: [
    // Creative designs images
    "027be33894386c15f7d6cace168fde89bea0b033.jpg",
    "08affdffa379722076d323bea296f7480ed0e683.jpg",
    "6a0e48120f1060b1e8e467913d02c5701f4ffefa.jpg",
    "3aaf305a7cbcbc98c3d7e7941c925885c467efd0.jpg",
    "cf7e8124235cbd822362c66e16aaef4923a60970.jpg",
    "eb83f21b2eb2f3909811729a8dfca5cbffa7bc97.jpg",
  ],
};

const generateImages = (tabIndex, count = 18) => {
  // Create varied heights for masonry effect but with consistent width
  const heightVariations = [280, 320, 360, 240, 300, 340, 260, 380, 290, 330];
  const tabImages = imagesByTab[tabIndex] || imagesByTab[0];

  return Array.from({ length: count }, (_, i) => {
    const imageIndex = i % tabImages.length;
    const height = heightVariations[i % heightVariations.length];

    return {
      src: `/img/imageslidere/${tabImages[imageIndex]}`,
      width: 236, // Consistent width for all images
      height: height, // Varied heights for masonry effect
      span: 1,
      id: `img-${Date.now()}-${i}`,
      rotation: Math.random() * 6 - 3, // Random rotation for Pinterest effect
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
    const initialImages = generateImages(0);
    console.log(
      "Generated images:",
      initialImages.map((img) => img.src)
    );
    setImages(initialImages);

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
      setImages(generateImages(phraseIndex));
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

  return (
    <section className="relative pt-24 pb-8 overflow-hidden bg-white">
      {/* Centered Heading */}
      <div className="relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            With Karsaaz QR
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
      <div className="relative h-[500px] -mt-16">
        <AnimatePresence>
          <motion.div
            key={phraseIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              scale: {
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0 pt-[60px] px-12 max-w-5xl mx-auto -left-65 right-0"
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{
                    opacity: 0,
                    y: -80, // Higher initial position for more dramatic drop
                    scale: 0.6, // Start even smaller for more dramatic effect
                    rotateZ: image.rotation,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateZ: 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 20, // Less damping for more bounce
                    stiffness: 100, // Lower stiffness for more natural movement
                    mass: 0.8, // Add mass for more realistic physics
                    duration: 1.2, // Longer duration for more elegant movement
                    delay: (index % 5) * 0.12 + Math.floor(index / 5) * 0.05, // Pinterest-style column-based stagger
                    opacity: {
                      duration: 0.6,
                      delay: (index % 5) * 0.12 + Math.floor(index / 5) * 0.05,
                      ease: "easeOut",
                    },
                  }}
                  className="mb-3 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  style={{
                    boxShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)",
                  }}
                  whileHover={{
                    scale: 1.02, // Subtle scale like Pinterest
                    y: -12, // Lift effect
                    boxShadow:
                      "0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)", // Enhanced shadow
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 400,
                      mass: 0.5,
                    },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 },
                  }}
                >
                  <div
                    className="w-full relative overflow-hidden rounded-2xl"
                    style={{ height: `${image.height}px` }}
                  >
                    <img
                      src={image.src}
                      alt="QR Code inspiration image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      style={{
                        backgroundColor: "#f3f4f6", // Gray background while loading
                        minHeight: "200px", // Prevent layout shift
                      }}
                      onLoad={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                      onError={(e) => {
                        console.log("Image failed to load:", image.src);
                        e.target.style.backgroundColor = "#f3f4f6";
                        e.target.style.display = "flex";
                        e.target.style.alignItems = "center";
                        e.target.style.justifyContent = "center";
                        e.target.innerHTML =
                          '<div style="color: #6b7280; font-size: 14px; text-align: center; padding: 20px;">Loading...</div>';
                      }}
                    />
                    {/* Pinterest-style overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl" />
                  </div>
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
