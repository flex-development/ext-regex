/**
 * @file Unit Tests - EXT_JSON_REGEX
 * @module ext-regex/regex/tests/unit/json
 */

import TEST_SUBJECT from '../json'

describe('unit:EXT_JSON_REGEX', () => {
  describe('.json', () => {
    it('should match extension ".json"', () => {
      expect(TEST_SUBJECT.exec('.json')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".json"', () => {
      expect(TEST_SUBJECT.exec('build.config.json')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".json"', () => {
      expect(TEST_SUBJECT.exec('package.json')).toMatchSnapshot()
    })
  })

  describe('.json5', () => {
    it('should match extension ".json5"', () => {
      expect(TEST_SUBJECT.exec('.json5')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".json5"', () => {
      expect(TEST_SUBJECT.exec('build.config.json5')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".json5"', () => {
      expect(TEST_SUBJECT.exec('.markdownlint.json5')).toMatchSnapshot()
    })
  })

  describe('.jsonc', () => {
    it('should match extension ".jsonc"', () => {
      expect(TEST_SUBJECT.exec('.jsonc')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".jsonc"', () => {
      expect(TEST_SUBJECT.exec('build.config.jsonc')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".jsonc"', () => {
      expect(TEST_SUBJECT.exec('.markdownlint.jsonc')).toMatchSnapshot()
    })
  })
})
