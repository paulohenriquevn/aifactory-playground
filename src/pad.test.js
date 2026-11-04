import assert from 'node:assert/strict'
import { test } from 'node:test'

import { pad } from './pad.js'

test('left-pads shorter text with spaces to n characters', () => {
  assert.equal(pad('abc', 6), '   abc')
})

test('pads empty text to n spaces', () => {
  assert.equal(pad('', 3), '   ')
})

test('returns text as it is when it is exactly n long', () => {
  assert.equal(pad('abc', 3), 'abc')
})

test('returns text as it is when it is longer than n', () => {
  assert.equal(pad('abcdef', 3), 'abcdef')
})
