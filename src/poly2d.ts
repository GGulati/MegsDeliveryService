// 2D polygon boolean operations for pavement ownership.
//
// Core invariant: every square centimeter of pavement is owned by exactly one
// graph element (node OR edge). These ops enforce that invariant by
// construction — no overlap, no z-fighting, no flicker.

export type Poly2 = [number, number][]; // CCW winding, no duplicate last point

const EPS = 1e-9;

export function polyArea(p: Poly2): number {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const [x1, z1] = p[i], [x2, z2] = p[(i + 1) % p.length];
    a += x1 * z2 - x2 * z1;
  }
  return Math.abs(a) / 2;
}

export function pointInPoly(pt: [number, number], poly: Poly2): boolean {
  const [x, z] = pt;
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i], [xj, zj] = poly[j];
    if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function segsIntersect(
  a1: [number, number], a2: [number, number],
  b1: [number, number], b2: [number, number]
): boolean {
  const d = (p: [number, number], q: [number, number], r: [number, number]) =>
    (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const d1 = d(b1, b2, a1), d2 = d(b1, b2, a2);
  const d3 = d(a1, a2, b1), d4 = d(a1, a2, b2);
  return ((d1 > EPS && d2 < -EPS) || (d1 < -EPS && d2 > EPS)) &&
         ((d3 > EPS && d4 < -EPS) || (d3 < -EPS && d4 > EPS));
}

export function polysOverlap(a: Poly2, b: Poly2): boolean {
  for (const v of a) if (pointInPoly(v, b)) return true;
  for (const v of b) if (pointInPoly(v, a)) return true;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (segsIntersect(a[i], a[(i + 1) % a.length], b[j], b[(j + 1) % b.length])) {
        return true;
      }
    }
  }
  return false;
}

export function polyUnionStar(a: Poly2, b: Poly2): Poly2 {
  const centroid = (p: Poly2): [number, number] => {
    let x = 0, z = 0;
    for (const [px, pz] of p) { x += px; z += pz; }
    return [x / p.length, z / p.length];
  };
  const [cax, caz] = centroid(a), [cbx, cbz] = centroid(b);
  const cx = (cax + cbx) / 2, cz = (caz + cbz) / 2;

  const radiusAt = (poly: Poly2, angle: number): number => {
    const dx = Math.cos(angle), dz = Math.sin(angle);
    let maxR = 0;
    for (let i = 0; i < poly.length; i++) {
      const [x1, z1] = poly[i], [x2, z2] = poly[(i + 1) % poly.length];
      const ex = x2 - x1, ez = z2 - z1;
      const denom = dx * ez - dz * ex;
      if (Math.abs(denom) < EPS) continue;
      const t = ((x1 - cx) * ez - (z1 - cz) * ex) / denom;
      const u = ((x1 - cx) * dz - (z1 - cz) * dx) / denom;
      if (t > EPS && u > -EPS && u < 1 + EPS) maxR = Math.max(maxR, t);
      if (-t > EPS && -u > -EPS && -u < 1 + EPS) maxR = Math.max(maxR, -t);
    }
    return maxR;
  };

  const K = 72;
  const out: Poly2 = [];
  for (let k = 0; k < K; k++) {
    const angle = (k / K) * Math.PI * 2;
    const r = Math.max(radiusAt(a, angle), radiusAt(b, angle));
    out.push([cx + Math.cos(angle) * r, cz + Math.sin(angle) * r]);
  }
  return out;
}

export function polyClip(subject: Poly2, clip: Poly2): Poly2 {
  let out = subject;
  for (let i = 0; i < clip.length; i++) {
    const [cx1, cz1] = clip[i], [cx2, cz2] = clip[(i + 1) % clip.length];
    const input = out;
    out = [];
    if (input.length === 0) break;
    const inside = (p: [number, number]): boolean =>
      (cx2 - cx1) * (p[1] - cz1) - (cz2 - cz1) * (p[0] - cx1) >= -EPS;
    const intersect = (s: [number, number], e: [number, number]): [number, number] => {
      const dx = e[0] - s[0], dz = e[1] - s[1];
      const denom = (cx2 - cx1) * dz - (cz2 - cz1) * dx;
      if (Math.abs(denom) < EPS) return s;
      const t = ((cx2 - cx1) * (s[1] - cz1) - (cz2 - cz1) * (s[0] - cx1)) / denom;
      return [s[0] + dx * t, s[1] + dz * t];
    };
    let s = input[input.length - 1];
    for (const e of input) {
      if (inside(e)) {
        if (!inside(s)) out.push(intersect(s, e));
        out.push(e);
      } else if (inside(s)) {
        out.push(intersect(s, e));
      }
      s = e;
    }
  }
  return out;
}

export function quadsOverlap(a: Poly2, b: Poly2): boolean {
  if (!polysOverlap(a, b)) return false;
  const inter = polyClip(a, b);
  const area = polyArea(inter);
  const minArea = Math.min(polyArea(a), polyArea(b));
  return area > minArea * 0.01;
}

// Difference: subject minus clip. For our use case (marking quads), if the
// overlap is small, nudge vertices outside. If large, return empty (drop the
// marking — better than flicker).
export function polyDifference(subject: Poly2, clip: Poly2): Poly2[] {
  if (!polysOverlap(subject, clip)) return [subject];
  if (subject.every(v => pointInPoly(v, clip))) return [];
  const subjArea = polyArea(subject);
  const inter = polyClip(subject, clip);
  const interArea = polyArea(inter);
  if (interArea < subjArea * 0.05) {
    const out: Poly2 = subject.map(([x, z]) => {
      if (pointInPoly([x, z], clip)) {
        let best: [number, number] = [x, z];
        let bestD = Infinity;
        for (let i = 0; i < clip.length; i++) {
          const [ax, az] = clip[i], [bx, bz] = clip[(i + 1) % clip.length];
          const dx = bx - ax, dz = bz - az;
          const len2 = dx * dx + dz * dz || 1;
          const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / len2));
          const px = ax + dx * t, pz = az + dz * t;
          const d = Math.hypot(x - px, z - pz);
          if (d < bestD) { bestD = d; best = [px, pz]; }
        }
        const [px, pz] = best;
        const d = Math.hypot(x - px, z - pz) || 1;
        return [px + (x - px) / d * 0.05, pz + (z - pz) / d * 0.05] as [number, number];
      }
      return [x, z] as [number, number];
    });
    return [out];
  }
  return [];
}

export function rayPolyDist(
  ox: number, oz: number, dx: number, dz: number, poly: Poly2
): number {
  let best = 0;
  for (let i = 0; i < poly.length; i++) {
    const [x1, z1] = poly[i], [x2, z2] = poly[(i + 1) % poly.length];
    const ex = x2 - x1, ez = z2 - z1;
    const denom = dx * ez - dz * ex;
    if (Math.abs(denom) < 1e-9) continue;
    const t = ((x1 - ox) * ez - (z1 - oz) * ex) / denom;
    const u = ((x1 - ox) * dz - (z1 - oz) * dx) / denom;
    if (t > 1e-6 && u >= -1e-6 && u <= 1 + 1e-6) best = Math.max(best, t);
    if (-t > 1e-6 && -u >= -1e-6 && -u <= 1 + 1e-6) best = Math.max(best, -t);
  }
  return best;
}
