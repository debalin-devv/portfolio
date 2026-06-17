import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Machine Learning Engineer & SaaS Builder',
    date: 'FUTURE',
    description: 'Aiming to build scalable AI products and contribute to impactful open-source projects.',
    achievements: [
      'Build real AI products',
      'Open source contributions',
      'AI internship opportunities',
      'SaaS product development'
    ],
    skills: ['SaaS', 'Open Source', 'AI Products'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    imgCaption: 'Future Vision',
    bgColor: 'bg-[#FFFDF7]',
    tapeColor: 'bg-[#E8DFFF]/80',
    rotation: '-rotate-1',
    isCurrent: false
  },
  {
    id: 2,
    title: 'AI & ML Degree & Portfolio Development',
    date: '2025',
    description: 'Currently pursuing B.Tech in CSE (AI & ML) while building practical portfolio projects.',
    achievements: [
      'B.Tech CSE (AI & ML)',
      'Building portfolio projects',
      'Learning Machine Learning',
      'Exploring Prompt Engineering',
      'Strengthening DSA and development skills'
    ],
    skills: ['Machine Learning', 'DSA', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    imgCaption: 'Current Focus - 2025',
    bgColor: 'bg-[#B8FF3B]',
    tapeColor: 'bg-[#111111]/80',
    rotation: 'rotate-1',
    isCurrent: true
  },
  {
    id: 3,
    title: 'Web Development & Programming',
    date: '2024',
    description: 'Built personal projects and strengthened development skills through practical application.',
    achievements: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS'
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    imgCaption: 'Web Dev Phase - 2024',
    bgColor: 'bg-[#E8DFFF]',
    tapeColor: 'bg-[#B8FF3B]/80',
    rotation: '-rotate-1',
    isCurrent: false
  },
  {
    id: 4,
    title: 'Started Programming Journey',
    date: '2023',
    description: 'Began exploring the world of programming, setting the foundation for future development.',
    achievements: [
      'Learned programming fundamentals',
      'Started Python and web technologies',
      'Developed problem-solving skills'
    ],
    skills: ['Python', 'Problem Solving', 'Fundamentals'],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800',
    imgCaption: 'The Beginning - 2023',
    bgColor: 'bg-[#FFFDF7]',
    tapeColor: 'bg-[#E8DFFF]/80',
    rotation: 'rotate-1',
    isCurrent: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="font-headline-md text-headline-md text-[#111111] highlighter inline-block relative">
          My Journey
          <svg className="absolute -right-20 top-1/2 w-16 h-16 text-[#111111] hidden md:block rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-[#222222]/20 hidden lg:block -translate-x-1/2 z-0"></div>

        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={exp.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-24 h-24 text-[#222222]/30 ${isEven ? 'left-[calc(50%-3rem)]' : 'right-[calc(50%-3rem)] scale-x-[-1]'}`}>
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" fill="none"/>
                    <polygon points="95,50 85,40 85,60" fill="currentColor"/>
                 </svg>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: isEven ? -2 : 2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                className="w-full lg:w-5/12 flex justify-center cursor-crosshair relative"
              >
                <div className="polaroid-frame p-4 bg-[#FFFDF7] border-2 border-[#222222] shadow-[8px_8px_0px_rgba(34,34,34,1)] hover:shadow-none transition-shadow relative">
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 ${exp.tapeColor} backdrop-blur-md rotate-2 border border-[#222222]`}></div>
                  
                  <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden border-2 border-[#222222]">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover filter contrast-125 saturate-50" />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="font-label-caps text-xs uppercase font-bold text-[#111111] underline decoration-wavy decoration-[#B8FF3B]">{exp.imgCaption}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-7/12"
              >
                <div className={`relative p-8 md:p-10 border-2 border-[#222222] bg-[#FFFDF7] ${exp.isCurrent ? 'shadow-[12px_12px_0px_rgba(184,255,59,1)]' : 'shadow-[8px_8px_0px_rgba(34,34,34,1)]'} hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(34,34,34,1)] transition-all ${exp.rotation} hover:rotate-0 scrapbook-border`}>
                  
                  {exp.isCurrent && (
                    <div className="absolute -top-4 -right-4 bg-[#111111] text-[#B8FF3B] font-bold px-4 py-2 text-xs uppercase flex items-center gap-2 border-2 border-[#222222] shadow-[4px_4px_0px_rgba(184,255,59,1)] z-20 rotate-3 animate-pulse">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B8FF3B] shadow-[0_0_8px_rgba(184,255,59,0.8)]"></div>
                      CURRENT FOCUS
                    </div>
                  )}

                  <div className={`absolute top-0 bottom-0 w-8 flex flex-col justify-evenly border-r-2 border-[#222222]/20 bg-[#F5F4E8] ${isEven ? 'left-0' : 'right-0 border-r-0 border-l-2'}`}>
                    {[1,2,3,4,5].map(i => (
                       <div key={i} className="w-4 h-4 rounded-full bg-[#111111]/5 border border-[#222222]/30 mx-auto shadow-inner"></div>
                    ))}
                  </div>

                  <div className={`${isEven ? 'pl-8 md:pl-10' : 'pr-8 pl-0 md:pr-10 md:pl-0'}`}>
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-4 border-b-2 border-dashed border-[#222222]/30 pb-4 gap-4">
                      <div>
                        <h3 className="font-display-lg-mobile text-3xl font-bold text-[#111111] mb-2">{exp.title}</h3>
                        <span className="font-label-caps text-sm uppercase text-[#111111] font-bold px-3 py-1 bg-[#F5F4E8] border-2 border-[#222222] rotate-1 inline-block">{exp.date}</span>
                      </div>
                    </div>

                    <p className="font-body-md text-[#111111]/80 mb-6 text-lg leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    <div className="mb-8">
                      <span className="font-label-caps text-xs uppercase text-[#111111] font-bold mb-3 block tracking-widest">Key Focus:</span>
                      <ul className="space-y-4">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-3 bg-white p-3 border border-[#222222]/20 rounded-sm">
                            <span className="material-symbols-outlined text-[#B8FF3B] mt-0.5 text-lg">arrow_right_alt</span>
                            <span className="font-body-md font-medium text-[#111111]">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`pt-6 border-t-2 border-[#222222]/10 flex flex-wrap gap-2 ${exp.bgColor} p-4 border-2 border-[#222222] rounded-sm -rotate-1`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className="font-label-caps text-[10px] uppercase font-bold text-[#111111] bg-white px-2 py-1 border-2 border-[#222222] shadow-[2px_2px_0px_rgba(34,34,34,1)] hover:scale-110 transition-transform cursor-crosshair">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
