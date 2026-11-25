import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetaryBody {
  name: string;
  radius: number;
  semiMajorAxis: number;   // a
  eccentricity: number;     // e: oval/keplerian orbit
  inclination: number;      // tilt of orbital plane
  period: number;           // orbital cycle period in seconds
  color: string;
  roughness: number;
  metalness: number;
  emissive?: string;
  hasRings?: boolean;
  ringRadiusInner?: number;
  ringRadiusOuter?: number;
  moons?: { radius: number; dist: number; speed: number; color: string }[];
}

const CELESTIAL_BODIES: PlanetaryBody[] = [
  {
    name: 'Tellus Core',
    radius: 0.17,
    semiMajorAxis: 2.25,
    eccentricity: 0.08,
    inclination: 0.05,
    period: 14,
    color: '#f6d896',
    roughness: 0.15,
    metalness: 0.95,
    emissive: '#452b0c',
    moons: [{ radius: 0.045, dist: 0.35, speed: 3.2, color: '#e0c99f' }],
  },
  {
    name: 'Ares Bronze',
    radius: 0.22,
    semiMajorAxis: 3.35,
    eccentricity: 0.14,
    inclination: 0.18,
    period: 22,
    color: '#a8653b',
    roughness: 0.25,
    metalness: 0.9,
    emissive: '#381604',
  },
  {
    name: 'Chronos Sapphire',
    radius: 0.32,
    semiMajorAxis: 4.65,
    eccentricity: 0.06,
    inclination: -0.12,
    period: 32,
    color: '#38bdf8',
    roughness: 0.12,
    metalness: 0.88,
    emissive: '#0c3552',
    hasRings: true,
    ringRadiusInner: 0.44,
    ringRadiusOuter: 0.82,
    moons: [
      { radius: 0.05, dist: 0.92, speed: 2.1, color: '#f5d78e' },
      { radius: 0.035, dist: 1.15, speed: 1.4, color: '#94a3b8' },
    ],
  },
  {
    name: 'Aether Aurum',
    radius: 0.24,
    semiMajorAxis: 6.1,
    eccentricity: 0.18,
    inclination: 0.25,
    period: 46,
    color: '#dfb15b',
    roughness: 0.18,
    metalness: 0.96,
    emissive: '#523c10',
  },
];

export const OrbitalSystem: React.FC = () => {
  const planetRefs = useRef<(THREE.Group | null)[]>([]);
  const moonRefs = useRef<(THREE.Mesh | null)[][]>(CELESTIAL_BODIES.map(() => []));

  // Pre-generate smooth Keplerian orbital ellipse curves for rendering the brass guide rails
  const orbitCurves = useMemo(() => {
    return CELESTIAL_BODIES.map((body) => {
      const points: THREE.Vector3[] = [];
      const segments = 128;
      const b = body.semiMajorAxis * Math.sqrt(1 - body.eccentricity * body.eccentricity);
      const c = body.semiMajorAxis * body.eccentricity; // focal offset

      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        // Position ellipse relative to one focus (the central Aether core)
        const x = body.semiMajorAxis * Math.cos(theta) - c;
        const z = b * Math.sin(theta);
        points.push(new THREE.Vector3(x, 0, z));
      }
      return new THREE.CatmullRomCurve3(points, true);
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    CELESTIAL_BODIES.forEach((body, idx) => {
      const group = planetRefs.current[idx];
      if (group) {
        // Natural Keplerian orbital speed: faster at periapsis, slower at apoapsis
        // Mean anomaly M = (2 * PI / T) * t
        const M = (2 * Math.PI / body.period) * time + idx * 1.8;
        // Kepler's approximation for eccentric anomaly E = M + e*sin(M)
        const E = M + body.eccentricity * Math.sin(M);

        const b = body.semiMajorAxis * Math.sqrt(1 - body.eccentricity * body.eccentricity);
        const c = body.semiMajorAxis * body.eccentricity;

        const x = body.semiMajorAxis * Math.cos(E) - c;
        const z = b * Math.sin(E);

        group.position.set(x, 0, z);
        group.rotation.y += 0.015;

        // Animate natural sub-moons
        if (body.moons && moonRefs.current[idx]) {
          body.moons.forEach((m, mIdx) => {
            const moonMesh = moonRefs.current[idx][mIdx];
            if (moonMesh) {
              const mAngle = time * m.speed + mIdx * 2.0;
              moonMesh.position.x = Math.cos(mAngle) * m.dist;
              moonMesh.position.z = Math.sin(mAngle) * m.dist;
              moonMesh.position.y = Math.sin(mAngle * 1.5) * (m.dist * 0.2);
            }
          });
        }
      }
    });
  });

  return (
    <group>
      {CELESTIAL_BODIES.map((body, idx) => (
        <group key={body.name} rotation={[body.inclination, 0, 0]}>
          {/* Keplerian Brass Guide Rail Orbit Tube */}
          <mesh>
            <tubeGeometry args={[orbitCurves[idx], 128, 0.018, 8, true]} />
            <meshStandardMaterial
              color="#dfb15b"
              metalness={0.92}
              roughness={0.2}
              transparent
              opacity={0.4}
              envMapIntensity={1.4}
            />
          </mesh>

          {/* Planet System Container */}
          <group ref={(el) => (planetRefs.current[idx] = el)}>
            {/* Celestial Body Sphere with high metalness & subtle emissive core */}
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[body.radius, 32, 32]} />
              <meshStandardMaterial
                color={body.color}
                metalness={body.metalness}
                roughness={body.roughness}
                emissive={body.emissive || '#000000'}
                emissiveIntensity={0.65}
                envMapIntensity={2.5}
              />
            </mesh>

            {/* Atmosphere Sheen */}
            <mesh>
              <sphereGeometry args={[body.radius * 1.15, 24, 24]} />
              <meshBasicMaterial
                color={body.color}
                transparent
                opacity={0.12}
                wireframe={false}
              />
            </mesh>

            {/* Optional Planetary Ring Structure (Saturnian Astrolabe Rims) */}
            {body.hasRings && body.ringRadiusInner && body.ringRadiusOuter && (
              <mesh rotation={[Math.PI / 2.8, 0.3, 0]}>
                <ringGeometry
                  args={[body.ringRadiusInner, body.ringRadiusOuter, 64]}
                />
                <meshStandardMaterial
                  color="#dfb15b"
                  metalness={0.95}
                  roughness={0.18}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.85}
                  envMapIntensity={2.2}
                />
              </mesh>
            )}

            {/* Natural Satellite Moons */}
            {body.moons &&
              body.moons.map((m, mIdx) => (
                <mesh
                  key={mIdx}
                  ref={(el) => {
                    if (!moonRefs.current[idx]) moonRefs.current[idx] = [];
                    moonRefs.current[idx][mIdx] = el;
                  }}
                >
                  <sphereGeometry args={[m.radius, 16, 16]} />
                  <meshStandardMaterial
                    color={m.color}
                    metalness={0.9}
                    roughness={0.2}
                    envMapIntensity={1.8}
                  />
                </mesh>
              ))}
          </group>
        </group>
      ))}
    </group>
  );
};
