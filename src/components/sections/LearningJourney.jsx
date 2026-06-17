import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  {
    phase: '2023',
    title: 'Started Programming Journey',
    items: [
      'Learned programming fundamentals',
      'Started Python and web technologies',
      'Developed problem-solving skills'
    ],
    status: 'completed',
    color: 'bg-[#B8FF3B]', // Lime green from the image
  },
  {
    phase: '2024',
    title: 'Web Development & Programming',
    items: [
      'HTML, CSS, JavaScript',
      'React',
      'Tailwind CSS',
      'Built personal projects and strengthened development skills'
    ],
    status: 'completed',
    color: 'bg-[#f7df1e]', // Yellow from the image
  },
  {
    phase: '2025',
    title: 'AI & ML Degree & Portfolio Dev',
    items: [
      'B.Tech CSE (AI & ML)',
      'Building portfolio projects',
      'Learning Machine Learning',
      'Exploring Prompt Engineering',
      'Strengthening DSA and development skills'
    ],
    status: 'in-progress',
    color: 'bg-[#FFFDF7]', // Light beige from the image
  },
  {
    phase: 'Future',
    title: 'Machine Learning Engineer & SaaS Builder',
    items: [
      'Build real AI products',
      'Open source contributions',
      'AI internship opportunities',
      'SaaS product development'
    ],
    status: 'upcoming',
    color: 'bg-[#E8DFFF]', // Light purple from the image (or match the gray in screenshot)
  }
];

const LearningJourney = () => {
  return (
    <section id="journey" className="py-24">
      <div className="mb-16 text-center md:text-left">
        <h2 className="font-headline-md text-headline-md text-on-surface wavy-underline inline-block">
          Learning Journey
        </h2>
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto relative border-l-4 border-dashed border-outline-variant pl-8 md:pl-12">
        {/* Animated Line Progress */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-[-4px] w-[4px] bg-primary origin-top"
        ></motion.div>

        {roadmapData.map((data, idx) => {
          const isCurrent = data.status === 'in-progress';

          return (
            <motion.div
              key={data.phase}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[42px] md:-left-[58px] top-8 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-on-surface z-10 ${data.status === 'completed' ? 'bg-primary' : isCurrent ? 'bg-[#B8FF3B] shadow-[0_0_12px_rgba(184,255,59,0.8)] animate-pulse' : 'bg-surface-container-highest'}`}></div>
              
              <div className={`relative z-10 p-6 md:p-8 border-2 border-on-surface rounded-sm ${data.color} ${isCurrent ? 'shadow-[8px_8px_0px_rgba(184,255,59,1)] ring-2 ring-[#B8FF3B]' : 'shadow-[6px_6px_0px_rgba(0,0,0,1)]'} hover:-translate-y-1 ${isCurrent ? 'hover:shadow-[12px_12px_0px_rgba(184,255,59,1)]' : 'hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]'} transition-all ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
                
                {isCurrent && (
                  <div className="absolute -top-4 -right-4 bg-[#111111] text-[#B8FF3B] font-bold px-4 py-2 text-xs uppercase flex items-center gap-2 border-2 border-on-surface shadow-[4px_4px_0px_rgba(184,255,59,1)] z-20 rotate-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B8FF3B] shadow-[0_0_8px_rgba(184,255,59,0.8)] animate-pulse"></div>
                    CURRENT
                  </div>
                )}

                <span className="font-label-caps text-sm font-bold uppercase block mb-2">{data.phase}</span>
                <h3 className="font-display-lg-mobile text-2xl font-bold mb-4">{data.title}</h3>
                
                <ul className="space-y-2 mt-4 border-t-2 border-dashed border-on-surface/20 pt-4">
                  {data.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-on-surface font-body-md font-medium">
                      <span className="material-symbols-outlined text-on-surface mt-0.5 text-base">subdirectory_arrow_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LearningJourney;
