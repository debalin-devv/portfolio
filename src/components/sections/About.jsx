import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-[#111111] inline-block highlighter relative hover-marker-highlight">
          About Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        {/* Notebook Paper Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 bg-[#FFFDF7] p-8 md:p-12 border-2 border-[#222222] shadow-[8px_8px_0px_rgba(34,34,34,1)] relative scrapbook-border hover-notebook-turn"
        >
          {/* Ring binder holes */}
          <div className="absolute top-0 bottom-0 left-0 w-8 border-r-2 border-[#222222]/20 flex flex-col justify-evenly bg-[#F5F4E8]">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="w-4 h-4 rounded-full bg-[#111111]/5 border border-[#222222]/30 mx-auto shadow-inner"></div>
             ))}
          </div>

          <div className="pl-10 space-y-8 font-body-lg text-[#111111]/80 leading-relaxed text-lg">
            
            <div className="bg-[#B8FF3B]/20 p-6 border-l-4 border-[#B8FF3B] border-2 border-r-[#222222] border-y-[#222222] rotate-1 shadow-[4px_4px_0px_rgba(34,34,34,1)] mb-8">
              <h3 className="font-label-caps text-xs font-bold uppercase tracking-widest text-[#111111] mb-2 handwritten-font">Career Objective</h3>
              <p className="font-medium text-[#111111]">
                Aspiring AI &amp; ML Engineer focused on building intelligent systems, automation tools, and impactful software products while combining technical problem-solving with creative thinking.
              </p>
            </div>

            <p>
              Motivated first-year Computer Science student with hands-on experience in <strong className="text-[#111111] bg-[#E8DFFF] px-1 border border-[#222222] -rotate-1 inline-block">Python, JavaScript, C, C++, and HTML/CSS</strong>, focused on building practical software, AI-powered tools, and scalable digital solutions.
            </p>
            <p>
              Skilled in <strong className="text-[#111111] bg-[#B8FF3B] px-1 border border-[#222222] rotate-1 inline-block">Generative AI Prompt Engineering</strong> to accelerate creative workflows and improve AI outputs.
            </p>
            <p>
              Passionate about building software, AI-powered tools, automation systems, and digital experiences while continuously learning emerging technologies.
            </p>
            
            {/* Signature */}
            <div className="pt-8 flex justify-end">
               <div className="text-right">
                 <div className="font-label-caps text-3xl font-bold handwritten-font text-[#222222]/60 -rotate-3 border-b border-[#222222]/30 pb-2 mb-1">Debalin Sinha</div>
                 <div className="font-label-caps text-xs font-bold uppercase tracking-widest">Kolkata, WB</div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Polaroids / Currently Learning */}
        <div className="w-full lg:w-1/3 flex flex-col gap-12 items-center">
          
          {/* Currently Learning Note */}
          <motion.div
             initial={{ opacity: 0, rotate: -10 }}
             whileInView={{ opacity: 1, rotate: -2 }}
             viewport={{ once: true }}
             className="bg-[#E8DFFF] p-6 border-2 border-[#222222] shadow-[6px_6px_0px_rgba(34,34,34,1)] w-full max-w-sm relative hover-sticky-bounce"
          >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#B8FF3B]/60 backdrop-blur-sm border border-[#222222] rotate-2"></div>
             
             <h3 className="font-label-caps text-sm font-bold uppercase tracking-widest mb-4 border-b-2 border-dashed border-[#222222] pb-2 text-[#111111]">Currently Learning</h3>
             <ul className="space-y-3 font-body-md font-medium text-[#111111]">
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> Data Structures &amp; Algorithms</li>
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> Machine Learning</li>
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> AI &amp; ML Fundamentals</li>
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> Advanced JavaScript</li>
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> Modern Web Development</li>
               <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">auto_awesome</span> Problem Solving</li>
             </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
