# ext-regex

[![github release](https://img.shields.io/github/v/release/flex-development/ext-regex.svg?include_prereleases&sort=semver)](https://github.com/flex-development/ext-regex/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/ext-regex.svg)](https://npmjs.com/package/@flex-development/ext-regex)
[![codecov](https://codecov.io/gh/flex-development/ext-regex/branch/main/graph/badge.svg?token=P5v3y7X9FG)](https://codecov.io/gh/flex-development/ext-regex)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/ext-regex.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

File extension regex

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`EXT_DTS_REGEX`](#ext_dts_regex)
  - [`EXT_JS_REGEX`](#ext_js_regex)
  - [`EXT_JSON_REGEX`](#ext_json_regex)
  - [`EXT_TS_REGEX`](#ext_ts_regex)
  - [`extRegex(ext[, options])`](#extregexext-options)
- [Types](#types)
  - [Interfaces](#interfaces)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package exports regular expressions suitable for matching file extensions. It also provides a regular expression
factory function to create file extension expressions.

## When should I use this?

Regular expressions exported from this package can be used to test both file extensions and names. A factory function is
also exported that can be used to create a regular expression for any given file extension.

**Note**:

- Expressions are ECMAScript-compatible. They have not been tested with other flavors (PCRE, PCRE2, etc)

## Install

This package is [ESM only][1].

```sh
yarn add @flex-development/ext-regex
```

From Git:

```sh
yarn add @flex-development/ext-regex@flex-development/ext-regex
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
import { DECORATOR_REGEX } from '@flex-development/ext-regex'
import { EXT_DTS_REGEX, EXT_TS_REGEX } from '@flex-development/ext-regex'
import * as mlly from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import * as tscu from '@flex-development/tsconfig-utils'
import type { Nullable } from '@flex-development/tutils'
import type {
  OnLoadArgs,
  OnLoadOptions,
  OnLoadResult,
  Plugin,
  PluginBuild
} from 'esbuild'
import type { URL } from 'node:url'

/**
 * Returns a plugin that allows esbuild to handle [`emitDecoratorMetadata`][1].
 *
 * [1]: https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata
 *
 * @param {tscu.LoadTsconfigOptions?} [options] - Plugin options
 * @return {Plugin} Decorator metadata plugin
 */
const plugin = (options?: tscu.LoadTsconfigOptions): Plugin => ({
  name: 'decorators',
  setup: async ({ initialOptions, onLoad }: PluginBuild): Promise<void> => {
    const { absWorkingDir = '.', tsconfig = 'tsconfig.json' } = initialOptions

    /**
     * User compiler options.
     *
     * @const {tscu.CompilerOptions} compilerOptions
     */
    const compilerOptions: tscu.CompilerOptions = tscu.loadCompilerOptions(
      pathe.resolve(absWorkingDir, tsconfig),
      options
    )

    // exit early if decorator metadata should not be emitted
    if (!compilerOptions.emitDecoratorMetadata) return void 0

    /**
     * TypeScript module.
     *
     * @const {typeof import('typescript')} ts
     */
    const ts: typeof import('typescript') = (await import('typescript')).default

    /**
     * {@linkcode onLoad} callback options.
     *
     * @const {OnLoadOptions}
     */
    const opts: OnLoadOptions = { filter: /.*/ }

    // transpile typescript modules containing decorators
    onLoad(opts, async (args: OnLoadArgs): Promise<Nullable<OnLoadResult>> => {
      /**
       * Callback result.
       *
       * @var {Nullable<OnLoadResult>} result
       */
      let result: Nullable<OnLoadResult> = null

      // transpile typescript modules, but skip typescript declaration modules
      if (EXT_TS_REGEX.test(args.path) && !EXT_DTS_REGEX.test(args.path)) {
        /**
         * URL of module to load.
         *
         * @const {URL} url
         */
        const url: URL = mlly.toURL(args.path)

        /**
         * File content at {@linkcode args.path}.
         *
         * @const {string} source
         */
        const source: string = (await mlly.getSource(url)) as string

        // do nothing if module does not use decorators
        if (!DECORATOR_REGEX.test(source)) return null

        // transpile module to emit decorator metadata
        const { outputText: contents } = ts.transpileModule(source, {
          compilerOptions: tscu.normalizeCompilerOptions(compilerOptions)
        })

        result = { contents }
      }

      return result
    })

    return void 0
  }
})

export default plugin
```

<blockquote>
  <small>
    Looking for a plugin like this? Check out&nbsp;
    <a href='https://github.com/flex-development/mkbuild'><code>mkbuild</code></a> 😉
  </small>
</blockquote>

## API

This package exports the following identifiers:

- [`EXT_DTS_REGEX`](#ext_dts_regex)
- [`EXT_JS_REGEX`](#ext_js_regex)
- [`EXT_JSON_REGEX`](#ext_json_regex)
- [`EXT_TS_REGEX`](#ext_ts_regex)
- [`extRegex`](#extregexext-options)

There is no default export.

### `EXT_DTS_REGEX`

TypeScript declaration file extension regex.

Supported extensions:

- `.d.cts`
- `.d.mts`
- `.d.ts`

Named capturing groups:

- `type`: Letter between `'.'` and `'ts'` in file extension

#### Source

> [`src/regex/dts.ts`](src/regex/dts.ts)

### `EXT_JS_REGEX`

JavaScript file extension regex.

Supported extensions:

- `.cjs`
- `.js`
- `.jsx`
- `.mjs`

Named capturing groups:

- `type`: Letter between `'.'` and `'js'` in file extension

#### Source

> [`src/regex/js.ts`](src/regex/js.ts)

### `EXT_JSON_REGEX`

JSON file extension regex.

Supported extensions:

- `.json`
- `.json5`
- `.jsonc`

Named capturing groups:

- `type`: Character after `'json'` in file extension

#### Source

> [`src/regex/json.ts`](src/regex/json.ts)

### `EXT_TS_REGEX`

TypeScript file extension regex.

Supported extensions:

- `.cts`
- `.d.cts`
- `.d.mts`
- `.d.ts`
- `.mts`
- `.ts`
- `.tsx`

Named capturing groups:

- `dts`: Letter `'d'` if extension is [declaration file extension](#ext_dts_regex)
- `type`: Letter between `'.'` and `'ts'` in file extension

#### Source

> [`src/regex/ts.ts`](src/regex/ts.ts)

### `extRegex(ext[, options])`

Creates a regular expression matching the given file extension, `ext`.

The file extension does not need to begin with a dot character (`'.'`). If it doesn't, however, it will be formatted
before being converted into a regular expression pattern. The returned regular expression will match the formatted file
extension instead.

#### Parameters

- `{string}` **`ext`** &mdash; File extension to evaluate
- `{Options?}` **`[options]`** &mdash; Regular expression options

#### Returns

`{RegExp}` Regular expression matching `ext`.

#### Throws

`{errnode.NodeError<TypeError>}` If `ext` is not a string.

#### Source

> [`src/utils/ext-regex.ts`](src/utils/ext-regex.ts)

## Types

This package is fully typed with [TypeScript][2].

### Interfaces

- [`Options`](src/interfaces/options.ts)

## Related

- [`ext-regex`][3] &mdash; [Decorator][4] regex
- [`export-regex`][5] &mdash; `export` statement regex
- [`import-regex`][6] &mdash; `import` statement regex

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[2]: https://www.typescriptlang.org
[3]: https://github.com/flex-development/ext-regex
[4]: https://github.com/tc39/proposal-decorators
[5]: https://github.com/flex-development/export-regex
[6]: https://github.com/flex-development/import-regex
