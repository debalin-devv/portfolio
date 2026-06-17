import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const responses = {
  "What technologies does Debalin know?": "I'm proficient in Python, JavaScript, C++, React, Tailwind CSS, and various Machine Learning tools.",
  "What projects has Debalin built?": "I've built several projects including a fully interactive React portfolio, Python automation scripts, and various AI experiments.",
  "What is his AI experience?": "I specialize in Generative AI, Prompt Engineering, and building AI-powered tools.",
  "How can I contact him?": "You can reach out to me via email at sinhadebalin@gmail.com or call me at +91 8391904585."
};

const suggestedQuestions = Object.keys(responses);

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Debalin's AI Assistant. How can I help you learn more about him?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = (question) => {
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: responses[question] || "I'm not sure about that, but you can email him to ask directly!" }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="ai-assistant" className="py-16 md:py-20">
      <div className="mb-10 md:mb-14">
        <h2 className="font-headline-md text-headline-md text-on-surface highlighter inline-block hover-marker-highlight">
          Ask Debalin AI
        </h2>
      </div>

      <div className="bg-surface border-2 border-on-surface rounded-sm shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto h-[500px]">
        {/* Left Side - Suggested */}
        <div className="w-full md:w-1/3 bg-surface-container-low border-b-2 md:border-b-0 md:border-r-2 border-on-surface p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-3xl text-tertiary">smart_toy</span>
            <h3 className="font-bold text-xl">Suggested Topics</h3>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {suggestedQuestions.map(q => (
              <button 
                key={q} 
                onClick={() => handleAsk(q)}
                disabled={isTyping}
                className="w-full text-left p-3 border-2 border-outline-variant rounded-sm hover:border-tertiary hover:bg-tertiary-container transition-colors disabled:opacity-50 text-sm font-body-md"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Chat Interface */}
        <div className="w-full md:w-2/3 flex flex-col bg-white">
          <div className="flex-1 p-6 pb-[200px] overflow-y-auto custom-scrollbar space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-xl border-2 border-on-surface ${msg.role === 'user' ? 'bg-primary-container rounded-tr-none' : 'bg-surface-container rounded-tl-none shadow-[2px_2px_0px_rgba(0,0,0,1)]'}`}>
                    <p className="font-body-md text-sm">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                   <div className="bg-surface-container p-4 rounded-xl rounded-tl-none border-2 border-on-surface">
                     <div className="flex gap-1">
                       <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                       <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                     </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t-2 border-on-surface bg-surface-container-lowest">
             <div className="text-center font-label-caps text-xs text-on-surface-variant">Select a suggested question to chat</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
