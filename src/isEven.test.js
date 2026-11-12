import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isEven } from './isEven.js'

test('returns true for even integers', () => {
  assert.equal(isEven(2), true)
  assert.equal(isEven(4), true)
  assert.equal(isEven(8), true)
})

test('returns false for odd integers', () => {
  assert.equal(isEven(1), false)
  assert.equal(isEven(3), false)
  assert.equal(isEven(7), false)
})

test('returns true for zero', () => {
  assert.equal(isEven(0), true)
})

test('handles negative integers', () => {
  assert.equal(isEven(-2), true)
  assert.equal(isEven(-3), false)
})

test('throws a TypeError for values that are not integers', () => {
  for (const value of [1.5, NaN, Infinity, -Infinity, '4', null, undefined, true, {}, [], 4n]) {
    assert.throws(() => isEven(value), TypeError)
  }
})
