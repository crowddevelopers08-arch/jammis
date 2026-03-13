"use client";
import { Phone } from "lucide-react";
import Image from "next/image";

const ThankHeaderone = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#530d3c]/10" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-28">
            {/* Logo with Image */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-40 sm:w-48 md:w-56 lg:w-64 relative h-12 sm:h-14 lg:h-16">
                <Image
                  src="https://ik.imagekit.io/zir7mehas/public/Logo-jammih.png"
                  alt="Jammi's Wellness & Livercure Clinic"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span className="sr-only">Jammi's Wellness & Livercure Clinic</span>
            </a>

            {/* Call Button - Visible on all screens */}
           <a 
  href="tel:+9199000 10044" 
  className="inline-flex items-center justify-center gap-2 bg-[#530d3c] hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold transition-all duration-300 hover:scale-105 px-4 sm:px-5 md:px-6 lg:px-6 py-3 sm:py-3 md:py-4 lg:py-4 text-sm sm:text-sm md:text-base lg:text-base rounded-lg shadow-md hover:shadow-lg"
>
  <Phone className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 flex-shrink-0" />
  <span className="font-bold">+91 99000 10044</span>
</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default ThankHeaderone;