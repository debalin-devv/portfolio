import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Code, ExternalLink, Globe, Phone, MapPin } from 'lucide-react';

const socialProfiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/debalin-devv',
    icon: Github,
    tag: '@debalin-devv',
    bgColor: 'bg-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/debalin-sinha-5959a537a/',
    icon: Linkedin,
    tag: 'Debalin Sinha',
    bgColor: 'bg-[#B5F547]'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com',
    icon: Code,
    tag: 'Problem Solving',
    bgColor: 'bg-white'
  },
  {
    name: 'HackerRank',
    url: 'https://hackerrank.com',
    icon: Code,
    tag: 'Coding Challenges',
    bgColor: 'bg-white'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://geeksforgeeks.org',
    icon: Globe,
    tag: 'CS Fundamentals',
    bgColor: 'bg-white'
  },
  {
    name: 'Kaggle',
    url: 'https://kaggle.com',
    icon: Globe,
    tag: 'ML & Data Science',
    bgColor: 'bg-[#B5F547]'
  }
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Social / Professional Profiles Cards Grid */}
        <div className="mb-14">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight">
                Profiles & Coding Platforms
              </h2>
            </div>
            <span className="font-handwriting text-2xl text-black font-bold hidden sm:inline-block -rotate-1">
              🔗 Connect & Code
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialProfiles.map((profile, idx) => {
              const IconComp = profile.icon;
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-[2.5px] border-black p-4 rounded-2xl shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] transition-all brutal-btn flex flex-col justify-between ${profile.bgColor}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white p-2 rounded-xl border border-black shadow-[1.5px_1.5px_0px_#000]">
                      <IconComp size={20} className="stroke-[2.5] text-black" />
                    </div>
                    <ExternalLink size={14} className="stroke-[2.5] text-black/60" />
                  </div>

                  <div>
                    <h3 className="font-black text-base text-black">
                      {profile.name}
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-black/70 truncate">
                      {profile.tag}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Main Editorial Contact CTA Box */}
        <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 md:p-14 shadow-[10px_10px_0px_#000000] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Content Side (Cols 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Green Status Pill */}
              <div className="inline-flex items-center gap-2.5 bg-[#B5F547] border-2 border-black px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#000000]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black"></span>
                </span>
                <span className="font-black text-xs sm:text-sm text-black uppercase tracking-wider">
                  ● OPEN TO OPPORTUNITIES
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
                Let's build something.
              </h2>

              <p className="text-base sm:text-lg text-black/90 font-medium leading-relaxed max-w-lg">
                Have a project, internship opportunity, collaboration idea, or simply want to talk tech? Reach out directly and let's get started.
              </p>

              {/* Direct Info Badges */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:debalin.devv@gmail.com"
                  className="inline-flex items-center gap-3 bg-[#FAF8F5] border-2 border-black px-5 py-3 rounded-xl shadow-[3px_3px_0px_#000000] font-black text-sm sm:text-base text-black hover:bg-[#B5F547] transition-colors brutal-btn"
                >
                  <Mail size={20} className="stroke-[2.5]" />
                  debalin.devv@gmail.com
                </a>

                <div className="flex flex-wrap gap-3 font-mono text-xs font-bold text-black/80">
                  <span className="bg-white border border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
                    <Phone size={14} className="stroke-[2.5]" /> +91 8391904585
                  </span>
                  <span className="bg-white border border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
                    <MapPin size={14} className="stroke-[2.5]" /> Kolkata, WB, India
                  </span>
                </div>
              </div>

            </div>

            {/* Right Contact Form (Cols 7-12) */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="bg-[#FAF8F5] border-[2.5px] border-black p-6 sm:p-8 rounded-2xl shadow-[6px_6px_0px_#000000] space-y-4">
                
                <h3 className="text-xl font-black text-black mb-2 flex items-center justify-between">
                  Send a Direct Message
                  <span className="font-handwriting text-xl text-black font-bold -rotate-2">✉️ Fast Reply</span>
                </h3>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Debalin Sinha"
                    className="w-full bg-white border-2 border-black rounded-xl p-3 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#B5F547] shadow-[2px_2px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="debalin.devv@gmail.com"
                    className="w-full bg-white border-2 border-black rounded-xl p-3 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#B5F547] shadow-[2px_2px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="ML Internship Opportunity / Collaboration"
                    className="w-full bg-white border-2 border-black rounded-xl p-3 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#B5F547] shadow-[2px_2px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Debalin, I came across your portfolio..."
                    className="w-full bg-white border-2 border-black rounded-xl p-3 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#B5F547] shadow-[2px_2px_0px_#000]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black py-3.5 rounded-xl font-extrabold text-base text-black shadow-[4px_4px_0px_#000000] brutal-btn flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} className="stroke-[2.5]" />
                </button>

                {formSubmitted && (
                  <div className="bg-[#B5F547] border-2 border-black p-3 rounded-xl text-center font-extrabold text-xs text-black animate-in fade-in">
                    ✅ Message sent successfully! Debalin will get back to you soon.
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
