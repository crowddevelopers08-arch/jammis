import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "125+ years of authentic Ayurvedic wisdom",
  "Classical Ayurvedic preparation methods",
  "GMP-certified manufacturing",
  "Research collaborations with IIT Delhi, ACTREC & University of Madras",
  "Specialisation in chronic and orphaned cases",
];

const AboutSection = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section 
        id="about"
        className="py-10 md:py-10 lg:py-10 xl:py-10 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#fcb716]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#530d3c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center">
            {/* Content - Left Side */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#530d3c] leading-tight mb-3 md:mb-4">
                  Dive into Who We Are, and How We Care for You
                </h2>
                <div className="w-16 sm:w-20 h-1.5 bg-[#fcb716] rounded-full mb-4 md:mb-6" />
              </div>

              <div className="space-y-3 md:space-y-4 text-[#530d3c]/80 leading-relaxed">
                <p className="text-sm md:text-base">
                  Jammi's is built on over 125+ years of authentic Ayurvedic wisdom, starting from the pioneering work of Dr Jammi Venkataramanayya in 1890.
                </p>
                <p className="text-sm md:text-base">
                  Every formulation, every diagnosis, and every treatment plan we offer stays true to classical Ayurveda, while embracing the best of modern quality standards.
                </p>
                <p className="text-sm md:text-base">
                  Our clinic specialises in chronic and "orphaned" cases — patients who've tried multiple treatments without lasting relief. With a combination of traditional Ayurvedic preparation methods, GMP-certified manufacturing, and research collaborations with leading institutions, we bring together science, heritage, and personalised care.
                </p>
                <p className="text-sm md:text-base">
                  At Jammi's, your treatment is guided by experienced Ayurvedic doctors who focus on the root cause, your unique body type, lifestyle, emotional health, and long-term wellness goals.
                </p>
              </div>

              <a href="#form" className="inline-block">
                <Button 
                  className="bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold px-6 sm:px-8 py-4 sm:py-5 h-auto text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg mt-2"
                >
                  Consult the Doctor Today
                </Button>
              </a>
            </div>

            {/* Highlights Card - Right Side - COMPACT VERSION */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-xl border border-[#530d3c]/10">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-5 md:mb-7">
                  <h3 className="text-xl md:text-2xl font-bold text-[#530d3c] mb-3 md:mb-5">
                    What Sets Us Apart
                  </h3>
                  <div className="space-y-2.5 md:space-y-3">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#fcb716] flex-shrink-0 mt-0.5" />
                        <span className="text-[#530d3c] text-xs md:text-sm leading-relaxed flex-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats - COMPACT */}
                <div className="pt-5 md:pt-6 border-t border-[#530d3c]/10 mt-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#530d3c]">125+</div>
                      <div className="text-xs text-[#530d3c]/60 mt-1">Years of Heritage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#530d3c]">1890</div>
                      <div className="text-xs text-[#530d3c]/60 mt-1">Established</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;