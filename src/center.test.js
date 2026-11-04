import assert from 'node:assert/strict'
import { test } from 'node:test'

import { center } from './center.js'

test('pads evenly on both sides', () => {
  assert.equal(center('ab', 6), '  ab  ')
})

test('puts the extra space on the right', () => {
  assert.equal(center('ab', 5), ' ab  ')
  assert.equal(center('a', 2), 'a ')
})

test('returns text unchanged when it already fills n', () => {
  assert.equal(center('abc', 3), 'abc')
  assert.equal(center('abcdef', 3), 'abcdef')
})

test('pads empty text to n spaces', () => {
  assert.equal(center('', 3), '   ')
})
