import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isEven } from './isEven.js'

test('returns true for even integers, including zero and negatives', () => {
  assert.equal(isEven(0), true)
  assert.equal(isEven(4), true)
  assert.equal(isEven(-2), true)
})

test('returns false for odd integers', () => {
  assert.equal(isEven(1), false)
  assert.equal(isEven(-3), false)
})

test('returns false for anything that is not an integer, without throwing', () => {
  assert.equal(isEven(2.5), false)
  assert.equal(isEven(NaN), false)
  assert.equal(isEven(Infinity), false)
  assert.equal(isEven('2'), false)
  assert.equal(isEven(null), false)
  assert.equal(isEven(undefined), false)
})
