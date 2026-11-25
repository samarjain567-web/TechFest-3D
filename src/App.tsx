import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EvolutionOfIdeas } from './components/EvolutionOfIdeas';
import { TechnologyFrontiers } from './components/TechnologyFrontiers';
import { FestivalExperience } from './components/FestivalExperience';
import { Timeline } from './components/Timeline';
import { FinalExperience } from './components/FinalExperience';
import { Footer } from './components/Footer';
import { EngineScene } from './scenes/EngineScene';
import './styles/global.css';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Check viewport dimensions
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // WebGL asset pre-load completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // GSAP ScrollTrigger for 3D trajectory tracking and section reveals
  useEffect(() => {
    if (isLoading) return;

    // 1. Master scroll progress tracker for 3D Camera Rig
    const mainTrigger = ScrollTrigger.create({
      trigger: mainRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    // 2. Section reveal triggers with editorial stagger
    const sections = document.querySelectorAll('section');
    const triggers: ScrollTrigger[] = [];

    sections.forEach((sec) => {
      const tr = ScrollTrigger.create({
        trigger: sec,
        start: 'top 80%',
        onEnter: () => {
          sec.classList.add('active');
        },
      });
      triggers.push(tr);
    });

    return () => {
      mainTrigger.kill();
      triggers.forEach((t) => t.kill());
    };
  }, [isLoading]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* 1. Master Loading Curtain */}
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#05080d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
          }}
        >
          {/* Dual concentric astrolabe loader */}
          <div style={{ position: 'relative', width: '70px', height: '70px' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                border: '2px solid rgba(223, 177, 91, 0.2)',
                borderTopColor: '#dfb15b',
                borderRadius: '50%',
                animation: 'spinClockwise 1.4s infinite linear',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '8px',
                border: '1.5px solid rgba(56, 189, 248, 0.2)',
                borderBottomColor: '#38bdf8',
                borderRadius: '50%',
                animation: 'spinCounterClockwise 2.0s infinite linear',
              }}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              className="font-serif"
              style={{
                fontSize: '1.3rem',
                letterSpacing: '0.22em',
                color: 'var(--parchment)',
                marginBottom: '0.4rem',
              }}
            >
              THE AETHER ENGINE
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: 'var(--gold-primary)',
              }}
            >
              CALIBRATING 3D ORBITS • TECHFEST IIT BOMBAY 2026
            </div>
          </div>

          <style>{`
            @keyframes spinClockwise {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes spinCounterClockwise {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(-360deg); }
            }
          `}</style>
        </div>
      )}

      {/* 2. WebGL 3D Astrolabe Engine */}
      <EngineScene
        scrollProgress={scrollProgress}
        hoveredPart={hoveredPart}
        onHoverPart={setHoveredPart}
        isMobile={isMobile}
      />

      {/* 3. Astronomical Vignette & Delicate Coordinate Grid */}
      <div className="astronomical-vignette" />
      <div className="bg-grid-overlay" style={{ position: 'fixed', inset: 0, zIndex: 1 }} />

      {/* 4. Top Navigation Bar */}
      <Navbar />

      {/* 5. Main Storytelling Sections */}
      <main ref={mainRef} style={{ position: 'relative', zIndex: 10 }}>
        {/* Section 01: Hero */}
        <Hero
          hoveredPart={hoveredPart}
          onExploreClick={() => scrollToSection('evolution')}
        />

        {/* Section 02: Evolution of Ideas */}
        <EvolutionOfIdeas />

        {/* Section 03: Technology Frontiers */}
        <TechnologyFrontiers />

        {/* Section 04: The Festival Experience */}
        <FestivalExperience />

        {/* Section 05: Experience Timeline */}
        <Timeline />

        {/* Section 06: Final Experience */}
        <FinalExperience onRevisitTop={() => scrollToSection('hero')} />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default App;
