/**
 * @file Type Tests - EXT_DTS_REGEX
 * @module ext-regex/regex/tests/unit-d/dts
 */

import type TEST_SUBJECT from '../dts'

describe('unit-d:EXT_DTS_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>()
  })
})
