import { ReactNode } from 'react';

export interface SocialLink {
  key: string;
  url: string;
  icon?: ReactNode;
}

export interface Config {
  brand: string;
  tagline: string;
  subline: string;
  cta: string;
  skoolLink: string;
  merchLink: string;
  sheetId: string;
  socials: SocialLink[];
}

export interface Bio {
  name: string;
  role: string;
  story: string;
  focus: string[];
  metrics: string;
  gif: string;
}

export interface Product {
  id: string;
  title: string;
  blurb: string;
  cta: string;
  tag: string;
  gif: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  preview: string;
  gif: string;
}

export interface Movement {
  title: string;
  law: string;
  gif: string;
  intro: string;
  how: string[];
  why?: string;
  level: string;
}

export interface Project {
  year: string;
  title: string;
  description: string;
  detail: string;
  link: string | null;
  gif: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  scrolled: boolean;
}

export interface DataContextType {
  movements: Movement[];
  projects: Project[];
  isLoadingMovements: boolean;
}
