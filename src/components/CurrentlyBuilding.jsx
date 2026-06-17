import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { text: 'AI Resume Analyzer', icon: '🚀' },
  { text: 'Prompt Engineering Toolkit', icon: '🤖' },
  { text: 'Learning Machine Learning', icon: '📚' },
  { text: 'Photography Portfolio', icon: '📷' }
];

const CurrentlyBuilding = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, rotate: 2 }}
      animate={{ opacity: 1, rotate: -2 }}
      whileHover={{ rotate: 0 }}
      className="bg-surface-container-highest p-4 md:p-6 border-2 border-dashed border-on-surface w-full max-w-sm relative scrapbook-border shadow-[8px_8px_0px_rgba(0,0,0,1)]"
    >
      {/* Tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-tertiary/30 rotate-3 backdrop-blur-sm border border-outline/20"></div>
      
      <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-on-surface">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-error border border-on-surface"></span>
        </span>
        <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase tracking-wider">Currently Building</h3>
      </div>
      
      <ul className="space-y-4 font-body-md text-on-surface">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 group">
            <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
            <span className="flex-1 font-medium">{item.text}</span>
            <span className="material-symbols-outlined text-outline-variant text-sm animate-pulse">more_horiz</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CurrentlyBuilding;
