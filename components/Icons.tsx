import React from 'react';

export const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simplified 0G logo approximation for the navbar */}
    <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM25 42C15.6112 42 8 34.3888 8 25C8 15.6112 15.6112 8 25 8C34.3888 8 42 15.6112 42 25C42 34.3888 34.3888 42 25 42Z" fill="white"/>
    <path d="M15 35L35 15" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    
    <path d="M75 50C88.8071 50 100 38.8071 100 25C100 17 96 10 90 5" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    <path d="M75 50C61.1929 50 50 38.8071 50 25C50 11.1929 61.1929 0 75 0C82 0 88 3 92 8" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    <path d="M75 25H95" stroke="white" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const BellIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const BigLogo = () => (
    <div className="flex gap-4 items-center justify-center opacity-90">
      {/* 3D 0 Effect - CSS Gradient */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full" 
           style={{
             background: 'linear-gradient(135deg, #E0B0FF 0%, #D8BFD8 20%, #DA70D6 50%, #8A2BE2 80%, #4B0082 100%)',
             boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.4)'
           }}>
        {/* Inner hole to make it a ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-transparent border-[1px] border-white/20 backdrop-blur-sm"
             style={{
               boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.2)'
             }}>
             {/* Diagonal slash for Zero */}
             <div className="absolute top-1/2 left-1/2 w-[120%] h-6 md:h-8 bg-gradient-to-r from-purple-200 to-purple-400 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full shadow-lg" />
        </div>
      </div>
      
      {/* 3D G Effect */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full"
           style={{
            background: 'conic-gradient(from 90deg, #E0B0FF, #DA70D6, #8A2BE2, #4B0082, #8A2BE2, #DA70D6, #E0B0FF)',
             boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.4)',
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' // Full circle logic handled by masking below
           }}>
            {/* Masking manually with divs because CSS 3D text is hard */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#3d1c5d]" 
                 style={{
                   // This simulates the hole in the G, matching bg roughly or transparent
                    background: 'radial-gradient(circle at center, rgba(61,28,93,0.4), rgba(20,5,30,0.6))'
                 }}></div>
            {/* The Cutout for G */}
            <div className="absolute top-1/2 right-0 w-1/2 h-12 bg-transparent z-10"></div> 
            {/* Crossbar of G */}
            <div className="absolute top-1/2 right-[10%] w-[40%] h-6 md:h-8 bg-gradient-to-r from-purple-300 to-purple-500 rounded-l-full shadow-lg transform translate-y-[-50%]"></div>
      </div>
    </div>
);
