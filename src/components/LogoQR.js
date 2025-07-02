"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoQR() {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl px-16 py-2 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #8073E0 0%, #B048B0 70.6%)",
          }}
        >
          {/* Background Pattern/Texture (color overlay) */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent"></div>

          {/* Shining Backdrop Image (on top of color overlay) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Image
              src="/img/shining.png"
              alt="Decorative backdrop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-3xl lg:text-2xl font-bold mb-8 leading-relaxed">
                Logo QR — Lorem Ipsum Lorem ipsum
                <br />
                Lorem ipsum !
              </h1>

              <p className="text-base lg:text-lg mb-10 text-white/90 leading-relaxed max-w-md">
                Turn your logo into a branded QR code with a unique dot pattern.
                Smart, stylish, and instantly recognizable.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 font-medium text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Logo QR
              </motion.button>
            </motion.div>

            {/* Right Content - Main QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[300px] lg:h-[350px] flex items-center justify-center"
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
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <div className=" p-6 rounded-2xl transition-all duration-300">
                  <div className="w-[148px] h-[148px]relative">
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
          <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
