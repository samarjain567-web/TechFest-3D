import React, { useState } from 'react';
import { Swords, Wrench, Globe2, Sparkles, Users, Award, Info, ExternalLink } from 'lucide-react';

interface FestivalSegment {
  id: string;
  tag: string;
  title: string;
  description: string;
  status: string;
  details: string;
  icon: any;
  highlightNumber: string;
  highlightLabel: string;
}

const EXPERIENCES: FestivalSegment[] = [
  {
    id: 'robowars',
    tag: 'FLAGSHIP COMBAT',
    title: 'International Robowars',
    description: 'The heavyweight arena where custom-machined autonomous and combat robots clash in tests of torque, structural integrity, and remote piloting.',
    status: 'Official rules & arena parameters: Details to be announced',
    details: 'Attracting elite robotics contingents globally to the IIT Bombay combat stadium, competing across diverse weight categories with pneumatic flippers, hardened carbide spinning drums, and titanium chassis.',
    icon: Swords,
    highlightNumber: '60kg / 30kg',
    highlightLabel: 'Combat Classes',
  },
  {
    id: 'competitions',
    tag: 'CHALLENGES',
    title: 'Technical Competitions',
    description: 'National and international engineering challenges spanning aerospace aerodynamics, autonomous rovers, and multi-agent AI simulations.',
    status: 'Problem statements & problem briefings: Details to be announced',
    details: 'Engineered in partnership with leading scientific bodies and research institutions to tackle real-world logistical, mechanical, and computational roadblocks.',
    icon: Award,
    highlightNumber: '25+',
    highlightLabel: 'Global Competitions',
  },
  {
    id: 'technoholix',
    tag: 'EVENING SPECTACLE',
    title: 'Technoholix',
    description: 'The sublime fusion of science, light, pyrotechnics, laser choreography, and world-renowned multimedia performances after sundown.',
    status: 'Artist lineup & stage production: Details to be announced',
    details: 'Where technology transforms into high art. Technoholix has historically featured cutting-edge drone formations, holographic staging, and world-class aerial acrobatics.',
    icon: Sparkles,
    highlightNumber: '15,000+',
    highlightLabel: 'Nightly Spectators',
  },
  {
    id: 'summits',
    tag: 'LEADERSHIP',
    title: 'Technology Summits & Keynotes',
    description: 'Distinguished assemblies of Nobel laureates, space commanders, chief scientists, and technological visionaries sharing world-shaping insights.',
    status: 'Confirmed keynote dignitaries: Details to be announced',
    details: 'Past editions have welcomed luminaries such as Dr. APJ Abdul Kalam, Rakesh Sharma, Sophia the Robot, and Nobel laureates discussing future civilizational breakthroughs.',
    icon: Users,
    highlightNumber: '100+',
    highlightLabel: 'Historical Visionaries',
  },
  {
    id: 'workshops',
    tag: 'HANDS-ON MASTERCLASSES',
    title: 'Hands-on Workshops',
    description: 'Intensive masterclasses led by industry engineers covering quantum computing, embedded IoT hardware, computer vision, and ROS2.',
    status: 'Curriculum & registration slots: Details to be announced',
    details: 'Practical labs equipping thousands of students with direct industry-grade capabilities, hardware development toolkits, and certified training.',
    icon: Wrench,
    highlightNumber: '40+',
    highlightLabel: 'Specialized Labs',
  },
  {
    id: 'twmun',
    tag: 'DIPLOMACY & GOVERNANCE',
    title: 'Techfest World Model UN (TWMUN)',
    description: 'Simulating international councils to deliberate critical geopolitics, cybersecurity treaties, nuclear non-proliferation, and space colonization ethics.',
    status: 'Committee agendas & background guides: Details to be announced',
    details: 'Delegates from institutions nationwide debate the socio-political consequences of emerging technology under international diplomatic procedures.',
    icon: Globe2,
    highlightNumber: '8',
    highlightLabel: 'Specialized Committees',
  },
];

export const FestivalExperience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<FestivalSegment>(EXPERIENCES[0]);

  return (
    <section
      id="experience"
      className="section-reveal"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        padding: '8rem 0',
      }}
    >
      <div className="content-wrapper">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4.5rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            SECTION 04 — THE FESTIVAL FABRIC
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              color: 'var(--parchment)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            THE FESTIVAL EXPERIENCE.
          </h2>
          <p
            style={{
              color: 'var(--parchment-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            Asia's largest annual science and technological congregation at IIT Bombay.
            Explore the flagship arenas that define the 30th edition.
          </p>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Interactive Navigation List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {EXPERIENCES.map((exp) => {
              const Icon = exp.icon;
              const isSelected = activeExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExp(exp)}
                  className="renaissance-card"
                  style={{
                    padding: '1.4rem 1.6rem',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    borderColor: isSelected ? 'var(--gold-primary)' : 'var(--border-gold)',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(223, 177, 91, 0.12) 0%, rgba(14, 22, 34, 0.95) 100%)'
                      : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--gold-primary)' : 'rgba(223, 177, 91, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? '#05080d' : '#dfb15b',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          letterSpacing: '0.15em',
                          color: isSelected ? 'var(--gold-light)' : 'var(--parchment-muted)',
                        }}
                      >
                        {exp.tag}
                      </div>
                      <div
                        className="font-serif"
                        style={{
                          fontSize: '1.15rem',
                          color: isSelected ? 'var(--gold-light)' : 'var(--parchment)',
                          fontWeight: isSelected ? 700 : 500,
                        }}
                      >
                        {exp.title}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: isSelected ? 'var(--gold-primary)' : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Immersive Detailed Display Panel */}
          <div
            className="renaissance-card"
            style={{
              padding: '3rem 2.5rem',
              borderRadius: '4px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Tag & Status Banner */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid var(--border-gold)',
                paddingBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold-light)',
                  padding: '4px 10px',
                  background: 'rgba(223, 177, 91, 0.1)',
                  borderRadius: '2px',
                }}
              >
                {activeExp.tag}
              </span>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#38bdf8',
                }}
              >
                <Info size={14} />
                <span>Verified 30th Edition Category</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.75rem, 2.4vw, 2.3rem)',
                color: 'var(--parchment)',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              {activeExp.title}
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--parchment)',
                marginBottom: '1.25rem',
              }}
            >
              {activeExp.description}
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--parchment-muted)',
                marginBottom: '2rem',
              }}
            >
              {activeExp.details}
            </p>

            {/* Metric Callout Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                padding: '1.5rem',
                background: 'rgba(5, 8, 13, 0.65)',
                border: '1px solid var(--border-gold)',
                borderRadius: '3px',
              }}
            >
              <div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: '1.85rem',
                    color: 'var(--gold-light)',
                    fontWeight: 700,
                  }}
                >
                  {activeExp.highlightNumber}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--parchment-muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {activeExp.highlightLabel}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  Official Status
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--parchment)',
                    lineHeight: 1.5,
                  }}
                >
                  {activeExp.status}
                </div>
              </div>
            </div>

            {/* Official Link Button */}
            <a
              href="https://techfest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aether"
              style={{ width: '100%' }}
            >
              <span>Visit Techfest Official Portal</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
