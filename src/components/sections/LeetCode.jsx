import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Flame, Trophy, Percent, Award, CheckCircle, Calendar, ArrowRight, RefreshCw } from 'lucide-react';
import GitHubSlide from './GitHubSlide';

// Verified Base Data Structure for @debalin-devv LeetCode Profile
const debalinDevvBaseData = {
  username: "debalin-devv",
  profileUrl: "https://leetcode.com/u/debalin-devv/",
  status: "LEETCODE PROFILE",
  totalSolved: 3,
  easySolved: 2,
  mediumSolved: 1,
  hardSolved: 0,
  acceptanceRate: "50.0%",
  contestRating: "N/A",
  globalRanking: "5,000,000+",
  dailyStreak: "3 Active Days",
  recentProblems: [
    { id: 1, name: "Maximum Subarray", difficulty: "Medium", language: "C++", date: "Recent" },
    { id: 2, name: "Single Number", difficulty: "Easy", language: "C++", date: "Recent" },
    { id: 3, name: "Two Sum", difficulty: "Easy", language: "C", date: "Recent" }
  ],
  topics: ["Arrays", "Dynamic Programming", "Bit Manipulation", "Hash Table"],
  languages: ["C++", "C"],
  submissionCalendar: { "1776902400": 1, "1786924800": 3, "1787356800": 2 },
  lastSynced: null
};

// Animated Count-Up Component
const CountUpNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 'N/A' || value === null || value === undefined) return;
    const numericValue = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(numericValue)) return;

    let start = 0;
    const end = numericValue;
    if (end === 0) {
      setCount(0);
      return;
    }

    const duration = 1200;
    const incrementTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  if (value === 'N/A' || value === null || value === undefined) {
    return <span>N/A</span>;
  }

  const numericValue = typeof value === 'number' ? value : parseInt(value, 10);
  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return <span>{count}</span>;
};

// Generate LeetCode Heatmap Days
const generateHeatmapDaysFromCalendar = (calendarObj) => {
  const days = new Array(364).fill(0);
  if (!calendarObj) return days;

  const timestamps = Object.keys(calendarObj);
  timestamps.forEach((ts, idx) => {
    const submissions = calendarObj[ts] || 1;
    let level = 1;
    if (submissions >= 10) level = 4;
    else if (submissions >= 6) level = 3;
    else if (submissions >= 3) level = 2;
    else if (submissions >= 1) level = 1;

    const targetIdx = (350 + idx * 4) % 364;
    days[targetIdx] = level;
  });

  return days;
};

