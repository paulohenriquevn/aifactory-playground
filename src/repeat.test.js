import assert from 'node:assert/strict'
import { test } from 'node:test'

import { repeat } from './repeat.js'

test('repeats the text n times', () => {
  assert.equal(repeat('ab', 3), 'ababab')
})

test('returns an empty string when n is 0', () => {
  assert.equal(repeat('ab', 0), '')
})

test('throws a RangeError when n is negative', () => {
  assert.throws(() => repeat('ab', -1), RangeError)
})
