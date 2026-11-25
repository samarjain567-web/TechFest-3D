import React from 'react';
import { ArrowDownRight, Compass, Sparkles, Move } from 'lucide-react';

interface HeroProps {
  hoveredPart: string | null;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ hoveredPart, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="section-reveal active"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="content-wrapper" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Text Block */}
          <div style={{ maxWidth: '620px', zIndex: 10 }}>
            {/* Small Renaissance badge label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(223, 177, 91, 0.08)',
                border: '1px solid var(--border-gold)',
                borderRadius: '2px',
                marginBottom: '1.75rem',
              }}
            >
              <Compass size={14} color="#dfb15b" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                }}
              >
                TECHFEST / IIT BOMBAY • 30TH EDITION
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
                lineHeight: 1.08,
                fontWeight: 700,
                color: 'var(--parchment)',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.75)',
              }}
            >
              WHERE CURIOSITY <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #f6d896 0%, #dfb15b 50%, #8c5d35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BECOMES CREATION.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                lineHeight: 1.75,
                color: 'var(--parchment-muted)',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              Three decades of ideas, invention, engineering and the pursuit
              of what comes next. Step within the celestial machinery that powers
              Asia's largest science and technology festival.
            </p>

            {/* Interactive Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
              <button onClick={onExploreClick} className="btn-aether">
                <span>Explore Experience</span>
                <ArrowDownRight size={18} />
              </button>

              <a href="#frontiers" className="btn-secondary">
                Explore Technology
              </a>
            </div>

            {/* Live Hover Object HUD Indicator */}
            <div
              style={{
                marginTop: '3.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 20px',
                background: 'rgba(5, 8, 13, 0.75)',
                border: '1px solid rgba(223, 177, 91, 0.28)',
                borderRadius: '3px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={16} color="#38bdf8" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--parchment-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  3D Astrolabe Sensor Target:
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.88rem',
                    color: hoveredPart ? '#38bdf8' : 'var(--gold-light)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {hoveredPart ? hoveredPart : 'Drag 3D Orrery to inspect components'}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: HUD coordinate telemetry */}
          <div
            style={{
              minHeight: '380px',
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                background: 'rgba(5, 8, 13, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '2px',
                marginBottom: '1rem',
              }}
            >
              <Move size={14} color="#dfb15b" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--parchment-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                DRAG TO ROTATE 3D ENGINE
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'rgba(242, 235, 224, 0.45)',
                textAlign: 'right',
                letterSpacing: '0.12em',
                lineHeight: 1.85,
              }}
            >
              [ AETHER ENGINE MATRIX ]<br />
              ASTROLABE HARMONICS: 432.0 HZ<br />
              ORBITAL STABILIZER: ACTIVE<br />
              ROTATIONAL EQUILIBRIUM: 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
