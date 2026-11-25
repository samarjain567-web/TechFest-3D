import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01 Overview', href: '#hero' },
    { name: '02 Evolution', href: '#evolution' },
    { name: '03 Frontiers', href: '#frontiers' },
    { name: '04 Experience', href: '#experience' },
    { name: '05 Timeline', href: '#timeline' },
    { name: '06 Final Engine', href: '#final' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(6, 9, 14, 0.88)'
          : 'linear-gradient(to bottom, rgba(6,9,14,0.9), transparent)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(223, 177, 91, 0.2)' : '1px solid transparent',
        padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand identity */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid var(--gold-primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(223, 177, 91, 0.1)',
            }}
          >
            <Compass size={18} color="#dfb15b" />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: 'var(--parchment)',
              }}
            >
              TECHFEST
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-primary)',
              }}
            >
              IIT BOMBAY • 2026
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: 'var(--parchment-muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--parchment-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://techfest.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aether"
            style={{ padding: '8px 18px', fontSize: '0.75rem', display: 'none' }}
            id="nav-official-btn"
          >
            <span>Official Portal</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-gold)',
              padding: '8px',
              borderRadius: '4px',
              color: 'var(--gold-primary)',
              cursor: 'pointer',
              display: 'flex',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(6, 9, 14, 0.98)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--parchment)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://techfest.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aether"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            Visit Official Website
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          #nav-official-btn { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
};
