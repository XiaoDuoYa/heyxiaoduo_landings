import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0F0518] text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;