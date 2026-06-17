import React from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ to, suffix = "", duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const inView = useInView(nodeRef, { once: true });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = to / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const DeveloperStats = () => {
  return (
    <section className="py-10 md:py-12 border-y-2 border-dashed border-[#222222] bg-[#FFFDF7] mt-6 mb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          
          <div className="space-y-2">
            <div className="font-display-lg-mobile text-4xl md:text-5xl font-extrabold text-[#111111]">
               <CountUp to={15} suffix="+" />
            </div>
            <div className="font-label-caps text-xs font-bold uppercase text-[#111111]/70">Skills Learned</div>
          </div>

          <div className="space-y-2">
            <div className="font-display-lg-mobile text-4xl md:text-5xl font-extrabold text-[#111111]">
               <CountUp to={2} suffix="+" />
            </div>
            <div className="font-label-caps text-xs font-bold uppercase text-[#111111]/70">Projects Built</div>
          </div>

          <div className="space-y-2">
            <div className="font-display-lg-mobile text-4xl md:text-5xl font-extrabold text-[#111111]">
               <CountUp to={4} suffix="+" />
            </div>
            <div className="font-label-caps text-xs font-bold uppercase text-[#111111]/70">Years Exploring Technology</div>
          </div>

          <div className="space-y-2">
            <div className="font-display-lg-mobile text-4xl md:text-5xl font-extrabold text-[#111111]">
               <CountUp to={12} suffix="+" />
            </div>
            <div className="font-label-caps text-xs font-bold uppercase text-[#111111]/70">Technologies Used</div>
          </div>

          <div className="space-y-2 col-span-2 md:col-span-1">
            <div className="font-display-lg-mobile text-4xl md:text-5xl font-extrabold text-[#111111]">
               <span className="font-bold">2nd</span>
            </div>
            <div className="font-label-caps text-xs font-bold uppercase text-[#111111]/70">Year B.Tech AI & ML</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperStats;
