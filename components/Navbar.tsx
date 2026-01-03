import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showTg, setShowTg] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auto-hide popup after 3 seconds when it appears
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showTg) {
      timer = setTimeout(() => {
        setShowTg(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showTg]);

  const handleCopy = () => {
    navigator.clipboard.writeText('HeyXiaoDuo_');
    setCopied(true);
    // Hide popup shortly after copying to give user feedback
    setTimeout(() => {
      setCopied(false);
      setShowTg(false);
    }, 800);
  };

  return (
    // Wrapper container to handle the popup positioning relative to the fixed nav center
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center w-full max-w-screen-lg pointer-events-none">
      
      {/* Main Navbar */}
      <nav className="pointer-events-auto bg-black/40 backdrop-blur-2xl border border-white/20 rounded-full pl-5 pr-2 py-2 flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] gap-5 transition-all duration-300">
        
        {/* Logo Section - Text HXD (Extra Thin & Smaller) */}
        <div className="flex items-center justify-center select-none">
          <span className="text-xl font-thin text-white tracking-widest">HXD</span>
        </div>

        {/* Middle Links Section */}
        <div className="flex items-center gap-4">
           <a 
            href="https://space.bilibili.com/515879401" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-gray-200 hover:text-white hover:scale-105 transition-all cursor-pointer"
          >
            个人B站
          </a>
          
          <button 
            onClick={() => setShowTg(!showTg)}
            className={`text-[14px] font-medium transition-all hover:scale-105 cursor-pointer outline-none ${showTg ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'}`}
          >
            我的Telegram
          </button>
        </div>

        {/* Actions Section */}
        <div className="flex items-center">
          <a 
            href="https://x.com/xiaoduoya_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black text-[13px] font-bold px-5 py-2 rounded-full hover:bg-[#E0B0FF] hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            去X了解我
          </a>
        </div>

      </nav>

      {/* Telegram Popup - Capsule below navbar */}
      <div className={`pointer-events-auto transition-all duration-300 ease-out overflow-hidden ${showTg ? 'max-h-20 opacity-100 mt-2 translate-y-0' : 'max-h-0 opacity-0 mt-0 -translate-y-2'}`}>
          <div className="bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
              <span className="text-gray-300 text-xs font-medium">ID: <span className="text-purple-300 font-mono tracking-wide">HeyXiaoDuo_</span></span>
              
              <div className="h-3 w-[1px] bg-white/20"></div>

              <button
                  onClick={handleCopy}
                  className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full hover:bg-gray-200 active:scale-95 transition-all"
              >
                  {copied ? '已复制!' : '复制'}
              </button>
          </div>
      </div>

    </div>
  );
};

export default Navbar;