import React from "react";
import Image from "next/image";

const Step = ({ number, title, description, isLast }) => {
  return (
    <div className="flex items-start pb-0">
      <div className="flex flex-col items-center mr-8">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-500"></div>
        {!isLast && <div className="w-0.5 h-20 bg-slate-300 mt-0"></div>}
      </div>
      <div className="-mt-2">
        <h3
          className="text-3xl font-bold text-transparent"
          style={{
            background:
              "linear-gradient(90.77deg, #B048B0 9.76%, #A550B9 31.16%, #8073E0 98.02%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-lg te">{description}</p>
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
    <section id="how-to" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Left Column: Steps */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-10 leading-tight">
              Quick Steps To Generate QR
              <br />
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
          <div className="relative flex justify-center items-center h-[600px] hidden md:flex">
            <div className="absolute inset-y-44 -inset-x-0 ">
              <Image
                src="/img/HIW.png"
                alt="KarsaazQR in action"
                width={550}
                height={550}
                className="object-contain"
                priority
              />
            </div>
            {/* <div className="w-[572.57px] h-96 px-6 py-4 bg-gradient-to-bl from-fuchsia-700/80 via-fuchsia-700/80 to-violet-500 rounded-bl-[40px] rounded-br-[40px]" /> */}
            <Image
              src="/img/phone.png"
              alt="Phone showing Karsaaz QR"
              width={320}
              height={640}
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
