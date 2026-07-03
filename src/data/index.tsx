import React from "react";
import { Instagram, Youtube, Twitter } from "lucide-react";
export const GIF_POOL = [
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/6b32f8106414469b8c5a2912216ab78df1df0c5669fb463fbd4018a2d95142a2.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/7e442be4b6c24198a081b90338bc2f839dec9e3bd2354297a58e085da53ebacf.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/5f256ddb9a5f4b9cb26db788a3bf0d30dd408047109545d8844ae7bc46cbefca.gif", 
];

export const CONFIG = {
  brand: "apex movement",
  tagline: "move better in the real world.",
  subline: "efficiency is the highest form of truth.",
  cta: "JOIN THE COMMUNITY",
  skoolLink: "https://www.skool.com/apexmovement/about",
  merchLink: "https://shop.apexmovement.com/",
  sheetId: "14MMo3dYdQC96YMTsL0MhZEhuCOCl4c8JVw0C6TuH_fs", 
  socials: [
    { key: "instagram", url: "https://instagram.com/apexmovement", icon: <Instagram size={18}/> },
    { key: "youtube", url: "https://youtube.com/apexmovement", icon: <Youtube size={18}/> },
    { key: "x", url: "https://x.com/apexmvmnt", icon: <Twitter size={18}/> }
  ]
};

export const BIOS = [
  {
    name: "Apex Movement",
    role: "The Collective Standard",
    story: "Founded in 2006, Apex is a movement logic collective dedicated to extracting the universal laws of physical performance. We don't teach style; we teach the architecture of human output.",
    focus: ["Biomechanics", "Kinetic Chains", "Physics First"],
    metrics: "Est. 2006",
    gif: GIF_POOL[2]
  },
  {
    name: "Ryan Ford",
    role: "The Movement Architect",
    story: "Ryan founded the first dedicated parkour gym in the Western Hemisphere in 2006. Author of 'Parkour Strength Training', he has spent two decades decoding the physiological requirements of explosive movement.",
    focus: ["Anatomy", "Plyometric Load", "Pedagogy"],
    metrics: "Founder",
    gif: GIF_POOL[0]
  }
];

export const PRODUCTS = [
  { 
    id: "101", 
    title: "parkour 101", 
    blurb: "The Comprehensive Architecture. A structured deconstruction of 150+ foundational mechanics. Eliminate the trial-and-error gap and master the primary kinetic chains of parkour.", 
    cta: "master the basics", 
    tag: "foundations",
    gif: GIF_POOL[0] 
  },
  { 
    id: "strength", 
    title: "parkour strength", 
    blurb: "Structural Prep & Resilience. Specific physical preparation (SPP) for the parkour athlete. Build the 'anatomical armor' required to sustain high-impact loading and bone density adaptation.", 
    cta: "build armor", 
    tag: "prep",
    gif: GIF_POOL[1] 
  },
  { 
    id: "power", 
    title: "power program", 
    blurb: "Verticality & Force Production. The Power^Up Protocol. Optimize high-threshold motor unit recruitment to maximize explosive vertical and horizontal output for elite performance.", 
    cta: "maximize force", 
    tag: "power",
    gif: GIF_POOL[2] 
  },
  { 
    id: "climb", 
    title: "climb-up blueprint", 
    blurb: "The Mechanical Solution. A deep-dive blueprint for mastering the wall-to-ledge transition. Optimize leverage, pulling mechanics, and transit speed to solve the wall.", 
    cta: "solve the wall", 
    tag: "climbing",
    gif: GIF_POOL[0] 
  },
  { 
    id: "remote", 
    title: "remote training", 
    blurb: "Biomechanical Auditing. Direct remote oversight. One-on-one video analysis of your movement geometry with individualized programming parameters and custom coaching protocols.", 
    cta: "get audited", 
    tag: "individualized",
    gif: GIF_POOL[1] 
  },
  { 
    id: "cert", 
    title: "coaching standards", 
    blurb: "The APCC Standard. APEX Parkour Coaching Certification. Transition from intuitive movement to formal pedagogy. Master the science of instructional logic and joined a global network.", 
    cta: "get certified", 
    tag: "professional",
    gif: GIF_POOL[2] 
  }
];

export const BLOG_POSTS = [
  { id: "post-1", date: "MAR 2024", title: "The Physics of Impact.", preview: "Why training exclusively on mats creates a 'sensory gap' that leads to injury. Understanding environmental force.", gif: GIF_POOL[0] },
  { id: "post-2", date: "FEB 2024", title: "Quantifying Power.", preview: "Moving away from subjective aesthetics toward objective metrics in parkour competition and training.", gif: GIF_POOL[2] },
  { id: "post-3", date: "JAN 2024", title: "Archival Intelligence.", preview: "Why we moved our 20-year library to Skool to foster a decentralized, logic-driven community.", gif: GIF_POOL[1] }
];
