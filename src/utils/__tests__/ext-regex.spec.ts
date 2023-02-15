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

      expect(pathe.formatExt(ext)).to.match(result)
      expect(result).to.have.property('dotAll').equal(expected.dotAll)
      expect(result).to.have.property('flags').equal(expected.flags)
      expect(result).to.have.property('ignoreCase').equal(expected.ignoreCase)
      expect(result).to.have.property('multiline').equal(expected.multiline)
      expect(result).to.have.property('source').equal(expected.source)
      expect(result).to.have.property('sticky').equal(expected.sticky)
      expect(result).to.have.property('unicode').equal(expected.unicode)
    })
  })
})
