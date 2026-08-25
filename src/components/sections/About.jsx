import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const interests = [
    'AI / Machine Learning',
    'Data Science & Analytics',
    'Software Development',
    'Algorithmic Problem Solving',
  ];

  const strengths = [
    'Fast Learner & Adaptable',
    'Analytical Problem Solver',
    'Team Collaboration & Tech Events',
    'Creative System Thinking',
  ];

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              About Me
            </h2>
          </div>
          <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block -rotate-3">
            ✨ Editorial & Background
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Editorial Card (Cols 1-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border-[2.5px] border-black p-6 sm:p-8 md:p-10 rounded-2xl shadow-[6px_6px_0px_#000000] relative space-y-6"
          >
            {/* Corner Tape Decorative Accent */}
            <div className="absolute -top-3 left-8 bg-[#B5F547] border-2 border-black px-4 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000000] -rotate-2">
              Background & Vision
            </div>

            <p className="text-lg md:text-xl text-black font-medium leading-relaxed pt-2">
              I am a Computer Science student specializing in <strong className="bg-[#B5F547] px-2 py-0.5 border border-black rounded shadow-[2px_2px_0px_#000]">Artificial Intelligence & Machine Learning</strong> at Lovely Professional University.
            </p>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
              My core focus is on bridging data science concepts with production-ready code. From building ML model pipelines and Python utilities to participating in national hackathons and tech symposiums, I thrive on tackling complex engineering challenges.
            </p>

            {/* Education Highlight Box */}
            <div className="bg-[#FAF8F5] border-[2px] border-black p-5 rounded-xl shadow-[4px_4px_0px_#000000] flex items-start gap-4 rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-[#B5F547] p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
                <GraduationCap size={28} className="stroke-[2.5] text-black" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-lg sm:text-xl text-black">
                  B.Tech — Computer Science Engineering
                </h3>
                <p className="font-bold text-sm text-black/80">
                  Specialization: AI & Machine Learning
                </p>
                <p className="text-sm font-semibold text-black/70">
                  Lovely Professional University
                </p>
              </div>
            </div>

            {/* Quote / Handwritten Note */}
            <div className="pt-2 border-t-2 border-dashed border-black/30 flex items-center justify-between flex-wrap gap-4">
              <span className="font-handwriting text-2xl text-black font-bold -rotate-1">
                "Combining logic, data, and curiosity to solve real problems."
              </span>
              <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1.5 rounded shadow-[2px_2px_0px_#B5F547]">
                Kolkata, WB, India 📍
              </span>
            </div>
          </motion.div>

          {/* Side Cards (Cols 8-12): Interests & Strengths */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interests Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-[2.5px] border-black p-6 rounded-2xl shadow-[5px_5px_0px_#000000] -rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-black">
                <Heart className="stroke-[2.5] text-black fill-[#B5F547]" size={22} />
                <h3 className="font-extrabold text-xl text-black">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item, idx) => (
                  <span 
                    key={idx}
                    className="bg-[#FAF8F5] border-2 border-black px-3.5 py-1.5 rounded-xl font-bold text-sm text-black shadow-[2px_2px_0px_#000000]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Strengths Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-[2.5px] border-black p-6 rounded-2xl shadow-[5px_5px_0px_#000000] rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-black">
                <Zap className="stroke-[2.5] text-black fill-[#B5F547]" size={22} />
                <h3 className="font-extrabold text-xl text-black">Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((item, idx) => (
                  <span 
                    key={idx}
                    className="bg-[#B5F547] border-2 border-black px-3.5 py-1.5 rounded-xl font-bold text-sm text-black shadow-[2px_2px_0px_#000000]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
