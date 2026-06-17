import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperMode = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [output, setOutput] = useState(null);
  const [isRebuilding, setIsRebuilding] = useState(false);

  useEffect(() => {
    let keySequence = '';
    const secretCode = 'dev';

    const handleKeyDown = (e) => {
      keySequence += e.key.toLowerCase();
      if (keySequence.length > secretCode.length) {
        keySequence = keySequence.slice(keySequence.length - secretCode.length);
      }
      
      if (keySequence === secretCode && !isUnlocked) {
        setIsUnlocked(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked]);

  const handleAnalyzeStack = () => {
    setOutput(
      <div className="whitespace-pre-wrap">
        <span className="text-white">Frontend:</span>{'\n'}
        - React{'\n'}
        - Tailwind CSS{'\n'}
        - Framer Motion{'\n\n'}
        <span className="text-white">Programming:</span>{'\n'}
        - Python{'\n'}
        - JavaScript{'\n'}
        - C{'\n'}
        - C++{'\n\n'}
        <span className="text-white">Learning:</span>{'\n'}
        - Machine Learning{'\n'}
        - DSA{'\n'}
        - Prompt Engineering
      </div>
    );
  };

  const handleSystemStats = () => {
    setOutput(
      <div className="whitespace-pre-wrap">
        Projects Built: 2{'\n'}
        Technologies Used: 10+{'\n'}
        Years Learning: 4+{'\n'}
        Current Focus: AI & ML{'\n'}
        Portfolio Status: Active
      </div>
    );
  };

  const handleForceRebuild = () => {
    if (isRebuilding) return;
    setIsRebuilding(true);
    
    let progress = 0;
    const updateProgress = () => {
      const bars = Math.floor(progress / 10);
      const empty = 10 - bars;
      setOutput(
        <div className="whitespace-pre-wrap">
          Rebuilding Portfolio...{'\n'}
          [{'█'.repeat(bars)}{' '.repeat(empty)}] {progress}%
        </div>
      );
      
      if (progress < 100) {
        progress += 20;
        setTimeout(updateProgress, 300);
      } else {
        setTimeout(() => {
          setOutput(
            <div className="whitespace-pre-wrap">
              Rebuilding Portfolio...{'\n'}
              [██████████] 100%{'\n\n'}
              <span className="text-[#B8FF3B]">Portfolio Successfully Rebuilt</span>
            </div>
          );
          setIsRebuilding(false);
        }, 300);
      }
    };
    
    updateProgress();
  };

  if (!isUnlocked) return null;

  return (
    <>
      {/* Unlock Popup Animation */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#111111]/90 backdrop-blur-sm pointer-events-none"
          >
            <div className="bg-[#111111] border-4 border-[#00ff00] p-10 font-mono text-center shadow-[0_0_30px_rgba(0,255,0,0.4)]">
              <h2 className="text-4xl text-[#00ff00] mb-4 font-bold tracking-widest uppercase hover-typewriter">
                🚀 Developer Mode Unlocked
              </h2>
              <p className="text-[#00ff00]/70">System access granted. Initializing panels...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Developer Panel */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-[150] w-80 max-h-[80vh] bg-[#111111] border-2 border-[#222222] shadow-[8px_8px_0px_rgba(184,255,59,1)] font-mono flex flex-col hover-polaroid-lift group"
      >
        <div className="bg-[#222222] px-4 py-2 flex items-center justify-between border-b-2 border-[#222222] shrink-0">
           <span className="text-xs text-[#00ff00] font-bold">dev_panel.exe</span>
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onClick={() => setIsUnlocked(false)}></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400" onClick={() => setOutput(null)}></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
           </div>
        </div>
        
        <div className="p-4 flex flex-col gap-3 text-[#00ff00] text-sm overflow-y-auto custom-scrollbar">
           <div onClick={handleAnalyzeStack} className="hover:bg-[#222222] p-2 cursor-pointer transition-colors border border-transparent hover:border-[#00ff00]/30 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.2)]">
             <span className="opacity-50">&gt;</span> <span className="hover-typewriter">analyze_stack()</span>
           </div>
           <div onClick={handleSystemStats} className="hover:bg-[#222222] p-2 cursor-pointer transition-colors border border-transparent hover:border-[#00ff00]/30 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.2)]">
             <span className="opacity-50">&gt;</span> <span className="hover-typewriter">view_system_stats()</span>
           </div>
           <div onClick={handleForceRebuild} className="hover:bg-[#222222] p-2 cursor-pointer transition-colors border border-transparent hover:border-[#00ff00]/30 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.2)]">
             <span className="opacity-50">&gt;</span> <span className="hover-typewriter">force_rebuild()</span>
           </div>
           
           <div className="mt-2 pt-2 border-t border-[#00ff00]/20 text-xs flex flex-col gap-2 relative">
             {output ? (
               <div className="bg-black/50 p-3 rounded-sm border border-[#00ff00]/10 text-[#00ff00]/90">
                 {output}
               </div>
             ) : (
               <span className="opacity-50 flex items-center hover-terminal-cursor cursor-text">
                 sys.ready
               </span>
             )}
           </div>
        </div>
      </motion.div>
    </>
  );
};

export default DeveloperMode;
