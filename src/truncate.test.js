import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('returns text unchanged when within max', () => {
  assert.equal(truncate('hello', 5), 'hello')
  assert.equal(truncate('hi', 10), 'hi')
})

test('truncates to exactly max characters with an ellipsis', () => {
  assert.equal(truncate('hello world', 6), 'hello…')
  assert.equal(truncate('hello world', 6).length, 6)
})

test('max of 1 yields just the ellipsis', () => {
  assert.equal(truncate('hello', 1), '…')
})

test('throws RangeError when max is below 1', () => {
  assert.throws(() => truncate('hello', 0), RangeError)
  assert.throws(() => truncate('hello', -3), RangeError)
})

test('returns text unchanged when it is exactly max long', () => {
  assert.equal(truncate('abcde', 5), 'abcde')
})
