"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer
      className="border-t border-gray-200/60"
      style={{ background: "#F6F6F8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact US Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-800">Contact US</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-gray-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="text-gray-600">
                  <p>85 Great Portland Street, First Floor, London, W1W 7LT,</p>
                  <p>United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-gray-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div className="text-gray-600">
                  <p>+44 7365 605535 (Available on WhatsApp, Mon-Fri</p>
                  <p>9am-6pm, UK Time)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-gray-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <p className="text-gray-600">info@karsaazQR.com</p>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-800">Product</h3>
            <div className="space-y-4">
              {[
                "KarsaazAI",
                "KarsaazQR",
                "Time schedule",
                "Lead generate",
                "Remote Collaboration",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/logo.png"
                alt="Main QR Code"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe to our Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div
                  className="flex items-center bg-white rounded-full overflow-hidden shadow-lg"
                  style={{ background: "#F3F3F7" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600"
                    style={{ background: "transparent" }}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white font-semibold px-8 py-4 rounded-full transition-all"
                    style={{
                      background: `linear-gradient(0deg, #8073E0, #8073E0),
                        radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.413) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%),
                        radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86.18%)`,
                      boxShadow: `3.39px 32.23px 52.58px 0px #00000033, -2.54px -3.39px 5.94px 0px #FFFFFF26 inset`,
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/60 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500">Copyright @2025</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.589 0 0 .589 0 1.325v21.351C0 23.411.589 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.737 0 1.325-.589 1.325-1.325V1.325C24 .589 23.411 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.769 3.977 7.371 4.03c-2.432.11-3.665 1.344-3.775 3.775-.053 1.398-.064 1.67-.064 4.195s.011 2.797.064 4.195c.11 2.432 1.343 3.665 3.775 3.775 1.398.053 1.67.064 4.195.064s2.797-.011 4.195-.064c2.432-.11 3.665-1.343 3.775-3.775.053-1.398.064-1.67.064-4.195s-.011-2.797-.064-4.195c-.11-2.432-1.343-3.665-3.775-3.775C15.231 3.977 14.958 3.965 12 3.965zM12 6.837c-2.839 0-5.163 2.324-5.163 5.163s2.324 5.163 5.163 5.163 5.163-2.324 5.163-5.163S14.839 6.837 12 6.837zm0 8.533c-1.861 0-3.37-1.509-3.37-3.37s1.509-3.37 3.37-3.37 3.37 1.509 3.37 3.37-1.509 3.37-3.37 3.37zM18.802 6.002c-.618 0-1.118.5-1.118 1.118s.5 1.118 1.118 1.118 1.118-.5 1.118-1.118-.5-1.118-1.118-1.118z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
