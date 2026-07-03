import React, { useState, useCallback } from 'react';
import { ChevronLeft, RotateCcw, Dna, Scale, Activity, Target, Users, Layers, Zap, CircleCheck } from 'lucide-react';
import { Badge, Button } from '../ui';
import { useAppContext } from '../../contexts/AppContext';
import { CONFIG, PRODUCTS } from '../../data';

export function PathfinderSection() {
  const { theme } = useAppContext();
  
  const [pathStep, setPathStep] = useState(0); 
  const [pathSelection, setPathSelection] = useState<{ style: string | null, feedback: string | null }>({ style: null, feedback: null });
  const [pathHistory, setPathHistory] = useState([0]);

  const openSkool = useCallback(() => window.open(CONFIG.skoolLink, '_blank'), []);

  const getRecommendation = useCallback(() => {
    const { style, feedback } = pathSelection;
    if (feedback === 'personalized') return PRODUCTS.find(p => p.id === 'remote');
    if (style === 'armor') return PRODUCTS.find(p => p.id === 'strength');
    if (style === 'skills') return PRODUCTS.find(p => p.id === '101');
    if (style === 'deep-dive') return PRODUCTS.find(p => p.id === 'power');
    if (style === 'coach') return PRODUCTS.find(p => p.id === 'cert');
    return PRODUCTS[0];
  }, [pathSelection]);

  const updatePath = useCallback((nextStep: number, selections: Partial<{ style: string | null, feedback: string | null }> = {}) => {
    setPathStep(nextStep);
    setPathHistory(prev => [...prev, nextStep]);
    if (Object.keys(selections).length > 0) {
      setPathSelection(prev => ({ ...prev, ...selections }));
    }
  }, []);

  const undoPath = useCallback(() => {
    if (pathHistory.length > 1) {
      const newHistory = [...pathHistory];
      newHistory.pop();
      setPathStep(newHistory[newHistory.length - 1]);
      setPathHistory(newHistory);
    }
  }, [pathHistory]);

  const resetPathfinder = useCallback(() => {
    setPathStep(0);
    setPathSelection({ style: null, feedback: null });
    setPathHistory([0]);
  }, []);

  return (
    <section id="pathfinder" className="py-24 md:py-40 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
          <Badge theme={theme}>Anatomical Audit</Badge>
          <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black tracking-tighter lowercase leading-none break-words">find your path.</h2>
        </div>

        <div className={`${theme === 'dark' ? 'bg-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[32px_32px_0px_0px_rgba(255,255,255,1)] border-white' : 'bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[32px_32px_0px_0px_rgba(0,0,0,1)] border-black'} border-4 p-5 sm:p-10 md:p-20 min-h-[450px] md:min-h-[680px] flex flex-col relative overflow-hidden transition-all duration-700`}>
          {pathStep > 0 && (
            <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-3 md:gap-6 z-10">
              <button onClick={undoPath} disabled={pathHistory.length <= 1} className="w-12 h-12 md:w-14 md:h-14 min-w-[48px] min-h-[48px] border-2 border-current flex items-center justify-center hover:bg-current hover:text-white active:scale-95 transition-all disabled:opacity-10 cursor-pointer rounded-full group">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button onClick={resetPathfinder} className="w-12 h-12 md:w-14 md:h-14 min-w-[48px] min-h-[48px] border-2 border-current flex items-center justify-center hover:bg-current hover:text-white active:scale-95 transition-all cursor-pointer rounded-full group">
                <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>
          )}
          <div className="flex-grow flex flex-col justify-center">
            {pathStep === 0 && (
              <div className="text-center max-w-xl mx-auto py-8 md:py-0 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-current rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12">
                  <Dna size={32} className="animate-pulse" />
                </div>
                <p className="text-lg md:text-2xl font-medium lowercase opacity-60 mb-10 md:mb-14 leading-relaxed">
                  Identify the optimal entry point for your specific physiological state and movement objectives.
                </p>
                <Button onClick={() => updatePath(1)} className="w-full !py-6 md:!py-8" theme={theme}>Assess Movement</Button>
              </div>
            )}
            {pathStep === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black lowercase tracking-tighter mb-8 md:mb-16 text-center">Identify your state.</h3>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                  {[
                    { key: 'armor', icon: <Scale size={20} />, label: 'structural prep.', sub: 'Build foundation via connective tissue.' },
                    { key: 'skills', icon: <Activity size={20} />, label: "mechanical mastery.", sub: 'Master kinetic chains and flight logic.' },
                    { key: 'deep-dive', icon: <Target size={20} />, label: "force production.", sub: 'Optimize power output and plyometrics.' },
                    { key: 'coach', icon: <Users size={20} />, label: "pedagogy training.", sub: 'Shift from movement to instruction.' },
                  ].map(opt => (
                    <button 
                      key={opt.key} 
                      onClick={() => updatePath(2, { style: opt.key })} 
                      className={`p-6 md:p-10 border-2 md:border-4 border-current transition-all text-left group cursor-pointer active:scale-[0.98] 
                        ${theme === 'dark' 
                          ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                          : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                    >
                      <span className="mb-4 md:mb-6 opacity-30 group-hover:opacity-100 block transition-all scale-110 md:scale-150 origin-left">{opt.icon}</span>
                      <h4 className="text-xl md:text-3xl font-black lowercase mb-1 md:mb-4 tracking-tighter">{opt.label}</h4>
                      <p className="text-xs opacity-50 lowercase leading-tight font-medium">{opt.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {pathStep === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black lowercase tracking-tighter mb-10 md:mb-16">Select delivery mode.</h3>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-10 max-w-3xl mx-auto">
                  <button 
                    onClick={() => updatePath(3, { feedback: 'self-paced' })} 
                    className={`p-8 md:p-12 border-2 md:border-4 border-current transition-all text-left group cursor-pointer 
                      ${theme === 'dark' 
                        ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                        : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                  >
                    <Layers size={28} className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100" />
                    <h4 className="text-xl md:text-3xl font-black lowercase mb-2 md:mb-4 tracking-tighter">self-guided manual.</h4>
                    <p className="text-[10px] md:text-sm opacity-50 lowercase">Independent study of the movement vault.</p>
                  </button>
                  <button 
                    onClick={() => updatePath(3, { feedback: 'personalized' })} 
                    className={`p-8 md:p-12 border-2 md:border-4 border-current transition-all text-left group cursor-pointer active:scale-[0.98] 
                      ${theme === 'dark' 
                        ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                        : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                  >
                    <Zap size={28} className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100" />
                    <h4 className="text-xl md:text-3xl font-black lowercase mb-2 md:mb-4 tracking-tighter">biomechanical analysis.</h4>
                    <p className="text-[10px] md:text-sm opacity-50 lowercase">Direct video feedback and anatomical oversight.</p>
                  </button>
                </div>
              </div>
            )}
            {pathStep === 3 && (
              <div className="animate-in zoom-in-95 duration-700 text-center px-4">
                <div className="flex justify-center mb-8 md:mb-12">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-current text-white rounded-full flex items-center justify-center animate-bounce shadow-xl">
                    <CircleCheck size={32} />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter lowercase mb-10 md:mb-16 break-words">{getRecommendation()?.title}</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={openSkool} className="w-full max-w-sm !py-6 md:!py-8" theme={theme}>Access Protocol</Button>
                  <Button onClick={undoPath} primary={false} className="w-full max-w-sm !py-6 md:!py-8" theme={theme}>Change Mode</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
