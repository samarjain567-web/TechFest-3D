import React from 'react';
import { Layers, Eye, Cpu, Orbit } from 'lucide-react';

export const EvolutionOfIdeas: React.FC = () => {
  const steps = [
    {
      num: 'PHASE 01',
      title: 'The Codex of Da Vinci',
      desc: 'Centuries ago, master polymaths drew gearings and celestial armillaries in leatherbound codices, laying the geometrical foundations of modern mechanics.',
      icon: Layers,
    },
    {
      num: 'PHASE 02',
      title: 'The Astronomical Clockwork',
      desc: 'Precision orreries turned theoretical astrophysics into tactile brass gears—predicting planetary conjunctions and measuring the rhythm of time.',
      icon: Orbit,
    },
    {
      num: 'PHASE 03',
      title: 'The Silicon Metamorphosis',
      desc: 'Mechanical linkages transform into quantum gates, micro-processors, neural networks and autonomous robotic systems.',
      icon: Cpu,
    },
    {
      num: 'PHASE 04',
      title: 'The Aether Engine',
      desc: 'At Techfest 2026, Renaissance scientific inquiry meets futuristic artificial intelligence, forging a sanctuary where daring ideas transform reality.',
      icon: Eye,
    },
  ];

  return (
    <section
      id="evolution"
      className="section-reveal"
      style={{
        minHeight: '110vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 0',
      }}
    >
      <div className="content-wrapper" style={{ width: '100%' }}>
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
            SECTION 02 — THE CHRONOLOGY OF INVENTION
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              color: 'var(--parchment)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            THE EVOLUTION <br />
            OF SCIENTIFIC THOUGHT.
          </h2>
          <p
            style={{
              color: 'var(--parchment-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            As you journey deeper into the inner gears of the Aether Engine,
            observe how Renaissance astronomy harmonizes with cutting-edge
            computation and high-altitude space systems.
          </p>
        </div>

        {/* Storytelling Timeline Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="renaissance-card"
                style={{
                  padding: '2.5rem 2rem',
                  borderRadius: '3px',
                }}
              >
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
                      fontSize: '0.72rem',
                      letterSpacing: '0.2em',
                      color: 'var(--gold-light)',
                    }}
                  >
                    {step.num}
                  </span>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(223, 177, 91, 0.1)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} color="#dfb15b" />
                  </div>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--parchment)',
                    marginBottom: '1rem',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: 'var(--parchment-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
