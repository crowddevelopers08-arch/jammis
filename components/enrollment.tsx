"use client";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    condition: "PCOS Treatment",
    quote: "After years of irregular cycles and failed treatments, Jammi's Ayurvedic approach finally helped me achieve hormonal balance. The personalized care made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh M.",
    condition: "Liver Disorder",
    quote: "My fatty liver condition improved significantly within 3 months. The doctors took time to understand my lifestyle and created a treatment plan that was easy to follow.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lakshmi K.",
    condition: "Kidney Stones",
    quote: "I was skeptical at first, but the Ayurvedic treatment not only helped with my kidney stones but also prevented recurrence. Truly grateful for the holistic approach.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anjali R.",
    condition: "PCOS Treatment",
    quote: "The natural approach at Jammi's transformed my health completely. No more medications, just pure Ayurvedic healing that worked wonders.",
    rating: 5,
  },
  {
    id: 5,
    name: "Suresh P.",
    condition: "Liver Cirrhosis",
    quote: "After being diagnosed with early-stage cirrhosis, Jammi's treatment plan helped reverse the damage. My latest tests show remarkable improvement.",
    rating: 5,
  },
  {
    id: 6,
    name: "Meena T.",
    condition: "Kidney Health",
    quote: "Chronic UTI issues for 2 years resolved within 4 months of treatment. The herbal formulations are gentle yet extremely effective.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Determine number of visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3); // Large desktop: 3 cards
      } else if (window.innerWidth >= 1024) {
        setVisibleCards(3); // Desktop: 3 cards (wider)
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(1); // Mobile: 1 card
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, currentIndex, visibleCards]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCards;
      if (nextIndex >= testimonials.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - visibleCards;
      if (prevIndexNew < 0) {
        return Math.max(0, testimonials.length - visibleCards);
      }
      return prevIndexNew;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * visibleCards);
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex % testimonials.length;
    const endIndex = startIndex + visibleCards;
    
    if (endIndex <= testimonials.length) {
      return testimonials.slice(startIndex, endIndex);
    } else {
      // Wrap around to get remaining cards from the beginning
      const firstPart = testimonials.slice(startIndex);
      const remaining = visibleCards - firstPart.length;
      const secondPart = testimonials.slice(0, remaining);
      return [...firstPart, ...secondPart];
    }
  };

  const visibleTestimonials = getVisibleTestimonials();
  const totalDots = Math.ceil(testimonials.length / visibleCards);
  const currentDot = Math.floor(currentIndex / visibleCards);

  return (
    <> 
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <section 
        id="testimonials"
        className="py-8 md:py-10 lg:py-10 xl:py-10 bg-[#f3f3f3] scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container px-3 sm:px-4 lg:px-6 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#530d3c] mb-3 md:mb-4 lg:mb-6">
              What Our Patients Say About Us
            </h2>
            <div className="w-16 h-1 bg-[#fcb716] mx-auto rounded-full mb-4 md:mb-6" />
            
            {/* Google Badge */}
            <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-white rounded-full border border-[#530d3c]/15 shadow-sm hover:shadow transition-shadow duration-300">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-[#fcb716] text-[#fcb716]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm md:text-base font-medium text-[#530d3c]">
                  Trusted for 125+ years
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative max-w-5xl mx-auto"
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:-left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#530d3c] hover:text-[#fcb716] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-[#530d3c]/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 sm:-right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#530d3c] hover:text-[#fcb716] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-[#530d3c]/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden px-3 sm:px-4 md:px-6 py-[10px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
                >
                  {visibleTestimonials.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-gradient-to-b from-[#f3f3f3] to-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-[#530d3c]/10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative flex flex-col h-auto min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px]" // Changed to auto height with min-height
                    >
                      {/* Background Pattern - Only on larger screens */}
                      <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[radial-gradient(#530d3c_1px,transparent_1px)] [background-size:20px_20px] rounded-lg sm:rounded-xl md:rounded-2xl" />
                      
                      {/* Quote Icon - Smaller on mobile */}
                      <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#530d3c]/10 group-hover:text-[#fcb716]/20 transition-colors duration-500" />
                      
                      {/* Rating - Compact on mobile */}
                      <div className="flex gap-0.5 mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-[#fcb716] text-[#fcb716] group-hover:scale-110 transition-transform duration-300" />
                        ))}
                      </div>

                      {/* Quote - Better mobile text sizing */}
                      <div className="relative z-10 flex-grow mb-4 sm:mb-5 md:mb-6">
                        <p className="text-[#530d3c]/80 leading-relaxed sm:leading-normal md:leading-relaxed text-sm sm:text-base md:text-base lg:text-base italic font-light line-clamp-4 sm:line-clamp-5 md:line-clamp-6">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Author - Compact on mobile */}
                      <div className="border-t border-[#530d3c]/10 pt-3 sm:pt-4 md:pt-5 lg:pt-6 mt-auto">
                        <div className="font-semibold text-[#530d3c] text-sm sm:text-sm md:text-base lg:text-lg group-hover:text-[#530d3c] transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-xs md:text-sm lg:text-base text-[#530d3c]/60 font-medium mt-0.5">
                          {testimonial.condition}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation - Smaller on mobile */}
            <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentDot === index
                      ? 'bg-gradient-to-r from-[#fcb716] to-yellow-400 scale-125'
                      : 'bg-[#530d3c]/30 hover:bg-[#530d3c]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA - Compact on mobile */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <a href="#form" className="inline-block">
              <Button 
                className="group cursor-pointer relative bg-gradient-to-r from-[#530d3c] to-[#3a0a2d] hover:from-[#3a0a2d] hover:to-[#530d3c] text-white font-semibold px-5 py-3.5 sm:px-6 sm:py-4 md:px-7 md:py-5 h-auto text-sm sm:text-base md:text-base transition-all duration-500 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                {/* Shine effect - Hidden on mobile for performance */}
                <span className="hidden sm:block absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center gap-2">
                  <span>Start Your Recovery Journey</span>
                  <svg 
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </a>
            <p className="mt-2 sm:mt-3 md:mt-4 text-[#530d3c]/70 text-xs sm:text-sm md:text-base">
              Join 1000+ patients who found lasting relief with Ayurveda
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;