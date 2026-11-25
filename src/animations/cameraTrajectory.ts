import * as THREE from 'three';

export interface CameraWaypoint {
  progress: number;
  position: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
}

// 7 Key continuous waypoints mapped along the 0.0 to 1.0 scroll progress
export const DESKTOP_WAYPOINTS: CameraWaypoint[] = [
  // 0.0 - Hero opening: Framed to the right to accommodate left headline
  {
    progress: 0.0,
    position: new THREE.Vector3(-1.8, 0.4, 9.2),
    target: new THREE.Vector3(1.3, 0.0, 0.0),
    fov: 44,
  },
  // 0.15 - Hero departure: Pulling into the celestial orbit
  {
    progress: 0.15,
    position: new THREE.Vector3(-0.6, 0.2, 7.5),
    target: new THREE.Vector3(0.5, 0.0, 0.0),
    fov: 45,
  },
  // 0.32 - Evolution of Ideas: Deep dive inside the inner gears & armillary spheres
  {
    progress: 0.32,
    position: new THREE.Vector3(1.2, 0.8, 4.2),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 50,
  },
  // 0.52 - Technological Frontiers: Elevated isometric perspective overlooking planetary orbits
  {
    progress: 0.52,
    position: new THREE.Vector3(-2.8, 2.2, 7.2),
    target: new THREE.Vector3(0.2, -0.4, 0.0),
    fov: 46,
  },
  // 0.70 - Festival Experience: Low-angle dramatic upward view highlighting mechanical scale
  {
    progress: 0.70,
    position: new THREE.Vector3(2.6, -1.2, 7.6),
    target: new THREE.Vector3(-0.4, 0.5, 0.0),
    fov: 46,
  },
  // 0.86 - Experience Timeline: Clean lateral view leaving breathing space for schedule
  {
    progress: 0.86,
    position: new THREE.Vector3(-2.4, 0.6, 8.4),
    target: new THREE.Vector3(0.8, 0.0, 0.0),
    fov: 44,
  },
  // 1.0 - Epilogue / Final Engine: Grand symmetric center alignment, engine reassembled
  {
    progress: 1.0,
    position: new THREE.Vector3(0.0, 0.8, 8.8),
    target: new THREE.Vector3(0.0, 0.1, 0.0),
    fov: 43,
  },
];

export const MOBILE_WAYPOINTS: CameraWaypoint[] = [
  {
    progress: 0.0,
    position: new THREE.Vector3(0.0, 0.2, 12.0),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 54,
  },
  {
    progress: 0.20,
    position: new THREE.Vector3(0.0, 0.1, 10.5),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 54,
  },
  {
    progress: 0.35,
    position: new THREE.Vector3(0.4, 0.4, 6.8),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 56,
  },
  {
    progress: 0.55,
    position: new THREE.Vector3(-0.5, 1.2, 10.2),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 54,
  },
  {
    progress: 0.75,
    position: new THREE.Vector3(0.6, -0.8, 10.4),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 54,
  },
  {
    progress: 1.0,
    position: new THREE.Vector3(0.0, 0.4, 11.2),
    target: new THREE.Vector3(0.0, 0.0, 0.0),
    fov: 52,
  },
];

/**
 * Evaluates smooth piecewise-cubic Catmull-Rom spline camera trajectory
 */
export function getInterpolatedCamera(progress: number, isMobile: boolean) {
  const waypoints = isMobile ? MOBILE_WAYPOINTS : DESKTOP_WAYPOINTS;
  const clamped = Math.max(0, Math.min(1, progress));

  // Find surrounding waypoint segment
  let segIndex = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    if (clamped >= waypoints[i].progress && clamped <= waypoints[i + 1].progress) {
      segIndex = i;
      break;
    }
  }

  const p0 = waypoints[Math.max(0, segIndex - 1)];
  const p1 = waypoints[segIndex];
  const p2 = waypoints[Math.min(waypoints.length - 1, segIndex + 1)];
  const p3 = waypoints[Math.min(waypoints.length - 1, segIndex + 2)];

  // Local normalized t between p1 and p2 with cubic smoothstep easing
  const segSpan = p2.progress - p1.progress;
  const linearT = segSpan > 0 ? (clamped - p1.progress) / segSpan : 0;
  // Smooth Hermite easing for continuity: 3t^2 - 2t^3
  const t = linearT * linearT * (3 - 2 * linearT);

  // Position interpolation
  const pos = new THREE.Vector3();
  pos.x = THREE.MathUtils.lerp(p1.position.x, p2.position.x, t);
  pos.y = THREE.MathUtils.lerp(p1.position.y, p2.position.y, t);
  pos.z = THREE.MathUtils.lerp(p1.position.z, p2.position.z, t);

  // Target look-at interpolation
  const target = new THREE.Vector3();
  target.x = THREE.MathUtils.lerp(p1.target.x, p2.target.x, t);
  target.y = THREE.MathUtils.lerp(p1.target.y, p2.target.y, t);
  target.z = THREE.MathUtils.lerp(p1.target.z, p2.target.z, t);

  // FOV interpolation
  const fov = THREE.MathUtils.lerp(p1.fov, p2.fov, t);

  return { pos, target, fov };
}
