"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ConsultationFormPopup from "./popupform"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    x: 30 
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -180 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

function BentoFeature({ title, desc, className = "" }: { title: string; desc: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="h-full"
    >
      <Card className={`border-[#530d3c]/20 bg-white p-1 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-[#530d3c]/10 h-full flex ${className}`}>
        <div className="rounded-xl border border-[#530d3c]/10 p-4 sm:p-5 h-full flex flex-col justify-center flex-1">
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#fcb716] flex-shrink-0" />
            </motion.div>
            <h3 className="text-base sm:text-lg font-semibold text-center text-[#530d3c]">{title}</h3>
          </div>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#530d3c]/70 text-center">{desc}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export function WhyTrustSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const leftCards = [
    {
      title: "125+ Years of Ayurvedic Expertise",
      desc: "A heritage clinic trusted since 1890, known for treating chronic PCOS, liver, and kidney conditions with authentic Ayurvedic science."
    },
    {
      title: "Authentic Traditional Formulations",
      desc: "Every medicine is prepared exactly as per classical Ayurvedic methods passed down through generations."
    },
    {
      title: "GMP-Certified Quality & Safety",
      desc: "Manufactured under strict GMP standards ensuring purity, consistency, and safe herbal care."
    }
  ]

  const rightCards = [
    {
      title: "Doctor-Led Personalised Treatment",
      desc: "Expert consultations with customised plans based on your body type, symptoms, lifestyle, and root cause."
    },
    {
      title: "Backed by Modern Research",
      desc: "Collaborations with IIT Delhi, ACTREC & University of Madras to validate and enhance the effectiveness of Ayurvedic treatments."
    },
    {
      title: "Holistic Healing Approach",
      desc: "Treatment that aligns body, mind, diet, environment, and lifestyle for long-term recovery."
    }
  ]

  const allCards = [...leftCards, ...rightCards];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <div className="bg-[#f3f3f3] overflow-hidden" style={{fontFamily: "'Outfit', sans-serif"}}>
        <section 
          ref={sectionRef}
          id="why" 
          data-animate="section" 
          className="mx-auto max-w-7xl px-4 sm:px-6 py-10 max-[470px]:py-6 sm:py-10 md:py-12 lg:py-12"
        >
          {/* Animated Title */}
          <motion.div 
            className="mb-8 sm:mb-10 md:mb-12 text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#530d3c]">
                <motion.span 
                  className="px-4 py-2 inline-block"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Why Trust Jammi's Ayurvedic Expertise
                </motion.span>
              </h1>
            </div>
          </motion.div>
          
          {/* Desktop & Tablet Layout (Above 470px) */}
          <div className="hidden min-[471px]:block">
            <motion.div 
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Left side - 3 cards */}
              <div className="w-full lg:w-[30%] flex flex-col gap-3 sm:gap-4 md:gap-6">
                {leftCards.map((card, index) => (
                  <div key={index} className="flex-1 min-h-0">
                    <BentoFeature
                      title={card.title}
                      desc={card.desc}
                    />
                  </div>
                ))}
              </div>

              {/* Center - Image */}
              <motion.div 
                className="w-full lg:w-[40%] relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#530d3c]/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto"
                variants={imageVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 }
                }}
              >
                {/* Replace the gradient background with Image component */}
                <div className="relative w-full h-full">
                  <Image
                    src="/high-angle.jpg" // Update with your actual image path
                    alt="Jammi's Ayurvedic Heritage since 1890"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  {/* Overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#530d3c]/40 via-transparent to-[#530d3c]/40">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                        1890
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center drop-shadow-lg">
                        Trusted Ayurvedic Heritage
                      </div>
                      <div className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-white/90 text-center drop-shadow-lg">
                        Generations of Healing Excellence
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#530d3c]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Right side - 3 cards */}
              <div className="w-full lg:w-[30%] flex flex-col gap-3 sm:gap-4 md:gap-6">
                {rightCards.map((card, index) => (
                  <div key={index} className="flex-1 min-h-0">
                    <BentoFeature
                      title={card.title}
                      desc={card.desc}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout (470px and below) */}
          <div className="block min-[471px]:hidden">
            <motion.div 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Image first on mobile - Significantly increased height */}
              <motion.div 
                className="w-full relative overflow-hidden rounded-xl border border-[#530d3c]/10 h-[320px] mb-5" // Increased to h-[320px]
                variants={imageVariants}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/high-angle.jpg" // Update with your actual image path
                    alt="Jammi's Ayurvedic Heritage since 1890"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#530d3c]/40 to-transparent">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6"> {/* Increased padding */}
                      <div className="text-5xl font-serif font-bold text-white mb-3 drop-shadow-lg"> {/* Increased to text-5xl */}
                        1890
                      </div>
                      <div className="text-2xl font-semibold text-white text-center drop-shadow-lg mb-2"> {/* Increased to text-2xl */}
                        Trusted Ayurvedic Heritage
                      </div>
                      <div className="text-lg text-white/90 text-center drop-shadow-lg"> {/* Increased to text-lg */}
                        Generations of Healing Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cards in single column */}
              <div className="flex flex-col gap-3">
                {allCards.map((card, index) => (
                  <div key={index} className="min-h-0">
                    <BentoFeature
                      title={card.title}
                      desc={card.desc}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="w-full max-w-md">
              <a href="#form">
                <Button 
                  size="lg"
                  className="bg-[#530d3c] cursor-pointer hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  Start Your Treatment Today
                </Button>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}