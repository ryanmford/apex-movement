import { Movement, Project } from '../types';
import { CONFIG, GIF_POOL } from '../data';

const CACHE_TTL = 1000 * 60 * 60; // 1 hour

async function fetchSheetData(sheetName: string) {
  const cacheKey = `apex_data_${sheetName}`;
  const cached = sessionStorage.getItem(cacheKey);
  
  if (cached) {
    try {
      const parsedCache = JSON.parse(cached);
      if (Date.now() - parsedCache.timestamp < CACHE_TTL) {
        return parsedCache.data;
      }
    } catch (e) {
      sessionStorage.removeItem(cacheKey);
    }
  }

  try {
    const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${sheetName}`);
    const text = await response.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (!match) return null;
    
    const data = JSON.parse(match[1]);
    sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
    return data;
  } catch (e) { 
    if (cached) {
      try {
        return JSON.parse(cached).data;
      } catch (e2) {}
    }
    return null; 
  }
}

export async function fetchMovements(): Promise<Movement[]> {
  const jsonData = await fetchSheetData('movements');
  if (jsonData) {
    const rows = jsonData.table.rows;
    const parsed = rows.map((row: any) => ({
      title: row.c[1]?.v || "Untitled Movement",
      law: row.c[0]?.v || "Efficiency is Truth",
      gif: row.c[2]?.v || GIF_POOL[0],
      intro: row.c[3]?.v || "No intro provided.",
      why: row.c[4]?.v || "Efficiency optimization.",
      how: (row.c[5]?.v || "").toString().split(',').map((item: string) => item.trim()).filter(Boolean),
      level: row.c[13]?.v || "Fundamental",
    }));
    return parsed.sort(() => Math.random() - 0.5);
  }
  return [{ 
    title: "the landing", 
    law: "Gravity is constant.", 
    gif: GIF_POOL[0], 
    intro: "Impact absorption basics.", 
    why: "Efficiency optimization.",
    how: ["Balls of feet", "Quiet"], 
    level: "level 1" 
  }];
}

export async function fetchProjects(): Promise<Project[]> {
  const jsonProj = await fetchSheetData('projects');
  if (jsonProj) {
    const rows = jsonProj.table.rows;
    return rows.map((row: any) => ({
      year: row.c[0]?.v?.toString() || "20XX",
      title: row.c[1]?.v || "Untitled Project",
      description: row.c[2]?.v || "No description provided.",
      detail: row.c[3]?.v || row.c[2]?.v || "No details available.",
      link: row.c[4]?.v || null,
      gif: row.c[5]?.v || GIF_POOL[0]
    }));
  }
  return [
    { year: "2006", title: "Apex Denver", description: "Founded the original standard.", detail: "The world's first dedicated parkour gym.", gif: GIF_POOL[0], link: null },
    { year: "2025", title: "Skool App", description: "Apex Skool of Movement.", detail: "Centralizing our 20-year archive.", gif: GIF_POOL[2], link: CONFIG.skoolLink },
  ];
}
