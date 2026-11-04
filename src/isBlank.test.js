import assert from 'node:assert/strict'
import { test } from 'node:test'

import { isBlank } from './isBlank.js'

test('treats an empty string as blank', () => {
  assert.equal(isBlank(''), true)
})

test('treats spaces, tabs and newlines as blank', () => {
  assert.equal(isBlank('   '), true)
  assert.equal(isBlank(' \t\n '), true)
})

test('treats text with visible characters as not blank', () => {
  assert.equal(isBlank('abc'), false)
  assert.equal(isBlank('  a  '), false)
})
