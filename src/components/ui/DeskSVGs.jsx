import React from 'react';

export const LaptopSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-8a2 2 0 012-2h12a2 2 0 012 2v8M2 18h20v2H2z" />
    <rect x="5" y="7" width="14" height="8" className="svg-laptop-screen" fill="transparent" stroke="none" />
  </svg>
);

export const CameraSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h3l2-2h6l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2z" />
    <circle cx="12" cy="14" r="4" />
    <circle cx="11" cy="13" r="1" className="svg-camera-reflection" fill="currentColor" stroke="none" />
  </svg>
);

export const NotebookSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 relative">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h10v16H6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16M16 4v16" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h10v16H6z" className="svg-notebook-page text-[#F5F4E8]" fill="currentColor" />
  </svg>
);

export const HeadphonesSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v4a2 2 0 01-2 2h-1v-6h3zm-14 0v4a2 2 0 002 2h1v-6H5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14A7 7 0 005 14" />
    {/* Soundwaves above */}
    <rect x="9" y="4" width="1" height="4" className="svg-soundwave svg-soundwave-1" fill="currentColor" stroke="none" />
    <rect x="11.5" y="2" width="1" height="6" className="svg-soundwave svg-soundwave-2" fill="currentColor" stroke="none" />
    <rect x="14" y="4" width="1" height="4" className="svg-soundwave svg-soundwave-3" fill="currentColor" stroke="none" />
  </svg>
);

export const RobotSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V5m-2 0h4" />
    <circle cx="9" cy="14" r="1.5" className="svg-robot-eye" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1.5" className="svg-robot-eye" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 17h4" />
  </svg>
);
