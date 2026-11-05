import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isEven } from './isEven.js'

test('returns true for even integers and zero', () => {
  for (const n of [2, 4, 0, -2, -4]) {
    assert.equal(isEven(n), true)
  }
})

test('returns false for odd integers, including negative ones', () => {
  for (const n of [1, 3, -1, -3]) {
    assert.equal(isEven(n), false)
  }
})

test('throws a TypeError for non-integers', () => {
  for (const n of [1.5, -1.5, NaN, Infinity, -Infinity, '2', null, undefined, true, {}, [], 2n, Symbol('2')]) {
    assert.throws(() => isEven(n), TypeError)
  }
})
