# ext-regex

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

**TODO**: usage example.

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

- [`decorator-regex`][3] &mdash; [Decorator][4] regex
- [`export-regex`][5] &mdash; `export` statement regex
- [`import-regex`][6] &mdash; `import` statement regex

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[2]: https://www.typescriptlang.org
[3]: https://github.com/flex-development/decorator-regex
[4]: https://github.com/tc39/proposal-decorators
[5]: https://github.com/flex-development/export-regex
[6]: https://github.com/flex-development/import-regex
