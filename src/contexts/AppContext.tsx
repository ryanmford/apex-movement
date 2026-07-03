import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Movement, Project, BlogPost } from '../types';
import { CONFIG, GIF_POOL } from '../data';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  scrolled: boolean;
  movements: Movement[];
  projects: Project[];
  isLoadingMovements: boolean;
  activeManual: Movement | null;
  setActiveManual: (m: Movement | null) => void;
  activeProject: Project | null;
  setActiveProject: (p: Project | null) => void;
  activeBlogPost: BlogPost | null;
  setActiveBlogPost: (b: BlogPost | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeManual, setActiveManual] = useState<Movement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  const [movements, setMovements] = useState<Movement[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingMovements, setIsLoadingMovements] = useState(true);

  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 && !scrolled) setScrolled(true);
      if (window.scrollY <= 40 && scrolled) setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const fetchSheetData = async (sheetName: string) => {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${sheetName}`);
        const text = await response.text();
        const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
        if (!match) return null;
        return JSON.parse(match[1]);
      } catch (e) { return null; }
    };

    const loadData = async () => {
      const jsonData = await fetchSheetData('movements');
      if (jsonData) {
        const rows = jsonData.table.rows;
        let parsed = rows.map((row: any) => ({
          title: row.c[1]?.v || "Untitled Movement",
          law: row.c[0]?.v || "Efficiency is Truth",
          gif: row.c[2]?.v || GIF_POOL[0],
          intro: row.c[3]?.v || "No intro provided.",
          why: row.c[4]?.v || "Efficiency optimization.",
          how: (row.c[5]?.v || "").toString().split(',').map((item: string) => item.trim()).filter(Boolean),
          level: row.c[13]?.v || "Fundamental",
        }));
        setMovements(parsed.sort(() => Math.random() - 0.5));
      } else {
        setMovements([{ title: "the landing", law: "Gravity is constant.", gif: GIF_POOL[0], intro: "Impact absorption basics.", how: ["Balls of feet", "Quiet"], level: "level 1" }]);
      }
      setIsLoadingMovements(false);

      const jsonProj = await fetchSheetData('projects');
      if (jsonProj) {
        const rows = jsonProj.table.rows;
        let parsedProjects = rows.map((row: any) => ({
          year: row.c[0]?.v?.toString() || "20XX",
          title: row.c[1]?.v || "Untitled Project",
          description: row.c[2]?.v || "No description provided.",
          detail: row.c[3]?.v || row.c[2]?.v || "No details available.",
          link: row.c[4]?.v || null,
          gif: row.c[5]?.v || GIF_POOL[0]
        }));
        setProjects(parsedProjects);
      } else {
        setProjects([
            { year: "2006", title: "Apex Denver", description: "Founded the original standard.", detail: "The world's first dedicated parkour gym.", gif: GIF_POOL[0], link: null },
            { year: "2025", title: "Skool App", description: "Apex Skool of Movement.", detail: "Centralizing our 20-year archive.", gif: GIF_POOL[2], link: CONFIG.skoolLink },
        ]);
      }
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, scrolled,
      movements, projects, isLoadingMovements,
      activeManual, setActiveManual,
      activeProject, setActiveProject,
      activeBlogPost, setActiveBlogPost
    }}>
      {children}
    </AppContext.Provider>
  );
};
