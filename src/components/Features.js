import React from "react";
import Image from "next/image";

const FeatureCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg transition-all hover:shadow-purple-200 hover:-translate-y-1">
      <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        ) : (
          <svg
            className="w-24 h-24 text-gray-400"
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
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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

export default function Features() {
  const featuresData = [
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
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
