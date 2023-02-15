/**
 * @file Regular EXPRESSIONS - EXT_JS_REGEX
 * @module ext-regex/regex/js
 */

/**
 * JavaScript file extension regex.
 *
 * Supported extensions:
 *
 * - `.cjs`
 * - `.js`
 * - `.jsx`
 * - `.mjs`
 *
 * Captured groups:
 *
 * - `type`: Letter between `'.'` and `'js'` in file extension
 *
 * @see https://regex101.com/r/p0ZTF7
 *
 * @const {RegExp} EXT_JS_REGEX
 */
const EXT_JS_REGEX: RegExp = /\.(?:(?<type>[cm])?js|jsx)(?=\s*$)/

export default EXT_JS_REGEX
