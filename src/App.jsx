import React from 'react';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import DeveloperStats from './components/sections/DeveloperStats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import AIAssistant from './components/sections/AIAssistant';
import TerminalMode from './components/sections/TerminalMode';
import CreativeWork from './components/sections/CreativeWork';
import LearningJourney from './components/sections/LearningJourney';
import GitHubActivity from './components/sections/GitHubActivity';
import DigitalGarden from './components/sections/DigitalGarden';
import Contact from './components/sections/Contact';
import DeveloperMode from './components/ui/DeveloperMode';

function App() {
  return (
    <div className="min-h-screen">
      <TopNavBar />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-16 md:space-y-20">
        <Hero />
        <DeveloperStats />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <AIAssistant />
        <TerminalMode />
        <CreativeWork />
        <LearningJourney />
        <GitHubActivity />
        <DigitalGarden />
        <Contact />
      </main>
      <DeveloperMode />
      <Footer />
    </div>
  );
}

export default App;
