import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('returns text unchanged when shorter than max', () => {
  assert.equal(truncate('hello', 10), 'hello')
})

test('returns text unchanged when length equals max', () => {
  assert.equal(truncate('hello', 5), 'hello')
})

test('cuts long text to exactly max characters ending in an ellipsis', () => {
  const result = truncate('hello world', 6)
  assert.equal(result, 'hello…')
  assert.equal(result.length, 6)
})

test('max of 1 yields just the ellipsis', () => {
  assert.equal(truncate('hello', 1), '…')
})

test('throws a RangeError when max is below 1', () => {
  assert.throws(() => truncate('hello', 0), RangeError)
  assert.throws(() => truncate('hello', -3), RangeError)
})
