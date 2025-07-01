"use client";

import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "How to", "FAQ", "Pricing", "Contact"];

  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="max-w-7xl mx-auto rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/80 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
                Karsaaz
              </span>
              <span className="ml-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                QR
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className={`relative text-base font-medium transition-colors duration-200 pb-2
                  ${
                    activeLink === link
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                  }
                `}
                >
                  {link}
                  {activeLink === link && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="flex items-center">
              <button className="flex items-center bg-white rounded-full shadow-md px-6 py-3 space-x-3 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold text-base">
                  Login
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
