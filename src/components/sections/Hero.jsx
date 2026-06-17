import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 pb-0 flex flex-col md:block">
      {/* Background Doodles (Absolute) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Doodle */}
        <svg className="absolute top-32 right-1/2 translate-x-32 w-16 h-16 text-[#111111]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10,90 Q40,10 90,50" />
          <path d="M70,40 L90,50 L80,70" />
          <path d="M20,20 L30,30" />
          <path d="M40,10 L45,25" />
        </svg>
        {/* Top Right Circle Doodle */}
        <svg className="absolute top-24 right-12 w-24 h-24 text-[#111111] opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
          <circle cx="50" cy="50" r="40" />
          <path d="M10,90 L90,10" strokeDasharray="none" />
        </svg>
        {/* Mid Star */}
        <svg className="absolute top-1/2 left-1/3 w-10 h-10 text-[#111111]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" />
        </svg>
        {/* Right Arrow Curve */}
        <svg className="absolute top-1/2 right-[25%] w-20 h-32 text-[#111111]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10,10 C80,20 90,80 50,90" />
          <path d="M40,75 L50,90 L70,80" />
        </svg>
        {/* Bottom Right Dashed Arrow */}
        <svg className="absolute bottom-32 right-24 w-20 h-20 text-[#111111]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4">
          <path d="M10,90 Q50,90 90,10" />
          <path d="M70,10 L90,10 L90,30" strokeDasharray="none" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 w-full">
        
        {/* LEFT COLUMN: Content (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-8 relative z-20 md:pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#F3E8FF] border-2 border-[#111111] px-4 py-1.5 rounded-full shadow-[2px_2px_0px_rgba(17,17,17,1)]"
          >
            <span className="text-sm">👋</span>
            <span className="font-label-caps text-xs font-bold text-[#111111]">Hello, I'm Debalin Sinha</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[5.5rem] leading-[1.1] text-[#111111] font-extrabold tracking-tight"
          >
            Building with <br/>
            <span className="inline-block relative bg-[#B8FF3B] border-2 border-[#111111] px-3 shadow-[4px_4px_0px_rgba(17,17,17,1)] mt-2">
              <span className="inline-block bg-black/10 border border-[#111111] px-1 mr-1 shadow-[1px_1px_0px_rgba(17,17,17,1)]">C</span>ode,
            </span> 
            <span className="inline-block bg-[#F3E8FF] border-2 border-[#111111] px-3 shadow-[4px_4px_0px_rgba(17,17,17,1)] ml-2 -rotate-2">AI</span> &amp; <br/>
            <span className="inline-block bg-[#B8FF3B] border-2 border-[#111111] px-3 shadow-[4px_4px_0px_rgba(17,17,17,1)] rotate-1 mt-3">Creativity</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-lg text-[#111111] max-w-md leading-relaxed font-medium relative"
          >
            Computer Science student specializing in AI &amp; ML.<br />
            Passionate about building practical software, <span className="relative inline-block z-10">AI-powered tools<svg className="absolute -bottom-2 left-0 w-full h-3 text-[#A855F7] z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span>, and creative digital experiences.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8FF3B] border-2 border-[#111111] text-[#111111] font-bold font-label-caps uppercase text-sm shadow-[4px_4px_0px_rgba(17,17,17,1)] transition-all hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_rgba(17,17,17,1)] rounded-sm" href="#projects">
              View My Work <span className="text-lg">↗</span>
            </a>
            <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#111111] text-[#111111] font-bold font-label-caps uppercase text-sm transition-all hover:bg-gray-50 rounded-sm" href="#">
              Download Resume <span className="text-lg">↓</span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 flex items-center gap-2 text-[#111111]"
          >
            <span className="material-symbols-outlined text-[20px]">location_on</span>
            <span className="font-body-md text-sm font-bold">Kolkata, West Bengal, India</span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Visuals & Scrapbook (Cols 6-12) */}
        <div className="lg:col-span-7 relative w-full h-[550px] md:h-[600px] flex justify-center lg:justify-center">

          {/* Doodles */}
          <svg className="absolute top-1/4 right-1/4 w-8 h-8 text-[#f7df1e] z-10 rotate-12 hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" />
          </svg>

          {/* Focal Area: Portrait (Positioned slightly right and down) */}
          <div className="absolute top-12 lg:top-24 left-1/2 lg:left-[55%] xl:left-[60%] -translate-x-1/2 flex flex-col items-center z-20">
            
            {/* Floating Stickers */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-16 md:-left-24 bg-[#B8FF3B] border-2 border-[#111111] px-3 py-1.5 shadow-[3px_3px_0px_rgba(17,17,17,1)] font-label-caps text-xs font-bold uppercase rounded-sm -rotate-6 z-30 flex items-center gap-2 hover:-translate-y-1 hover:rotate-0 transition-transform cursor-pointer"
            >
              <span>🤖</span> AI &amp; ML Student
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/3 -left-20 md:-left-32 bg-[#F3E8FF] border-2 border-[#111111] px-3 py-1.5 shadow-[3px_3px_0px_rgba(17,17,17,1)] font-label-caps text-xs font-bold uppercase rounded-sm rotate-2 z-30 flex items-center gap-1 hover:-translate-y-1 hover:-rotate-2 transition-transform cursor-pointer"
            >
              <span className="text-orange-500">⚡</span> Python Developer
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
              className="absolute bottom-16 -left-12 md:-left-24 bg-white border-2 border-[#111111] px-3 py-1.5 shadow-[3px_3px_0px_rgba(17,17,17,1)] font-label-caps text-xs font-bold uppercase rounded-sm -rotate-3 z-30 flex items-center gap-1 hover:-translate-y-1 hover:rotate-1 transition-transform cursor-pointer"
            >
              <span>💻</span> C / C++ Programmer
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-24 -right-8 md:-right-16 bg-[#FFFDF7] border-2 border-[#111111] px-3 py-1.5 shadow-[3px_3px_0px_rgba(17,17,17,1)] font-label-caps text-xs font-bold uppercase rounded-sm rotate-3 z-30 flex items-center gap-1 hover:-translate-y-1 hover:-rotate-1 transition-transform cursor-pointer"
            >
              <span>💡</span> Prompt Engineer
            </motion.div>

            {/* Premium Polaroid Frame (Centerpiece) */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              className="relative p-4 md:p-5 bg-[#fafafa] border border-[#e0e0e0] shadow-[0_15px_35px_rgba(0,0,0,0.15)] z-20 w-72 md:w-[350px] hover:-translate-y-2 hover:-rotate-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out cursor-pointer group"
            >
              {/* Pop-out Star (Behind frame) */}
              <svg className="absolute top-4 right-4 w-12 h-12 text-[#B8FF3B] opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:rotate-[30deg] transition-all duration-500 ease-out z-[-1]" viewBox="0 0 100 100" fill="currentColor" stroke="#111111" strokeWidth="4">
                <path d="M50 10L62 38L92 40L68 58L75 88L50 72L25 88L32 58L8 40L38 38Z" strokeLinejoin="round" />
              </svg>

              {/* Pop-out Heart (Behind frame) */}
              <svg className="absolute top-4 left-4 w-10 h-10 text-[#A855F7] opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 group-hover:-translate-x-8 group-hover:-rotate-[20deg] transition-all duration-500 delay-75 ease-out z-[-1]" viewBox="0 0 100 100" fill="currentColor" stroke="#111111" strokeWidth="4">
                <path d="M50 85C50 85 15 55 15 35C15 20 30 10 45 20C50 24 50 24 50 24C50 24 50 24 55 20C70 10 85 20 85 35C85 55 50 85 50 85Z" strokeLinejoin="round" />
              </svg>

              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#f5e6d3]/90 backdrop-blur-sm rotate-2 shadow-sm z-30 opacity-90 border border-black/5 group-hover:-translate-y-1 group-hover:-rotate-3 transition-all duration-500"></div>
              
              <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                 <img src="/profile.jpeg" alt="Debalin Sinha" className="w-full h-full object-cover filter contrast-105 saturate-105 group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="mt-5 flex flex-col items-center justify-center pb-2">
                <span className="font-label-caps text-3xl text-[#111111] handwritten-font rotate-1 group-hover:text-[#A855F7] group-hover:-rotate-1 transition-all duration-500">Debalin Sinha</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
