/**
 * @file Internal - validateString
 * @module ext-regex/internal/validateString
 */

import * as errnode from '@flex-development/errnode'
import { isString } from '@flex-development/tutils'

/**
 * Checks if `value` is a string.
 *
 * Throws [`ERR_INVALID_ARG_TYPE`][1] if the `value` is not a string.
 *
 * [1]: https://nodejs.org/api/errors.html#err_invalid_arg_value
 *
 * @see {@linkcode errnode.ERR_INVALID_ARG_TYPE}
 * @see {@linkcode errnode.NodeError}
 *
 * @param {unknown} value - Value supplied by user
 * @param {string} name - Name of invalid argument or property
 * @return {value is string} `true` if `value` is a string
 * @throws {errnode.NodeError<TypeError>} If `value` is not a string
 */
const validateString = (value: unknown, name: string): value is string => {
  if (isString(value)) return true
  throw new errnode.ERR_INVALID_ARG_TYPE(name, 'string', value)
}

export default validateString
