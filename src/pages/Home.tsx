import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { NewHeroSection } from '../components/sections';

// Lazy load below-the-fold sections
const TheApexMethodSection = lazy(() => import('../components/sections').then(module => ({ default: module.TheApexMethodSection })));
const WhatsInsideSection = lazy(() => import('../components/sections').then(module => ({ default: module.WhatsInsideSection })));
const TwoCommunitiesSection = lazy(() => import('../components/sections').then(module => ({ default: module.TwoCommunitiesSection })));
const LibrarySection = lazy(() => import('../components/sections').then(module => ({ default: module.LibrarySection })));
const ProjectsSection = lazy(() => import('../components/sections').then(module => ({ default: module.ProjectsSection })));
const TestimonialsSection = lazy(() => import('../components/sections').then(module => ({ default: module.TestimonialsSection })));
const CoachesSection = lazy(() => import('../components/sections').then(module => ({ default: module.CoachesSection })));
const FaqSection = lazy(() => import('../components/sections').then(module => ({ default: module.FaqSection })));
const FinalCtaSection = lazy(() => import('../components/sections').then(module => ({ default: module.FinalCtaSection })));

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <SEO />
      <NewHeroSection />
      <Suspense fallback={<div className="w-full h-32 flex items-center justify-center text-apex-gray"><div className="w-8 h-8 border-2 border-apex-red border-t-transparent rounded-full animate-spin"></div></div>}>
        <TheApexMethodSection />
        <WhatsInsideSection />
        <TwoCommunitiesSection />
        <LibrarySection />
        <ProjectsSection />
        <TestimonialsSection />
        <CoachesSection />
        <FaqSection />
        <FinalCtaSection />
      </Suspense>
    </>
  );
}
