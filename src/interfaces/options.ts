/**
 * @file Interfaces - Options
 * @module ext-regex/interfaces/Options
 */

import type { Nilable } from '@flex-development/tutils'

/**
 * Options for creating regular expressions matching file extensions.
 */
interface Options {
  /**
   * Flags passed to the {@linkcode RegExp} constructor.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags
   *
   *
   * @default undefined
   */
  flags?: Nilable<string>
}

export type { Options as default }
