import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Modal } from './Modal';
import { Badge, Button, Image } from './ui';
import { CONFIG } from '../data';
import { ExternalLink } from 'lucide-react';

export function GlobalModals() {
  const { 
    theme, 
    activeManual, setActiveManual,
    activeProject, setActiveProject
  } = useAppContext();

  return (
    <>
      <Modal isOpen={!!activeManual} onClose={() => setActiveManual(null)} theme={theme}>
        {activeManual && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 md:mb-10" theme={theme}>{activeManual.level || 'Fundamental'}</Badge>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black lowercase tracking-tighter mb-4 md:mb-6 leading-none break-words">
                {activeManual.title}
              </h2>
              <div className="text-lg md:text-xl font-medium opacity-60 italic lowercase mb-8 md:mb-12">
                "{activeManual.law}"
              </div>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 opacity-50">The Core Directive</h4>
                  <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed lowercase">{activeManual.intro}</p>
                </div>
                {activeManual.why && (
                  <div>
                    <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 opacity-50">Structural Purpose</h4>
                    <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed lowercase">{activeManual.why}</p>
                  </div>
                )}
                {activeManual.how && activeManual.how.length > 0 && (
                  <div>
                    <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 opacity-50">Kinetic Sequence</h4>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium opacity-80 lowercase">
                      {activeManual.how.map((step, i) => (
                        <li key={i} className="flex gap-4"><span className="opacity-30">{i + 1}.</span> {step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Button 
                onClick={() => window.open(CONFIG.skoolLink, '_blank')} 
                className="mt-8 md:mt-12 w-full"
                theme={theme}
              >
                Access Full Training Protocol <ExternalLink size={16} />
              </Button>
            </div>
            <div className={`order-1 lg:order-2 border-4 border-current aspect-square lg:aspect-auto ${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-100'}`}>
              <Image src={activeManual.gif} alt={activeManual.title} coloredOnHover={true} />
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)} theme={theme}>
        {activeProject && (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/2">
              <Badge className="mb-6 md:mb-10" theme={theme}>{activeProject.year}</Badge>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black lowercase tracking-tighter mb-4 md:mb-6 leading-none break-words">
                {activeProject.title}
              </h2>
              <div className="space-y-6 md:space-y-8">
                <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed lowercase">{activeProject.detail || activeProject.description}</p>
              </div>
              {activeProject.link && (
                <Button 
                  onClick={() => window.open(activeProject.link!, '_blank')} 
                  className="mt-8 md:mt-12 w-full md:w-auto"
                  theme={theme}
                >
                  View Archive <ExternalLink size={16} />
                </Button>
              )}
            </div>
            <div className={`md:w-1/2 border-4 border-current aspect-[4/3] md:aspect-auto ${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-100'}`}>
              <Image src={activeProject.gif} alt={activeProject.title} coloredOnHover={true} />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
