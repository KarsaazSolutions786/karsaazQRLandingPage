"use client";

import { useState } from "react";
import Image from "next/image";

const ActiveBorder = () => (
  <Image
    src="/img/Group 1000004911.png"
    alt="Active item border"
    width={96}
    height={96}
    className="absolute inset-0 w-full h-full object-contain top-3"
  />
);

export default function Hero() {
  const [activeType, setActiveType] = useState("PDF");

  const qrTypes = [
    { name: "PDF", icon: "file" },
    { name: "Link", icon: "link" },
    { name: "Apps", icon: "mobile" },
    { name: "Event", icon: "calendar" },
    { name: "Image", icon: "image" },
    { name: "Audio", icon: "audio" },
    { name: "Coupon", icon: "coupon" },
    { name: "Website", icon: "website" },
  ];

  return (
    <>
      {/* Full Width Backdrop Image */}
      <div className="absolute inset-x-0 -z-10 h-[932px] w-full -top-20">
        <div className="relative w-full h-full">
          <Image
            src="/img/backdropHero.png"
            alt="Hero backdrop"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              <span
                style={{
                  background:
                    "linear-gradient(90.77deg, #B048B0 9.76%, #A550B9 31.16%, #8073E0 98.02%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Create & Customize Your
              </span>
              <span className="block text-gray-800">
                Dynamic QR Code with{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90.77deg, #B048B0 9.76%, #A550B9 31.16%, #8073E0 98.02%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  KarsaazQR
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Quickly Generate, Control, and Monitor the Performance of Your QR
              Codes
            </p>
            <div className="mt-10">
              <button
                className="text-white font-bold py-4 px-10 rounded-full text-lg transform transition-transform hover:scale-105 flex items-center gap-3"
                style={{
                  background: `linear-gradient(0deg, #8073E0, #8073E0),
                    radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.413) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%),
                    radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86.18%)`,
                  boxShadow: `3.39px 32.23px 52.58px 0px #00000033, -2.54px -3.39px 5.94px 0px #FFFFFF26 inset`,
                }}
              >
                Generate QR
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/img/hero_1.png"
              alt="KarsaazQR in action"
              width={550}
              height={550}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* QR Types Carousel Section */}
      <div className="pb-10">
        <div className="max-w-6xl mx-auto p-8 bg-white/70 backdrop-blur-md rounded-[102.49px] shadow-lg">
          <div className="relative">
            <div className="flex items-center justify-between">
              <button className="p-2 rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-center items-center space-x-6">
                  {qrTypes.map((type) => (
                    <div
                      key={type.name}
                      onClick={() => setActiveType(type.name)}
                      className="flex flex-col items-center space-y-3 text-center cursor-pointer group flex-shrink-0"
                    >
                      <div
                        className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300
                         `}
                      >
                        {activeType === type.name && <ActiveBorder />}
                        <div
                          className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            activeType === type.name
                              ? ""
                              : "border border-gray-200"
                          }`}
                        >
                          <Icon
                            type={type.icon}
                            isActive={activeType === type.name}
                          />
                        </div>
                      </div>
                      <p className={`text-sm font-medium transition-colors `}>
                        {type.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="p-2 rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Icon = ({ type, isActive }) => {
  const className = `w-8 h-8 transition-colors ${
    isActive ? "text-purple-600" : "text-gray-500 group-hover:text-gray-700"
  }`;

  const icons = {
    file: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="6"
          fontWeight="bold"
          fill={isActive ? "#1F2937" : "#6B7280"}
          className="transition-colors"
        >
          PDF
        </text>
      </svg>
    ),
    link: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
      </svg>
    ),
    mobile: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    calendar: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    image: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    audio: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
    coupon: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 7.5a5 5 0 0 1 0-5h19a5 5 0 0 1 0 5" />
        <path d="M2.5 16.5a5 5 0 0 0 0 5h19a5 5 0 0 0 0-5" />
        <path d="M7 12h10" />
      </svg>
    ),
    website: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  };

  return icons[type] || null;
};
