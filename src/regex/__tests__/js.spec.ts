/**
 * @file Unit Tests - EXT_JS_REGEX
 * @module ext-regex/regex/tests/unit/js
 */

import TEST_SUBJECT from '../js'

describe('unit:EXT_JS_REGEX', () => {
  describe('.cjs', () => {
    it('should match extension ".cjs"', () => {
      expect(TEST_SUBJECT.exec('.cjs')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".cjs"', () => {
      expect(TEST_SUBJECT.exec('build.config.cjs')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".cjs"', () => {
      expect(TEST_SUBJECT.exec('src/index.cjs')).toMatchSnapshot()
    })
  })

  describe('.js', () => {
    it('should match extension ".js"', () => {
      expect(TEST_SUBJECT.exec('.js')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".js"', () => {
      expect(TEST_SUBJECT.exec('build.config.js')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".js"', () => {
      expect(TEST_SUBJECT.exec('src/index.js')).toMatchSnapshot()
    })
  })

  describe('.jsx', () => {
    it('should match extension ".jsx"', () => {
      expect(TEST_SUBJECT.exec('.jsx')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".jsx"', () => {
      expect(TEST_SUBJECT.exec('Button.styles.jsx')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".jsx"', () => {
      expect(TEST_SUBJECT.exec('Button.jsx')).toMatchSnapshot()
    })
  })

  describe('.mjs', () => {
    it('should match extension ".mjs"', () => {
      expect(TEST_SUBJECT.exec('.mjs')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".mjs"', () => {
      expect(TEST_SUBJECT.exec('build.config.mjs')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".mjs"', () => {
      expect(TEST_SUBJECT.exec('src/index.mjs')).toMatchSnapshot()
    })
  })
})
