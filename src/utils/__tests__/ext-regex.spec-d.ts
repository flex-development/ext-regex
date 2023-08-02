/**
 * @file Type Tests - extRegex
 * @module ext-regex/utils/tests/unit-d/extRegex
 */

import type { Options } from '#src/interfaces'
import type { Optional } from '@flex-development/tutils'
import type testSubject from '../ext-regex'

describe('unit-d:utils/extRegex', () => {
  it('should be callable with [string, Options?]', () => {
    // Arrange
    type Expect = [ext: string, options?: Optional<Options>]

    // Expect
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<Expect>()
  })

  it('should return RegExp', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<RegExp>()
  })
})
