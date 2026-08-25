import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, BookOpen, Users, Calendar, ArrowRight, RefreshCw, Code2, AlertTriangle } from 'lucide-react';

// Verified Real Base Data Structure for @debalin-devv matching GitHub profile
const debalinGithubRealData = {
  username: "debalin-devv",
  profileUrl: "https://leetcode.com/u/debalin-devv/", // profile link
  githubProfileUrl: "https://github.com/debalin-devv/",
  status: "OPEN SOURCE / BUILDING",
  repositories: 1,
  followers: 0,
  following: 0,
  stars: 0,
  contributions: 2,
  publicRepositories: 1,
  accountSince: "2025",
  topLanguage: "JavaScript",
  languages: ["JavaScript"],
  recentBuilds: [
    {
      id: 1,
      name: "portfolio",
      description: "My personal portfolio website showcasing my projects, skills, and work as a CSE AI/ML student.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      url: "https://github.com/debalin-devv/portfolio"
    }
  ],
  submissionCalendar: {},
  lastSynced: null
};

// Animated Number Counter Component
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

    const duration = 1000;
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

// Generate 364 days activity heatmap grid matching actual GitHub profile (2 active days: Dec & Jun/Jul)
const generateGitHubHeatmapDays = (calendarObj) => {
  const days = new Array(364).fill(0);
  // Highlight only the 2 actual contribution days matching user profile screenshot
  days[142] = 3; // December contribution
  days[310] = 3; // June/July contribution
  return days;
};

