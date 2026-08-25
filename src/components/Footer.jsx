import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-[2.5px] border-black mt-20 py-10 shadow-[0px_-4px_0px_#000000]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="bg-[#B5F547] border-2 border-black px-3 py-1 rounded-xl text-lg font-black shadow-[2px_2px_0px_#000]">
            DS
          </div>
          <div>
            <h3 className="font-black text-xl text-black">Debalin Sinha</h3>
            <p className="text-xs font-bold text-black/70">AI & Machine Learning Developer</p>
          </div>
        </div>

        <p className="font-semibold text-sm text-black/80 text-center">
          © {new Date().getFullYear()} Debalin Sinha. All rights reserved. Recreated with Neo-Brutalist Precision.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/debalin-devv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white hover:bg-[#B5F547] border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000] brutal-btn"
            aria-label="GitHub"
          >
            <Github size={20} className="stroke-[2.5] text-black" />
          </a>

          <a
            href="https://www.linkedin.com/in/debalin-sinha-5959a537a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white hover:bg-[#B5F547] border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000] brutal-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="stroke-[2.5] text-black" />
          </a>

          <a
            href="mailto:debalin.devv@gmail.com"
            className="p-2.5 bg-white hover:bg-[#B5F547] border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000] brutal-btn"
            aria-label="Email"
          >
            <Mail size={20} className="stroke-[2.5] text-black" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000] brutal-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="stroke-[2.5] text-black" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
