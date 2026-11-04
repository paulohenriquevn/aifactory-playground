import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('returns text unchanged when within max', () => {
  assert.equal(truncate('hello', 5), 'hello')
  assert.equal(truncate('hi', 10), 'hi')
})

test('truncates to exactly max characters with an ellipsis', () => {
  const out = truncate('hello world', 6)
  assert.equal(out, 'hello…')
  assert.equal(out.length, 6)
})

test('max of 1 yields just the ellipsis', () => {
  assert.equal(truncate('abc', 1), '…')
})

test('throws RangeError when max is below 1', () => {
  assert.throws(() => truncate('abc', 0), RangeError)
  assert.throws(() => truncate('abc', -3), RangeError)
})