const GitHubSlide = () => {
  const [data, setData] = useState(() => {
    try {
      const cached = localStorage.getItem('github_debalin_devv_live_v3_cache');
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {}
    return debalinGithubRealData;
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchLiveGitHubProfile = async () => {
      try {
        setLoading(true);
        setApiError(false);

        const userRes = await fetch('https://api.github.com/users/debalin-devv', {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        
        if (!userRes.ok) {
          throw new Error(`GitHub API HTTP ${userRes.status}`);
        }

        const userJson = await userRes.json();

        let starsCount = 0;
        let fetchedBuilds = [];
        let langFrequency = {};
        let detectedLangs = [];

        try {
          const reposRes = await fetch('https://api.github.com/users/debalin-devv/repos?sort=updated&per_page=100', {
            headers: { 'Accept': 'application/vnd.github.v3+json' }
          });
          if (reposRes.ok) {
            const reposJson = await reposRes.json();
            if (Array.isArray(reposJson) && reposJson.length > 0) {
              reposJson.forEach((repo) => {
                starsCount += repo.stargazers_count || 0;
                if (repo.language) {
                  langFrequency[repo.language] = (langFrequency[repo.language] || 0) + 1;
                }
              });

              fetchedBuilds = reposJson.slice(0, 4).map((repo, idx) => ({
                id: idx + 1,
                name: repo.name,
                description: repo.description || 'My personal portfolio website showcasing my projects, skills, and work as a CSE AI/ML student.',
                language: repo.language || 'JavaScript',
                stars: repo.stargazers_count || 0,
                forks: repo.forks_count || 0,
                url: repo.html_url || 'https://github.com/debalin-devv/portfolio'
              }));

              detectedLangs = Object.keys(langFrequency).sort((a, b) => langFrequency[b] - langFrequency[a]);
            }
          }
        } catch (rErr) {
          // Keep current builds if repos endpoint fails
        }

        if (isMounted) {
          const topLang = detectedLangs.length > 0 ? detectedLangs[0] : 'JavaScript';
          const createdYear = userJson.created_at ? new Date(userJson.created_at).getFullYear().toString() : '2025';

          const updatedData = {
            username: "debalin-devv",
            profileUrl: "https://github.com/debalin-devv/",
            status: "OPEN SOURCE / BUILDING",
            repositories: userJson.public_repos ?? 1,
            followers: userJson.followers ?? 0,
            following: userJson.following ?? 0,
            stars: starsCount,
            contributions: 2,
            publicRepositories: userJson.public_repos ?? 1,
            accountSince: createdYear,
            topLanguage: topLang,
            languages: detectedLangs.length > 0 ? detectedLangs : ["JavaScript"],
            recentBuilds: fetchedBuilds.length > 0 ? fetchedBuilds : debalinGithubRealData.recentBuilds,
            submissionCalendar: {},
            lastSynced: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };

          setData(updatedData);
          try {
            localStorage.setItem('github_debalin_devv_live_v3_cache', JSON.stringify(updatedData));
          } catch (e) {}
        }
      } catch (err) {
        if (isMounted) {
          setApiError(true);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLiveGitHubProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const heatmapDays = generateGitHubHeatmapDays(data.submissionCalendar);

  return (
    <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#000000] relative space-y-8">
      
      {/* GITHUB USER HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-2 border-black gap-4">
        
        <div className="flex items-center gap-3.5">
          <div className="bg-[#B5F547] border-2 border-black p-2.5 rounded-xl shadow-[3px_3px_0px_#000]">
            <Github size={24} className="stroke-[2.5] text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-black text-xs uppercase bg-[#FAF8F5] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                GITHUB
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
              {apiError && !loading && (
                <span className="font-mono text-xs font-bold text-amber-900 bg-amber-200 border border-black px-2 py-0.5 rounded flex items-center gap-1">
                  <AlertTriangle size={12} /> GITHUB DATA TEMPORARILY UNAVAILABLE
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
          VIEW PROFILE <ExternalLink size={16} className="stroke-[2.5]" />
        </a>
      </div>

      {/* PRIMARY STATISTICS (4 Rotated Cards with Real Verified Values) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Repositories */}
        <div className="bg-[#B5F547] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] -rotate-2 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            REPOSITORIES
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.repositories} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1 flex items-center gap-1">
            <BookOpen size={14} className="stroke-[2.5]" /> Public Repos
          </div>
        </div>

        {/* Card 2: Followers */}
        <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] rotate-1 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            FOLLOWERS
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.followers} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1 flex items-center gap-1">
            <Users size={14} className="stroke-[2.5]" /> Community
          </div>
        </div>

        {/* Card 3: Following */}
        <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] -rotate-1 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            FOLLOWING
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.following} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1">
            Developers Followed
          </div>
        </div>

        {/* Card 4: Stars */}
        <div className="bg-[#B5F547] border-[2.5px] border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000000] rotate-2 hover:rotate-0 transition-transform">
          <div className="font-mono text-xs font-black uppercase text-black/80 mb-1">
            STARS
          </div>
          <div className="text-4xl sm:text-5xl font-black text-black">
            <CountUpNumber value={data.stars} />
          </div>
          <div className="text-xs font-bold text-black/70 mt-1 flex items-center gap-1">
            <Star size={14} className="stroke-[2.5]" /> Total Stars
          </div>
        </div>

      </div>

      {/* SECONDARY STATISTICS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        
        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Code2 size={14} className="stroke-[2.5]" /> Contributions
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.contributions}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <BookOpen size={14} className="stroke-[2.5]" /> Public Repos
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.publicRepositories}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Code2 size={14} className="stroke-[2.5]" /> Top Lang
          </div>
          <div className="text-2xl font-black text-black mt-1 truncate">
            {data.topLanguage}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[3px_3px_0px_#000]">
          <div className="flex items-center gap-1.5 text-xs font-black text-black/70 uppercase">
            <Calendar size={14} className="stroke-[2.5]" /> Account Since
          </div>
          <div className="text-2xl font-black text-black mt-1">
            {data.accountSince}
          </div>
        </div>

      </div>

      {/* 2026 GITHUB ACTIVITY HEATMAP */}
      <div className="bg-[#FAF8F5] border-[2.5px] border-black p-5 sm:p-6 rounded-2xl shadow-[4px_4px_0px_#000000] space-y-4">
        
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="font-extrabold text-lg text-black flex items-center gap-2">
            <Calendar size={18} className="stroke-[2.5]" /> 2026 GITHUB ACTIVITY
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

      {/* RECENT BUILDS & WHAT I CODE WITH GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Recent Builds List (Cols 1-7) */}
        <div className="lg:col-span-7 bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
          <h4 className="font-extrabold text-lg text-black mb-4 pb-2 border-b-2 border-black flex items-center justify-between">
            <span>RECENT BUILDS</span>
            <span className="font-mono text-xs font-bold text-black/60">PUBLIC REPOSITORIES</span>
          </h4>

          {data.recentBuilds && data.recentBuilds.length > 0 ? (
            <div className="space-y-3">
              {data.recentBuilds.map((build) => (
                <a
                  key={build.id}
                  href={build.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#FAF8F5] border border-black rounded-xl hover:bg-[#B5F547]/20 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-base text-black group-hover:underline flex items-center gap-1.5">
                      <BookOpen size={16} className="stroke-[2.5]" /> {build.name}
                    </span>
                    <div className="flex items-center gap-3 font-mono text-xs font-bold text-black/80">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="stroke-[2.5]" /> {build.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} className="stroke-[2.5]" /> {build.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-black/80 font-medium mb-2 line-clamp-2">
                    {build.description}
                  </p>
                  <div className="flex items-center justify-between text-xs font-bold text-black">
                    <span className="bg-white border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                      {build.language}
                    </span>
                    <span className="flex items-center gap-1 text-black font-extrabold group-hover:translate-x-1 transition-transform">
                      VIEW REPOSITORY <ArrowRight size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-[#FAF8F5] border border-black rounded-xl text-center text-sm font-bold text-black/70">
              Repositories data unavailable
            </div>
          )}
        </div>

        {/* Right: Languages & Tech (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h4 className="font-extrabold text-lg text-black mb-3 pb-2 border-b-2 border-black">
              WHAT I CODE WITH
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {data.languages.map((lang, i) => (
                <span
                  key={lang}
                  className={`bg-[#B5F547] border-2 border-black px-4 py-2 rounded-xl font-black text-sm text-black shadow-[2px_2px_0px_#000] ${
                    i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF8F5] border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_#000]">
            <h4 className="font-black text-sm uppercase text-black mb-1">
              BUILD PHILOSOPHY
            </h4>
            <p className="font-handwriting text-xl text-black font-bold -rotate-1">
              "Open source code, modular architecture, and practical software applications."
            </p>
          </div>

        </div>

      </div>

      {/* VIEW GITHUB PROFILE CTA BUTTON */}
      <div className="pt-4 border-t-2 border-black space-y-3">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full bg-[#B5F547] hover:bg-[#A5EA36] border-[2.5px] border-black py-4 px-8 rounded-2xl font-black text-lg sm:text-xl text-black shadow-[5px_5px_0px_#000000] brutal-btn"
        >
          VIEW MY GITHUB PROFILE <ArrowRight size={22} className="stroke-[3]" />
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

export default GitHubSlide;
