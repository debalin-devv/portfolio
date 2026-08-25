import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

const educationList = [
  {
    id: 1,
    degree: 'B.Tech — Computer Science Engineering',
    specialization: 'Specialization: Artificial Intelligence & Machine Learning',
    institution: 'Lovely Professional University',
    duration: '2025 - 2029 (Ongoing)',
    location: 'Punjab, India',
    coursework: [
      'Machine Learning Fundamentals',
      'Data Structures & Algorithms',
      'Python Programming',
      'Database Management Systems',
      'Object-Oriented Programming (C++)',
      'Web Development'
    ],
    highlight: 'Active Focus on AI/ML Research & Engineering'
  },
  {
    id: 2,
    degree: 'Higher Secondary Education (Class XII)',
    specialization: 'Stream: Science / Mathematics',
    institution: 'Manglamaro Mangala Academy (H.S.)',
    duration: '2024 - 2025',
    location: 'West Bengal, India',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    highlight: 'Strong foundation in Mathematics and Computing'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Education
            </h2>
          </div>
          <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block rotate-1">
            🎓 Academic Foundation
          </span>
        </div>

        {/* Editorial Timeline Cards */}
        <div className="space-y-8">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border-[2.5px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between pb-4 border-b-2 border-black gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-[#B5F547] p-2 rounded-xl border border-black shadow-[2px_2px_0px_#000]">
                      <GraduationCap size={22} className="stroke-[2.5] text-black" />
                    </div>
                    <h3 className="text-2xl font-black text-black">
                      {item.degree}
                    </h3>
                  </div>

                  <p className="font-extrabold text-base text-[#10B981] pt-1">
                    {item.specialization}
                  </p>

                  <p className="font-bold text-base text-black/80 flex items-center gap-2">
                    <BookOpen size={16} className="stroke-[2.5]" />
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-[#FAF8F5] border border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
                    <Calendar size={14} className="stroke-[2.5]" />
                    {item.duration}
                  </span>
                  <span className="font-mono text-xs font-bold bg-[#FAF8F5] border border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
                    <MapPin size={14} className="stroke-[2.5]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="py-4 space-y-3">
                <h4 className="font-black text-xs uppercase tracking-wider text-black">
                  Relevant Coursework & Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="bg-[#FAF8F5] border border-black px-3 py-1 rounded-lg text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0px_#000]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/20 text-right">
                <span className="font-handwriting text-lg text-black font-bold">
                  ✨ {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
