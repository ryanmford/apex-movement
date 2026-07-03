import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionHeader, ExpandButton } from '../ui';
import { useAppContext } from '../../contexts/AppContext';

export function ProjectsSection() {
  const { theme, projects, setActiveProject } = useAppContext();
  
  const [visibleProjectsRow, setVisibleProjectsRow] = useState(1);
  const projectsPerRow = 4;

  return (
    <section id="arc" className={`${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-white border-y-2 border-black/5 text-black'} py-24 md:py-40 px-6 overflow-hidden scroll-mt-24 transition-colors duration-1000`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <SectionHeader 
            badge="Chronicle" 
            title="projects." 
            description="Universal proof of work across two decades of movement science." 
            theme={theme} 
          />
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px ${theme === 'dark' ? 'bg-white/10 border border-white/10' : 'bg-black/10 border border-black/10'} overflow-hidden`}>
          {projects.slice(0, visibleProjectsRow * projectsPerRow).map((project, index) => (
            <div key={index} onClick={() => setActiveProject(project)} className={`p-8 md:p-12 ${theme === 'dark' ? 'bg-zinc-950 hover:bg-white/[0.04]' : 'bg-white hover:bg-black/[0.02]'} transition-all group cursor-pointer active:scale-[0.98] animate-in fade-in duration-700`} style={{ animationDelay: `${(index % projectsPerRow) * 80}ms` }}>
              <div className="text-[10px] md:text-[11px] font-bold opacity-70 mb-6 md:mb-8 uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'} opacity-50 group-hover:opacity-100 transition-all`}></div>
                 {project.year}
              </div>
              <h3 className="text-2xl md:text-4xl font-black lowercase mb-4 md:mb-6 tracking-tight leading-[0.9] flex items-center justify-between gap-4 break-words">
                  {project.title}
                  <Plus size={18} className="shrink-0 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
              </h3>
              <p className="text-xs md:text-base opacity-70 leading-relaxed lowercase line-clamp-3 font-medium group-hover:opacity-100 transition-opacity">{project.description}</p>
            </div>
          ))}
        </div>

        {projects.length > projectsPerRow && (
          <ExpandButton 
            expanded={visibleProjectsRow > 1 && projects.length <= visibleProjectsRow * projectsPerRow}
            onExpand={() => setVisibleProjectsRow(prev => prev + 1)}
            onCollapse={() => setVisibleProjectsRow(1)}
            expandText="view more history"
            collapseText="collapse history"
          />
        )}
      </div>
    </section>
  );
}
