import React from 'react';
import { ExternalLink, Compass, ArrowUpRight, ShieldAlert } from 'lucide-react';

interface FinalExperienceProps {
  onRevisitTop: () => void;
}

export const FinalExperience: React.FC<FinalExperienceProps> = ({ onRevisitTop }) => {
  return (
    <section
      id="final"
      className="section-reveal"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '10rem 0 6rem 0',
      }}
    >
      <div className="content-wrapper" style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {/* Subtle Roman numeral badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(223, 177, 91, 0.08)',
              border: '1px solid var(--border-gold)',
              borderRadius: '2px',
              marginBottom: '2rem',
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
              EPILOGUE — THE CONVERGENCE
            </span>
          </div>

          {/* Main Climactic Heading */}
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
              color: 'var(--parchment)',
              lineHeight: 1.15,
              fontWeight: 700,
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}
          >
            "THE FUTURE IS BUILT BY THOSE WHO DARE TO CREATE."
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.25vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'var(--parchment-muted)',
              marginBottom: '3.5rem',
              maxWidth: '680px',
              margin: '0 auto 3.5rem auto',
            }}
          >
            As the Aether Engine completes its orbital cycle and seals its golden gears,
            the gateway to Techfest 2026 stands open. Join thousands of inventors, engineers,
            and dreamers at IIT Bombay.
          </p>

          {/* Dual Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
          >
            <button
              onClick={onRevisitTop}
              className="btn-aether"
              style={{ padding: '15px 34px', fontSize: '0.88rem' }}
            >
              <span>Explore Techfest</span>
              <ArrowUpRight size={18} />
            </button>

            <a
              href="https://techfest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aether"
              style={{
                padding: '15px 34px',
                fontSize: '0.88rem',
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(14, 22, 34, 0.85) 100%)',
                borderColor: '#38bdf8',
                color: '#38bdf8',
              }}
            >
              <span>Visit Official Website</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Disclaimer Banner Required by Project Guidelines */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              background: 'rgba(5, 8, 13, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            <ShieldAlert size={18} color="#dfb15b" style={{ flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--parchment-muted)',
                lineHeight: 1.5,
                textAlign: 'left',
              }}
            >
              NOTICE: This 3D interactive web experience is an independently created
              creative concept and tribute for Techfest, IIT Bombay 2026, and is not
              presented as the official production website.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
