import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  NewHeroSection, 
  TheApexMethodSection, 
  WhatsInsideSection,
  TwoCommunitiesSection,
  LibrarySection,
  TestimonialsSection,
  CoachesSection,
  FaqSection,
  FinalCtaSection
} from '../components/sections';

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
      <TheApexMethodSection />
      <WhatsInsideSection />
      <TwoCommunitiesSection />
      <LibrarySection />
      <TestimonialsSection />
      <CoachesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
