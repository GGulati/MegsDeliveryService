import * as THREE from 'three';
import { skyAt, sunDirection, type RGB } from './time-of-day';

const VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  varying vec3 vDir;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform float uDuskFactor;   // 0 day → 1 dusk (stars, haze boost)
  uniform float uTime;         // seconds, for subtle shimmer

  // Hash-based star field (no texture).
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, -1.0, 1.0);

    // 1. Vertical gradient: horizon → zenith.
    float g = pow(clamp(h * 1.4 + 0.12, 0.0, 1.0), 0.75);
    vec3 col = mix(uHorizon, uZenith, g);

    // Below-horizon: fade to a deep tone so the dome edge never shows.
    col = mix(vec3(0.16, 0.18, 0.24), col, smoothstep(-0.08, 0.02, h));

    // 2. Sun disc + warm glow.
    float sunDot = dot(d, normalize(uSunDir));
    float disc = smoothstep(0.9993, 0.9997, sunDot);
    float glow = pow(clamp(sunDot, 0.0, 1.0), 24.0) * 0.55;
    float wideGlow = pow(clamp(sunDot, 0.0, 1.0), 6.0) * 0.22;
    col += uSunColor * (disc * 1.2 + glow + wideGlow);

    // 3. Horizon haze band — strongest near the sun azimuth at golden hour.
    float haze = (1.0 - abs(h)) * clamp(sunDot * 0.5 + 0.5, 0.0, 1.0);
    col += uSunColor * pow(haze, 3.0) * (0.25 + uDuskFactor * 0.45);

    // 4. Stars fade in as dusk deepens (upper sky only).
    if (uDuskFactor > 0.01 && h > 0.05) {
      vec3 cell = floor(d * 220.0);
      float s = hash(cell);
      float star = step(0.9985, s) * uDuskFactor * smoothstep(0.05, 0.5, h);
      // Subtle twinkle.
      star *= 0.75 + 0.25 * sin(uTime * 2.0 + s * 40.0);
      col += vec3(0.9, 0.93, 1.0) * star;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

function rgb([r, g, b]: RGB): THREE.Color {
  return new THREE.Color(r, g, b);
}

/**
 * Procedural sky dome: gradient + sun + haze + stars, all driven by the
 * time-of-day uniform state. No textures, resolution-independent.
 */
export class SkyDome {
  readonly mesh: THREE.Mesh;
  private mat: THREE.ShaderMaterial;
  private clock = 0;

  constructor(radius = 900) {
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uZenith: { value: new THREE.Color() },
        uHorizon: { value: new THREE.Color() },
        uSunColor: { value: new THREE.Color() },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) },
        uDuskFactor: { value: 0 },
        uTime: { value: 0 },
      },
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 16), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -10;
  }

  /** Drive the sky from shift elapsed seconds. */
  setElapsed(elapsed: number, dt: number): void {
    const t = Math.max(0, Math.min(1, elapsed / 360));
    const s = skyAt(t);
    this.clock += dt;
    const u = this.mat.uniforms;
    (u.uZenith.value as THREE.Color).copy(rgb(s.zenith));
    (u.uHorizon.value as THREE.Color).copy(rgb(s.horizon));
    (u.uSunColor.value as THREE.Color).copy(rgb(s.sun));
    const [x, y, z] = sunDirection(s.sunElevation, s.sunAzimuth);
    (u.uSunDir.value as THREE.Vector3).set(x, y, z);
    u.uDuskFactor.value = s.duskFactor;
    u.uTime.value = this.clock;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.mat.dispose();
  }
}
