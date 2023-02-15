/**
 * @file Unit Tests - EXT_TS_REGEX
 * @module ext-regex/regex/tests/unit/ts
 */

import TEST_SUBJECT from '../ts'

describe('unit:EXT_TS_REGEX', () => {
  describe('.cts', () => {
    it('should match extension ".cts"', () => {
      expect(TEST_SUBJECT.exec('.cts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".cts"', () => {
      expect(TEST_SUBJECT.exec('build.config.cts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".cts"', () => {
      expect(TEST_SUBJECT.exec('src/index.cts')).toMatchSnapshot()
    })
  })

  describe('.mts', () => {
    it('should match extension ".mts"', () => {
      expect(TEST_SUBJECT.exec('.mts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".mts"', () => {
      expect(TEST_SUBJECT.exec('build.config.mts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".mts"', () => {
      expect(TEST_SUBJECT.exec('src/index.mts')).toMatchSnapshot()
    })
  })

  describe('.ts', () => {
    it('should match extension ".ts"', () => {
      expect(TEST_SUBJECT.exec('.ts')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".ts"', () => {
      expect(TEST_SUBJECT.exec('build.config.ts')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".ts"', () => {
      expect(TEST_SUBJECT.exec('src/index.ts')).toMatchSnapshot()
    })
  })

  describe('.tsx', () => {
    it('should match extension ".tsx"', () => {
      expect(TEST_SUBJECT.exec('.tsx')).toMatchSnapshot()
    })

    it('should match module id given last extension is ".tsx"', () => {
      expect(TEST_SUBJECT.exec('Button.styles.tsx')).toMatchSnapshot()
    })

    it('should match module id given only extension is ".tsx"', () => {
      expect(TEST_SUBJECT.exec('Button.tsx')).toMatchSnapshot()
    })
  })

  describe('dts', () => {
    describe('.d.cts', () => {
      it('should match extension ".d.cts"', () => {
        expect(TEST_SUBJECT.exec('.d.cts')).toMatchSnapshot()
      })

      it('should match module id given last extension is ".d.cts"', () => {
        expect(TEST_SUBJECT.exec('build.config.d.cts')).toMatchSnapshot()
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
        expect(TEST_SUBJECT.exec('build.config.d.mts')).toMatchSnapshot()
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
        expect(TEST_SUBJECT.exec('build.config.d.ts')).toMatchSnapshot()
      })

      it('should match module id given only extension is ".d.ts"', () => {
        expect(TEST_SUBJECT.exec('dist/index.d.ts')).toMatchSnapshot()
      })
    })
  })
})
