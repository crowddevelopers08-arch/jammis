"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Headerone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatment" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      {/* Header with proper z-index and positioning */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#530d3c]/10 shadow-sm"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-40 sm:w-48 md:w-52 lg:w-60 relative h-10 sm:h-12 lg:h-14">
                <Image
                  src="https://ik.imagekit.io/zir7mehas/public/Logo-jammih.png"
                  alt="Jammi's Wellness & Livercure Clinic"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 240px"
                />
              </div>
              <span className="sr-only">Jammi's Wellness & Livercure Clinic</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#530d3c]/80 hover:text-[#fcb716] transition-colors duration-200 px-1 py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <a href="#form">
                <Button 
                  className="bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold transition-all duration-300 hover:scale-105 px-6 py-5 text-base shadow-md"
                >
                  Book Consultation
                </Button>
              </a>
            </div>

            {/* Mobile: Book Now Button */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="#form">
                <Button 
                  className="bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold transition-all duration-300 hover:scale-105 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base shadow-md"
                >
                  Book Now
                </Button>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#530d3c]" />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-[#530d3c]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[#530d3c]/10 bg-white/95 backdrop-blur-md shadow-lg">
              <div className="py-4 px-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base font-medium text-[#530d3c] hover:text-[#fcb716] transition-colors py-3 px-4 rounded-lg hover:bg-[#fcb716]/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4 mt-2 border-t border-[#530d3c]/10">
                    <a href="#form">
                      <Button 
                        className="w-full bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold transition-all duration-300 py-5 text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Book Consultation
                      </Button>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* This spacer prevents content from hiding behind the fixed header */}
      <div className="h-16 sm:h-20 lg:h-24"></div>
    </>
  );
};

export default Headerone;