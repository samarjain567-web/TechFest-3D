import React, { useState } from 'react';
import { Cpu, Bot, Rocket, Cog, Lightbulb, Code2, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface TechCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  disciplines: string[];
  techfestInitiative: string;
}

const CATEGORIES: TechCategory[] = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    shortDesc: 'Generative architectures, neural decoders and autonomous machine cognition.',
    fullDesc: 'From foundational transformer models to adaptive neural interfaces, Artificial Intelligence at Techfest brings together researchers, industry pioneers, and student innovators solving challenges in automated cognition, computer vision, and responsible intelligence.',
    icon: Cpu,
    disciplines: ['LLM Orchestration', 'Autonomous Agents', 'Computer Vision', 'Ethical AI Systems'],
    techfestInitiative: 'Annual AI Hackathons & Cognitive Research Symposiums',
  },
  {
    id: 'robotics',
    number: '02',
    title: 'Robotics',
    shortDesc: 'Biomimetic kinematics, swarming mechanics and high-torque physical automation.',
    fullDesc: 'Experience high-impact competitive robotics where engineering meets combat durability and autonomous precision. Teams construct complex kinematic systems capable of navigating obstacle courses, executing autonomous tasks, and enduring extreme arena impact.',
    icon: Bot,
    disciplines: ['Inverse Kinematics', 'Swarm Robotics', 'Sensory Feedback', 'Hydraulic Actuators'],
    techfestInitiative: 'International Robowars & Autonomous Rover Challenges',
  },
  {
    id: 'space',
    number: '03',
    title: 'Space Technology',
    shortDesc: 'Orbital celestial mechanics, propulsion payloads and deep-sky exploration.',
    fullDesc: 'Reflecting the spirit of space missions, Techfest showcases rocketry demonstrations, orbital vehicle telemetry, satellite cubesats, and discussions on lunar architecture and deep space astronomical instrumentation.',
    icon: Rocket,
    disciplines: ['Orbital Trajectories', 'CubeSat Telemetry', 'Composite Avionics', 'Propulsion Dynamics'],
    techfestInitiative: 'Space Summit & Aerospace Design Competitions',
  },
  {
    id: 'engineering',
    number: '04',
    title: 'Engineering',
    shortDesc: 'Precision manufacturing, structural optimization and sustainable micro-grids.',
    fullDesc: 'The backbone of global infrastructure. Discover civil wonders, mechanical optimizations, green hydrogen energy grids, and next-generation materials engineered to withstand extreme real-world stresses.',
    icon: Cog,
    disciplines: ['Finite Element Analysis', 'Additive Metal Synthesis', 'Renewable Micro-Grids', 'Aeroelasticity'],
    techfestInitiative: 'National Design & Build Challenges',
  },
  {
    id: 'innovation',
    number: '05',
    title: 'Innovation',
    shortDesc: 'Disruptive patents, biotech frontiers and grassroots scientific breakthroughs.',
    fullDesc: 'A dynamic exhibition arena honoring disruptive student and grassroots inventions designed to empower communities, streamline healthcare diagnostics, and solve urgent environmental challenges.',
    icon: Lightbulb,
    disciplines: ['MedTech Diagnostics', 'Clean Water Filtration', 'Smart Agriculture IoT', 'Carbon Sequestration'],
    techfestInitiative: 'Techfest Innovation Arena & Pitch Incubator',
  },
  {
    id: 'coding',
    number: '06',
    title: 'Coding',
    shortDesc: 'Cryptographic algorithms, decentralized protocols and distributed cloud clusters.',
    fullDesc: 'A battleground for software architects, competitive algorithmic programmers, and systems engineers. Competitions range from speed optimization to penetration testing, zero-knowledge security, and multi-threaded systems architecture.',
    icon: Code2,
    disciplines: ['Algorithmic Optimization', 'Zero-Knowledge Proofs', 'Distributed Clusters', 'Compiler Design'],
    techfestInitiative: 'International Coding Marathon & Cyber Security CTF',
  },
];

export const TechnologyFrontiers: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechCategory | null>(null);

  return (
    <section
      id="frontiers"
      className="section-reveal"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        padding: '8rem 0',
      }}
    >
      <div className="content-wrapper">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '4.5rem' }}>
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
            SECTION 03 — DISCOVERY PILLARS
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
            EXPLORE THE <br />
            TECHNOLOGICAL FRONTIERS.
          </h2>
          <p
            style={{
              color: 'var(--parchment-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            Six foundational pillars driving human progress. Select any domain
            to unveil the technical specifications and Techfest initiatives.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedTech(cat)}
                className="renaissance-card"
                style={{
                  padding: '2.5rem',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '290px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.2em',
                        color: 'var(--gold-light)',
                      }}
                    >
                      {cat.number}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: '1px solid var(--border-gold)',
                        background: 'rgba(223, 177, 91, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color="#dfb15b" />
                    </div>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.4rem',
                      color: 'var(--parchment)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--parchment-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {cat.shortDesc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--gold-primary)',
                    marginTop: '2rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  <span>INSPECT SPECIFICATIONS</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Panel */}
      {selectedTech && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(4, 7, 11, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="renaissance-card"
            style={{
              maxWidth: '680px',
              width: '100%',
              padding: '2.5rem',
              borderRadius: '4px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.85), 0 0 40px rgba(223, 177, 91, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.75rem',
                borderBottom: '1px solid var(--border-gold)',
                paddingBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--gold-primary)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  CATEGORY {selectedTech.number}
                </span>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.5rem', color: 'var(--parchment)' }}
                >
                  {selectedTech.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedTech(null)}
                aria-label="Close specifications"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  color: 'var(--parchment)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <p
              style={{
                color: 'var(--parchment)',
                fontSize: '1.02rem',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
              }}
            >
              {selectedTech.fullDesc}
            </p>

            {/* Disciplines tags */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--gold-light)',
                  letterSpacing: '0.15em',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                }}
              >
                Core Technical Disciplines
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedTech.disciplines.map((d, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(223, 177, 91, 0.12)',
                      border: '1px solid var(--border-gold)',
                      padding: '6px 12px',
                      borderRadius: '2px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--parchment)',
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Techfest Flagship Initiative */}
            <div
              style={{
                background: 'rgba(56, 189, 248, 0.06)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '1.25rem',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <ShieldCheck size={24} color="#38bdf8" />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#38bdf8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Techfest Program Highlight
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    color: 'var(--parchment)',
                    fontWeight: 600,
                  }}
                >
                  {selectedTech.techfestInitiative}
                </div>
              </div>
            </div>

            {/* Close Button Action */}
            <div style={{ marginTop: '2.25rem', textAlign: 'right' }}>
              <button
                onClick={() => setSelectedTech(null)}
                className="btn-aether"
                style={{ padding: '10px 24px', fontSize: '0.8rem' }}
              >
                Dismiss Specifications
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
