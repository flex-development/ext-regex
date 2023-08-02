/**
 * @file Unit Tests - extRegex
 * @module ext-regex/utils/tests/unit/extRegex
 */

import type { Regex } from '#tests/types'
import * as pathe from '@flex-development/pathe'
import testSubject from '../ext-regex'

describe('unit:utils/extRegex', () => {
  it('should return regular expression matching ext', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, Regex][] = [
      [
        '.html',
        undefined,
        {
          dotAll: false,
          flags: '',
          global: false,
          ignoreCase: false,
          multiline: false,
          source: '\\.html(?=\\s*$)',
          sticky: false,
          unicode: false
        }
      ],
      [
        'html',
        { flags: 'gi' },
        {
          dotAll: false,
          flags: 'gi',
          global: true,
          ignoreCase: true,
          multiline: false,
          source: '\\.html(?=\\s*$)',
          sticky: false,
          unicode: false
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([ext, options, expected]) => {
      const result = testSubject(ext, options)

      expect(result).to.be.instanceof(RegExp)
      expect(result).to.have.property('dotAll', expected.dotAll)
      expect(result).to.have.property('flags', expected.flags)
      expect(result).to.have.property('ignoreCase', expected.ignoreCase)
      expect(result).to.have.property('multiline', expected.multiline)
      expect(result).to.have.property('source', expected.source)
      expect(result).to.have.property('sticky', expected.sticky)
      expect(result).to.have.property('unicode', expected.unicode)
      expect(pathe.formatExt(ext)).to.match(result)
    })
  })
})
