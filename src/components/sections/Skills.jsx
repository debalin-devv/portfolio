import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming",
    icon: "code",
    color: "bg-[#B8FF3B]",
    skills: ["Python", "JavaScript (ES6+)", "C", "C++"]
  },
  {
    title: "Web Development",
    icon: "language",
    color: "bg-[#E8DFFF]",
    skills: ["HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Tools",
    icon: "build",
    color: "bg-[#FFFDF7]",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "Concepts",
    icon: "lightbulb",
    color: "bg-[#B8FF3B]",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "AI Prompt Engineering"]
  },
  {
    title: "Languages",
    icon: "translate",
    color: "bg-[#E8DFFF]",
    skills: ["English", "Hindi", "Bengali"]
  }
];

const SkillPopout = ({ text }) => (
  <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-36 opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible group-hover/skill:-translate-y-2 transition-all duration-300 z-50 pointer-events-none">
    <div className="relative bg-[#FFFDF7] border-2 border-[#222222] p-2 text-[10px] leading-tight text-[#111111] font-bold text-center shadow-[4px_4px_0px_rgba(34,34,34,1)] rotate-2 font-label-caps">
      {text}
      <svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 text-[#222222]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3" />
      </svg>
    </div>
  </div>
);

const Skills = () => {
  const getSkillPopout = (skill) => {
    if (skill.includes('Python')) return 'Powers AI & Automation';
    if (skill.includes('JavaScript')) return 'Builds Interactive UI';
    if (skill.includes('C++')) return 'Used for DSA & Logic';
    return null;
  };

  return (
    <section id="arsenal" className="py-16 md:py-20">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-[#111111] inline-block highlighter relative hover-marker-highlight">
          My Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 border-2 border-[#222222] shadow-[6px_6px_0px_rgba(34,34,34,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(34,34,34,1)] transition-all ${category.color} ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
          >
            <div className="flex items-center gap-3 mb-6 border-b-2 border-dashed border-[#222222] pb-4">
              <span className="material-symbols-outlined text-2xl text-[#111111] bg-white p-2 border-2 border-[#222222] rounded-full">{category.icon}</span>
              <h3 className="font-display-lg-mobile text-xl font-bold text-[#111111]">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => {
                const popoutText = getSkillPopout(skill);
                return (
                  <div 
                    key={skill}
                    className="bg-white border-2 border-[#222222] px-3 py-1.5 font-label-caps text-xs font-bold uppercase text-[#111111] shadow-[2px_2px_0px_rgba(34,34,34,1)] cursor-crosshair hover:bg-[#111111] hover:text-[#FFFDF7] transition-colors hover-sticker-peel relative group/skill"
                  >
                    {skill}
                    {popoutText && <SkillPopout text={popoutText} />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
