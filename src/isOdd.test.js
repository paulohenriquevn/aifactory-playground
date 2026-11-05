import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isOdd } from './isOdd.js'

test('returns true for odd integers', () => {
  assert.equal(isOdd(1), true)
  assert.equal(isOdd(7), true)
})

test('returns false for even integers and zero', () => {
  assert.equal(isOdd(2), false)
  assert.equal(isOdd(8), false)
  assert.equal(isOdd(0), false)
})

test('handles negative integers', () => {
  assert.equal(isOdd(-3), true)
  assert.equal(isOdd(-4), false)
})

test('throws a TypeError for values that are not integers', () => {
  for (const value of [1.5, NaN, Infinity, -Infinity, '3', null, undefined, true, {}, [], 3n]) {
    assert.throws(() => isOdd(value), TypeError)
  }
})
