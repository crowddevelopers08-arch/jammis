"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, HeartPulse, Droplets } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "PCOS & Hormonal Health",
    conditions: "Cycle irregularity, acne, facial hair, weight fluctuations, mood imbalance, and fertility-related concerns.",
    approach: "Ayurveda focuses on restoring hormonal balance, improving metabolism, and regulating cycles naturally.",
    accent: "gold",
  },
  {
    icon: HeartPulse,
    title: "Liver Disorders",
    conditions: "Fatty liver, hepatitis, sluggish digestion, bloating, acidity, chronic fatigue, and metabolic stress.",
    approach: "Formulations derived from Jammi's historic liver specialisation support detoxification and healthy liver function.",
    accent: "purple",
  },
  {
    icon: Droplets,
    title: "Kidney & Urinary Concerns",
    conditions: "Kidney stones, recurrent UTIs, burning urination, water retention, and renal stress.",
    approach: "Ayurvedic herbs help ease discomfort, reduce the risk of recurrence, and support long-term kidney health.",
    accent: "gold",
  },
];

const TreatmentsSection = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <section 
        id="treatment" 
        className="py-10 md:py-10 lg:py-10 xl:py-10 bg-[#f3f3f3] scroll-mt-16 max-[470px]:py-2 sm:scroll-mt-20 lg:scroll-mt-24"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto max-[470px]:mb-6 mb-12 md:mb-12 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#530d3c] mb-4 sm:mb-6">
              Specialists in Lifestyle Diseases
            </h2>
            <div className="w-20 h-1.5 bg-[#fcb716] mx-auto rounded-full mb-4" />
            <p className="text-[#530d3c]/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
              Our specialized Ayurvedic approach addresses root causes, not just symptoms
            </p>
          </div>

          {/* Treatment Cards - Adjusted grid for better width control */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-12 lg:mb-12 max-[470px]:mb-6">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              const isGold = treatment.accent === 'gold';
              
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#530d3c]/10 overflow-hidden flex flex-col min-h-0 h-full" // Added flex-col and h-full
                >
                  {/* Decorative accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-2 ${isGold ? 'bg-gradient-to-r from-[#fcb716] to-yellow-400' : 'bg-gradient-to-r from-[#530d3c] to-purple-800'}`} />
                  
                  {/* Background pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[radial-gradient(#530d3c_1px,transparent_1px)] [background-size:20px_20px]" />
                  
                  {/* Icon container */}
                  <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${
                    isGold ? 'bg-[#fcb716]/10' : 'bg-[#530d3c]/10'
                  } flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}> {/* Reduced icon size */}
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${
                      isGold ? 'text-[#fcb716]' : 'text-[#530d3c]'
                    } group-hover:rotate-12 transition-transform duration-500`} />
                  </div>

                  {/* Title - Adjusted spacing */}
                  <h3 className="relative z-10 text-xl md:text-2xl lg:text-3xl font-bold text-[#530d3c] mb-4 md:mb-5 group-hover:text-[#530d3c] transition-colors duration-300 leading-tight">
                    {treatment.title}
                  </h3>

                  {/* Content - Adjusted spacing and text sizes */}
                  <div className="relative z-10 space-y-3 md:space-y-4 flex-grow"> {/* Reduced spacing */}
                    <div className="flex-grow">
                      <div className="flex items-start gap-2 mb-2">
                        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${isGold ? 'bg-[#fcb716]' : 'bg-[#530d3c]'}`} />
                        <p className="text-sm font-semibold text-[#530d3c]">
                          Common Conditions:
                        </p>
                      </div>
                      <p className="text-[#530d3c]/80 text-sm leading-relaxed pl-4">
                        {treatment.conditions}
                      </p>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start gap-2 mb-2">
                        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${isGold ? 'bg-[#fcb716]' : 'bg-[#530d3c]'}`} />
                        <p className="text-sm font-semibold text-[#530d3c]">
                          Our Ayurvedic Approach:
                        </p>
                      </div>
                      <p className="text-[#530d3c]/80 text-sm leading-relaxed pl-4">
                        {treatment.approach}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl md:rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    isGold ? 'border-[#fcb716]/30' : 'border-[#530d3c]/30'
                  } pointer-events-none`} />
                </div>
              );
            })}
          </div>
<p className="mt-4 md:mt-6 text-[#530d3c]/70 text-center pb-2 text-sm md:text-base">
              .... And many other lifestyle disorders...
            </p>
          {/* CTA */}
          <div className="text-center">
            <a href="#form" className="inline-block">
           <Button 
  className="group cursor-pointer relative bg-gradient-to-r from-[#530d3c] to-[#3a0a2d] hover:from-[#3a0a2d] hover:to-[#530d3c] text-white font-bold px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 h-auto text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl overflow-hidden"
>
  {/* Shine effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 sm:duration-1000" />
  
  <span className="relative flex items-center justify-center gap-2 sm:gap-3">
    <span className="whitespace-nowrap">Book Your Ayurvedic Consultation</span>
    <svg 
      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</Button>
            </a>
            
            {/* Supporting text */}
            <p className="mt-4 md:mt-6 text-[#530d3c]/70 text-sm md:text-base">
              Free initial assessment • Personalized treatment plans • Experienced Ayurvedic doctors
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsSection;