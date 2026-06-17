import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    title: 'B.Tech Computer Science with AI & ML',
    date: '2025 – 2029',
    school: 'Lovely Professional University',
    description: "Bachelor's in Computer Science with AI & ML specialization.",
    bgColor: 'bg-[#E8DFFF]',
    rotation: '-rotate-1'
  },
  {
    id: 2,
    title: 'Higher Secondary Education (Class XII)',
    date: '2024 – 2025',
    school: 'Manglamaro Mangala Academy (H.S.)',
    description: 'Score: 70%',
    bgColor: 'bg-[#FFFDF7]',
    rotation: 'rotate-1'
  },
  {
    id: 3,
    title: 'Secondary Education (Class X)',
    date: '2022 – 2023',
    school: 'Manglamaro Mangala Academy (H.S.)',
    description: 'Score: 70%',
    bgColor: 'bg-[#B8FF3B]',
    rotation: '-rotate-1'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 overflow-hidden relative">
      <div className="mb-10 md:mb-14 text-center">
        <h2 className="font-headline-md text-headline-md text-[#111111] highlighter inline-block relative">
          Education
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-[#222222]/20 z-0"></div>

        <div className="space-y-10 md:space-y-14">
          {educationData.map((edu, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={edu.id} className={`flex flex-col md:flex-row gap-8 items-center relative z-10 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-[14px] w-8 h-8 rounded-full border-4 border-[#222222] bg-[#FFFDF7] z-20 flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-[#111111]"></div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                >
                  <div className={`relative p-6 md:p-8 border-2 border-[#222222] ${edu.bgColor} shadow-[6px_6px_0px_rgba(34,34,34,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(34,34,34,1)] transition-all ${edu.rotation} hover:rotate-0 scrapbook-border`}>
                    
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 backdrop-blur-sm border border-[#222222]/20 rotate-2"></div>
                    
                    <span className="font-label-caps text-xs uppercase text-[#111111] font-bold px-2 py-1 bg-white border border-[#222222] inline-block mb-3">{edu.date}</span>
                    <h3 className="font-display-lg-mobile text-2xl font-bold text-[#111111] mb-1">{edu.title}</h3>
                    <p className="font-label-caps text-sm uppercase text-[#111111]/70 font-bold mb-4">{edu.school}</p>
                    <p className="font-body-md text-[#111111] font-medium">{edu.description}</p>
                  </div>
                </motion.div>

                {/* Empty spacer for flex layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
