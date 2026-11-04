import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('returns text unchanged when its length is at most max', () => {
  assert.equal(truncate('hello', 10), 'hello')
  assert.equal(truncate('hello', 5), 'hello')
  assert.equal(truncate('', 1), '')
})

test('truncates longer text with an ellipsis within max characters', () => {
  const result = truncate('hello world', 5)
  assert.equal(result, 'hell…')
  assert.equal(result.length, 5)
})

test('returns only an ellipsis when max is one and text is longer', () => {
  assert.equal(truncate('hello', 1), '…')
})

test('throws a RangeError when max is below one', () => {
  for (const max of [0, -1, 0.5]) {
    assert.throws(() => truncate('hello', max), RangeError)
  }
})
