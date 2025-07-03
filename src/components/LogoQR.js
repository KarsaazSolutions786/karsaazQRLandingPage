"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoQR() {
  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl px-6 sm:px-12 lg:px-16 py-8 sm:py-12 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #8073E0 0%, #B048B0 70.6%)",
          }}
        >
          {/* Background Pattern/Texture (color overlay) */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent"></div>

          {/* Shining Backdrop Image (on top of color overlay) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 sm:opacity-60">
            <Image
              src="/img/shining.png"
              alt="Decorative backdrop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-center lg:text-left"
            >
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Logo QR — Turn Your Brand
                <br className="hidden sm:block" />
                Into a Smart QR Code!
              </h1>

              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                Turn your logo into a branded QR code with a unique dot pattern.
                Smart, stylish, and instantly recognizable.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-purple-600 font-medium text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Logo QR
              </motion.button>
            </motion.div>

            {/* Right Content - Main QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[350px] flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:bg-white/20">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/img/qrMain.png"
                      alt="Main QR Code"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          {/* <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full blur-xl"></div> */}
          {/* <div className="absolute bottom-10 left-20 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div> */}
        </motion.div>
      </div>
    </section>
  );
}