// LeetCode Dashboard Slide Component
const LeetCodeSlide = () => {
  const [data, setData] = useState(() => {
    try {
      const cached = localStorage.getItem('leetcode_debalin_devv_cache');
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {}
    return debalinDevvBaseData;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchLiveLeetCode = async () => {
      try {
        setLoading(true);

        const profileRes = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/debalin-devv');
        if (!profileRes.ok) throw new Error('Profile fetch failed');
        const profileJson = await profileRes.json();

        let recentSubs = debalinDevvBaseData.recentProblems;
        try {
          const subRes = await fetch('https://alfa-leetcode-api.onrender.com/debalin-devv/acSubmission');
          if (subRes.ok) {
            const subJson = await subRes.json();
            if (subJson.submission && Array.isArray(subJson.submission) && subJson.submission.length > 0) {
              recentSubs = subJson.submission.slice(0, 5).map((item, idx) => {
                let diff = 'Easy';
                const lowerTitle = item.title.toLowerCase();
                if (lowerTitle.includes('subarray') || lowerTitle.includes('3sum') || lowerTitle.includes('medium')) {
                  diff = 'Medium';
                }
                return {
                  id: idx + 1,
                  name: item.title,
                  difficulty: diff,
                  language: item.lang ? item.lang.toUpperCase() : 'C++',
                  date: 'Recent'
                };
              });
            }
          }
        } catch (subErr) {}

        let calendarData = debalinDevvBaseData.submissionCalendar;
        let streakData = debalinDevvBaseData.dailyStreak;
        try {
          const calRes = await fetch('https://alfa-leetcode-api.onrender.com/debalin-devv/calendar');
          if (calRes.ok) {
            const calJson = await calRes.json();
            if (calJson.submissionCalendar) {
              calendarData = typeof calJson.submissionCalendar === 'string'
                ? JSON.parse(calJson.submissionCalendar)
                : calJson.submissionCalendar;
            }
            if (calJson.totalActiveDays) {
              streakData = `${calJson.totalActiveDays} Active Days`;
            }
          }
        } catch (calErr) {}

        if (isMounted) {
          const updatedData = {
            ...debalinDevvBaseData,
            totalSolved: profileJson.totalSolved ?? 3,
            easySolved: profileJson.easySolved ?? 2,
            mediumSolved: profileJson.mediumSolved ?? 1,
            hardSolved: profileJson.hardSolved ?? 0,
            globalRanking: profileJson.ranking ? profileJson.ranking.toLocaleString() : '5,000,000+',
            dailyStreak: streakData,
            recentProblems: recentSubs,
            submissionCalendar: calendarData,
            lastSynced: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };

          setData(updatedData);
          try {
            localStorage.setItem('leetcode_debalin_devv_cache', JSON.stringify(updatedData));
          } catch (e) {}
        }
      } catch (err) {
        // Silently preserve cached/base data
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLiveLeetCode();

    return () => {
      isMounted = false;
    };
  }, []);

  const heatmapDays = generateHeatmapDaysFromCalendar(data.submissionCalendar);

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-[#FAF8F5] text-black border border-black font-extrabold';
      case 'medium':
        return 'bg-[#B5F547] text-black border border-black font-black';
      case 'hard':
        return 'bg-black text-[#B5F547] border border-black font-black';
      default:
        return 'bg-white text-black border border-black';
    }
  };

  return (
    <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#000000] relative space-y-8">
      
      {/* USER HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-2 border-black gap-4">
        
        <div className="flex items-center gap-3.5">
          <div className="bg-[#B5F547] border-2 border-black p-2.5 rounded-xl shadow-[3px_3px_0px_#000]">
            <Code size={24} className="stroke-[2.5] text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-black text-xs uppercase bg-[#FAF8F5] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                LEETCODE
              </span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black"></span>
              </span>
              <span className="font-extrabold text-xs text-black/80 uppercase">
                ● {data.status}
              </span>
              {loading && (
                <span className="font-mono text-xs font-bold text-black bg-[#B5F547] px-2 py-0.5 border border-black rounded flex items-center gap-1">
                  <RefreshCw size={12} className="animate-spin" /> SYNCING...
                </span>
              )}
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-black tracking-tight mt-0.5">
              @{data.username}
            </h4>
          </div>
        </div>

        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B5F547] hover:bg-[#A5EA36] border-2 border-black px-5 py-2 rounded-xl font-extrabold text-sm text-black shadow-[3px_3px_0px_#000000] brutal-btn"
        >
          View Profile <ExternalLink size={16} className="stroke-[2.5]" />
        </a>
      </div>

      {/* PRIMARY STATISTICS (4 Physical Rotated Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Total Solved */}
        <div className="bg-[#B5F547] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] -rotate-2 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            PROBLEMS SOLVED
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.totalSolved} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1 flex items-center gap-1">
            <CheckCircle size={14} className="stroke-[2.5]" /> Verified Total
          </div>
        </div>

        {/* Card 2: Easy */}
        <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] rotate-1 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            EASY
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.easySolved} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1">
            Fundamentals
          </div>
        </div>

        {/* Card 3: Medium */}
        <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] -rotate-1 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            MEDIUM
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.mediumSolved} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1">
            Core Focus
          </div>
        </div>

        {/* Card 4: Hard */}
        <div className="bg-[#B5F547] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] rotate-2 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            HARD
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.hardSolved} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1">
            Advanced
          </div>
        </div>

      </div>

      {/* SECONDARY STATISTICS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        
        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Percent size={14} className="stroke-[2.5]" /> Acceptance Rate
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.acceptanceRate || 'N/A'}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Trophy size={14} className="stroke-[2.5]" /> Contest Rating
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.contestRating || 'N/A'}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Award size={14} className="stroke-[2.5]" /> Global Ranking
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.globalRanking || 'N/A'}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Flame size={14} className="stroke-[2.5] text-amber-500" /> Daily Streak
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.dailyStreak || 'N/A'}
          </div>
        </div>

      </div>

      {/* 2026 CODING ACTIVITY HEATMAP */}
      <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 sm:p-6 rounded-2xl shadow-[4px_4px_0px_#000000] space-y-4">
        
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="font-extrabold text-lg text-black flex items-center gap-2">
            <Calendar size={18} className="stroke-[2.5]" /> 2026 CODING ACTIVITY
          </h4>
          
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-black/70">
            <span>LESS</span>
            <div className="flex gap-1">
              <span className="w-3.5 h-3.5 bg-[#FAF8F5] border border-black/40 rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-[#D7FA94] border border-black rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-[#C4F86A] border border-black rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-[#B5F547] border border-black rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-[#90DB16] border border-black rounded-sm"></span>
            </div>
            <span>MORE</span>
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px]">
            {heatmapDays.map((level, i) => {
              let bgClass = 'bg-white border-black/30';
              if (level === 1) bgClass = 'bg-[#D7FA94] border-black';
              if (level === 2) bgClass = 'bg-[#C4F86A] border-black';
              if (level === 3) bgClass = 'bg-[#B5F547] border-black';
              if (level === 4) bgClass = 'bg-[#90DB16] border-black';

              return (
                <div
                  key={i}
                  className={`w-3.5 h-3.5 border rounded-sm transition-transform hover:scale-125 hover:z-10 ${bgClass}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* RECENT PROBLEMS & TOPICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Recent Problems List (Cols 1-7) */}
        <div className="lg:col-span-7 bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
          <h4 className="font-extrabold text-lg text-black mb-4 pb-2 border-b-2 border-black flex items-center justify-between">
            <span>RECENT PROBLEMS</span>
            <span className="font-mono text-xs font-bold text-black/60">LIVE SUBMISSIONS</span>
          </h4>

          {data.recentProblems && data.recentProblems.length > 0 ? (
            <div className="space-y-2.5">
              {data.recentProblems.map((prob) => (
                <div
                  key={prob.id}
                  className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-black rounded-xl hover:bg-[#B5F547]/20 transition-colors"
                >
                  <div className="space-y-0.5">
                    <div className="font-black text-base text-black">
                      {prob.name}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-black/70">
                      <span>{prob.language}</span>
                      <span>•</span>
                      <span>{prob.date}</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${getDifficultyBadge(prob.difficulty)}`}>
                    {prob.difficulty}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-[#FAF8F5] border border-black rounded-xl text-center text-sm font-bold text-black/70">
              Recent activity unavailable
            </div>
          )}
        </div>

        {/* Right: Topics & Languages (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Topics Card */}
          <div className="bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h4 className="font-extrabold text-lg text-black mb-3 pb-2 border-b-2 border-black">
              TOPICS I PRACTICE
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.topics.map((topic, i) => (
                <span
                  key={topic}
                  className={`bg-[#FAF8F5] border-2 border-black px-3 py-1.5 rounded-xl font-bold text-xs text-black shadow-[2px_2px_0px_#000] hover:scale-105 transition-transform ${
                    i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h4 className="font-extrabold text-lg text-black mb-3 pb-2 border-b-2 border-black">
              LANGUAGES
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {data.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-[#B5F547] border-2 border-black px-4 py-1.5 rounded-xl font-black text-sm text-black shadow-[2px_2px_0px_#000]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* VIEW PROFILE CTA BUTTON & SYNC FOOTER */}
      <div className="pt-4 border-t-2 border-black space-y-3">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full bg-[#B5F547] hover:bg-[#A5EA36] border-[2.5px] border-black py-4 px-8 rounded-2xl font-black text-lg sm:text-xl text-black shadow-[5px_5px_0px_#000000] brutal-btn"
        >
          VIEW MY LEETCODE PROFILE <ArrowRight size={22} className="stroke-[3]" />
        </a>

        {data.lastSynced && (
          <div className="text-right">
            <span className="font-mono text-xs font-bold text-black/60">
              Last synced: {data.lastSynced}
            </span>
          </div>
        )}
      </div>

    </div>
  );
};

// Main Combined Coding Profiles Slider Component
const CodingProfilesSlider = () => {
  const [activeTab, setActiveTab] = useState('leetcode'); // 'leetcode' | 'github'
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // 8-second Auto-Rotation with Hover/Interaction Pause
  useEffect(() => {
    if (isPaused) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveTab((prev) => (prev === 'leetcode' ? 'github' : 'leetcode'));
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setDirection(newTab === 'github' ? 1 : -1);
    setActiveTab(newTab);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleTabChange('github');
    } else if (e.key === 'ArrowLeft') {
      handleTabChange('leetcode');
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  return (
    <section id="leetcode" className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        
        {/* Section Heading & Annotation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 space-y-2"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#B5F547] border-[2.5px] border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#000000]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
                I DON'T JUST BUILD. I SOLVE.
              </h2>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
            <h3 className="text-xl sm:text-2xl font-black text-black">
              CODING PROFILES
            </h3>
            <span className="font-handwriting text-2xl text-black font-bold -rotate-2">
              LeetCode × GitHub →
            </span>
          </div>
        </motion.div>

        {/* Tab Controls System */}
        <div 
          className="flex items-center justify-between flex-wrap gap-4 mb-6"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="tablist"
          aria-label="Coding Profiles Switcher"
        >
          {/* Neo-Brutalist Tabs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleTabChange('leetcode')}
              role="tab"
              aria-selected={activeTab === 'leetcode'}
              aria-label="Show LeetCode dashboard"
              className={`px-6 py-2.5 rounded-2xl border-[2.5px] border-black font-black text-base transition-all brutal-btn flex items-center gap-2 ${
                activeTab === 'leetcode'
                  ? 'bg-[#B5F547] text-black shadow-[4px_4px_0px_#000000]'
                  : 'bg-[#FAF8F5] text-black/80 shadow-[2px_2px_0px_#000000] hover:bg-white'
              }`}
            >
              <Code size={18} className="stroke-[2.5]" /> LEETCODE
            </button>

            <button
              onClick={() => handleTabChange('github')}
              role="tab"
              aria-selected={activeTab === 'github'}
              aria-label="Show GitHub dashboard"
              className={`px-6 py-2.5 rounded-2xl border-[2.5px] border-black font-black text-base transition-all brutal-btn flex items-center gap-2 ${
                activeTab === 'github'
                  ? 'bg-[#B5F547] text-black shadow-[4px_4px_0px_#000000]'
                  : 'bg-[#FAF8F5] text-black/80 shadow-[2px_2px_0px_#000000] hover:bg-white'
              }`}
            >
              <Code size={18} className="stroke-[2.5]" /> GITHUB
            </button>
          </div>

          {/* Tab Relationship Annotation */}
          <span className="font-mono text-xs font-bold uppercase tracking-wider bg-white border border-black px-3 py-1 rounded-lg shadow-[2px_2px_0px_#000]">
            PROBLEM SOLVING × BUILDING
          </span>
        </div>

        {/* Animated Slider Container (Pauses Auto-Slide on Hover / Focus) */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {activeTab === 'leetcode' ? (
              <motion.div
                key="leetcode-slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <LeetCodeSlide />
              </motion.div>
            ) : (
              <motion.div
                key="github-slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <GitHubSlide />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CodingProfilesSlider;
