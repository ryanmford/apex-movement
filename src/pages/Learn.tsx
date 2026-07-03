import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { ArrowRight, ExternalLink, Menu, X, ChevronLeft, Plus, RotateCcw, CircleCheck, Zap, Users, Target, Layers, Calendar, Activity, Building, Camera, GraduationCap, Loader2, Sun, Moon, Instagram, Youtube, Twitter, ChevronRight, Dna, Scale, Globe, DraftingCompass, Torus, BookOpen, Info, Newspaper, ShoppingBag, Move, ShieldAlert, ArrowUpCircle, HardHat, FileText, Library, FolderKanban } from 'lucide-react';
import { CONFIG, BIOS, PRODUCTS, BLOG_POSTS, GIF_POOL } from '../data';
import { Button, Heading, Badge, Image } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';

const UI = { Button, Heading, Badge, Image };

export default function Learn() {
  const { theme, movements, projects, isLoadingMovements, activeManual, setActiveManual, activeProject, setActiveProject, activeBlogPost, setActiveBlogPost } = useAppContext();
  
  // Local state for Home mostly
  const [hasExpandedLibrary, setHasExpandedLibrary] = useState(false);
  const [libraryDisplayCount, setLibraryDisplayCount] = useState(3);
  const [visibleProjectsRow, setVisibleProjectsRow] = useState(1);
  const projectsPerRow = 4;
  
  const [pathStep, setPathStep] = useState(0); 
  const [pathSelection, setPathSelection] = useState({ style: null, feedback: null });
  const [pathHistory, setPathHistory] = useState([0]);

  const navigate = useNavigate();
  const openSkool = useCallback(() => window.open(CONFIG.skoolLink, '_blank'), []);
  
  const handleLibraryExpansion = useCallback(() => {
    if (!hasExpandedLibrary) {
      setHasExpandedLibrary(true);
      setLibraryDisplayCount(9); 
    } else {
      openSkool(); 
    }
  }, [hasExpandedLibrary, openSkool]);

  const getRecommendation = useCallback(() => {
    const { style, feedback } = pathSelection as any;
    if (feedback === 'personalized') return PRODUCTS.find(p => p.id === 'remote');
    if (style === 'armor') return PRODUCTS.find(p => p.id === 'strength');
    if (style === 'skills') return PRODUCTS.find(p => p.id === '101');
    if (style === 'deep-dive') return PRODUCTS.find(p => p.id === 'power');
    if (style === 'coach') return PRODUCTS.find(p => p.id === 'cert');
    return PRODUCTS[0];
  }, [pathSelection]);

  const updatePath = useCallback((nextStep: number, selections: any = {}) => {
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
    
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="mb-16 md:mb-24 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <UI.Heading>learn.</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 max-w-3xl leading-snug break-words mx-auto md:mx-0">
          The technical hierarchy of movement. Physics-based training protocols and the Apex Standard.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {PRODUCTS.map((product, i) => (
          <div key={i} className="group grid lg:grid-cols-12 gap-8 md:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="aspect-[4/5] w-full max-w-sm sm:max-w-md border-4 border-current bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative shadow-[12px_12px_0px_0px_rgba(current,1)] group-hover:shadow-none transition-all duration-500">
                <UI.Image src={product.gif} alt={product.title} coloredOnHover={true} />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <UI.Badge theme={theme} className="opacity-40">{product.tag}</UI.Badge>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">Protocol 0{i+1}</span>
                </div>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black lowercase tracking-tighter leading-[0.85] break-words">
                  {product.title}
                </h3>
              </div>
              
              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <p className="text-lg md:text-3xl opacity-60 lowercase leading-relaxed font-medium">
                  {product.blurb}
                </p>
              </div>

              <UI.Button onClick={openSkool} theme={theme} className="w-full sm:w-auto !py-6 md:!py-8 !px-12 md:!px-16">
                Master Protocol <ArrowRight size={18} />
              </UI.Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
}
