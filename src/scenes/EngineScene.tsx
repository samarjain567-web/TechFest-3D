import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { AetherEngineCore } from './AetherEngineCore';
import { ParticleField } from './ParticleField';
import { getInterpolatedCamera } from '../animations/cameraTrajectory';

interface EngineSceneProps {
  scrollProgress: number;
  hoveredPart: string | null;
  onHoverPart: (part: string | null) => void;
  isMobile: boolean;
}

// Continuous Catmull-Rom Spline Camera Rig
const CameraRig: React.FC<{ scrollProgress: number; isMobile: boolean }> = ({
  scrollProgress,
  isMobile,
}) => {
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // 1. Get smoothly evaluated camera coordinates from trajectory
    const { pos, target, fov } = getInterpolatedCamera(scrollProgress, isMobile);

    // 2. Add subtle interactive mouse parallax
    const pointer = state.pointer;
    const parallaxIntensity = isMobile ? 0.2 : 0.45;
    const targetX = pos.x + pointer.x * parallaxIntensity;
    const targetY = pos.y + pointer.y * (parallaxIntensity * 0.7);

    // 3. Fluid cinematic dampening (avoids disconnects/jumps)
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 3.8, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetY, 3.8, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, pos.z, 3.8, delta);

    currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, target.x, 3.8, delta);
    currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, target.y, 3.8, delta);
    currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, target.z, 3.8, delta);

    if (state.camera instanceof THREE.PerspectiveCamera) {
      state.camera.fov = THREE.MathUtils.damp(state.camera.fov, fov, 3.0, delta);
      state.camera.updateProjectionMatrix();
    }

    state.camera.lookAt(currentLookAt.current);
  });

  return null;
};

export const EngineScene: React.FC<EngineSceneProps> = ({
  scrollProgress,
  hoveredPart,
  onHoverPart,
  isMobile,
}) => {
  return (
    <div className="webgl-container">
      <Canvas
        camera={{ position: [-1.8, 0.4, 9.2], fov: isMobile ? 54 : 44 }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
      >
        <CameraRig scrollProgress={scrollProgress} isMobile={isMobile} />

        {/* Realistic Studio/Astronomical Environment reflection for PBR metals */}
        <Environment preset="city" />

        {/* Ambient & Cinematic Lighting Setup */}
        <ambientLight intensity={0.45} />

        {/* Key Directional Light: Warm Renaissance Antique Gold */}
        <directionalLight
          position={[8, 10, 6]}
          intensity={2.6}
          color="#fff0d0"
          castShadow
        />

        {/* Fill Rim Light: Futuristic Electric Cyan */}
        <directionalLight
          position={[-8, -4, -5]}
          intensity={1.5}
          color="#38bdf8"
        />

        {/* Astrological Overhead Zenith Spotlight */}
        <spotLight
          position={[0, 12, 0]}
          intensity={2.2}
          angle={0.65}
          penumbra={0.8}
          color="#ffe4a0"
        />

        {/* Atmospheric Floating Dust & Starfield */}
        <ParticleField count={isMobile ? 400 : 950} />
        <Stars
          radius={60}
          depth={50}
          count={isMobile ? 1200 : 2800}
          factor={4}
          saturation={0.6}
          fade
          speed={0.8}
        />

        {/* The 3D Aether Engine mechanism */}
        <AetherEngineCore
          scrollProgress={scrollProgress}
          hoveredPart={hoveredPart}
          onHoverPart={onHoverPart}
          isMobile={isMobile}
        />

        {/* User Orbit Controls with smooth inertia */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.45}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.06}
          enableDamping
        />
      </Canvas>
    </div>
  );
};
