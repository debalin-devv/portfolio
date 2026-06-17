import React, { useState, useRef, useEffect } from 'react';

const TerminalMode = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Debalin OS v2.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const commands = {
    help: 'Available commands: help, about, skills, projects, resume, contact, experience, clear',
    about: 'Debalin Sinha - Computer Science student (AI & ML), AI Prompt Engineer, and Developer.',
    skills: 'Python, JavaScript, React, Tailwind, C++, DSA, OOP, Prompt Engineering.',
    projects: '1. Personal Portfolio\n2. Python Automation Script',
    resume: 'Loading resume... (Please see the Contact section to request PDF)',
    contact: 'Email: sinhadebalin@gmail.com | Phone: +91 8391904585',
    experience: '2024-Present: AI Prompt Engineer\n2023-Present: Freelance Photographer',
    clear: ''
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input', content: `C:\\Users\\Guest> ${input}` }];
    
    if (commands[cmd]) {
      newHistory.push({ type: 'output', content: commands[cmd] });
    } else {
      newHistory.push({ type: 'output', content: `'${cmd}' is not recognized as an internal or external command.` });
    }
    
    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-16 md:py-20">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-on-surface highlighter inline-block">
          Terminal Mode
        </h2>
      </div>

      <div className="bg-[#1e1e1e] border-2 border-on-surface shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden max-w-4xl mx-auto font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-[#323233] px-4 py-2 flex items-center gap-2 border-b-2 border-on-surface">
           <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
             <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
           </div>
           <div className="flex-1 text-center text-[#cccccc] text-xs">debalin.exe</div>
        </div>
        
        {/* Terminal Body */}
        <div 
          className="p-6 pb-[200px] h-[400px] overflow-y-auto text-[#00ff00] cursor-text custom-scrollbar hover-terminal-cursor"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className="mb-2 whitespace-pre-wrap">
              {line.content}
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex">
            <span className="mr-2">C:\Users\Guest&gt;</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-[#00ff00]"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </section>
  );
};

export default TerminalMode;
