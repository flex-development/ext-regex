/**
 * @file Type Tests - Options
 * @module ext-regex/interfaces/tests/unit-d/Options
 */

import type { KeysRequired, Nilable } from '@flex-development/tutils'
import type TestSubject from '../options'

describe('unit-d:interfaces/Options', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should match [flags?: Nilable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('flags')
      .toEqualTypeOf<Nilable<string>>()
  })
})
