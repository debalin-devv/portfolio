import React from 'react';

const TechMarquee = () => {
  const items = [
    "TENSORFLOW",
    "PYTORCH",
    "SCIKIT-LEARN",
    "PYTHON",
    "MACHINE LEARNING",
    "DEEP LEARNING",
    "DATA SCIENCE",
    "C++",
    "REACT"
  ];

  const marqueeText = items.join(" • ");

  return (
    <div className="w-full bg-[#B5F547] border-b-[2.5px] border-black overflow-hidden py-1.5 selection:bg-black selection:text-[#B5F547]">
      <div className="animate-marquee whitespace-nowrap flex items-center font-bold text-xs md:text-sm tracking-wider uppercase text-black">
        <span className="px-4">{marqueeText} • {marqueeText} • {marqueeText}</span>
        <span className="px-4">{marqueeText} • {marqueeText} • {marqueeText}</span>
      </div>
    </div>
  );
};

export default TechMarquee;
