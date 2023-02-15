/**
 * @file Regular Expressions - EXT_DTS_REGEX
 * @module ext-regex/regex/dts
 */

/**
 * TypeScript declaration file extension regex.
 *
 * Supported extensions:
 *
 * - `.d.cts`
 * - `.d.mts`
 * - `.d.ts`
 *
 * Captured groups:
 *
 * - `type`: Letter between `'.'` and `'ts'` in file extension
 *
 * @see https://regex101.com/r/LD2eKA
 *
 * @const {RegExp} EXT_DTS_REGEX
 */
const EXT_DTS_REGEX: RegExp = /\.d\.(?<type>[cm])?ts(?=\s*$)/

export default EXT_DTS_REGEX
