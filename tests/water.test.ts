// tests/water.test.ts
import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import {
  makeTileableNoise,
  WATER_FRAG,
  WATER_VERT,
  SPARKLE_FRAG,
  createSparkles,
  applyCausticsToGround,
  SHORE_PIN_BAND,
  WAVE_AMP_TOTAL,
} from '../src/water.js';

// Minimal canvas shim for Node (the real implementation uses document).
before(() => {
  class FakeImageData {
    width: number; height: number; data: Uint8ClampedArray;
    constructor(w: number, h: number) {
      this.width = w; this.height = h;
      this.data = new Uint8ClampedArray(w * h * 4);
    }
  }
  const makeCtx = (canvas: any) => ({
    _img: null as FakeImageData | null,
    createImageData(w: number, h: number) { return new FakeImageData(w, h); },
    putImageData(img: FakeImageData, _x: number, _y: number) { this._img = img; canvas._img = img; },
    getImageData(_x: number, _y: number, w: number, h: number) {
      return canvas._img ?? new FakeImageData(w, h);
    },
  });
  (globalThis as Record<string, unknown>).document = {
    createElement: () => {
      const canvas: any = { width: 0, height: 0, _img: null };
      canvas.getContext = () => makeCtx(canvas);
      return canvas;
    },
  };
});

describe('water noise', () => {
  it('generates a tileable RGBA noise texture', () => {
    const canvas = makeTileableNoise(64);
    assert.equal(canvas.width, 64);
    assert.equal(canvas.height, 64);
    const ctx = canvas.getContext('2d')!;
    const img = ctx.getImageData(0, 0, 64, 64).data;
    assert.ok(img.length === 64 * 64 * 4);
    // Each channel carries independent noise: variance > 0 and at least one
    // pixel differs between every pair of channels.
    const ch = (c: number) => {
      const out: number[] = [];
      for (let i = c; i < img.length; i += 4) out.push(img[i]);
      return out;
    };
    const channels = [ch(0), ch(1), ch(2), ch(3)];
    for (const values of channels) {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
      assert.ok(variance > 10, 'channel must not be flat');
    }
    for (let a = 0; a < 4; a++) {
      for (let b = a + 1; b < 4; b++) {
        const differs = channels[a].some((v, i) => v !== channels[b][i]);
        assert.ok(differs, `channels ${a} and ${b} must be independent`);
      }
    }
  });
});

describe('water shader', () => {
  it('uses no hard step() calls (all transitions smooth)', () => {
    // Allowlist: 'smoothstep' contains 'step' as substring — check for
    // standalone step( not preceded by 'smooth'.
    const withoutSmooth = WATER_FRAG.replace(/smoothstep/g, '');
    assert.ok(!withoutSmooth.includes('step('),
      'GLSL must not use step(); use smoothstep for all transitions');
  });

  it('discards above-water fragments at the shoreline', () => {
    assert.ok(WATER_FRAG.includes('if (vDepth < 0.02) discard'),
      'must hard-discard where terrain is above water (no alpha z-fighting)');
  });

  it('is lighting-driven, not a depth-only gradient fill', () => {
    assert.ok(WATER_FRAG.includes('uSunDir'), 'needs sun direction uniform');
    assert.ok(WATER_FRAG.includes('uSssColor'), 'needs subsurface glow color');
    assert.ok(WATER_FRAG.includes('peakMask'), 'needs wave-peak SSS mask');
  });

  it('has marching foam bands and a voronoi foam net', () => {
    assert.ok(WATER_FRAG.includes('foamMarch'), 'Alisavakis marching bands');
    assert.ok(WATER_FRAG.includes('voro12'), 'voronoi F1/F2 foam net');
    assert.ok(WATER_FRAG.includes('foamRing'), 'ebbing contact ring');
  });

  it('distance-fades detail (no sub-pixel sparkle shimmer)', () => {
    assert.ok(WATER_FRAG.includes('detailFade'), 'detail fade required');
    const sparkleLine = WATER_FRAG.split('\n').find((l) => l.includes('float sparkle ='));
    assert.ok(sparkleLine && sparkleLine.includes('detailFade'),
      'sparkle must be gated by detailFade');
  });

  it('applies fresnel sky tint at grazing angles', () => {
    assert.ok(WATER_FRAG.includes('uSkyColor'), 'needs sky color uniform');
    assert.ok(WATER_FRAG.includes('pow(1.0 - max(dot(N, V), 0.0), 5.0)'),
      'Schlick fresnel with F0=0.02 water approx');
  });
});

