/**
 * @file Type Tests - EXT_JSON_REGEX
 * @module ext-regex/regex/tests/unit-d/json
 */

import type TEST_SUBJECT from '../json'

describe('unit-d:EXT_JSON_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>()
  })
})
