import assert from 'node:assert/strict'
import { test } from 'node:test'

import { capitalize } from './capitalize.js'

test('changes only the first character', () => {
  assert.equal(capitalize('hello world'), 'Hello world')
})

test('returns empty and already capitalized text unchanged', () => {
  assert.equal(capitalize(''), '')
  assert.equal(capitalize('Hello'), 'Hello')
})

test('throws a TypeError for non-strings', () => {
  assert.throws(() => capitalize(42), TypeError)
})
