import React, { useState, useEffect } from 'react';

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b-2 border-[#222222]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-display-lg-mobile text-2xl font-extrabold text-[#111111] flex items-center">
          Debalin<span className="text-[#B8FF3B] text-4xl">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">About</a>
          <a href="#arsenal" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">Skills</a>
          <a href="#experience" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">Experience</a>
          <a href="#projects" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">Projects</a>
          <a href="#creative" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">Creative Work</a>
          <a href="#contact" className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors hover-ink-spread">Contact</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#B8FF3B] text-[#111111] font-bold font-label-caps uppercase text-sm border-2 border-[#111111] shadow-[2px_2px_0px_rgba(17,17,17,1)] hover:shadow-[4px_4px_0px_rgba(17,17,17,1)] hover:-translate-y-[1px] transition-all rounded-sm">
            <span className="material-symbols-outlined text-[18px]">person</span>
            Hire Me
          </a>
          
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#111111] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#111111] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#111111] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-[#222222] shadow-lg py-4 px-6 flex flex-col gap-4">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">About</a>
          <a href="#arsenal" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">Skills</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">Projects</a>
          <a href="#creative" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">Creative Work</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-label-caps text-sm font-bold uppercase text-[#111111] hover:text-[#B8FF3B] transition-colors">Contact</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center px-6 py-3 bg-[#111111] text-[#F5F4E8] font-bold font-label-caps uppercase text-sm border-2 border-[#111111] w-full text-center mt-2 shadow-[4px_4px_0px_rgba(184,255,59,1)] hover:shadow-none">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
