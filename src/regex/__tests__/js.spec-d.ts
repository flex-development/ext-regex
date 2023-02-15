/**
 * @file Type Tests - EXT_JS_REGEX
 * @module ext-regex/regex/tests/unit-d/js
 */

import type TEST_SUBJECT from '../js'

describe('unit-d:EXT_JS_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>()
  })
})
