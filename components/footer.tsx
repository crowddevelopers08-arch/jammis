"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <footer className="bg-[#530d3c] text-[#f3f3f3]" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="container max-[470px]:pt-6 px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="block mb-4">
                <h3 className="text-lg sm:text-xl font-serif font-semibold hover:text-[#fcb716] transition-colors">
                  Jammi's Wellness & Livercure Clinic
                </h3>
              </Link>
              <p className="text-[#f3f3f3]/80 text-sm leading-relaxed mb-6">
                Serving families with authentic Ayurvedic care for over 125+ years.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Link 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f3f3f3]/10 flex items-center justify-center hover:bg-[#fcb716] transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f3f3f3]/10 flex items-center justify-center hover:bg-[#fcb716] transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link 
                  href="https://youtube.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f3f3f3]/10 flex items-center justify-center hover:bg-[#fcb716] transition-colors"
                  aria-label="Visit our YouTube channel"
                >
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#treatment" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#form" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#fcb716] mt-1 flex-shrink-0" />
                  <span className="text-[#f3f3f3]/70 text-sm">
                    "Abhirami" 2B, Old No. 20, New No.14, Dr Nair Road, T.Nagar, Chennai - 600 017
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#fcb716] flex-shrink-0" />
                  <Link 
                    href="tel:+919043020764" 
                    className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm"
                  >
                    +91 9043020764
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#fcb716] flex-shrink-0" />
                  <Link 
                    href="mailto:jammisclinic@gmail.com" 
                    className="text-[#f3f3f3]/70 hover:text-[#fcb716] transition-colors text-sm"
                  >
                    jammisclinic@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 max-[470px]:mt-5 md:mt-12 pt-6 md:pt-8 border-t border-[#f3f3f3]/10 text-center">
            <p className="text-[#f3f3f3]/50 text-xs sm:text-sm">
              © {new Date().getFullYear()} Jammi's Wellness & Livercure Clinic. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile CTA Bar */}
        <div className="max-[470px]:flex hidden fixed bottom-0 left-0 right-0 z-50 w-full shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          {/* Call Now Button - Direct phone link */}
          <Link 
            href="tel:+919043020764" 
            className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-[#530d3c] text-white font-bold text-sm transition-all duration-300 hover:bg-[#530d3c]/90 active:bg-[#530d3c]/80 active:scale-[0.98]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span className="truncate">Call Now</span>
          </Link>

          {/* Book Now Button - Link to form section */}
          <Link 
            href="#form"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-[#fcb716] text-[#530d3c] font-bold text-sm transition-all duration-300 hover:bg-[#fcb716]/90 active:bg-[#fcb716]/80 active:scale-[0.98]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
            </svg>
            <span className="truncate">Book Now</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;