import React, { useState } from 'react';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

interface DaySchedule {
  dayNumber: number;
  date: string;
  weekday: string;
  theme: string;
  summary: string;
  milestones: {
    period: string;
    focus: string;
    description: string;
    venue: string;
  }[];
}

const TIMELINE_DAYS: DaySchedule[] = [
  {
    dayNumber: 1,
    date: 'DECEMBER 16, 2026',
    weekday: 'WEDNESDAY',
    theme: 'IGNITION & CONVERGENCE',
    summary: 'The grand inauguration of the 30th edition. Flagship exhibits activate, preliminary rounds of international technical challenges commence, and the ceremonial keynote convenes at the Convocation Hall.',
    milestones: [
      {
        period: 'Morning Session',
        focus: 'Ceremonial Inauguration & Keynote Address',
        description: 'Address by global scientific leaders and IIT Bombay dignitaries, unveiling the 2026 theme and activating the technological exhibitions.',
        venue: 'Convocation Hall, IIT Bombay',
      },
      {
        period: 'Midday Progression',
        focus: 'Qualifying Rounds: Robowars & Robotics Arenas',
        description: 'Combat robotics qualification grids, high-torque weight checks, and autonomous system obstacle trials begin.',
        venue: 'Gymkhana Grounds',
      },
      {
        period: 'Evening Twilight',
        focus: 'Technoholix Day 1 Opening Spectacular',
        description: 'Immersive light-symphony, drone displays, and international stage performances opening the festival celebration.',
        venue: 'Open Air Theatre (OAT)',
      },
    ],
  },
  {
    dayNumber: 2,
    date: 'DECEMBER 17, 2026',
    weekday: 'THURSDAY',
    theme: 'DEEP DIVE & CLASH OF TITANS',
    summary: 'Intensive technology summits, multi-track student workshops, quarter-final and semi-final clashes in Robowars, and TWMUN committee sessions in full assembly.',
    milestones: [
      {
        period: 'Morning Track',
        focus: 'Global Technology Summit & Space Symposium',
        description: 'Roundtables on AI safety, quantum supremacy, deep-space propulsion, and sustainable planetary grids.',
        venue: 'Lecture Theatre Complex',
      },
      {
        period: 'Afternoon Clashes',
        focus: 'International Robowars Semi-Finals',
        description: 'High-octane battles in the reinforced arena between top seeded global contenders.',
        venue: 'Gymkhana Grounds Combat Stadium',
      },
      {
        period: 'Night Showcase',
        focus: 'Technoholix Pyro-Acrobatic Production',
        description: 'World-renowned performance artists fusing physical acrobatics, interactive lasers, and electronic choreography.',
        venue: 'Open Air Theatre (OAT)',
      },
    ],
  },
  {
    dayNumber: 3,
    date: 'DECEMBER 18, 2026',
    weekday: 'FRIDAY',
    theme: 'THE CULMINATION & GRAND FINALE',
    summary: 'Championship showdowns across all major technical verticals, awards felicitation ceremony, and the breathtaking Technoholix Grand Finale spectacle.',
    milestones: [
      {
        period: 'Morning Finals',
        focus: 'Championship Rounds & Techfest Hackathon Presentations',
        description: 'Final evaluation of innovation prototypes, algorithmic showdowns, and autonomous rover simulations before grand juries.',
        venue: 'Various Innovation Arenas',
      },
      {
        period: 'Afternoon Spectacle',
        focus: 'Grand Championship: International Robowars',
        description: 'The ultimate heavyweight combat showdown to determine the Techfest 2026 world champion.',
        venue: 'Main Combat Arena',
      },
      {
        period: 'Night Finale',
        focus: 'Valedictory Ceremony & Technoholix Grand Finale',
        description: 'Felicitation of winners, prize distributions, and the culminating multi-sensory theatrical celebration of the 30th edition.',
        venue: 'Open Air Theatre (OAT)',
      },
    ],
  },
];

export const Timeline: React.FC = () => {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentDay = TIMELINE_DAYS[activeDayIdx];

  return (
    <section
      id="timeline"
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
        <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
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
            SECTION 05 — TEMPORAL CALIBRATION
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
            THE EXPERIENCE TIMELINE.
          </h2>
          <p
            style={{
              color: 'var(--parchment-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            A three-day odyssey of invention: December 16–18, 2026.
            Select a day to view the chronological progression across the IIT Bombay campus.
          </p>
        </div>

        {/* 3 Selectable Days Navigator */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {TIMELINE_DAYS.map((d, idx) => {
            const isSelected = activeDayIdx === idx;
            return (
              <button
                key={d.dayNumber}
                onClick={() => setActiveDayIdx(idx)}
                className="renaissance-card"
                style={{
                  padding: '1.4rem 1.6rem',
                  border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(223, 177, 91, 0.15) 0%, rgba(14, 22, 34, 0.95) 100%)'
                    : 'rgba(12, 18, 28, 0.55)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    color: isSelected ? 'var(--gold-light)' : 'var(--parchment-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  DAY 0{d.dayNumber}
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                    color: isSelected ? 'var(--parchment)' : 'var(--parchment-muted)',
                    fontWeight: 700,
                  }}
                >
                  {d.weekday}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  {d.date.split(',')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Day Milestone Schedule Display */}
        <div
          className="renaissance-card"
          style={{
            padding: '2.8rem 2.5rem',
            borderRadius: '4px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* Day Header banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '2.25rem',
              borderBottom: '1px solid var(--border-gold)',
              paddingBottom: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold-light)',
                  marginBottom: '0.35rem',
                }}
              >
                {currentDay.date} • DAY 0{currentDay.dayNumber}
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.75rem',
                  color: 'var(--parchment)',
                }}
              >
                {currentDay.theme}
              </h3>
            </div>

            {/* Placeholder Schedule label requirement */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(223, 177, 91, 0.08)',
                border: '1px solid var(--border-gold)',
                borderRadius: '2px',
              }}
            >
              <AlertCircle size={15} color="#dfb15b" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--gold-light)',
                }}
              >
                Individual slot hours: Details to be announced
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: '1.02rem',
              lineHeight: 1.75,
              color: 'var(--parchment)',
              marginBottom: '2.5rem',
              maxWidth: '850px',
            }}
          >
            {currentDay.summary}
          </p>

          {/* Milestones Flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {currentDay.milestones.map((milestone, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.5rem',
                  padding: '1.4rem 1.6rem',
                  background: 'rgba(5, 8, 13, 0.65)',
                  borderLeft: '3px solid var(--gold-primary)',
                  borderRadius: '2px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      color: 'var(--gold-light)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <Clock size={14} />
                    <span>{milestone.period}</span>
                  </div>
                  <div
                    className="font-serif"
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--parchment)',
                      fontWeight: 600,
                    }}
                  >
                    {milestone.focus}
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'var(--parchment-muted)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {milestone.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#38bdf8',
                    }}
                  >
                    <MapPin size={13} />
                    <span>{milestone.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
