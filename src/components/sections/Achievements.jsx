import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Award, Users, X, ExternalLink } from 'lucide-react';

const achievementsList = [
  {
    id: 1,
    title: "Hackathon Winner '25",
    category: 'AI & MACHINE LEARNING',
    description: 'Secured 7th place in the university AI Hackathon by pitching and building an innovative AI tool prototype within 24 hours.',
    image: '/polaroids/hackethon_prize.png',
    rotation: '-rotate-2',
    icon: Trophy,
    caption: "Hackathon Winner '25",
    certificateUrl: '/polaroids/hackethon certificate.png'
  },
  {
    id: 2,
    title: "Tech Xpo '25 Delegate & Presenter",
    category: 'TECHNICAL SYMPOSIUM',
    description: 'Represented project work and collaborated with fellow tech enthusiasts at national tech conference events.',
    image: '/polaroids/tech_xpo.jpg',
    rotation: 'rotate-2',
    icon: Star,
    caption: "Tech Xpo '25"
  },
  {
    id: 3,
    title: 'Algorithmic Coding Competitions',
    category: 'PROBLEM SOLVING',
    description: 'Active participant in competitive programming events, demonstrating strong command over C++ and Data Structures & Algorithms.',
    image: '/polaroids/hackethon_pic 1.jpg',
    rotation: '-rotate-1',
    icon: Award,
    caption: 'Team Collaboration'
  }
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Achievements
            </h2>
          </div>
          <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block -rotate-2">
            🏆 Pinned Scrapbook Memories
          </span>
        </div>

        {/* Achievement Pinned Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`bg-white border-[2.5px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] transition-all relative flex flex-col justify-between ${item.rotation} hover:rotate-0`}
              >
                {/* Decorative Pin / Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B5F547] border border-black px-4 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000] -rotate-1">
                  PINNED MEMORY
                </div>

                <div>
                  {/* Polaroid Frame Image */}
                  <div className="bg-[#FAF8F5] border-2 border-black p-3 rounded-xl shadow-[3px_3px_0px_#000000] mb-5 mt-2">
                    <div className="aspect-[4/3] bg-gray-100 border border-black/30 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.src = '/profile.jpeg'; }}
                      />
                    </div>
                    <p className="font-handwriting text-xl text-center font-bold text-black mt-2">
                      {item.caption}
                    </p>
                  </div>

                  {/* Achievement Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#B5F547] p-1.5 rounded-lg border border-black">
                        <IconComp size={18} className="stroke-[2.5] text-black" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase text-black/70">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-black text-xl text-black">
                      {item.title}
                    </h3>

                    <p className="text-black/85 font-medium text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* See Certificate Option */}
                {item.certificateUrl && (
                  <div className="pt-4 mt-2 border-t-2 border-black/10">
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black py-2.5 px-4 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                    >
                      See Certificate <ExternalLink size={16} className="stroke-[2.5]" />
                    </button>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[10px_10px_0px_#000000] max-w-3xl w-full relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_#000000] text-black focus:outline-none"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>

              {/* Modal Header */}
              <div className="pb-4 border-b-2 border-black pr-12 mb-4">
                <span className="font-mono text-xs font-bold uppercase text-black/70 bg-[#B5F547] border border-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_#000]">
                  {selectedCert.category}
                </span>
                <h3 className="text-2xl font-black text-black mt-2">
                  {selectedCert.title} — Official Certificate
                </h3>
              </div>

              {/* Certificate Image Frame */}
              <div className="bg-[#FAF8F5] border-2 border-black p-3 sm:p-4 rounded-xl shadow-[4px_4px_0px_#000000] mb-5">
                <img
                  src={selectedCert.certificateUrl}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-auto rounded-lg border border-black max-h-[60vh] object-contain mx-auto"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t-2 border-black">
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
                >
                  Open Original Image <ExternalLink size={16} className="stroke-[2.5]" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="bg-gray-100 hover:bg-gray-200 border-2 border-black px-4 py-2 rounded-xl font-bold text-sm text-black shadow-[2px_2px_0px_#000]"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
