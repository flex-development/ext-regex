/**
 * @file Utilities - extRegex
 * @module ext-regex/utils/extRegex
 */

import type { Options } from '#src/interfaces'
import * as internal from '#src/internal'
import type * as errnode from '@flex-development/errnode'
import * as pathe from '@flex-development/pathe'
import { isNIL, type LiteralUnion } from '@flex-development/tutils'

/**
 * Creates a regular expression matching the given file extension, `ext`.
 *
 * The file extension does not need to begin with a dot character (`'.'`). If it
 * doesn't, however, it will be formatted before being converted into a regular
 * expression pattern. The returned regular expression will match the formatted
 * file extension instead.
 *
 * Throws `ERR_INVALID_ARG_TYPE` if the given file extension is not a string.
 *
 * @see {@linkcode pathe.Ext}
 * @see {@linkcode errnode.ERR_INVALID_ARG_TYPE}
 *
 * @param {LiteralUnion<pathe.Ext, string>} ext - File extension to evaluate
 * @param {Options?} [options] - Regular expression options
 * @return {RegExp} Regular expression matching `ext`
 * @throws {errnode.NodeError<TypeError>} If `ext` is not a string
 */
const extRegex = (
  ext: LiteralUnion<pathe.Ext, string>,
  options: Options = {}
): RegExp => {
  const { flags } = options

  // ensure ext is a string
  internal.validateString(ext, 'ext')

  // ensure flags is a string if defined
  !isNIL(flags) && internal.validateString(flags, 'flags')

  /**
   * Regex pattern for {@linkcode ext}.
   *
   * Special characters are escaped. A backslash escape (`\\`) is used whenever
   * valid. A `\x2d` escape is used when the former would be disallowed by
   * stricter Unicode pattern grammar.
   *
   * @const {string} pattern
   */
  const pattern: string = pathe
    .formatExt(ext.trim())
    .replace(/[$()*+.?[\\\]^{|}]/g, '\\$&')
    .replace(/-/g, '\\x2d')

  return new RegExp(pattern + '(?=\\s*$)', flags?.trim())
}

export default extRegex
