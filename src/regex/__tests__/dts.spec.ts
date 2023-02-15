/**
 * @file Unit Tests - EXT_DTS_REGEX
 * @module ext-regex/regex/tests/unit/dts
 */

import TEST_SUBJECT from '../dts'

describe('unit:EXT_DTS_REGEX', () => {
  describe('.d.cts', () => {
    it('should match extension ".d.cts"', () => {
      expect(TEST_SUBJECT.exec('.d.cts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".d.cts"', () => {
      expect(TEST_SUBJECT.exec('dist/users.controller.d.cts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".d.cts"', () => {
      expect(TEST_SUBJECT.exec('dist/index.d.cts')).toMatchSnapshot()
    })
  })

  describe('.d.mts', () => {
    it('should match extension ".d.mts"', () => {
      expect(TEST_SUBJECT.exec('.d.mts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".d.mts"', () => {
      expect(TEST_SUBJECT.exec('dist/users.controller.d.mts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".d.mts"', () => {
      expect(TEST_SUBJECT.exec('dist/index.d.mts')).toMatchSnapshot()
    })
  })

  describe('.d.ts', () => {
    it('should match extension ".d.ts"', () => {
      expect(TEST_SUBJECT.exec('.d.ts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".d.ts"', () => {
      expect(TEST_SUBJECT.exec('dist/users.controller.d.ts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".d.ts"', () => {
      expect(TEST_SUBJECT.exec('dist/index.d.ts')).toMatchSnapshot()
    })
  })
})
