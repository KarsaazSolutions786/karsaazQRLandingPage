"use client";

import Image from "next/image";

const ActiveBorder = () => (
  <Image
    src="/img/Group 1000004911.png"
    alt="Active item border"
    width={130}
    height={130}
    className="absolute top-1 inset-0  object-contain z-10"
  />
);

export default function Hero({ activeType, setActiveType }) {
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

      <div
        id="home"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-6 sm:pb-10 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
          {/* Left Column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
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
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Quickly Generate, Control, and Monitor the Performance of Your{" "}
              <span className="text-black font-bold">QR Codes</span>
            </p>
            <div className="mt-6 sm:mt-10 flex justify-center md:justify-start">
              <button
                className="w-full sm:w-auto min-w-[200px] sm:min-w-[150px] h-12 sm:h-[50px] px-6 sm:px-8 py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background:
                    "radial-gradient(ellipse 85.59% 107.08% at 86.30% 87.50%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86%), radial-gradient(ellipse 83.94% 83.94% at 26.39% 20.83%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0) 100%), #8073E0",
                  boxShadow: "3.39px 32.23px 52.58px rgba(0, 0, 0, 0.20)",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
                }}
              >
                Generate QR
              </button>
            </div>
          </div>

          {/* Curved Arrow - Hidden on mobile */}
          <div className="absolute top-34 left-[48%] transform -translate-x-1/4 hidden lg:block z-10">
            <Image
              src="/img/arrow.png"
              alt="Decorative arrow"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="absolute top-[367px] left-[22.3%] transform -translate-x-1/4 hidden lg:block z-10">
            <Image
              src="/img/underline.png"
              alt="Decorative arrow"
              width={115}
              height={115}
              className="object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <Image
              src="/img/hero_1.png"
              alt="KarsaazQR in action"
              width={550}
              height={550}
              className="object-contain w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* QR Types Carousel Section - Mobile Optimized */}
      <div className="pb-4 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-white/70 backdrop-blur-md rounded-[50px] sm:rounded-[102.49px] shadow-lg">
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              <button className="rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors p-2">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10"
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
                <div className="flex justify-center items-center space-x-2 lg:space-x-4">
                  {qrTypes.map((type) => (
                    <div
                      key={type.name}
                      onClick={() => setActiveType(type.name)}
                      className="flex flex-col items-center space-y-2 text-center cursor-pointer group min-w-0 flex-shrink-0"
                    >
                      <div className="relative">
                        {activeType === type.name && <ActiveBorder />}
                        <div
                          className={`w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-opacity duration-300 bg-white rounded-2xl lg:rounded-3xl shadow-lg ${
                            activeType === type.name
                              ? "opacity-100"
                              : "opacity-40 border border-neutral-300"
                          }`}
                        >
                          <Icon
                            type={type.icon}
                            isActive={activeType === type.name}
                          />
                        </div>
                      </div>
                      <p
                        className={`text-xs font-medium transition-colors text-gray-700 ${
                          activeType === type.name ? "text-purple-600" : ""
                        }`}
                      >
                        {type.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="rounded-full text-purple-600 hover:bg-purple-100/50 transition-colors p-2">
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10"
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

            {/* Mobile Layout - Horizontal Scroll */}
            <div className="sm:hidden">
              <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2 px-1">
                {qrTypes.map((type) => (
                  <div
                    key={type.name}
                    onClick={() => setActiveType(type.name)}
                    className="flex flex-col items-center space-y-1 text-center cursor-pointer group flex-shrink-0"
                  >
                    <div className="relative">
                      {activeType === type.name && (
                        <div className="absolute inset-0 bg-purple-200 rounded-2xl scale-110 -z-10"></div>
                      )}
                      <div
                        className={`w-14 h-14 flex items-center justify-center transition-all duration-300 bg-white rounded-2xl shadow-md ${
                          activeType === type.name
                            ? "opacity-100 scale-105"
                            : "opacity-60"
                        }`}
                      >
                        <Icon
                          type={type.icon}
                          isActive={activeType === type.name}
                          size="small"
                        />
                      </div>
                    </div>
                    <p
                      className={`text-xs font-medium transition-colors whitespace-nowrap ${
                        activeType === type.name
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                    >
                      {type.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Icon = ({ type, isActive, size = "normal" }) => {
  const iconMap = {
    file: "/icons/proicons_pdf-2.svg",
    link: "/icons/line-md_link.svg",
    mobile: "/icons/circum_mobile-4.svg",
    calendar: "/icons/material-symbols-light_event-note-outline-rounded.svg",
    image: "/icons/mage_image.svg",
    audio: "/icons/Vector.svg",
    coupon: "/icons/hugeicons_coupon-02.svg",
    website: "/icons/streamline-plump_browser-website-1.svg",
  };

  const iconSrc = iconMap[type];
  const iconSize = size === "small" ? 20 : 24;

  if (!iconSrc) {
    return <div className="w-6 h-6 bg-gray-300 rounded"></div>;
  }

  return (
    <div className="relative">
      <Image
        src={iconSrc}
        alt={`${type} icon`}
        width={iconSize}
        height={iconSize}
        className="object-contain transition-all duration-300"
        style={{
          filter: isActive
            ? "brightness(0) saturate(100%) invert(36%) sepia(88%) saturate(2298%) hue-rotate(258deg) brightness(92%) contrast(92%)"
            : "brightness(0) saturate(100%) opacity(0.6)",
        }}
      />
    </div>
  );
};
