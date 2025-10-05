"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const generateImages = (tabIndex, count = 24) => {
  // Create varied heights for masonry effect but with consistent width
  const heightVariations = [280, 320, 360, 240, 300, 340, 260, 380, 290, 330];

  // Available images in the imageslidere folder (1.png to 20.png)
  const availableImages = Array.from({ length: 20 }, (_, i) => `${i + 1}.png`);

  return Array.from({ length: count }, (_, i) => {
    const imageIndex = i % availableImages.length;
    const height = heightVariations[i % heightVariations.length];

    return {
      src: `/img/imageslidere/${availableImages[imageIndex]}`,
      width: 236, // Consistent width for all images
      height: height, // Varied heights for masonry effect
      span: 1,
      id: `img-${Date.now()}-${i}`,
      rotation: Math.random() * 6 - 3, // Random rotation for Pinterest effect
    };
  });
};

// Individual Card Component with IntersectionObserver
const ImageCard = ({ image, index, onImageLoad }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const cardRef = useRef(null);

  // IntersectionObserver for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onImageLoad?.(index);
  }, [index, onImageLoad]);

  const handleImageError = useCallback(() => {
    setHasError(true);
    setImageLoaded(true);
    onImageLoad?.(index);
  }, [index, onImageLoad]);

  // Generate fallback image URL if there's an error
  const fallbackSrc = `https://picsum.photos/236/${image.height}?random=${
    index + 1000
  }`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: (index % 10) * 0.1, // Stagger animation for visible items
        ease: "easeOut",
      }}
      className="mb-3 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100"
        style={{
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
        }}
        whileHover={{
          scale: 1.03,
          y: -8,
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 300,
          },
        }}
      >
        {/* Image Container */}
        <div
          className="w-full relative overflow-hidden"
          style={{ height: `${image.height}px` }}
        >
          {/* Lazy Loading with Next.js Image */}
          <Image
            src={hasError ? fallbackSrc : image.src}
            alt="QR Code inspiration image"
            width={236}
            height={image.height}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.6s ease-out",
            }}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli1Tcdbb3LjmMacLvl+gHC6BGdTQLqzQ4GoUoU+DWKG5Qwb2xhNVfW4XhfI/kVfwuX"
          />

          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded animate-spin"></div>
            </div>
          )}

          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && imageLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-opacity-20"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CurveSvgMask = () => (
  <svg
    className="absolute top-0 left-0 w-full h-[100px] z-10"
    viewBox="0 0 1440 150"
    preserveAspectRatio="none"
  >
    <path d="M0,150 C480,50 960,50 1440,150 L1440,0 L0,0 Z" fill="white" />
  </svg>
);

export default function InspirationFeed() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    // Pre-load initial images on mount
    setImages(generateImages(0));
    setLoadedImages(0);

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
      setLoadedImages(0);
    }
  }, [phraseIndex, images.length]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => prev + 1);
  }, []);

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
    <section className="relative pt-24 pb-8 overflow-hidden bg-white hidden md:block">
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

      {/* Masonry Grid with Enhanced Animations */}
      <div className="relative h-[500px] -mt-16">
        <AnimatePresence>
          <motion.div
            key={phraseIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pt-[60px] px-12 max-w-5xl mx-auto -left-65 right-0"
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image, index) => (
                <ImageCard
                  key={`${phraseIndex}-${image.id}`}
                  image={image}
                  index={index}
                  onImageLoad={handleImageLoad}
                />
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
        {/* Fade Out Effect */}
        <div className="absolute -bottom-9 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
