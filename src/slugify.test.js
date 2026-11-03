import assert from 'node:assert/strict'
import { test } from 'node:test'

import { slugify } from './slugify.js'

test('joins words with single hyphens', () => {
  assert.equal(slugify('Hello   World'), 'hello-world')
})

test('drops punctuation and trims hyphens at the ends', () => {
  assert.equal(slugify('  --Fix: the login redirect!  '), 'fix-the-login-redirect')
})
