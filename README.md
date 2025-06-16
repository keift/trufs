[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[Fs]: ./src/types/Fs.type.ts
[ReadOptions]: https://github.com/fabiospampinato/atomically/blob/master/src/types.ts#L16
[WriteOptions]: https://github.com/fabiospampinato/atomically/blob/master/src/types.ts#L22

<div align="center">
  <br/>
  <img src="https://i.ibb.co/JWCLvM2Q/unknown.png" width="350px"/>
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
// NPM
npm install trufs

// PNPM
pnpm install trufs

// Yarn
yarn add trufs

// Bun
bun add trufs

// Deno
deno install npm:trufs
```

## Documentation

### Tree

Briefly as follows.

```typescript
Trufs
│
├── fs
│   │
│   ├── readFile(filepath, options?)
│   ├── readFileSync(filepath, options?)
│   ├── writeFile(filepath, data, options?)
│   └── writeFileSync(filepath, data, options?)
│
└── type Types
    │
    └── Fs
```

### Import

It is enough to change the `fs` to `trufs`.

> TypeScript
>
> ```diff
> - import fs from "fs";
> + import { fs, type Types as TrufsTypes } from "trufs";
> ```
>
> JavaScript
>
> ```diff
> - import fs from "fs";
> + import { fs } from "trufs";
> ```

### Methods

`fs.readFile(filepath, options?)`

Read file asynchronous.

> | Parameter | Description                                                                                                                    |
> | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
> | filepath  | [String]<br/>File path to read.                                                                                                |
> | options   | [ReadOptions] (optional)<br/>Read options. |
>
> returns [Promise]<[String] | [Buffer]>
>
> Example:
>
> ```typescript
> const reading: string | Buffer = await fs.readFile("./config.json");
> ```

<br/>

`fs.readFileSync(filepath, options?)`

Read file synchronous.

> | Parameter | Description                                                                                                                    |
> | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
> | filepath  | [String]<br/>File path to read.                                                                                                |
> | options   | [ReadOptions] (optional)<br/>Read options. |
>
> returns [String] | [Buffer]
>
> Example:
>
> ```typescript
> const reading: string | Buffer = fs.readFileSync("./config.json");
> ```

<br/>

`fs.writeFile(filepath, data, options?)`

Write file asynchronous.

> | Parameter | Description                                                                                                                    |
> | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
> | filepath  | [String]<br/>File path to write.                                                                                               |
> | data      | [String] \| [Buffer]<br/>Data to be written.                                                                                   |
> | options   | [WriteOptions] (optional)<br/>Write options.|
>
> returns [Promise]<[Void]>
>
> Example:
>
> ```typescript
> const writing: unknown = await fs.writeFile("./config.json", JSON.stringify({}));
> ```

<br/>

`fs.writeFileSync(filepath, data, options?)`

Write file synchronous.

> | Parameter | Description                                                                                                                    |
> | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
> | filepath  | [String]<br/>File path to write.                                                                                               |
> | data      | [String] \| [Buffer]<br/>Data to be written.                                                                                   |
> | options   | [WriteOptions] (optional)<br/>Write options.|
>
> returns [Void]
>
> Example:
>
> ```typescript
> const writing: unknown = fs.writeFileSync("./config.json", JSON.stringify({}));
> ```

### Types

| Type | 
 | ---- | 
 | [Fs] |
 | [ReadOptions] |
 |[WriteOptions]|

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
