/**
 * @file Regular EXPRESSIONS - EXT_JSON_REGEX
 * @module ext-regex/regex/json
 */

/**
 * JSON file extension regex.
 *
 * Supported extensions:
 *
 * - `.json`
 * - `.json5`
 * - `.jsonc`
 *
 * Captured groups:
 *
 * - `type`: Character after `'json'` in file extension
 *
 * @see https://regex101.com/r/YVxapd
 *
 * @const {RegExp} EXT_JSON_REGEX
 */
const EXT_JSON_REGEX: RegExp = /\.json(?<type>[5c])?(?=\s*$)/

export default EXT_JSON_REGEX
