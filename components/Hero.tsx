import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Typewriter State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = ["喜欢Web3/AI的高中生", "你的创意搭子", "Spark imagination"];

  useEffect(() => {
    let ticker: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      // Update Text
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40); // Fast delete
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80); // Normal type
      }

      // Determine phase change
      if (!isDeleting && text === fullText) {
        // Finished typing
        setTypingSpeed(2000); // Pause for 2s
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Finished deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Slight pause before new word
      }
    };

    ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050511]">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop')`,
          filter: 'brightness(0.9) contrast(1.2) saturate(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-[#1a0b2e]/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050511]/40 via-transparent to-[#050511]" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/20 via-transparent to-blue-600/20 mix-blend-overlay" />
      </div>

      {/* Central Big Text Element (HXD) - Reduced Size */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transform -translate-y-16 md:-translate-y-12 select-none">
          <div className="relative animate-float">
             {/* Glow effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-fuchsia-500/30 blur-[100px] rounded-full mix-blend-screen" />
             
             {/* The "HXD" Logo - Reduced Size */}
             <h1 className="text-[140px] md:text-[220px] lg:text-[280px] font-black leading-none tracking-tighter"
                 style={{
                   backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #E9D5FF 30%, #C084FC 60%, #4F46E5 100%)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))',
                   fontFamily: '"Inter", sans-serif'
                 }}>
                HXD
             </h1>
             
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 mix-blend-overlay pointer-events-none" />
          </div>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 lg:p-20 max-w-[1920px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 w-full">
          
          {/* Bottom Left Text */}
          <div className="flex flex-col gap-2 mb-4 md:mb-0 max-w-4xl">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
              {/* Main Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
                HeyXiaoDuo<span className="text-purple-400">_</span>
              </h1>
              
              {/* High School Student Block */}
              <div className="flex items-center mt-2 lg:mt-0">
                <span className="text-5xl md:text-7xl lg:text-8xl font-thin text-purple-200/60 leading-none">(</span>
                <div className="flex flex-col justify-center px-3 pt-1">
                  <span className="text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-purple-300 leading-tight">High</span>
                  <span className="text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-white leading-tight my-0.5">School</span>
                  <span className="text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-indigo-300 leading-tight">Student</span>
                </div>
                <span className="text-5xl md:text-7xl lg:text-8xl font-thin text-purple-200/60 leading-none">)</span>
              </div>
            </div>
            
            {/* Typewriter Subtitle */}
            <h2 className="text-3xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 mt-4 tracking-wide drop-shadow-md min-h-[1.2em]">
              {text}
              <span className="animate-pulse text-purple-400">|</span>
            </h2>
          </div>

          {/* Bottom Right Buttons */}
          <div className="flex items-center gap-4 mb-2 w-full md:w-auto">
            <a 
              href="https://x.com/xiaoduoya_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black text-lg md:text-xl font-bold px-12 py-4 rounded-full hover:bg-[#E0B0FF] hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(224,176,255,0.6)] w-full md:w-auto text-center"
            >
              去X了解我
            </a>
          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050511] via-[#050511]/80 to-transparent z-10 pointer-events-none" />
      
    </div>
  );
};

export default Hero;