import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Rocket, CheckCircle2 } from 'lucide-react';

const experienceList = [
  {
    id: 1,
    role: 'AI & Machine Learning Developer (Academic Projects)',
    organization: 'Lovely Professional University',
    duration: '2025 - Present',
    status: 'ACTIVE FOCUS',
    description: 'Developing practical machine learning models, feature engineering pipelines, and data analytics tools while completing specialized coursework in AI/ML.',
    responsibilities: [
      'Building predictive models using Scikit-Learn, NumPy, and Pandas',
      'Implementing neural network architectures with PyTorch & TensorFlow',
      'Conducting exploratory data analysis and feature selection benchmarks',
      'Collaborating on team hackathon projects and code reviews'
    ],
    technologies: ['Python', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'C++'],
    isCurrent: true
  },
  {
    id: 2,
    role: 'Hackathon Competitor & Project Team Lead',
    organization: 'Tech Con & AI Hackathons',
    duration: '2023 - 2024',
    status: 'COMPLETED',
    description: 'Participated in competitive hackathons and technical symposiums, building functional AI prototype tools under time constraints.',
    responsibilities: [
      'Led project ideation and prototype architecture design',
      'Implemented backend logic and model inference integration',
      'Presented live technical demonstrations to event judges',
      'Secured Hackathon Winner recognition for creative AI integration'
    ],
    technologies: ['Python', 'Generative AI', 'JavaScript', 'HTML/CSS', 'Git'],
    isCurrent: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Title */}
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
                Experience
              </h2>
            </div>
            <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block rotate-2">
              📜 Career & Academic Journey
            </span>
          </div>

          {/* Green Status Indicator Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white border-[2.5px] border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-black"></span>
            </span>
            <span className="font-black text-sm text-black uppercase tracking-wider">
              Currently Open to Opportunities
            </span>
          </div>
        </div>

        {/* Status Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#B5F547] border-[2.5px] border-black p-6 rounded-2xl shadow-[6px_6px_0px_#000000] mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 -rotate-1 hover:rotate-0 transition-transform"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Rocket size={22} className="stroke-[2.5] text-black" />
              <h3 className="font-black text-xl text-black">
                Seeking ML / Software Engineering Internships
              </h3>
            </div>
            <p className="text-black/90 font-medium text-sm sm:text-base">
              Available for full-time / part-time internship roles in AI, Machine Learning, and Software Development.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-50 border-2 border-black px-6 py-2.5 rounded-xl font-black text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn shrink-0"
          >
            Hire / Contact Me
          </a>
        </motion.div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border-[2.5px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b-2 border-black gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-black">
                    {exp.role}
                  </h3>
                  <p className="font-extrabold text-base text-black/80 flex items-center gap-2 mt-0.5">
                    <Briefcase size={18} className="stroke-[2.5] text-black" />
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-[#FAF8F5] border border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#000]">
                    <Calendar size={14} className="stroke-[2.5]" />
                    {exp.duration}
                  </span>
                  <span className="font-black text-xs bg-[#B5F547] border border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_#000]">
                    {exp.status}
                  </span>
                </div>
              </div>

              <div className="py-4 space-y-4">
                <p className="text-black/85 font-medium text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-wider text-black">
                    Responsibilities & Achievements:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.responsibilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] border border-black p-2.5 rounded-lg">
                        <CheckCircle2 size={16} className="text-black stroke-[2.5] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-black">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/20 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-black/60 mr-2">TECH:</span>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-white border border-black px-2.5 py-1 rounded text-xs font-bold text-black shadow-[1.5px_1.5px_0px_#000]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
