[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[Null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
[Undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined

<!---->

[ReadOptionsDefault]: https://github.com/fabiospampinato/atomically/blob/master/src/constants.ts#L15
[WriteOptionsDefault]: https://github.com/fabiospampinato/atomically/blob/master/src/constants.ts#L17

<!---->

[Fs]: ./src/types/Fs.type.ts
[ReadOptions]: ./src/types/ReadOptions.type.ts
[WriteOptions]: ./src/types/WriteOptions.type.ts

<div align="center">
  <br/>
  <img src="./assets/logo.png" width="350px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/trufs?label=version&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/l/trufs?label=license&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/dt/trufs?label=downloads&color=%2300927F"/>
  <img src="https://img.shields.io/npm/unpacked-size/trufs?label=size&color=%2300927F"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Tree](#tree)
  - [Import](#import)
  - [Methods](#methods)
  - [Types](#types)
- [Links](#links)
  - [Discord](https://discord.gg/keift)
  - [Telegram](https://t.me/keiftt)
  - [Twitter](https://x.com/keiftttt)
  - [GitHub](https://github.com/keift)
- [License](#license)

## About

Trusty file methods.

## Features

- Respects CommonJS
- Secure with [Atomically](https://github.com/fabiospampinato/atomically)
- Functional with [FS Extra](https://github.com/jprichardson/node-fs-extra)
- Stable with [Graceful FS](https://github.com/isaacs/node-graceful-fs)

## Installation

You can install it as follows.

```shell
# NPM
npm add trufs

# PNPM
pnpm add trufs

# Yarn
yarn add trufs

# Bun
bun add trufs

# Deno
deno add trufs
```

## Documentation

### Tree

Briefly as follows.

```typescript
trufs
│
├── fs
│   │
│   ├── readFile(filepath, options?)
│   ├── readFileSync(filepath, options?)
│   ├── writeFile(filepath, data, options?)
│   └── writeFileSync(filepath, data, options?)
│
├── type Fs
├── type ReadOptions
└── type WriteOptions
```

### Import

It is enough to change the `fs` to `trufs`.

```diff
- import fs from 'fs';
+ import { fs } from 'trufs';
```

### Methods

`fs.readFile(filepath, options?)`

Read file asynchronous.

> | Parameter  | Type          | Default              | Description        |
> | ---------- | ------------- | -------------------- | ------------------ |
> | `filepath` | [String]      |                      | File path to read. |
> | `options?` | [ReadOptions] | [ReadOptionsDefault] | Read options.      |
>
> returns [Promise]<[String] | [Buffer]>
>
> Example:
>
> ```typescript
> await fs.readFile('./config.json');
> ```

<br/>

`fs.readFileSync(filepath, options?)`

Read file synchronous.

> | Parameter  | Type          | Default              | Description        |
> | ---------- | ------------- | -------------------- | ------------------ |
> | `filepath` | [String]      |                      | File path to read. |
> | `options?` | [ReadOptions] | [ReadOptionsDefault] | Read options.      |
>
> returns [String] | [Buffer]
>
> Example:
>
> ```typescript
> fs.readFileSync('./config.json');
> ```

<br/>

`fs.writeFile(filepath, data, options?)`

Write file asynchronous.

> | Parameter  | Type                 | Default               | Description         |
> | ---------- | -------------------- | --------------------- | ------------------- |
> | `filepath` | [String]             |                       | File path to write. |
> | `data`     | [String] \| [Buffer] |                       | Data to be written. |
> | `options?` | [WriteOptions]       | [WriteOptionsDefault] | Write options.      |
>
> returns [Promise]<[Void]>
>
> Example:
>
> ```typescript
> await fs.writeFile('./config.json', JSON.stringify({}));
> ```

<br/>

`fs.writeFileSync(filepath, data, options?)`

Write file synchronous.

> | Parameter  | Type                 | Default               | Description         |
> | ---------- | -------------------- | --------------------- | ------------------- |
> | `filepath` | [String]             |                       | File path to write. |
> | `data`     | [String] \| [Buffer] |                       | Data to be written. |
> | `options?` | [WriteOptions]       | [WriteOptionsDefault] | Write options.      |
>
> returns [Void]
>
> Example:
>
> ```typescript
> fs.writeFileSync('./config.json', JSON.stringify({}));
> ```

### Types

| Type           |
| -------------- |
| [Fs]           |
| [ReadOptions]  |
| [WriteOptions] |

## Links

- [Discord](https://discord.gg/keift)
- [Telegram](https://t.me/keiftt)
- [Twitter](https://x.com/keiftttt)
- [GitHub](https://github.com/keift)

## License

MIT License

Copyright (c) 2025 Keift

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
