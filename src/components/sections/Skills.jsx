import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'LANGUAGES',
      icon: Code2,
      isLearning: false,
      skills: [
        { name: 'C++', highlighted: true, rotation: 'rotate-1' },
        { name: 'Python', highlighted: true, rotation: '-rotate-1' },
        { name: 'C', highlighted: false, rotation: '-rotate-2' },
        { name: 'JavaScript', highlighted: true, rotation: 'rotate-2' },
      ],
    },
    {
      title: 'WEB TECHNOLOGIES',
      icon: Globe,
      isLearning: false,
      skills: [
        { name: 'HTML', highlighted: true, rotation: '-rotate-1' },
        { name: 'CSS', highlighted: true, rotation: 'rotate-2' },
      ],
    },
    {
      title: 'TOOLS & PLATFORMS',
      icon: Wrench,
      isLearning: false,
      skills: [
        { name: 'Git', highlighted: true, rotation: '-rotate-1' },
        { name: 'GitHub', highlighted: true, rotation: 'rotate-2' },
        { name: 'MongoDB', highlighted: true, rotation: '-rotate-2' },
        { name: 'MS SQL Server', highlighted: true, rotation: 'rotate-1' },
      ],
    },
    {
      title: 'SOFT SKILLS',
      icon: Cpu,
      isLearning: false,
      skills: [
        { name: 'Problem-Solving', highlighted: true, rotation: 'rotate-1' },
        { name: 'Team Player', highlighted: false, rotation: '-rotate-1' },
        { name: 'Project Management', highlighted: true, rotation: 'rotate-2' },
        { name: 'Adaptability', highlighted: false, rotation: '-rotate-2' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight uppercase">
                Skills & Technologies
              </h2>
            </div>
            <span className="font-handwriting text-2xl text-black font-bold rotate-1">
              🏷️ The Tech Wall
            </span>
          </div>

          {/* Section Status Legend for AI/ML */}
          <div className="flex items-center gap-4 bg-white border-2 border-black px-4 py-2 rounded-xl shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center gap-1.5 font-mono text-xs font-black text-black">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B5F547] border border-black inline-block"></span>
              <span>ACTIVE LEARNING</span>
            </div>
            <span className="text-black/30">|</span>
            <div className="flex items-center gap-1.5 font-mono text-xs font-black text-black/70">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF8F5] border border-black inline-block"></span>
              <span>EXPLORING</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            const isAiMlCategory = category.isLearning;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-[2.5px] border-black p-6 rounded-2xl shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b-2 border-black flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#B5F547] p-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000]">
                        <IconComponent size={22} className="stroke-[2.5] text-black" />
                      </div>
                      <h3 className="font-extrabold text-lg tracking-wider text-black">
                        {category.title}
                      </h3>
                    </div>

                    {isAiMlCategory && (
                      <span className="font-mono text-[10px] font-black uppercase bg-[#B5F547] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                        LEARNING IN PROGRESS
                      </span>
                    )}
                  </div>

                  {/* Sticker Chips */}
                  <div className="flex flex-wrap gap-3 py-2">
                    {category.skills.map((skill) => {
                      if (isAiMlCategory) {
                        const isActive = skill.status === 'active';
                        return (
                          <span
                            key={skill.name}
                            className={`inline-flex items-center gap-1.5 font-black text-sm md:text-base px-3.5 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000] hover:scale-105 transition-transform cursor-default ${
                              skill.rotation
                            } ${
                              isActive
                                ? 'bg-[#B5F547] text-black'
                                : 'bg-[#FAF8F5] text-black/90'
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full border border-black ${isActive ? 'bg-black' : 'bg-white'}`}></span>
                            {skill.name}
                          </span>
                        );
                      }

                      return (
                        <span
                          key={skill.name}
                          className={`inline-block font-black text-sm md:text-base px-3.5 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000] hover:scale-105 transition-transform cursor-default ${
                            skill.rotation
                          } ${
                            skill.highlighted
                              ? 'bg-[#B5F547] text-black'
                              : 'bg-[#FAF8F5] text-black'
                          }`}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-dashed border-black/20 text-right">
                  <span className="font-mono text-xs font-bold text-black/60">
                    {category.skills.length} TECHNOLOGIES {isAiMlCategory ? '• LEARNING IN PROGRESS' : ''}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
