/**
 * @file Regular EXPRESSIONS - EXT_TS_REGEX
 * @module ext-regex/regex/ts
 */

/**
 * TypeScript file extension regex.
 *
 * Supported extensions:
 *
 * - `.cts`
 * - `.d.cts`
 * - `.d.mts`
 * - `.d.ts`
 * - `.mts`
 * - `.ts`
 * - `.tsx`
 *
 * Captured groups:
 *
 * - `dts`: Letter `'d'` if extension is declaration file extension
 * - `type`: Letter between `'.'` and `'ts'` in file extension
 *
 * @see https://regex101.com/r/pE2tKy
 *
 * @const {RegExp} EXT_TS_REGEX
 */
const EXT_TS_REGEX: RegExp =
  /\.(?:(?:(?<dts>d)\.)?(?<type>[cm])?ts|tsx)(?=\s*$)/

export default EXT_TS_REGEX
