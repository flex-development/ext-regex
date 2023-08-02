/**
 * @file Utilities - extRegex
 * @module ext-regex/utils/extRegex
 */

import type { Options } from '#src/interfaces'
import * as internal from '#src/internal'
import type * as errnode from '@flex-development/errnode'
import pathe from '@flex-development/pathe'
import { isNIL, regexp, trim } from '@flex-development/tutils'

/**
 * Creates a regular expression matching the given file extension, `ext`.
 *
 * If the given file extension does not begin with a dot character (`'.'`), it
 * will be formatted before being converted to a regular expression pattern. The
 * resulting regular expression will match the formatted file extension instead.
 *
 * Throws `ERR_INVALID_ARG_TYPE` if the given file extension is not a string.
 *
 * @see {@linkcode errnode.ERR_INVALID_ARG_TYPE}
 *
 * @param {string} ext - File extension to evaluate
 * @param {Options?} [options] - Regular expression options
 * @return {RegExp} Regular expression matching `ext`
 * @throws {errnode.NodeError<TypeError>} If `ext` is not a string
 */
const extRegex = (ext: string, options: Options = {}): RegExp => {
  const { flags } = options

  // ensure ext is a string
  internal.validateString(ext, 'ext')

  // ensure flags is a string if defined
  !isNIL(flags) && internal.validateString(flags, 'flags')

  return new RegExp(
    regexp(pathe.formatExt(trim(ext))) + '(?=\\s*$)',
    flags ? trim(flags) : undefined
  )
}

export default extRegex
