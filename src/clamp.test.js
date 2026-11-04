import assert from 'node:assert/strict'
import { test } from 'node:test'

import { clamp } from './clamp.js'

test('returns the value when it is inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5)
})

test('limits values below min and above max', () => {
  assert.equal(clamp(-3, 0, 10), 0)
  assert.equal(clamp(42, 0, 10), 10)
})

test('treats the bounds as inclusive', () => {
  assert.equal(clamp(0, 0, 10), 0)
  assert.equal(clamp(10, 0, 10), 10)
})

test('allows min equal to max', () => {
  assert.equal(clamp(7, 5, 5), 5)
})

test('throws a RangeError when min is greater than max', () => {
  assert.throws(() => clamp(1, 10, 0), RangeError)
})
