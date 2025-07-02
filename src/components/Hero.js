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
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
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
                Create & Customize
              </span>
              <span className="text-gray-800 ml-1">Your</span>
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
            <p className="mt-6 text-2xl text-gray-600 max-w-lg">
              Quickly Generate, Control, and Monitor the Performance of Your{" "}
              <span className="text-black font-bold">QR Codes</span>
            </p>
            <div className="mt-10">
              <div
                style={{
                  width: "150px",
                  height: "50px",
                  paddingLeft: 20.1,
                  paddingRight: 20.1,
                  paddingTop: 22.05,
                  paddingBottom: 22.05,
                  background:
                    "radial-gradient(ellipse 85.59% 107.08% at 86.30% 87.50%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86%), radial-gradient(ellipse 83.94% 83.94% at 26.39% 20.83%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0) 100%), #8073E0",
                  boxShadow:
                    "3.3924050331115723px 32.227848052978516px 52.582279205322266px rgba(0, 0, 0, 0.20)",
                  borderRadius: 92.44,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8.48,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontSize: 15.66,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Generate QR
                </div>
              </div>
            </div>
          </div>

          {/* Curved Arrow */}
          <div className="absolute top-34 left-[48%] transform -translate-x-1/4 hidden md:block z-10">
            <Image
              src="/img/arrow.png"
              alt="Decorative arrow"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="absolute top-[367px] left-[22.3%] transform -translate-x-1/4 hidden md:block z-10">
            <Image
              src="/img/underline.png"
              alt="Decorative arrow"
              width={115}
              height={115}
              className="object-contain"
            />
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
      <div className="pb-1">
        <div className="max-w-4xl mx-auto p-8 bg-white/70 backdrop-blur-md rounded-[102.49px] shadow-lg">
          <div className="relative">
            <div className="flex items-center justify-between">
              <button className="rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors">
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
                <div className="flex justify-center items-center -space-x-4">
                  {qrTypes.map((type) => (
                    <div
                      key={type.name}
                      onClick={() => setActiveType(type.name)}
                      className="flex flex-col items-center space-y-0 text-center cursor-pointer group"
                    >
                      <div
                        className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300
                         `}
                      >
                        {activeType === type.name && <ActiveBorder />}
                        <div
                          className="w-16 h-16 flex items-center justify-center transition-all duration-300"
                          style={{
                            background: "white",
                            boxShadow:
                              "3.7074687480926514px 3.7074687480926514px 9.639418601989746px rgba(230, 230, 230, 0.90)",
                            borderRadius: 11.5,
                            border:
                              activeType === type.name
                                ? "none"
                                : "1px #C9CCD0 solid",
                          }}
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
              <button className=" rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors">
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
  const iconMap = {
    file: "/icons/proicons_pdf-2.svg",
    link: "/icons/line-md_link.svg",
    mobile: "/icons/circum_mobile-4.svg",
    calendar: "/icons/material-symbols-light_event-note-outline-rounded.svg",
    image: "/icons/mage_image.svg",
    audio: "/icons/Vector.svg", // Using Vector.svg for audio
    coupon: "/icons/hugeicons_coupon-02.svg",
    website: "/icons/streamline-plump_browser-website-1.svg",
  };

  const iconSrc = iconMap[type];

  if (!iconSrc) return null;

  return (
    <div className="w-8 h-8 transition-colors relative">
      <Image
        src={iconSrc}
        alt={`${type} icon`}
        width={52}
        height={52}
        className="object-contain"
        style={{
          filter: isActive
            ? "brightness(0) saturate(100%) invert(36%) sepia(88%) saturate(2298%) hue-rotate(258deg) brightness(92%) contrast(92%)" // #7E4CDE active color filter
            : "brightness(0) saturate(100%) invert(20%) sepia(8%) saturate(1500%) hue-rotate(169deg) brightness(96%) contrast(96%)", // Darker #36454F default color filter
        }}
      />
    </div>
  );
};
