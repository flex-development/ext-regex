/**
 * @file Test Type Definitions - Regex
 * @module tests/types/Regex
 */

import type { Pick } from '@flex-development/tutils'

/**
 * Object containing testable {@linkcode RegExp} properties.
 */
type Regex = Pick<
  RegExp,
  | 'dotAll'
  | 'flags'
  | 'global'
  | 'ignoreCase'
  | 'multiline'
  | 'source'
  | 'sticky'
  | 'unicode'
>

export type { Regex as default }
