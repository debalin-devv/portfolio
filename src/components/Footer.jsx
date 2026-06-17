import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-container w-full mt-24 border-t-2 border-dashed border-[#222222]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <p className="font-headline-sm text-headline-sm text-[#111111] font-bold">Debalin.</p>
        
        <p className="font-body-md text-body-md text-[#111111]/70">© {new Date().getFullYear()} Debalin Sinha. Handcrafted with care.</p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/debalin-devv" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group relative flex items-center justify-center w-12 h-12 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[6px_6px_0px_rgba(17,17,17,1)] text-[#111111] hover:bg-[#111111] hover:text-[#B8FF3B]"
          >
            <Github size={24} strokeWidth={2} />
            <span className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 font-label-caps text-[10px] font-bold uppercase tracking-wider bg-[#FFFDF7] text-[#111111] border-2 border-[#111111] px-2 py-1 shadow-[2px_2px_0px_rgba(17,17,17,1)] transition-all pointer-events-none whitespace-nowrap rotate-2 z-10">
              GitHub
            </span>
          </a>

          <a 
            href="https://www.linkedin.com/in/debalin-sinha-5959a537a/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group relative flex items-center justify-center w-12 h-12 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:-rotate-1 hover:shadow-[6px_6px_0px_rgba(17,17,17,1)] text-[#111111] hover:bg-[#111111] hover:text-[#0A66C2]"
          >
            <Linkedin size={24} strokeWidth={2} />
            <span className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 font-label-caps text-[10px] font-bold uppercase tracking-wider bg-[#FFFDF7] text-[#111111] border-2 border-[#111111] px-2 py-1 shadow-[2px_2px_0px_rgba(17,17,17,1)] transition-all pointer-events-none whitespace-nowrap -rotate-2 z-10">
              LinkedIn
            </span>
          </a>

          <a 
            href="mailto:debalin.devv@gmail.com" 
            aria-label="Email Debalin"
            className="group relative flex items-center justify-center w-12 h-12 bg-white border-2 border-[#111111] shadow-[4px_4px_0px_rgba(17,17,17,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(17,17,17,1)] text-[#111111] hover:bg-[#111111] hover:text-[#F3E8FF]"
          >
            <Mail size={24} strokeWidth={2} />
            <span className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 font-label-caps text-[10px] font-bold uppercase tracking-wider bg-[#FFFDF7] text-[#111111] border-2 border-[#111111] px-2 py-1 shadow-[2px_2px_0px_rgba(17,17,17,1)] transition-all pointer-events-none whitespace-nowrap rotate-1 z-10">
              Email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
