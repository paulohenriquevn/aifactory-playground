import assert from 'node:assert/strict'
import { test } from 'node:test'

import { truncate } from './truncate.js'

test('leaves short text alone', () => assert.equal(truncate('abc', 5), 'abc'))
test('cuts long text to exactly max characters', () => assert.equal(truncate('abcdef', 4), 'abc…'))
test('rejects max below 1', () => assert.throws(() => truncate('abc', 0), RangeError))
