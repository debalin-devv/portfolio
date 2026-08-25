import React from 'react';
import TechMarquee from './components/TechMarquee';
import TopNavBar from './components/TopNavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import LeetCode from './components/sections/LeetCode';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#B5F547] selection:text-black">
      {/* Top Technical Marquee Banner */}
      <TechMarquee />

      {/* Sticky Navigation Bar */}
      <TopNavBar />

      {/* Main Portfolio Content */}
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
