import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 pb-12 md:py-12 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center max-w-[1280px] mx-auto">

        {/* LEFT COLUMN: Content (~55% width on desktop -> 7 cols) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-7 z-10">

          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Hello Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border-[2.5px] border-black px-4 py-2 rounded-xl shadow-[3px_3px_0px_#000000]"
            >
              <span className="text-base">👋</span>
              <span className="font-extrabold text-sm md:text-base text-black">
                Hello, I'm Debalin Sinha
              </span>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/90 border-[2.5px] border-black px-4 py-2 rounded-xl shadow-[3px_3px_0px_#000000]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black"></span>
              </span>
              <span className="font-extrabold text-sm md:text-base text-black">
                Currently open to ML Internships
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-black text-black tracking-tight">
              Building with
            </h1>

            {/* Lime Highlight Box */}
            <div className="inline-block bg-[#B5F547] border-[3px] border-black rounded-2xl p-4 sm:p-6 md:p-7 shadow-[6px_6px_0px_#000000] max-w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-black text-black tracking-tight whitespace-pre-line">
                Code, Data &{'\n'}AI
              </h2>
            </div>
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-black font-medium max-w-2xl leading-relaxed"
          >
            Combining computer science, AI/ML expertise, and data analysis to create innovative, practical solutions. Always learning, building, and pushing boundaries in artificial intelligence and software development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Get in Touch Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#B5F547] hover:bg-[#A5EA36] text-black font-extrabold text-lg px-7 py-3.5 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] brutal-btn"
            >
              Get in Touch <Mail size={20} className="stroke-[2.5]" />
            </a>

            {/* View Experience Button */}
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-black font-extrabold text-lg px-7 py-3.5 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] brutal-btn"
            >
              View Experience
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Polaroid Photo Collage (~45% width on desktop -> 5 cols) */}
        <div className="lg:col-span-5 relative min-h-[460px] sm:min-h-[520px] md:min-h-[560px] w-full flex items-center justify-center pt-6 lg:pt-0">

          {/* Container holding the physical overlapping Polaroids */}
          <div className="relative w-full max-w-[480px] h-[520px] mx-auto">

            {/* 1. Top-Left Polaroid: Hackathon Winner '25 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ delay: 0.2 }}
              className="absolute top-2 left-0 sm:left-2 w-[185px] sm:w-[210px] bg-white border-[2.5px] border-black p-2.5 pb-7 rounded-md shadow-[5px_5px_0px_#000000] z-20 hover:z-40 transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden mb-2">
                <img
                  src="/polaroids/hackethon_prize.png"
                  alt="Hackathon Winner 2023"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/profile.jpeg'; }}
                />
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-center text-black font-bold -rotate-1">
                Hackathon Winner '25
              </p>
            </motion.div>

            {/* 2. Top-Right Floating Label: Python & ML Developer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 0.3 }}
              className="absolute top-0 right-2 sm:right-4 bg-white border-[2.5px] border-black px-3.5 py-2 rounded-xl shadow-[4px_4px_0px_#000000] z-30 flex items-center gap-2.5 hover:rotate-0 transition-transform cursor-pointer"
            >
              <div className="bg-[#B5F547] p-1.5 rounded-lg border border-black">
                <Code size={18} className="stroke-[2.5]" />
              </div>
              <div className="text-xs sm:text-sm font-black leading-tight text-black">
                Python & ML<br />Developer
              </div>
            </motion.div>

            {/* 3. Middle-Right Polaroid: ML Model Training + View Project Sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ delay: 0.4 }}
              className="absolute top-28 right-0 sm:right-2 w-[190px] sm:w-[215px] bg-white border-[2.5px] border-black p-2.5 pb-8 rounded-md shadow-[5px_5px_0px_#000000] z-25 hover:z-40 transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-gray-200/70 border border-black/20 overflow-hidden mb-2">
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-center text-black font-bold">
                ML Model Training
              </p>

              {/* Overlapping Lime "View Project" Pill Sticker */}
              <a
                href="#projects"
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-3.5 py-1 rounded-full text-xs font-black text-black shadow-[2px_2px_0px_#000000] whitespace-nowrap transition-transform hover:scale-105"
              >
                View Project
              </a>
            </motion.div>

            {/* 4. Bottom-Left Polaroid: Tech Con '24 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-0 sm:left-4 w-[175px] sm:w-[200px] bg-white border-[2.5px] border-black p-2.5 pb-7 rounded-md shadow-[5px_5px_0px_#000000] z-15 hover:z-40 transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden mb-2">
                <img
                  src="/polaroids/tech_xpo.jpg"
                  alt="Tech Con 24"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/profile.jpeg'; }}
                />
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-center text-black font-bold rotate-1">
                Tech Xpo '25
              </p>
            </motion.div>

            {/* 5. Bottom-Right Polaroid: Team Collaboration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-2 right-4 sm:right-10 w-[185px] sm:w-[210px] bg-white border-[2.5px] border-black p-2.5 pb-7 rounded-md shadow-[5px_5px_0px_#000000] z-20 hover:z-40 transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 border border-black/20 overflow-hidden mb-2">
                <img
                  src="/polaroids/hackethon_pic 1.jpg"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/profile.jpeg'; }}
                />
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-center text-black font-bold -rotate-1">
                Team Collaboration
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
