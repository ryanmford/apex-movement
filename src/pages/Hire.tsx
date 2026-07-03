import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { ArrowRight, ExternalLink, Menu, X, ChevronLeft, Plus, RotateCcw, CircleCheck, Zap, Users, Target, Layers, Calendar, Activity, Building, Camera, GraduationCap, Loader2, Sun, Moon, Instagram, Youtube, Twitter, ChevronRight, Dna, Scale, Globe, DraftingCompass, Torus, BookOpen, Info, Newspaper, ShoppingBag, Move, ShieldAlert, ArrowUpCircle, HardHat, FileText, Library, FolderKanban } from 'lucide-react';
import { CONFIG, BIOS, PRODUCTS, BLOG_POSTS, GIF_POOL } from '../data';
import { Button, Heading, Badge, Image } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';

const UI = { Button, Heading, Badge, Image };

export default function Hire() {
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
    
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto overflow-hidden animate-in fade-in duration-1000">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <UI.Heading>hire apex.</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 break-words mx-auto md:mx-0">Deployment services for the elite movement sector.</p>
      </div>
      <div className={`grid md:grid-cols-2 gap-px bg-current border-2 md:border-4 border-current mb-24 md:mb-32 transition-all duration-700 ${theme === 'dark' ? 'shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] md:shadow-[40px_40px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] md:shadow-[40px_40px_0px_0px_rgba(0,0,0,1)]'}`}>
        {[
            { id: 'consulting', title: 'Spatial Architecture', icon: <DraftingCompass size={32} />, detail: 'Biomechanical auditing and facility design.' },
            { id: 'media', title: 'Media Production', icon: <Camera size={32} />, detail: 'Stunt coordination and technical performance oversight.' },
            { id: 'gym', title: 'Facility Logic', icon: <Building size={32} />, detail: 'Structural logistics and specialized equipment procurement.' },
            { id: 'cert', title: 'Group Training', icon: <GraduationCap size={32} />, detail: 'Coaching certification for institutional athletic programs.' },
        ].map((cat, i) => (
            <button key={i} onClick={() => {
                window.location.href = `mailto:apexmovement@gmail.com?subject=Inquiry: ${cat.title}`;
              }} 
              className={`p-8 sm:p-12 md:p-16 text-left transition-all group cursor-pointer border-none active:scale-[0.98]
                ${theme === 'dark' 
                  ? 'bg-black text-white hover:bg-white hover:text-black' 
                  : 'bg-white text-black hover:bg-black hover:text-white'}`}
            >
                <div className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left duration-500">{cat.icon}</div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black lowercase tracking-tighter mb-4 md:mb-6 leading-none break-words">{cat.title}</h4>
                <p className="text-base md:text-xl lowercase leading-relaxed opacity-40 font-medium group-hover:opacity-60 transition-opacity">{cat.detail}</p>
            </button>
        ))}
      </div>
    </section>
  
  );
}
