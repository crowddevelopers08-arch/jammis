"use client";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";

const VideoCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
  };

  const videos = [
    { 
      id: "video1", 
      youtubeUrl: "https://www.youtube.com/embed/E6ZQD7YL-64", 
      title: "Patient Success Story 1" 
    },
    { 
      id: "video5", 
      youtubeUrl: "https://www.youtube.com/embed/6E4-aqIC_48", // Replace with actual YouTube URL
      title: "Patient Success Story 5" 
    },
    { 
      id: "video2", 
      youtubeUrl: "https://www.youtube.com/embed/HHD4fDzZ0CA", 
      title: "Patient Success Story 2" 
    },
    { 
      id: "video3", 
      youtubeUrl: "https://www.youtube.com/embed/l9aVoOa1Mcc", 
      title: "Patient Success Story 3" 
    },
    { 
      id: "video4", 
      youtubeUrl: "https://www.youtube.com/embed/TKIjdn_uyYE", 
      title: "Patient Success Story 4" 
    },  
  ];

  // Function to extract YouTube ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return '';
    
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const playVideo = (videoId) => {
    if (activeVideo === videoId) {
      setActiveVideo(null);
    } else {
      setActiveVideo(videoId);
    }
  };

  return (
    <> <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <div className="w-full bg-white py-12 max-[470px]:py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading - Fixed background and text colors */}
        <motion.div 
          ref={sectionRef}
          className="mb-4 sm:mb-6 max-[470px]:mb-0 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <motion.span 
                className="text-[#530d3c] px-4 py-2 inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Medical facts you can trust
              </motion.span>
            </h1>
          </div>
        </motion.div>

        {/* Disclaimer text added below the main heading */}
        <div className="text-center mb-8">
          <p className="text-[#530d3c]/70 text-lg italic">
            Results may vary for each individual
          </p>
        </div>

        {/* First Row - Two Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {videos.slice(0, 2).map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/95 border border-[#530d3c]/20 hover:border-[#fcb716]/50 backdrop-blur-sm cursor-pointer"
              onClick={() => playVideo(video.id)}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}?rel=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
                
                {/* Playing indicator */}
                {activeVideo === video.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-4 h-4 bg-[#fcb716] rounded-full animate-pulse shadow-lg"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Three Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videos.slice(2).map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/95 border border-[#530d3c]/20 hover:border-[#fcb716]/50 backdrop-blur-sm cursor-pointer"
              onClick={() => playVideo(video.id)}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}?rel=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
                
                {/* Playing indicator */}
                {activeVideo === video.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-[#fcb716] rounded-full animate-pulse shadow-lg"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-[#530d3c]/60 text-sm">
            Click on any video to play • Only one video plays at a time
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoCarousel;