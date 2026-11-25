import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface AstrolabeRingProps {
  radius: number;
  tube: number;
  color: string;
  metalness?: number;
  roughness?: number;
  rotationSpeed?: [number, number, number];
  segments?: number;
  teethCount?: number;
  dialGraduations?: number;
  inclination?: [number, number, number];
  spokeCount?: number;
  gimbalAxis?: 'x' | 'y' | 'z';
}

export const AstrolabeRing: React.FC<AstrolabeRingProps> = ({
  radius,
  tube,
  color,
  metalness = 0.95,
  roughness = 0.18,
  rotationSpeed = [0, 0.005, 0],
  segments = 120,
  teethCount = 0,
  dialGraduations = 48,
  inclination = [0, 0, 0],
  spokeCount = 6,
}) => {
  const ringGroupRef = useRef<THREE.Group>(null);
  const gearRingRef = useRef<THREE.Group>(null);

  // Pre-generate spoke angles and graduation tick positions
  const spokes = useMemo(() => {
    return Array.from({ length: spokeCount }).map((_, i) => (i / spokeCount) * Math.PI * 2);
  }, [spokeCount]);

  const graduations = useMemo(() => {
    return Array.from({ length: dialGraduations }).map((_, i) => {
      const angle = (i / dialGraduations) * Math.PI * 2;
      const isMajor = i % 4 === 0;
      return {
        angle,
        length: isMajor ? tube * 2.8 : tube * 1.5,
        width: isMajor ? 0.025 : 0.012,
        isMajor,
      };
    });
  }, [dialGraduations, tube]);

  useFrame((_, delta) => {
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.x += rotationSpeed[0] * delta * 60;
      ringGroupRef.current.rotation.y += rotationSpeed[1] * delta * 60;
      ringGroupRef.current.rotation.z += rotationSpeed[2] * delta * 60;
    }
    if (gearRingRef.current) {
      // Counter-rotate gear teeth slowly for differential mechanical movement
      gearRingRef.current.rotation.y -= (rotationSpeed[1] * 0.4) * delta * 60;
    }
  });

  return (
    <group rotation={inclination}>
      <group ref={ringGroupRef}>
        {/* Primary Torus Ring - Polished renaissance metal */}
        <mesh castShadow receiveShadow>
          <torusGeometry args={[radius, tube, 24, segments]} />
          <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
            envMapIntensity={1.8}
          />
        </mesh>

        {/* Secondary Inner Chamfered Rim */}
        <mesh>
          <torusGeometry args={[radius - tube * 1.6, tube * 0.4, 16, segments]} />
          <meshStandardMaterial
            color="#dfb15b"
            metalness={0.92}
            roughness={0.25}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Outer Calibrated Astrolabe Dial Plate */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius + tube * 1.2, radius + tube * 2.5, segments]} />
          <meshStandardMaterial
            color={color}
            metalness={0.9}
            roughness={0.15}
            side={THREE.DoubleSide}
            envMapIntensity={2.0}
          />
        </mesh>

        {/* Precision Astronomical Graduations (Ticks) */}
        {graduations.map((tick, i) => {
          const r = radius + tube * 1.85;
          const x = Math.cos(tick.angle) * r;
          const z = Math.sin(tick.angle) * r;
          return (
            <mesh
              key={i}
              position={[x, 0, z]}
              rotation={[0, -tick.angle, 0]}
            >
              <boxGeometry args={[tick.width, tube * 0.6, tick.length]} />
              <meshStandardMaterial
                color={tick.isMajor ? '#ffe082' : '#8c5d35'}
                metalness={0.95}
                roughness={0.2}
                emissive={tick.isMajor ? '#dfb15b' : '#000000'}
                emissiveIntensity={tick.isMajor ? 0.3 : 0}
              />
            </mesh>
          );
        })}

        {/* Renaissance Armillary Spoke Lattice with filigree orbs */}
        {spokes.map((angle, i) => (
          <group key={i} rotation={[0, angle, 0]}>
            {/* Spoke rod extending from center to inner ring */}
            <mesh position={[radius / 2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[tube * 0.28, tube * 0.32, radius - tube * 1.5, 12]} />
              <meshStandardMaterial
                color="#8c5d35"
                metalness={0.9}
                roughness={0.28}
                envMapIntensity={1.2}
              />
            </mesh>
            {/* Filigree decorative bronze bead on the spoke */}
            <mesh position={[radius * 0.6, 0, 0]}>
              <sphereGeometry args={[tube * 0.9, 16, 16]} />
              <meshStandardMaterial
                color="#d4af37"
                metalness={0.95}
                roughness={0.15}
                envMapIntensity={2.2}
              />
            </mesh>
          </group>
        ))}

        {/* Outer Precision Gear Teeth Assembly */}
        {teethCount > 0 && (
          <group ref={gearRingRef}>
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (i / teethCount) * Math.PI * 2;
              const r = radius + tube * 2.5;
              const x = Math.cos(angle) * r;
              const z = Math.sin(angle) * r;
              return (
                <mesh key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
                  {/* Trapezoidal gear tooth */}
                  <boxGeometry args={[tube * 0.8, tube * 0.5, tube * 1.4]} />
                  <meshStandardMaterial
                    color="#e5b85a"
                    metalness={0.95}
                    roughness={0.16}
                    envMapIntensity={1.8}
                  />
                </mesh>
              );
            })}
          </group>
        )}
      </group>
    </group>
  );
};
