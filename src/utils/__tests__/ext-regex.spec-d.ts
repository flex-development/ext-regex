/**
 * @file Type Tests - extRegex
 * @module ext-regex/utils/tests/unit-d/extRegex
 */

import type { Options } from '#src/interfaces'
import type testSubject from '../ext-regex'

describe('unit-d:utils/extRegex', () => {
  it('should be callable with [string, Options?]', () => {
    // Arrange
    type Expected = [ext: string, options?: Options | undefined]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Expected>()
  })

  it('should return RegExp', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<RegExp>()
  })
})
