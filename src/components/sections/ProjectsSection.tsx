import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Badge } from '../ui';
import { useAppContext } from '../../contexts/AppContext';

export function ProjectsSection() {
  const { theme, projects, setActiveProject } = useAppContext();
  
  const [visibleProjectsRow, setVisibleProjectsRow] = useState(1);
  const projectsPerRow = 4;

  return (
    <section id="arc" className={`${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-black text-white'} py-24 md:py-40 px-6 overflow-hidden scroll-mt-24 transition-colors duration-1000`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <div className="space-y-4 md:space-y-6">
            <Badge className="text-white border-white/20">Chronicle</Badge>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter lowercase leading-none mb-4">projects.</h2>
            <p className="text-base md:text-xl opacity-40 lowercase italic font-medium">Universal proof of work across two decades of movement science.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {projects.slice(0, visibleProjectsRow * projectsPerRow).map((project, index) => (
            <div key={index} onClick={() => setActiveProject(project)} className="p-8 md:p-12 bg-black hover:bg-white/[0.04] transition-all group cursor-pointer active:scale-[0.98] border-white/10 animate-in fade-in duration-700" style={{ animationDelay: `${(index % projectsPerRow) * 80}ms` }}>
              <div className="text-[10px] md:text-[11px] font-bold opacity-30 mb-6 md:mb-8 uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20 group-hover:bg-white group-hover:opacity-100 transition-all"></div>
                 {project.year}
              </div>
              <h3 className="text-2xl md:text-4xl font-black lowercase mb-4 md:mb-6 tracking-tight leading-[0.9] flex items-center justify-between gap-4 break-words">
                  {project.title}
                  <Plus size={18} className="shrink-0 opacity-20 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
              </h3>
              <p className="text-xs md:text-base opacity-40 leading-relaxed lowercase line-clamp-3 font-medium group-hover:opacity-60 transition-opacity">{project.description}</p>
            </div>
          ))}
        </div>

        {projects.length > visibleProjectsRow * projectsPerRow && (
          <button onClick={() => setVisibleProjectsRow(prev => prev + 1)} className="mt-12 md:mt-20 mx-auto flex items-center justify-center min-h-[44px] gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30 hover:opacity-100 active:scale-95 cursor-pointer p-6 md:p-8 transition-all group border-none bg-transparent">
             <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
             view more history
             <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
          </button>
        )}

        {visibleProjectsRow > 1 && projects.length <= visibleProjectsRow * projectsPerRow && (
           <button onClick={() => setVisibleProjectsRow(1)} className="mt-12 md:mt-20 mx-auto flex items-center justify-center min-h-[44px] gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30 hover:opacity-100 active:scale-95 cursor-pointer p-6 md:p-8 transition-all group border-none bg-transparent">
              <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
              collapse history
              <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
           </button>
        )}
      </div>
    </section>
  );
}
