import assert from 'node:assert/strict'
import { test } from 'node:test'

import { clamp } from './clamp.js'

test('returns n when within range', () => {
  assert.equal(clamp(5, 0, 10), 5)
})

test('clamps to min and max', () => {
  assert.equal(clamp(-3, 0, 10), 0)
  assert.equal(clamp(42, 0, 10), 10)
})

test('allows min equal to max', () => {
  assert.equal(clamp(7, 3, 3), 3)
})

test('throws RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError)
})
