import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('cuts long text and ends with an ellipsis', () => {
  assert.equal(truncate('hello world', 5), 'hell…')
})

test('returns short text unchanged', () => {
  assert.equal(truncate('hi', 5), 'hi')
  assert.equal(truncate('hello', 5), 'hello')
})

test('throws a RangeError for invalid max', () => {
  for (const max of [0, -1, 1.5, NaN, Infinity]) {
    assert.throws(() => truncate('abc', max), RangeError)
  }
})
