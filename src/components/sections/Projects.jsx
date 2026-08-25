import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'AI Machine Learning Pipeline & Analytics',
    category: 'MACHINE LEARNING / PYTHON',
    problem: 'Processing unstructured sensor & tabular data efficiently for real-time model inference required optimized feature engineering.',
    description: 'Developed an end-to-end Machine Learning pipeline utilizing Python, Scikit-Learn, and Pandas to automate data cleaning, feature extraction, and predictive modeling with high accuracy.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
    contribution: 'Designed the feature selection logic, model comparison benchmark, and evaluation metrics visualization.',
    keyFeatures: [
      'Automated data preprocessing & missing value imputation',
      'Multi-model evaluation (Random Forest, SVM, XGBoost)',
      'Performance evaluation with ROC-AUC & Confusion Matrix graphs',
      'Clean modular Python code with CLI parameter flags'
    ],
    githubLink: 'https://github.com/debalin-devv',
    image: '/polaroids/ml_training.jpg'
  },
  {
    id: '02',
    title: 'Neo-Brutalist Developer Portfolio System',
    category: 'WEB DEVELOPMENT / REACT',
    problem: 'Standard developer portfolio templates look generic and lack a distinctive physical art direction.',
    description: 'Built a highly custom, pixel-accurate Neo-Brutalist editorial portfolio using React, Tailwind CSS, and Framer Motion, featuring paper textures, thick outlines, hard shadows, and Polaroid photo collages.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    contribution: 'Implemented custom CSS utility system for hard offset shadows, marquee ticker animations, and responsive layout reflow.',
    keyFeatures: [
      'Editorial scrapbook art direction with rotated sticker cards',
      'Continuous horizontal technical marquee ticker',
      'Interactive Polaroid photo collage with handwriting typography',
      'Fully responsive, mobile-optimized drawer navigation'
    ],
    githubLink: 'https://github.com/debalin-devv',
    image: '/polaroids/hackathon_winner.jpg'
  },
  {
    id: '03',
    title: 'Automated File Organization & System Utility',
    category: 'PYTHON / SYSTEM AUTOMATION',
    problem: 'Managing cluttered download directories manually wastes developer time and leads to lost assets.',
    description: 'Created a background Python automation utility that categorizes, renames, and archives desktop files dynamically based on file type, creation date, and metadata tags.',
    technologies: ['Python', 'OS Module', 'Shutil', 'Pathlib', 'Argparse'],
    contribution: 'Built the directory watcher and rule execution engine with customizable configuration files.',
    keyFeatures: [
      'Real-time folder monitoring with instant sorting',
      'Custom rules engine for user-defined file extensions',
      'Automated duplicate detection and hashing',
      'Detailed activity logging system'
    ],
    githubLink: 'https://github.com/debalin-devv',
    image: '/polaroids/team_collab.jpg'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading */}
        <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
                Projects
              </h2>
            </div>
            <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block -rotate-2">
              🚀 Featured Engineering Works
            </span>
          </div>
          <a
            href="https://github.com/debalin-devv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-black px-4 py-2 rounded-xl font-bold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
          >
            <Github size={18} className="stroke-[2.5]" /> View GitHub Repos
          </a>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border-[2.5px] border-black rounded-2xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all relative overflow-hidden group"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-[#B5F547] border-2 border-black px-3 py-1 rounded-xl text-xs font-black text-black shadow-[2px_2px_0px_#000000]">
                    PROJECT #{project.id}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-black/70 bg-[#FAF8F5] border border-black px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
                  {project.title}
                </h3>

                <p className="text-base sm:text-lg text-black/85 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FAF8F5] border-2 border-black px-3 py-1 rounded-lg text-xs font-bold text-black shadow-[2px_2px_0px_#000000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2.5 rounded-xl font-extrabold text-sm sm:text-base text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                  >
                    View Project Details <Sparkles size={18} className="stroke-[2.5]" />
                  </button>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-black px-5 py-2.5 rounded-xl font-extrabold text-sm sm:text-base text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                  >
                    GitHub Repo <Github size={18} className="stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 md:p-10 shadow-[10px_10px_0px_#000000] max-w-3xl w-full relative my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_#000000] text-black focus:outline-none"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pb-6 border-b-2 border-black pr-12">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-[#B5F547] border-2 border-black px-3 py-1 rounded-xl text-xs font-black text-black shadow-[2px_2px_0px_#000000]">
                    PROJECT #{selectedProject.id}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-black/70 bg-[#FAF8F5] border border-black px-2.5 py-1 rounded">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="py-6 space-y-6">
                
                {/* Problem Statement */}
                <div className="bg-[#FAF8F5] border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000000]">
                  <h4 className="font-black text-sm uppercase tracking-wider text-black mb-1.5 flex items-center gap-2">
                    <Code size={18} className="stroke-[2.5]" /> Problem Statement
                  </h4>
                  <p className="text-black/85 text-sm sm:text-base font-medium">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                    <Layers size={18} className="stroke-[2.5]" /> Project Overview
                  </h4>
                  <p className="text-black/90 text-base leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider text-black mb-3">
                    Key Highlights & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white border border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                        <CheckCircle size={18} className="text-[#10B981] stroke-[2.5] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contribution */}
                <div className="border-t border-black/20 pt-4">
                  <h4 className="font-black text-sm uppercase tracking-wider text-black mb-1">
                    Personal Contribution
                  </h4>
                  <p className="text-black/80 text-sm font-medium">
                    {selectedProject.contribution}
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t-2 border-black flex items-center justify-between flex-wrap gap-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-6 py-2.5 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  GitHub Source Code <Github size={18} className="stroke-[2.5]" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gray-100 hover:bg-gray-200 border-2 border-black px-5 py-2.5 rounded-xl font-bold text-sm text-black shadow-[2px_2px_0px_#000]"
                >
                  Close Modal
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
