import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gardenNotes = [
  {
    id: 1,
    title: 'Optimizing React Context Performance',
    date: 'Oct 12, 2023',
    category: 'React',
    excerpt: 'Exploring memoization techniques to prevent unnecessary re-renders when using global context providers.',
    content: 'Full article content goes here. React context is great, but be careful with frequent updates...',
    color: 'bg-[#FFFDF7]'
  },
  {
    id: 2,
    title: 'Prompt Engineering Frameworks',
    date: 'Nov 05, 2023',
    category: 'AI',
    excerpt: 'A structured approach to crafting prompts that yield deterministic and highly accurate responses from LLMs.',
    content: 'When writing prompts, always structure your context, instructions, and desired output format clearly...',
    color: 'bg-[#B8FF3B]'
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox for Dashboards',
    date: 'Jan 20, 2024',
    category: 'CSS',
    excerpt: 'Why CSS Grid is superior for macro-layouts and Dashboard architecture, while Flexbox wins for component internals.',
    content: 'Grid is two-dimensional, Flexbox is one-dimensional. Understanding this distinction is key to complex UI.',
    color: 'bg-[#E8DFFF]'
  }
];

const categories = ['All', 'React', 'AI', 'CSS'];

const DigitalGarden = () => {
  const [filter, setFilter] = useState('All');
  const [selectedNote, setSelectedNote] = useState(null);

  const filteredNotes = gardenNotes.filter(n => filter === 'All' || n.category === filter);

  return (
    <section id="garden" className="py-16 md:py-20 relative">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-[#111111] inline-block highlighter hover-marker-highlight">
          Digital Garden
        </h2>
        <p className="mt-4 font-body-md text-lg text-[#111111] max-w-2xl font-medium">
          A collection of rough notes, learnings, and thoughts. Not quite blog posts, just a scrapbook of ideas.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-label-caps text-xs font-bold uppercase px-4 py-2 border-2 border-[#222222] shadow-[2px_2px_0px_rgba(34,34,34,1)] transition-colors hover-sticker-peel ${filter === cat ? 'bg-[#111111] text-[#F5F4E8]' : 'bg-white text-[#111111]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#111111]/50">search</span>
          <input 
            type="text" 
            placeholder="Search notes..." 
            className="w-full bg-white border-2 border-[#222222] p-3 pl-10 font-body-md shadow-[4px_4px_0px_rgba(34,34,34,1)] outline-none focus:bg-[#FFFDF7] transition-all hover-marker-highlight focus:hover-marker-highlight"
          />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNotes.map((note, idx) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedNote(note)}
            className={`p-6 border-2 border-[#222222] shadow-[8px_8px_0px_rgba(34,34,34,1)] ${note.color} cursor-pointer hover-polaroid-lift hover-notebook-turn group/note`}
          >
            <div className="flex justify-between items-start mb-4 border-b-2 border-dashed border-[#222222] pb-2">
              <span className="font-label-caps text-[10px] font-bold uppercase text-[#111111] bg-white px-2 py-1 border border-[#222222]">{note.category}</span>
              <span className="font-label-caps text-[10px] font-bold uppercase text-[#111111]/60">{note.date}</span>
            </div>
            <h3 className="font-display-lg-mobile text-xl font-bold text-[#111111] mb-3 group-hover/note:underline decoration-wavy decoration-[#111111] underline-offset-4">{note.title}</h3>
            <p className="font-body-md text-[#111111]/80 leading-relaxed text-sm">
              {note.excerpt}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Note Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-[#111111]/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, rotate: -2, y: 20 }}
              animate={{ scale: 1, rotate: 1, y: 0 }}
              exit={{ scale: 0.9, rotate: 2, y: 20 }}
              className={`w-full max-w-2xl ${selectedNote.color} border-2 border-[#222222] shadow-[16px_16px_0px_rgba(0,0,0,0.3)] p-8 md:p-12 cursor-default relative scrapbook-border`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-md rotate-2 border border-[#222222]/20 shadow-sm"></div>
              
              <button 
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4 bg-white border-2 border-[#222222] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#111111] hover:text-[#F5F4E8] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              
              <div className="mb-8 border-b-2 border-dashed border-[#222222] pb-6">
                <h2 className="font-display-lg-mobile text-3xl font-bold text-[#111111] mb-4 leading-tight">{selectedNote.title}</h2>
                <div className="flex gap-4 font-label-caps text-xs font-bold uppercase text-[#111111]/60">
                  <span>{selectedNote.date}</span>
                  <span>•</span>
                  <span>{selectedNote.category}</span>
                </div>
              </div>
              
              <div className="font-body-lg text-[#111111] leading-relaxed">
                <p className="font-medium italic border-l-4 border-[#222222] pl-4 mb-6">{selectedNote.excerpt}</p>
                <p>{selectedNote.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DigitalGarden;
