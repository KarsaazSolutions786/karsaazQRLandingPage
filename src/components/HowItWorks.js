import React from "react";
import Image from "next/image";

const Step = ({ number, title, description, isLast }) => {
  return (
    <div className="flex items-start pb-4 sm:pb-6">
      <div className="flex flex-col items-center mr-4 sm:mr-8">
        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-500"></div>
        {!isLast && (
          <div className="w-0.5 h-16 sm:h-20 bg-slate-300 mt-1"></div>
        )}
      </div>
      <div className="-mt-1 sm:-mt-2">
        <h3
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent"
          style={{
            background:
              "linear-gradient(90.77deg, #B048B0 9.76%, #A550B9 31.16%, #8073E0 98.02%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const steps = [
    {
      title: "Register via Site",
      description: "Register to Karsaaz QR with google or Email.",
    },
    {
      title: "Choose the type",
      description: "Choose the type of QR code you want to create.",
    },
    {
      title: "Create QR Code",
      description: "Create your QR code with the details.",
    },
    {
      title: "Customise and Download",
      description: "Customise your QR code and Download it.",
    },
  ];

  return (
    <section id="how-to" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Left Column: Steps */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight mb-6 sm:mb-8 lg:mb-10 leading-tight text-center lg:text-left">
              Quick Steps To Generate QR
              <br className="hidden sm:block" />
              using Karsaaz QR
            </h2>
            <div>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Phone Image */}
          <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
            {/* Background HIW Image */}
            <div className="absolute inset-y-20 sm:inset-y-32 lg:inset-y-44 -inset-x-4 sm:-inset-x-0">
              <Image
                src="/img/HIW.png"
                alt="KarsaazQR in action"
                width={550}
                height={550}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            {/* Phone Frame */}
            <Image
              src="/img/phone.png"
              alt="Phone showing Karsaaz QR"
              width={320}
              height={640}
              className="relative w-48 h-96 sm:w-60 sm:h-[480px] lg:w-80 lg:h-[640px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
