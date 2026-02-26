"use client";
import React, { useState } from 'react';
import { Clock, Award, TrendingUp, ArrowRight, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CoursesComponentone = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const courses = [
    {
      title: "Fellowship in Aesthetic Medicine",
      duration: "6 months with 8 Days Hands-on Training",
      highlights: "Comprehensive program combining theory and hands-on training, offering certified expertise in advanced aesthetic procedures and practice.",
      outcome: "MBBS, DDVL, MD, MS, MCH, MDS (Maxillofacial Surgeons)",
      color: "#16163f",
      featured: true
    },
    {
      title: "Fellowship in Aesthetic Cosmetology",
      duration: "6 months with 8 Days Hands-on Training",
      highlights: "Comprehensive training for physicians in advanced aesthetic cosmetology with hands-on experience in modern, non-invasive treatments.",
      outcome: "MBBS, BDS, BHMS, BAMS, BUMS, BSMS, BEMS, BYNS",
      color: "#16163f",
      featured: false
    },
    {
      title: "Fellowship in Clinical Cosmetology (FCC)",
      duration: "3 months with 8 Days Hands-on Training",
      highlights: "Advanced trichology training for medical practitioners with practical expertise in hair, scalp treatments, and emerging therapies.",
      outcome: "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BSMS",
      color: "#16163f",
      featured: true
    },
    {
      title: "Fellowship in Permanent Makeup in Cosmetology (FPM)",
      duration: "3 months with 5 Days Hands-on Training",
      highlights: "Advanced clinical cosmetology training for physicians, offering practical experience, expert guidance, and certification in aesthetic treatments.",
      outcome: "MBBS, DDVL, MD, MS, MCH, MDS (Maxillofacial Surgeons), BDS, BHMS, BAMS, BUMS, BSMS, BEMS, BYNS",
      color: "#16163f",
      featured: false
    },
    {
      title: "PG Diploma in Clinical Cosmetology",
      duration: "3 months with 5 Days Hands-on Training",
      highlights: "Specialized permanent makeup training for medical professionals, offering hands-on expertise, precision techniques, and certified industry advantage.",
      outcome: "MBBS, DDVL, MD, MS, MCH, MDS (Maxillofacial Surgeons), BDS, BHMS, BAMS, BUMS, BSMS, BEMS, BYNS",
      color: "#16163f",
      featured: false
    },
    {
      title: "Fellowship Trichology (FT)",
      duration: "6 months with 6 Days Hands-on Training",
      highlights: "PG Diploma in Clinical Cosmetology trains doctors in advanced skin treatments with practical, accredited expertise.",
      outcome: "MBBS, DDVL, MD, MS, MCH, MDS (Maxillofacial Surgeons)",
      color: "#16163f",
      featured: false
    },
    {
      title: "PG Diploma in Trichology",
      duration: "3 months with 5 Days Hands-on Training",
      highlights: "PG Diploma in Trichology trains doctors in hair and scalp treatments, advanced regenerative therapies, and expert solutions.",
      outcome: "BDS, BHMS, BAMS, BUMS, BSMS, BEMS, BYNS",
      color: "#16163f",
      featured: false
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 0.03,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1, 
      rotate: 0 
    },
    hover: { 
      scale: 1.1, 
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 2px 5px -1px rgba(0,0,0,0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 6px 15px -3px rgba(255,2,121,0.4)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const featuredBadgeVariants = {
    rest: { 
      scale: 1, 
      rotate: 0 
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <motion.div 
        className="py-8 px-3 sm:px-4 lg:px-6 xl:px-8 relative overflow-hidden" 
        style={{ backgroundColor: '#fafbfc',fontFamily: "'Outfit', sans-serif" }}
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Responsive Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute rounded-full blur-3xl"
            style={{ 
              top: '10%',
              right: '5%',
              width: 'clamp(300px, 40vw, 500px)',
              height: 'clamp(300px, 40vw, 500px)',
              backgroundColor: '#ff0279',
            }}
            variants={backgroundVariants}
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div 
            className="absolute rounded-full blur-3xl"
            style={{ 
              bottom: '15%',
              left: '8%',
              width: 'clamp(350px, 50vw, 600px)',
              height: 'clamp(350px, 50vw, 600px)',
              backgroundColor: '#16163f',
            }}
            variants={backgroundVariants}
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Responsive Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-10 lg:mb-12 relative"
            variants={headerVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-[#16163f] px-4 sm:px-6 py-1 sm:py-2 rounded-2xl bg-gradient-to-r from-transparent via-[#ff0279]/10 to-transparent">
                Courses Offered
              </span>
              
            </motion.h1>
              <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-[#16163f] px-4 sm:px-6 py-1 sm:py-2 rounded-2xl bg-gradient-to-r from-transparent via-[#ff0279]/10 to-transparent">
               Medical Courses
              </span>
              
            </motion.h1>
          </motion.div>

          {/* Responsive Courses Grid with Adaptive Height Cards */}
          <div className="flex flex-col items-center">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full"
              variants={containerVariants}
            >
              {courses.slice(0, -1).map((course, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden transition-all duration-500 cursor-pointer flex flex-col"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    border: '2px solid #ff0279',
                    boxShadow: '0 10px 30px -5px rgba(255, 2, 121, 0.4)'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onTouchStart={() => setHoveredCard(index)}
                  onTouchEnd={() => setHoveredCard(null)}
                  style={{
                    boxShadow: hoveredCard === index 
                      ? '0 10px 30px -5px rgba(255, 2, 121, 0.4)' 
                      : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                    border: hoveredCard === index ? '2px solid #ff0279' : '2px solid transparent',
                  }}
                >

                  {/* Responsive Corner Accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 transition-all duration-500 pointer-events-none"
                    style={{
                      backgroundColor: hoveredCard === index ? '#ff0279' : course.color,
                      opacity: hoveredCard === index ? 0.15 : 0.08,
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                    }}
                    whileHover={{ 
                      opacity: 0.2,
                      scale: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  ></motion.div>

                  {/* Responsive Card Header */}
                  <motion.div 
                    className="p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden transition-all duration-500"
                    style={{ 
                      backgroundColor: hoveredCard === index ? '#ff0279' : course.color,
                      minHeight: '120px'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animated Pattern Overlay */}
                    <motion.div 
                      className="absolute inset-0 transition-opacity duration-500" 
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.08) 10px, rgba(255,255,255,.08) 20px)',
                      }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0.5 
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    {/* Floating Orbs */}
                    <motion.div 
                      className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        top: '-15px',
                        right: '-15px',
                      }}
                      animate={{ 
                        scale: hoveredCard === index ? 1.5 : 1 
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    ></motion.div>
                    
                    <motion.h3 
                      className="text-lg sm:text-xl lg:text-2xl text-center font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight relative z-10"
                      animate={{ 
                        x: hoveredCard === index ? 5 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {course.title}
                    </motion.h3>
                    
                    <div className="flex items-center justify-center text-white text-sm relative z-10">
                      <motion.div 
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(10px)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        <span className="font-semibold text-xs sm:text-sm">{course.duration}</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    
                    {/* Content Wrapper */}
                    <div className="flex-grow">
                      {/* Highlights Section */}
                      <div className="mb-4 sm:mb-5 lg:mb-6">
                        <div className="flex items-start mb-2">
                          <motion.div 
                            className="rounded-full p-1.5 sm:p-2 lg:p-2.5 mr-2 sm:mr-3 flex-shrink-0"
                            style={{ 
                              backgroundColor: hoveredCard === index ? '#ff027915' : `${course.color}15`,
                            }}
                            variants={iconVariants}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                          >
                            <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: hoveredCard === index ? '#ff0279' : course.color }} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-xs mb-1 sm:mb-2 uppercase tracking-wider" style={{ color: '#16163f' }}>
                              Highlights
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify sm:text-left">
                              {course.highlights}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Animated Divider */}
                      <motion.div 
                        className="w-full h-px mb-4 sm:mb-5 lg:mb-6 overflow-hidden"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ 
                          backgroundColor: '#ff0279',
                          transformOrigin: 'left'
                        }}
                      ></motion.div>

                      {/* Career Outcome Section */}
                      <div className="mb-6 sm:mb-7 lg:mb-8">
                        <div className="flex items-start">
                          <motion.div 
                            className="rounded-full p-1.5 sm:p-2 lg:p-2.5 mr-2 sm:mr-3 flex-shrink-0"
                            style={{ 
                              backgroundColor: hoveredCard === index ? '#ff027915' : `${course.color}15`,
                            }}
                            variants={iconVariants}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                          >
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: hoveredCard === index ? '#ff0279' : course.color }} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-xs mb-1 sm:mb-2 uppercase tracking-wider" style={{ color: '#16163f' }}>
                              Eligibility Criteria
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify sm:text-left">
                              {course.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a href="#form">
                      <div className="pt-4 sm:mt-auto">
                        <motion.button
                          className="w-full cursor-pointer py-3 sm:py-3.5 lg:py-4 px-4 sm:px-5 lg:px-6 rounded-lg sm:rounded-xl font-bold text-white flex items-center justify-center relative overflow-hidden group"
                          style={{ 
                            backgroundColor: hoveredCard === index ? '#ff0279' : '#16163f',
                          }}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap={{ 
                            scale: 0.95,
                            backgroundColor: '#ff0279'
                          }}
                          onMouseEnter={() => setHoveredButton(index)}
                          onMouseLeave={() => setHoveredButton(null)}
                          onTouchStart={() => setHoveredButton(index)}
                          onTouchEnd={() => setHoveredButton(null)}
                        >
                          {/* Animated Background Shine */}
                          <motion.div 
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                            }}
                            animate={{ 
                              x: hoveredButton === index ? '100%' : '-100%' 
                            }}
                            transition={{ duration: 0.6 }}
                          ></motion.div>
                          
                          <span className="relative z-10 mr-1.5 sm:mr-2 text-xs sm:text-sm lg:text-base">Know More</span>
                          <motion.div
                            animate={{ 
                              x: hoveredButton === index ? 5 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                          </motion.div>
                        </motion.button>
                      </div>
                    </a>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div 
                    className="h-1 sm:h-1.5 w-full"
                    style={{ 
                      backgroundColor: '#ff0279',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  ></motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Last Card - Centered with Flex */}
            <motion.div
              className="mt-4 sm:mt-6 lg:mt-8 flex justify-center w-full"
              variants={cardVariants}
            >
              <motion.div
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden transition-all duration-500 cursor-pointer flex flex-col w-full max-w-md"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.98,
                  border: '2px solid #ff0279',
                  boxShadow: '0 10px 30px -5px rgba(255, 2, 121, 0.4)'
                }}
                onMouseEnter={() => setHoveredCard(courses.length - 1)}
                onMouseLeave={() => setHoveredCard(null)}
                onTouchStart={() => setHoveredCard(courses.length - 1)}
                onTouchEnd={() => setHoveredCard(null)}
                style={{
                  boxShadow: hoveredCard === courses.length - 1 
                    ? '0 10px 30px -5px rgba(255, 2, 121, 0.4)' 
                    : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                  border: hoveredCard === courses.length - 1 ? '2px solid #ff0279' : '2px solid transparent',
                }}
              >
                {/* Responsive Corner Accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 transition-all duration-500 pointer-events-none"
                  style={{
                    backgroundColor: hoveredCard === courses.length - 1 ? '#ff0279' : courses[courses.length - 1].color,
                    opacity: hoveredCard === courses.length - 1 ? 0.15 : 0.08,
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                  whileHover={{ 
                    opacity: 0.2,
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                ></motion.div>

                {/* Responsive Card Header */}
                <motion.div 
                  className="p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden transition-all duration-500 sm:text-center"
                  style={{ 
                    backgroundColor: hoveredCard === courses.length - 1 ? '#ff0279' : courses[courses.length - 1].color,
                    minHeight: '120px'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated Pattern Overlay */}
                  <motion.div 
                    className="absolute inset-0 transition-opacity duration-500" 
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.08) 10px, rgba(255,255,255,.08) 20px)',
                    }}
                    animate={{ 
                      opacity: hoveredCard === courses.length - 1 ? 1 : 0.5 
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  {/* Floating Orbs */}
                  <motion.div 
                    className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      top: '-15px',
                      right: '-15px',
                    }}
                    animate={{ 
                      scale: hoveredCard === courses.length - 1 ? 1.5 : 1 
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  ></motion.div>
                  
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight relative z-10 sm:text-center"
                    animate={{ 
                      x: hoveredCard === courses.length - 1 ? 5 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {courses[courses.length - 1].title}
                  </motion.h3>
                  
                  <div className="flex items-center text-white text-sm relative z-10 sm:justify-center">
                    <motion.div 
                      className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(10px)',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span className="font-semibold text-xs sm:text-sm">{courses[courses.length - 1].duration}</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  
                  {/* Content Wrapper */}
                  <div className="flex-grow">
                    {/* Highlights Section */}
                    <div className="mb-4 sm:mb-5 lg:mb-6 sm:text-center">
                      <div className="flex items-start mb-2 sm:flex-col sm:items-center sm:text-center">
                        <motion.div 
                          className="rounded-full p-1.5 sm:p-2 lg:p-2.5 mr-2 sm:mr-3 flex-shrink-0 sm:mr-0 sm:mb-2"
                          style={{ 
                            backgroundColor: hoveredCard === courses.length - 1 ? '#ff027915' : `${courses[courses.length - 1].color}15`,
                          }}
                          variants={iconVariants}
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                        >
                          <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: hoveredCard === courses.length - 1 ? '#ff0279' : courses[courses.length - 1].color }} />
                        </motion.div>
                        <div className="flex-1 min-w-0 sm:w-full">
                          <h4 className="font-bold text-xs mb-1 sm:mb-2 uppercase tracking-wider sm:text-center" style={{ color: '#16163f' }}>
                            Highlights
                          </h4>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed sm:text-center">
                            {courses[courses.length - 1].highlights}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Animated Divider */}
                    <motion.div 
                      className="w-full h-px mb-4 sm:mb-5 lg:mb-6 overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredCard === courses.length - 1 ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ 
                        backgroundColor: '#ff0279',
                        transformOrigin: 'left'
                      }}
                    ></motion.div>

                    {/* Career Outcome Section */}
                    <div className="mb-6 sm:mb-7 lg:mb-8 sm:text-center">
                      <div className="flex items-start sm:flex-col sm:items-center sm:text-center">
                        <motion.div 
                          className="rounded-full p-1.5 sm:p-2 lg:p-2.5 mr-2 sm:mr-3 flex-shrink-0 sm:mr-0 sm:mb-2"
                          style={{ 
                            backgroundColor: hoveredCard === courses.length - 1 ? '#ff027915' : `${courses[courses.length - 1].color}15`,
                          }}
                          variants={iconVariants}
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                        >
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: hoveredCard === courses.length - 1 ? '#ff0279' : courses[courses.length - 1].color }} />
                        </motion.div>
                        <div className="flex-1 min-w-0 sm:w-full">
                          <h4 className="font-bold text-xs mb-1 sm:mb-2 uppercase tracking-wider sm:text-center" style={{ color: '#16163f' }}>
                            Eligibility Criteria
                          </h4>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed sm:text-center">
                            {courses[courses.length - 1].outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="#form">
                    <div className="pt-4 sm:mt-auto">
                      <motion.button
                        className="w-full cursor-pointer py-3 sm:py-3.5 lg:py-4 px-4 sm:px-5 lg:px-6 rounded-lg sm:rounded-xl font-bold text-white flex items-center justify-center relative overflow-hidden group"
                        style={{ 
                          backgroundColor: hoveredCard === courses.length - 1 ? '#ff0279' : '#16163f',
                        }}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap={{ 
                          scale: 0.95,
                          backgroundColor: '#ff0279'
                        }}
                        onMouseEnter={() => setHoveredButton(courses.length - 1)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onTouchStart={() => setHoveredButton(courses.length - 1)}
                        onTouchEnd={() => setHoveredButton(null)}
                      >
                        {/* Animated Background Shine */}
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                          }}
                          animate={{ 
                            x: hoveredButton === courses.length - 1 ? '100%' : '-100%' 
                          }}
                          transition={{ duration: 0.6 }}
                        ></motion.div>
                        
                        <span className="relative z-10 mr-1.5 sm:mr-2 text-xs sm:text-sm lg:text-base">Know More</span>
                        <motion.div
                          animate={{ 
                            x: hoveredButton === courses.length - 1 ? 5 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </a>
                </div>

                {/* Bottom Accent Line */}
                <motion.div 
                  className="h-1 sm:h-1.5 w-full"
                  style={{ 
                    backgroundColor: '#ff0279',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === courses.length - 1 ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CoursesComponentone;