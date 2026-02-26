import { Button } from "@/components/ui/button";
import { Leaf, Play } from "lucide-react";
import { useState, useRef } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Unmute before playing if needed
        if (videoRef.current.muted) {
          videoRef.current.muted = false;
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section 
        className="relative flex items-center justify-center bg-white overflow-hidden pb-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#fcb716]/5 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#530d3c]/5 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-[#fcb716]/3 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23530d3c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />

        <div className="container relative z-10 px-4 sm:px-6 py-8 max-[470px]:py-0 sm:py-8 md:py-8 lg:8">
          <div className="max-w-3xl sm:max-w-5xl lg:max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mt-[15px] rounded-full bg-white border border-[#530d3c]/10 mb-6 sm:mb-8">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcb716]" />
              <span className="text-xs sm:text-sm font-medium text-[#530d3c]/60">Trusted Since 1890</span>
            </div>

            {/* Main headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-[#530d3c] leading-tight mb-4 sm:mb-6">
              Comprehensive Ayurvedic Care for {" "}
              <span className="text-[#fcb716]">PCOS, Liver, Kidney health </span>
              and Other Lifestyle Diseases.
            </h1>

            {/* Landscape Video */}
            <div className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto my-6 sm:my-8 md:my-10 rounded-lg sm:rounded-xl lg:rounded-xl overflow-hidden shadow-lg lg:shadow-xl">
              {/* Video Container */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-[#530d3c]/10 to-[#fcb716]/10">
                <video
                  ref={videoRef}
                  src="/jammismontage.mov"
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  // Removed muted attribute
                  onClick={togglePlayPause}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                
                {/* Play/Pause Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                  onClick={togglePlayPause}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#fcb716] flex items-center justify-center hover:bg-[#e6a614] transition-colors hover:scale-105">
                    {isPlaying ? (
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                        <div className="w-1 h-6 sm:h-8 lg:h-10 bg-white mx-0.5 lg:mx-0.5"></div>
                        <div className="w-1 h-6 sm:h-8 lg:h-10 bg-white mx-0.5 lg:mx-0.5"></div>
                      </div>
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#530d3c]/70 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Personalised treatments crafted using traditional Ayurvedic methods, GMP-certified quality, and 125+ years of trusted healing.
            </p>

            {/* CTA */}
            <div>
              <a href="#form">
                <Button 
                  className="bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold px-6 sm:px-8 py-4 sm:py-5 md:py-6 h-auto text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book Your Consultation
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#fcb716]">125+</p>
                <p className="text-xs sm:text-sm text-[#530d3c]/60">Years of Heritage</p>
              </div>
              <div className="w-px bg-[#530d3c]/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#fcb716]">GMP</p>
                <p className="text-xs sm:text-sm text-[#530d3c]/60">Certified Quality</p>
              </div>
              <div className="w-px bg-[#530d3c]/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#fcb716]">100%</p>
                <p className="text-xs sm:text-sm text-[#530d3c]/60">Natural Herbs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Hero;