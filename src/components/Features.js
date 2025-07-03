import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white border border-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center shadow-lg transition-all hover:shadow-purple-200 hover:-translate-y-1">
      <div className="w-full h-32 sm:h-40 lg:h-48 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={200}
            height={200}
            className="object-contain w-full h-full p-2"
          />
        ) : (
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L20 12M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-2-2m0 0l-2 2m2-2v12"
            />
          </svg>
        )}
      </div>
      <div className="w-full border-t border-gray-200"></div>
      <div className="w-full pt-3 sm:pt-4 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const PlaceholderIllustration = (props) => (
  <svg {...props} fill="none" viewBox="0 0 100 100" stroke="currentColor">
    <rect width="100" height="100" rx="8" stroke="none" fill="#F3F4F6" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 70 l20 -20 l20 20"
    />
    <circle cx="60" cy="35" r="5" fill="#D1D5DB" />
  </svg>
);

// Create a pool of all possible features
const allFeatures = [
  {
    title: "Easy Payments",
    description: "Scan to pay with any device, anytime.",
    imageSrc: "/img/image.png",
  },
  {
    title: "Connect Instantly",
    description: "Share contact details or social profiles seamlessly.",
    imageSrc: "/img/image1.png",
  },
  {
    title: "Digital Information",
    description: "Access menus, guides, and more with a simple scan.",
    imageSrc: "/img/image2.png",
  },
  {
    title: "Product Details",
    description: "Get instant information about products and inventory.",
    imageSrc: "/img/image3.png",
  },
  {
    title: "Document Sharing",
    description: "Share PDFs, files, and documents instantly.",
    imageSrc: "/img/image.png",
  },
  {
    title: "Website Access",
    description: "Direct visitors to your website with one scan.",
    imageSrc: "/img/image1.png",
  },
  {
    title: "App Downloads",
    description: "Guide users to download your mobile app easily.",
    imageSrc: "/img/image2.png",
  },
  {
    title: "Event Management",
    description: "Share event details and calendar invites.",
    imageSrc: "/img/image3.png",
  },
  {
    title: "Media Sharing",
    description: "Share images, videos, and audio files.",
    imageSrc: "/img/image.png",
  },
  {
    title: "Audio Content",
    description: "Play music, podcasts, or audio messages.",
    imageSrc: "/img/image1.png",
  },
  {
    title: "Special Offers",
    description: "Share coupons and promotional codes.",
    imageSrc: "/img/image2.png",
  },
  {
    title: "Social Media",
    description: "Connect to all your social media profiles.",
    imageSrc: "/img/image3.png",
  },
];

// Function to shuffle and select features based on activeType
const getFeaturesByType = (activeType) => {
  // Create a deterministic shuffle based on activeType
  const shuffleArray = (array, seed) => {
    const newArray = [...array];
    let currentIndex = newArray.length;
    let temporaryValue, randomIndex;

    // Simple seeded random function
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    while (0 !== currentIndex) {
      randomIndex = Math.floor(
        seededRandom(seed + currentIndex) * currentIndex
      );
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
      seed++;
    }
    return newArray;
  };

  // Create a seed based on activeType
  const typeSeeds = {
    PDF: 1,
    Link: 2,
    Apps: 3,
    Event: 4,
    Image: 5,
    Audio: 6,
    Coupon: 7,
    Website: 8,
  };

  const seed = typeSeeds[activeType] || 1;
  const shuffled = shuffleArray(allFeatures, seed);

  // Return first 4 features from the shuffled array
  return shuffled.slice(0, 4);
};

export default function Features({ activeType = "PDF" }) {
  const featuresData = getFeaturesByType(activeType);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={activeType}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={`${activeType}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
