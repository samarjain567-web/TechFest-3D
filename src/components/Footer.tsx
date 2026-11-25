import React from 'react';
import { Compass, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-gold)',
        background: 'rgba(4, 6, 10, 0.95)',
        position: 'relative',
        zIndex: 10,
        padding: '4rem 0 3rem 0',
      }}
    >
      <div className="content-wrapper">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Identity Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <Compass size={22} color="#dfb15b" />
              <div
                className="font-serif"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--parchment)',
                  letterSpacing: '0.1em',
                }}
              >
                TECHFEST
              </div>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
              }}
            >
              IIT BOMBAY • 30TH EDITION • 2026
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: 'var(--parchment-muted)',
              }}
            >
              Asia's Largest Science and Technology Festival. Uniting curious minds,
              engineers, polymaths, and visionaries across the globe.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Cinematic Hero', href: '#hero' },
                { name: 'The Evolution of Ideas', href: '#evolution' },
                { name: 'Technological Frontiers', href: '#frontiers' },
                { name: 'Festival Experience', href: '#experience' },
                { name: 'Experience Timeline', href: '#timeline' },
                { name: 'The Final Engine', href: '#final' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--parchment-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--parchment-muted)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources & Info */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Official Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="https://techfest.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span>Official Techfest Portal</span>
                <ExternalLink size={14} />
              </a>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--parchment-muted)',
                  lineHeight: 1.6,
                }}
              >
                Location: Indian Institute of Technology Bombay, Powai, Mumbai, Maharashtra 400076, India.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--parchment-muted)',
            }}
          >
            © 2026 Techfest, IIT Bombay — The Aether Engine Experience.
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--gold-primary)',
            }}
          >
            DESIGNED & CRAFTED WITH THREE.JS & REACT
          </div>
        </div>
      </div>
    </footer>
  );
};
