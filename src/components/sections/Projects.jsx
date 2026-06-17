import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'Personal Portfolio Website',
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    description: 'Designed and built a fully responsive portfolio website with modern UI components, smooth scrolling interactions, and optimized performance across devices.',
    demoLink: '#',
    githubLink: 'https://github.com/debalin-devv',
    bgColor: 'bg-[#FFFDF7]'
  },
  {
    title: 'Python Automation Script',
    techStack: ['Python', 'OS Module', 'File Handling'],
    description: 'Developed an intelligent file organization utility that automatically sorts and archives files using Python file handling and OS modules.',
    demoLink: '#',
    githubLink: 'https://github.com/debalin-devv',
    bgColor: 'bg-[#E8DFFF]'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-[#111111] highlighter inline-block">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-12 md:space-y-16">
        {projectList.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`relative p-8 md:p-12 border-2 border-[#222222] rounded-sm ${project.bgColor} shadow-[8px_8px_0px_rgba(34,34,34,1)] transition-all duration-300 group hover-polaroid-lift`}
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#111111] text-[#F5F4E8] font-label-caps text-xs px-3 py-1 border-2 border-[#222222] font-bold uppercase rotate-2 shadow-[2px_2px_0px_rgba(34,34,34,1)] group-hover:rotate-0 transition-transform z-10">
              Premium Build
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <h3 className="font-display-lg-mobile text-3xl font-bold text-[#111111]">{project.title}</h3>

                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col gap-6 mt-0 group-hover:mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="font-label-caps text-[10px] uppercase font-bold text-[#111111] bg-white px-2 py-1 border-2 border-[#222222] shadow-[2px_2px_0px_rgba(34,34,34,1)] hover-sticker-peel">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="font-body-md text-[#111111] text-lg font-medium leading-relaxed">
                    <p>{project.description}</p>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#B8FF3B] text-[#111111] font-bold px-6 py-3 border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)] transition-all hover-stamp-press">
                      <span className="material-symbols-outlined text-xl">open_in_new</span>
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#111111] font-bold px-6 py-3 border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)] transition-all hover-stamp-press">
                      <span className="material-symbols-outlined text-xl">code</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-gray-200 border-2 border-[#222222] shadow-[4px_4px_0px_rgba(34,34,34,1)] group-hover:scale-[1.02] transition-transform overflow-hidden">
                 <div className="absolute inset-0 bg-[#222222]/5 mix-blend-multiply"></div>
                 {/* Placeholder for project image */}
                 <div className="w-full h-full flex items-center justify-center bg-white font-label-caps text-[#222222]/30">Project Screenshot</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
