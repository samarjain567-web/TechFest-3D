import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AstrolabeRing } from './AstrolabeRing';
import { OrbitalSystem } from './OrbitalSystem';

interface AetherEngineCoreProps {
  scrollProgress?: number;
  hoveredPart?: string | null;
  onHoverPart?: (partName: string | null) => void;
  isMobile?: boolean;
}

export const AetherEngineCore: React.FC<AetherEngineCoreProps> = ({
  scrollProgress = 0,
  hoveredPart,
  onHoverPart,
  isMobile = false,
}) => {
  const masterRigRef = useRef<THREE.Group>(null);
  const coreSingularityRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const coreHaloRef = useRef<THREE.Mesh>(null);
  const geodesicCageRef = useRef<THREE.Group>(null);
  const secondaryCageRef = useRef<THREE.Group>(null);
  const escapementPillarsRef = useRef<THREE.Group>(null);
  const differentialGearsetRef = useRef<THREE.Group>(null);

  // Target mouse-tracking rotation for natural responsiveness
  const targetRotation = useRef({ x: 0, y: 0, z: 0 });
  const targetCoreOffset = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer; // normalized [-1, 1]

    // 1. Direct interactive mouse responsiveness
    // Mouse tilts the central object and causes subtle parallax shift
    targetRotation.current.x = pointer.y * 0.45;
    targetRotation.current.y = pointer.x * 0.65;
    targetCoreOffset.current.x = pointer.x * 0.25;
    targetCoreOffset.current.y = pointer.y * 0.25;

    if (masterRigRef.current) {
      // Smooth lerp towards target mouse rotation while preserving autonomous continuous rotation
      masterRigRef.current.rotation.x = THREE.MathUtils.damp(
        masterRigRef.current.rotation.x,
        targetRotation.current.x + Math.sin(t * 0.4) * 0.08,
        4.0,
        delta
      );
      masterRigRef.current.rotation.y = THREE.MathUtils.damp(
        masterRigRef.current.rotation.y,
        masterRigRef.current.rotation.y + 0.003 + targetRotation.current.y * 0.02,
        4.0,
        delta
      );

      // Scroll-driven reorganization / vertical positioning
      masterRigRef.current.position.y = Math.sin(t * 0.8) * 0.12 - (scrollProgress * 2.2 - 1.0);
    }

    // 2. Responsive central core pulsation and micro-attraction
    if (coreSingularityRef.current) {
      coreSingularityRef.current.position.x = THREE.MathUtils.damp(
        coreSingularityRef.current.position.x,
        targetCoreOffset.current.x,
        5.0,
        delta
      );
      coreSingularityRef.current.position.y = THREE.MathUtils.damp(
        coreSingularityRef.current.position.y,
        targetCoreOffset.current.y,
        5.0,
        delta
      );
    }

    if (coreMeshRef.current && coreHaloRef.current) {
      const pulse = Math.sin(t * 2.8) * 0.08 + 1.0;
      coreMeshRef.current.scale.set(pulse, pulse, pulse);
      coreHaloRef.current.scale.set(pulse * 1.35, pulse * 1.35, pulse * 1.35);

      const mat = coreMeshRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 1.4 + Math.sin(t * 3.5) * 0.5;
      }
    }

    // 3. Geodesic counter-rotations (Renaissance Armillary spheres)
    if (geodesicCageRef.current) {
      geodesicCageRef.current.rotation.x = t * 0.15;
      geodesicCageRef.current.rotation.z = -t * 0.12;
    }
    if (secondaryCageRef.current) {
      secondaryCageRef.current.rotation.y = -t * 0.2;
      secondaryCageRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    }

    // 4. Differential gearset rotation
    if (differentialGearsetRef.current) {
      differentialGearsetRef.current.rotation.y = -t * 0.45;
    }
  });

  return (
    <group ref={masterRigRef} dispose={null}>
      {/* ========================================================
          1. CENTRAL AETHER SINGULARITY CORE & PLASMA CORONA
         ======================================================== */}
      <group
        ref={coreSingularityRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverPart?.('Aether Quantum Core');
        }}
        onPointerOut={() => onHoverPart?.(null)}
      >
        {/* Inner high-energy glowing sphere */}
        <mesh ref={coreMeshRef} castShadow>
          <sphereGeometry args={[0.92, 48, 48]} />
          <meshStandardMaterial
            color="#ffa834"
            emissive="#ff6d00"
            emissiveIntensity={1.8}
            roughness={0.12}
            metalness={0.92}
            envMapIntensity={3.0}
          />
        </mesh>

        {/* Luminous faceted plasma shield */}
        <mesh ref={coreHaloRef}>
          <icosahedronGeometry args={[1.18, 2]} />
          <meshBasicMaterial
            color="#ffc857"
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>

        {/* Outer electric blue containment aura */}
        <mesh>
          <sphereGeometry args={[1.42, 32, 32]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.14}
          />
        </mesh>

        {/* Dynamic Multi-frequency Point Lights */}
        <pointLight color="#ff8800" intensity={4.5} distance={16} decay={2} />
        <pointLight color="#38bdf8" intensity={2.2} distance={9} decay={2} position={[0, 1.4, 0]} />
        <pointLight color="#dfb15b" intensity={2.0} distance={10} decay={2} position={[0, -1.4, 0]} />
      </group>

      {/* ========================================================
          2. INNER GEODESIC ARMILLARY CAGES (Renaissance Filigree)
         ======================================================== */}
      <group ref={geodesicCageRef}>
        <mesh>
          <dodecahedronGeometry args={[1.75, 1]} />
          <meshStandardMaterial
            color="#dfb15b"
            metalness={0.94}
            roughness={0.18}
            wireframe
            envMapIntensity={2.0}
          />
        </mesh>
      </group>

      <group ref={secondaryCageRef}>
        <mesh>
          <octahedronGeometry args={[1.98, 2]} />
          <meshStandardMaterial
            color="#c59838"
            metalness={0.92}
            roughness={0.22}
            wireframe
            envMapIntensity={1.8}
          />
        </mesh>
      </group>

      {/* ========================================================
          3. ESCAPEMENT PILLARS & MECHANICAL SPINDLE AXIS
         ======================================================== */}
      <group ref={escapementPillarsRef}>
        {/* Main Vertical Central Spindle (Bronze turned column) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 9.2, 24]} />
          <meshStandardMaterial
            color="#8c5d35"
            metalness={0.92}
            roughness={0.25}
            envMapIntensity={1.6}
          />
        </mesh>

        {/* Quad Escapement Support Stanchions (Greek/Renaissance Columns) */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => {
          const r = 1.35;
          const x = Math.cos(angle) * r;
          const z = Math.sin(angle) * r;
          return (
            <group key={i} position={[x, 0, z]}>
              <mesh>
                <cylinderGeometry args={[0.035, 0.045, 4.6, 16]} />
                <meshStandardMaterial
                  color="#dfb15b"
                  metalness={0.95}
                  roughness={0.2}
                  envMapIntensity={2.2}
                />
              </mesh>
              {/* Pillar capital and base ornamentation */}
              <mesh position={[0, 2.3, 0]}>
                <cylinderGeometry args={[0.07, 0.04, 0.12, 16]} />
                <meshStandardMaterial color="#8c5d35" metalness={0.95} roughness={0.2} />
              </mesh>
              <mesh position={[0, -2.3, 0]}>
                <cylinderGeometry args={[0.04, 0.07, 0.12, 16]} />
                <meshStandardMaterial color="#8c5d35" metalness={0.95} roughness={0.2} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* ========================================================
          4. PRECISION DIFFERENTIAL GEARSETS (Astronomical Clockwork)
         ======================================================== */}
      <group ref={differentialGearsetRef}>
        {[-2.5, -1.5, 1.5, 2.5].map((yPos, idx) => (
          <group key={idx} position={[0, yPos, 0]}>
            {/* Gear Hub */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.55, 0.55, 0.1, 24]} />
              <meshStandardMaterial
                color="#dfb15b"
                metalness={0.95}
                roughness={0.18}
                envMapIntensity={2.4}
              />
            </mesh>
            {/* Gear Spokes */}
            {Array.from({ length: 16 }).map((_, gIdx) => {
              const gAngle = (gIdx / 16) * Math.PI * 2;
              return (
                <mesh
                  key={gIdx}
                  position={[Math.cos(gAngle) * 0.62, 0, Math.sin(gAngle) * 0.62]}
                  rotation={[0, -gAngle, 0]}
                >
                  <boxGeometry args={[0.08, 0.08, 0.15]} />
                  <meshStandardMaterial color="#e5b85a" metalness={0.95} roughness={0.15} />
                </mesh>
              );
            })}
          </group>
        ))}
      </group>

      {/* ========================================================
          5. MULTI-AXIS ASTROLABE CALIBRATION RINGS
         ======================================================== */}
      {/* Ring 1 - Equinoctial Astrolabe Ring */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverPart?.('Equinoctial Calibrator');
        }}
        onPointerOut={() => onHoverPart?.(null)}
      >
        <AstrolabeRing
          radius={2.15}
          tube={0.048}
          color="#f5d78e"
          roughness={0.16}
          metalness={0.96}
          rotationSpeed={[0, 0.007, 0.002]}
          teethCount={40}
          dialGraduations={60}
          inclination={[0.35, 0, 0.2]}
          spokeCount={6}
        />
      </group>

      {/* Ring 2 - Solstitial Colure Ring */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverPart?.('Solstitial Meridian Ring');
        }}
        onPointerOut={() => onHoverPart?.(null)}
      >
        <AstrolabeRing
          radius={3.05}
          tube={0.054}
          color="#8c5d35"
          roughness={0.22}
          metalness={0.92}
          rotationSpeed={[0.006, -0.005, 0]}
          teethCount={54}
          dialGraduations={72}
          inclination={[1.15, 0.35, 0]}
          spokeCount={8}
        />
      </group>

      {/* Ring 3 - Outer Zodiac Calibrator (Major Ring) */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverPart?.('Zodiac Astrological Horizon');
        }}
        onPointerOut={() => onHoverPart?.(null)}
      >
        <AstrolabeRing
          radius={4.1}
          tube={0.068}
          color="#dfb15b"
          roughness={0.14}
          metalness={0.97}
          rotationSpeed={[-0.003, 0.006, 0.003]}
          teethCount={72}
          dialGraduations={96}
          inclination={[-0.45, 0.75, 0.35]}
          spokeCount={12}
        />
      </group>

      {/* Ring 4 - Deep Outermost Chronometer Cage */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverPart?.('Chronometer Celestial Cage');
        }}
        onPointerOut={() => onHoverPart?.(null)}
      >
        <AstrolabeRing
          radius={5.2}
          tube={0.042}
          color="#a57e38"
          roughness={0.25}
          metalness={0.9}
          rotationSpeed={[0.002, 0.003, -0.005]}
          teethCount={84}
          dialGraduations={108}
          inclination={[0.8, -0.55, 0.75]}
          spokeCount={10}
        />
      </group>

      {/* ========================================================
          6. NATURAL KEPLERIAN PLANETARY ORBITAL MECHANICS
         ======================================================== */}
      <OrbitalSystem />
    </group>
  );
};
