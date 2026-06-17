import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="bg-primary-container p-8 md:p-16 border-2 border-on-surface shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-16 justify-between items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-display-lg-mobile md:text-6xl font-bold text-on-surface mb-6 leading-tight">Let's Build Something <span className="bg-white px-2 border-2 border-on-surface -rotate-2 inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)]">Amazing</span> Together</h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-md">
              Whether you have a project in mind, want to discuss AI trends, or just want to say hi, my inbox is always open.
            </p>
            
            <a href="mailto:debalin.devv@gmail.com" className="inline-flex items-center gap-3 bg-on-surface text-white hover:bg-white hover:text-on-surface font-bold px-8 py-5 border-2 border-on-surface shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all text-xl w-full md:w-auto justify-center">
              <span className="material-symbols-outlined text-3xl">mail</span>
              debalin.devv@gmail.com
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {/* Personal Branding Card */}
            <motion.div 
              initial={{ rotate: -5, y: 20 }}
              whileInView={{ rotate: 3, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-surface p-8 border-2 border-on-surface shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-md transition-all cursor-crosshair"
            >
              <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-dashed border-outline-variant">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-on-surface bg-surface-container-highest shrink-0 shadow-inner">
                  <img src="/profile.jpeg" alt="Debalin" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-on-surface">Debalin Sinha</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 font-bold">AI & ML Developer</p>
                </div>
              </div>
              
              <ul className="space-y-6 font-body-md text-on-surface font-medium">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-on-surface flex items-center justify-center group-hover:scale-110 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                     <span className="material-symbols-outlined text-on-surface">call</span>
                  </div>
                  <span className="text-lg">+91 8391904585</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-secondary-container border-2 border-on-surface flex items-center justify-center group-hover:scale-110 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                     <span className="material-symbols-outlined text-on-surface">location_on</span>
                  </div>
                  <span className="text-lg">Kolkata, West Bengal</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container border-2 border-on-surface flex items-center justify-center group-hover:scale-110 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                     <span className="material-symbols-outlined text-on-surface">link</span>
                  </div>
                  <a href="https://www.linkedin.com/in/debalin-sinha-5959a537a/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary underline decoration-wavy decoration-on-surface underline-offset-4 font-bold">linkedin.com/in/debalin</a>
                </li>
              </ul>
              
              <div className="mt-8 flex gap-3 justify-center pt-6 border-t-2 border-dashed border-outline-variant">
                <a href="https://www.linkedin.com/in/debalin-sinha-5959a537a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-white hover:bg-on-surface hover:text-white transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1"><span className="material-symbols-outlined">link</span></a>
                <a href="https://github.com/debalin-devv" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-white hover:bg-on-surface hover:text-white transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1"><span className="material-symbols-outlined">code</span></a>
                <a href="mailto:debalin.devv@gmail.com" aria-label="Email" className="w-10 h-10 flex items-center justify-center border-2 border-on-surface bg-white hover:bg-on-surface hover:text-white transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1"><span className="material-symbols-outlined">mail</span></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
