/**
 * @file Type Tests - EXT_TS_REGEX
 * @module ext-regex/regex/tests/unit-d/ts
 */

import type TEST_SUBJECT from '../ts'

describe('unit-d:EXT_TS_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>()
  })
})