describe('water vertex waves', () => {
  it('pins waves to zero at the shoreline', () => {
    assert.ok(WATER_VERT.includes('shorePin'), 'needs shore pin mask');
    assert.ok(WATER_VERT.includes(`smoothstep(0.0, ${SHORE_PIN_BAND.toFixed(1)}, aDepth)`),
      'pin band must match SHORE_PIN_BAND');
    assert.ok(WATER_VERT.includes('displaced.y += h * shorePin'),
      'displacement must be shore-pinned');
  });

  it('keeps total amplitude visible but not stormy', () => {
    assert.ok(WAVE_AMP_TOTAL >= 0.4,
      `total amplitude ${WAVE_AMP_TOTAL} below perceptibility floor — waves invisible at game camera distance`);
    assert.ok(WAVE_AMP_TOTAL <= 0.8, `total amplitude ${WAVE_AMP_TOTAL} exceeds stylized budget`);
  });

  it('passes a normalized wave height for the SSS peak mask', () => {
    assert.ok(WATER_VERT.includes('vWaveH'), 'needs vWaveH varying');
  });

  it('pans noise UVs in the vertex shader (free interpolation)', () => {
    assert.ok(WATER_VERT.includes('vNoiseUv1 = baseUv + vec2(t * 0.008'),
      'Rae trick: scroll UVs in vertex, not fragment');
  });
});

describe('star sparkles', () => {
  it('creates a Points field over open bay water', () => {
    const points = createSparkles(40);
    assert.equal(points.type, 'Points');
    const pos = points.geometry.getAttribute('position');
    assert.ok(pos.count <= 40, 'rejection sampling may place fewer');
    assert.ok(pos.count > 0, 'must place some sparkles');
    assert.ok(points.geometry.getAttribute('aPhase'), 'needs twinkle phase');
    assert.ok(points.geometry.getAttribute('aScale'), 'needs per-sprite scale');
    assert.ok(points.geometry.getAttribute('aDepth'), 'needs depth fade');
    const mat = points.material as unknown as { blending?: number; uniforms: Record<string, unknown> };
    assert.ok(mat.uniforms.uTime !== undefined, 'needs uTime uniform');
  });

  it('draws procedural 4-pointed stars, no textures', () => {
    assert.ok(SPARKLE_FRAG.includes('gl_PointCoord'), 'procedural star shape');
    assert.ok(!SPARKLE_FRAG.includes('texture'), 'no texture reads');
  });
});

describe('terrain caustics', () => {
  it('injects caustic chunks into the ground material', () => {
    const fakeMat: any = {
      userData: {},
      onBeforeCompile: undefined,
      customProgramCacheKey: undefined,
    };
    applyCausticsToGround(fakeMat);
    assert.equal(typeof fakeMat.onBeforeCompile, 'function');
    assert.equal(typeof fakeMat.customProgramCacheKey, 'function');
    const shader = {
      uniforms: {} as Record<string, { value: number }>,
      vertexShader: '#include <common>\nvoid main() {\n#include <begin_vertex>\n}',
      fragmentShader: '#include <common>\nvoid main() {\n#include <map_fragment>\n}',
    };
    fakeMat.onBeforeCompile(shader);
    assert.ok(shader.uniforms.uCausticTime !== undefined, 'adds time uniform');
    assert.ok(shader.uniforms.uCausticSun !== undefined, 'adds sun uniform');
    assert.ok(shader.vertexShader.includes('vCausticDepth'), 'passes depth varying');
    assert.ok(shader.fragmentShader.includes('cf1('), 'voronoi caustic fn');
    assert.ok(shader.fragmentShader.includes('diffuseColor.rgb +='),
      'adds to diffuse BEFORE lighting so shadows apply');
    assert.ok(fakeMat.userData.causticShader === shader, 'stashes shader for per-frame updates');
  });
});
