
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white" 
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 reveal-text tracking-tight">
          CURIOSO
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in animate-delay-200">
          Unlock your curiosity. Discover something amazing today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animate-delay-300">
          <Button className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-colors shadow-lg">
            Explore Now
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white/10 transition-colors">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
