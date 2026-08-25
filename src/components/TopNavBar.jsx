import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coding', href: '#leetcode' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-[1280px] mx-auto mt-3">
      <nav className="bg-white border-[2.5px] border-black rounded-2xl p-2.5 md:p-3 shadow-[5px_5px_0px_#000000] flex items-center justify-between transition-all">
        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center justify-between w-full">
          <a href="#" className="font-extrabold text-lg tracking-tight text-black flex items-center gap-1.5">
            <span className="bg-[#B5F547] border-2 border-black px-2 py-0.5 rounded shadow-[2px_2px_0px_#000000] text-sm">DS</span>
            Debalin Sinha
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 bg-[#B5F547] border-2 border-black rounded-lg shadow-[2px_2px_0px_#000000] focus:outline-none text-black font-bold"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 pl-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-base lg:text-lg text-black hover:text-[#000000] relative group py-1 transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#B5F547] group-hover:w-full transition-all duration-200 border-b border-black"></span>
            </a>
          ))}
        </div>

        {/* Desktop Contact Me CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-block bg-[#B5F547] hover:bg-[#A5EA36] text-black font-extrabold text-base lg:text-lg px-6 py-2 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000000] transition-all"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white border-[2.5px] border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-lg text-black hover:bg-[#B5F547] p-2 rounded-xl border border-transparent hover:border-black transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center bg-[#B5F547] text-black font-extrabold text-lg py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000000]"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
