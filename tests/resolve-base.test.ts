import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveBase } from '../vite.base';

test('local dev and preview keep the root base', () => {
  assert.equal(resolveBase({}), '/');
});

test('pages production build uses the repo sub-path', () => {
  assert.equal(resolveBase({ GITHUB_PAGES: '1' }), '/MegsDeliveryService/');
});

test('PR preview build uses the pr sub-path', () => {
  assert.equal(resolveBase({ GITHUB_PAGES: '1', PR_NUMBER: '42' }), '/MegsDeliveryService/pr-42/');
});

test('empty PR_NUMBER is ignored', () => {
  assert.equal(resolveBase({ GITHUB_PAGES: '1', PR_NUMBER: '' }), '/MegsDeliveryService/');
});

test('whitespace-only PR_NUMBER is ignored', () => {
  assert.equal(resolveBase({ GITHUB_PAGES: '1', PR_NUMBER: '   ' }), '/MegsDeliveryService/');
});
