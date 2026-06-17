import React, { useState, useEffect } from 'react';

const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/debalin-devv');
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();

        const reposRes = await fetch('https://api.github.com/users/debalin-devv/repos?sort=updated&per_page=3');
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languageColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    'C++': '#f34b7d',
    C: '#555555',
    TypeScript: '#3178c6',
    Jupyter: '#DA5B0B'
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} secs ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  if (error) {
    return (
      <section id="github" className="py-24">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface highlighter inline-block">
            GitHub Activity
          </h2>
        </div>
        <div className="bg-surface-container-low p-8 border-2 border-on-surface shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center font-bold text-xl text-error">
          Unable to load GitHub activity
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-24">
      <div className="mb-16">
        <h2 className="font-headline-md text-headline-md text-on-surface highlighter inline-block">
          GitHub Activity
        </h2>
      </div>

      <div className="bg-surface-container-low p-8 border-2 border-on-surface shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 text-9xl text-outline-variant/20 font-bold rotate-12 pointer-events-none select-none">
          GIT
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between items-end mb-6">
               <h3 className="font-display-lg-mobile text-2xl font-bold">Contribution Graph</h3>
               <span className="font-label-caps text-xs font-bold uppercase text-on-surface-variant">
                 {loading ? 'Loading...' : `${profile?.public_repos || 0} Public Repositories`}
               </span>
            </div>
            
            {/* Fake Contribution Graph kept as visual layout requirement */}
            <div className="flex gap-1 flex-wrap w-full bg-white p-4 border border-outline">
               {Array.from({ length: 364 }).map((_, i) => {
                 const intensity = Math.random();
                 let bg = 'bg-surface-container-highest';
                 if (intensity > 0.8) bg = 'bg-[#196127]';
                 else if (intensity > 0.6) bg = 'bg-[#239a3b]';
                 else if (intensity > 0.4) bg = 'bg-[#7bc96f]';
                 else if (intensity > 0.2) bg = 'bg-[#c6e48b]';

                 return (
                   <div 
                     key={i} 
                     className={`w-3 h-3 rounded-sm ${bg} hover:border hover:border-on-surface cursor-crosshair transition-colors`}
                     title="Contribution"
                   ></div>
                 );
               })}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="border border-outline bg-white p-4 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                 <div className="font-label-caps text-xs text-on-surface-variant mb-1 uppercase font-bold">Public Repos</div>
                 <div className="font-display-lg-mobile text-2xl font-bold">
                   {loading ? '-' : profile?.public_repos}
                 </div>
               </div>
               <div className="border border-outline bg-white p-4 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                 <div className="font-label-caps text-xs text-on-surface-variant mb-1 uppercase font-bold">Followers</div>
                 <div className="font-display-lg-mobile text-2xl font-bold text-error">
                   {loading ? '-' : profile?.followers}
                 </div>
               </div>
               <div className="border border-outline bg-white p-4 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                 <div className="font-label-caps text-xs text-on-surface-variant mb-1 uppercase font-bold">Following</div>
                 <div className="font-display-lg-mobile text-2xl font-bold text-primary">
                   {loading ? '-' : profile?.following}
                 </div>
               </div>
               <div className="border border-outline bg-white p-4 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                 <div className="font-label-caps text-xs text-on-surface-variant mb-1 uppercase font-bold">Public Gists</div>
                 <div className="font-display-lg-mobile text-2xl font-bold text-tertiary">
                   {loading ? '-' : profile?.public_gists}
                 </div>
               </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
             <div className="bg-white p-6 border-2 border-dashed border-outline-variant h-full flex flex-col">
               <h4 className="font-bold text-lg mb-4 border-b-2 border-on-surface pb-2">Latest Repositories</h4>
               <ul className="space-y-4 flex-1">
                 {loading ? (
                   <div className="text-center text-on-surface-variant">Loading repos...</div>
                 ) : repos.length === 0 ? (
                   <div className="text-center text-on-surface-variant">No public repositories found.</div>
                 ) : (
                   repos.map(repo => (
                     <li key={repo.id} className="flex justify-between items-center group border-b border-outline/30 pb-2">
                       <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block w-full cursor-pointer">
                         <span className="font-label-caps text-label-caps font-bold group-hover:text-primary transition-colors">{repo.name}</span>
                         <div className="text-xs text-on-surface-variant">Updated {getTimeAgo(repo.updated_at)}</div>
                       </a>
                       <span className="flex items-center gap-1 text-sm font-bold shrink-0">
                         <span className="w-3 h-3 rounded-full border border-outline" style={{ backgroundColor: languageColors[repo.language] || '#ccc' }}></span>
                         {repo.language || 'N/A'}
                       </span>
                     </li>
                   ))
                 )}
               </ul>
               <div className="mt-6 text-center">
                 <a href="https://github.com/debalin-devv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 bg-on-surface text-white hover:bg-primary hover:text-on-primary font-bold py-3 transition-colors border-2 border-on-surface">
                   View Full Profile <span className="material-symbols-outlined text-sm">arrow_forward</span>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
