[read_options]: https://github.com/fabiospampinato/atomically/blob/master/src/constants.ts
[write_options]: https://github.com/fabiospampinato/atomically/blob/master/src/constants.ts

<!---->

[Fs]: ./src/types/fs.ts
[ReadOptions]: ./src/types/read_options.ts
[WriteOptions]: ./src/types/write_options.ts

<div align="center">
  <br/>
  <img src="./assets/logo.png" width="350px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/trufs?label=version&color=615fff"/>
  <img src="https://img.shields.io/npm/l/trufs?label=license&color=615fff"/>
  <img src="https://img.shields.io/npm/dt/trufs?label=downloads&color=00bc7d"/>
  <img src="https://img.shields.io/npm/unpacked-size/trufs?label=size&color=00bc7d"/>
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
└── fs
    │
    ├── readFile(filepath, options?)
    ├── readFileSync(filepath, options?)
    ├── writeFile(filepath, data, options?)
    └── writeFileSync(filepath, data, options?)

trufs/types
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

> | Parameter  | Type          | Default        | Description        |
> | ---------- | ------------- | -------------- | ------------------ |
> | `filepath` | String        |                | File path to read. |
> | `options?` | [ReadOptions] | [read_options] | Read options.      |
>
> returns Promise<String | Buffer>
>
> Example:
>
> ```typescript
> await fs.readFile('./config.json');
> ```

<br/>

`fs.readFileSync(filepath, options?)`

Read file synchronous.

> | Parameter  | Type          | Default        | Description        |
> | ---------- | ------------- | -------------- | ------------------ |
> | `filepath` | String        |                | File path to read. |
> | `options?` | [ReadOptions] | [read_options] | Read options.      |
>
> returns String | Buffer
>
> Example:
>
> ```typescript
> fs.readFileSync('./config.json');
> ```

<br/>

`fs.writeFile(filepath, data, options?)`

Write file asynchronous.

> | Parameter  | Type             | Default         | Description         |
> | ---------- | ---------------- | --------------- | ------------------- |
> | `filepath` | String           |                 | File path to write. |
> | `data`     | String \| Buffer |                 | Data to be written. |
> | `options?` | [WriteOptions]   | [write_options] | Write options.      |
>
> returns Promise<Void>
>
> Example:
>
> ```typescript
> await fs.writeFile('./config.json', JSON.stringify({}));
> ```

<br/>

`fs.writeFileSync(filepath, data, options?)`

Write file synchronous.

> | Parameter  | Type             | Default         | Description         |
> | ---------- | ---------------- | --------------- | ------------------- |
> | `filepath` | String           |                 | File path to write. |
> | `data`     | String \| Buffer |                 | Data to be written. |
> | `options?` | [WriteOptions]   | [write_options] | Write options.      |
>
> returns Void
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
