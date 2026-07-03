import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Movement, Project } from '../types';
import { fetchMovements, fetchProjects } from '../lib/googleSheets';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  movements: Movement[];
  projects: Project[];
  isLoadingMovements: boolean;
  activeManual: Movement | null;
  setActiveManual: (m: Movement | null) => void;
  activeProject: Project | null;
  setActiveProject: (p: Project | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeManual, setActiveManual] = useState<Movement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [movements, setMovements] = useState<Movement[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingMovements, setIsLoadingMovements] = useState(true);

  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), []);

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      setIsLoadingMovements(true);
      const [fetchedMovements, fetchedProjects] = await Promise.all([
        fetchMovements(),
        fetchProjects()
      ]);
      
      if (mounted) {
        setMovements(fetchedMovements);
        setProjects(fetchedProjects);
        setIsLoadingMovements(false);
      }
    };
    loadData();
    return () => { mounted = false; };
  }, []);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      movements, projects, isLoadingMovements,
      activeManual, setActiveManual,
      activeProject, setActiveProject
    }}>
      {children}
    </AppContext.Provider>
  );
};
