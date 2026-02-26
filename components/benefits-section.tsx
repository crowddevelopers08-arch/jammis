"use client";
// components/WhyAyurdanAyurveda.tsx
import React from "react";

export default function WhyAyurdanAyurveda() {
  return (
    <section className="w-full bg-[#f3f3f3] py-8 sm:py-12 md:py-12 lg:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-[#530d3c] mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
        Why Jammi's Ayurvedic Clinic
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row md:gap-6 lg:gap-8 xl:gap-10">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-10 md:px-3 lg:px-4 xl:px-5 text-center">
          {/* Personalized Care */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <circle cx="32" cy="18" r="8" />
              <path d="M18 40c2-6 6-9 14-9s12 3 14 9" />
              <path d="M26 25v6c0 3-2 5-5 5h-1c-3 0-5-2-5-5v-3M38 25v6c0 3 2 5 5 5h1c3 0 5-2 5-5v-3" />
              <circle cx="20" cy="37" r="2" />
              <circle cx="44" cy="37" r="2" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              Personalized Care
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              We provide tailored treatment plans focusing on your unique body type, metabolism, and lifestyle for PCOS, Liver & Kidney conditions.
            </p>
          </div>

          {/* Flexible & Online Consultation */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <circle cx="32" cy="32" r="14" />
              <circle cx="32" cy="28" r="4" />
              <path d="M24 40c2-4 4-6 8-6s6 2 8 6" />
              <path d="M26 26v4l-3 2M42 32l-3-2v-4" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              Flexible &amp; Online Consultation
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Access expert Ayurvedic advice and personalized treatment plans from anywhere with our online consultation services.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col gap-6 max-[470px]:mt-0 max-[470px]:mb-0 sm:gap-8 md:gap-8 lg:gap-10 md:px-3 lg:px-4 xl:px-5 text-center md:border-x border-[#530d3c]/20 py-6 sm:py-8 md:py-0 my-6 sm:my-8 md:my-0">
          {/* 125+ Years of Tradition */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <path d="M18 50h18c6 0 10-4 10-10V26c0-7-6-12-14-12h-4c-7 0-12 5-12 12v4" />
              <path d="M32 22c-5 3-7 7-7 12 3-2 5-3 7-6 2 3 4 4 7 6-1-5-2-9-7-12z" />
              <line x1="32" y1="22" x2="32" y2="36" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              125+ Years of Tradition
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Leveraging over a century of Ayurvedic expertise for natural, effective treatment solutions for chronic conditions.
            </p>
          </div>

          {/* Holistic Healing Approach */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <circle cx="32" cy="32" r="14" />
              <path d="M28 20c1 3 2 4 4 4s3-1 4-4c-2 0-3-1-4-2-1 1-2 2-4 2z" />
              <path d="M26 40c2-2 3-3 6-3s4 1 6 3" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              Holistic Healing Approach
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Our approach goes beyond symptoms, promoting overall health, balance, and vitality through mind-body alignment.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-10 md:px-3 lg:px-4 xl:px-5 text-center mt-6 sm:mt-8 md:mt-0">
          {/* GMP-Certified Natural Solutions */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <path d="M26 14h12v6l2 4v22H24V24l2-4z" />
              <line x1="26" y1="18" x2="38" y2="18" />
              <path d="M24 30c3-2 6-3 9-3 3 0 5 1 7 3-2 3-4 5-7 6-3-1-6-3-9-6z" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              GMP-Certified Solutions
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              We use only GMP-certified natural herbs and remedies, ensuring purity, consistency and no harmful side effects.
            </p>
          </div>

          {/* Privacy Assured */}
          <div className="px-2 sm:px-0">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 stroke-[#fcb716] stroke-[2] fill-none"
            >
              <path d="M32 14l14 6v11c0 9-5 16-14 19-9-3-14-10-14-19V20z" />
              <path d="M26 31l4 5 8-9" />
            </svg>
            <h3 className="text-[#530d3c] font-semibold text-sm sm:text-base md:text-base lg:text-lg mb-2 sm:mb-3">
              Privacy Assured
            </h3>
            <p className="text-[#530d3c]/80 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Complete privacy assurance for all patients with 24-hour helpline and confidential consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}