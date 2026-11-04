import assert from 'node:assert/strict'
import { test } from 'node:test'

import { clamp } from './clamp.js'

test('returns n when within range', () => {
  assert.equal(clamp(5, 0, 10), 5)
})

test('returns min when n is below range', () => {
  assert.equal(clamp(-5, 0, 10), 0)
})

test('returns max when n is above range', () => {
  assert.equal(clamp(15, 0, 10), 10)
})

test('allows min equal to max', () => {
  assert.equal(clamp(3, 4, 4), 4)
})

test('throws RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError)
})

test('throws RangeError when a bound is NaN', () => {
  assert.throws(() => clamp(5, NaN, 10), RangeError)
  assert.throws(() => clamp(5, 0, NaN), RangeError)
})

test('returns NaN when n is NaN', () => {
  assert.ok(Number.isNaN(clamp(NaN, 0, 10)))
})

test('supports infinite bounds', () => {
  assert.equal(clamp(5, -Infinity, Infinity), 5)
  assert.equal(clamp(-5, 0, Infinity), 0)
  assert.equal(clamp(50, -Infinity, 10), 10)
})
