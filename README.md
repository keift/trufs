[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined

# trufs <img src="https://img.shields.io/npm/v/trufs?label=version&color=%234472E7"/> <img src="https://img.shields.io/npm/l/trufs?label=license&color=%234472E7"/> <img src="https://img.shields.io/node/v/trufs?label=node&color=%2300927F"/> <img src="https://img.shields.io/npm/dt/trufs?label=downloads&color=%2300927F"/>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Links](#links)
  - [Change Log](CHANGELOG.md)

## About

Trusty file reads and writes.

## Features

  * Works with [Atomically](https://github.com/fabiospampinato/atomically)
  * Respects CommonJS
  * All other `fs` functions are accessible

## Installation

NPM
```sh-session
npm install trufs
```

PNPM
```sh-session
pnpm install trufs
```

Bun
```sh-session
bun add trufs
```

Deno
```sh-session
deno install npm:trufs
```

Yarn
```sh-session
yarn add trufs
```

## Documentation

### Methods

`readFile(filepath, options?)`

Read file asynchronous.

> | Parameter | Description |
> | --- | --- |
> | filepath | [String]<br/>File path to read. |
> | options | [Object] (optional)<br/>Method options. [More details](https://github.com/fabiospampinato/atomically?tab=readme-ov-file#usage) |
>
> returns [Promise]<[String] | [Buffer]>
>
>
> Example:
>
> ```js
> await fs.readFile("./config.json");
> ```

<br/>

`readFileSync(filepath, options?)`

Read file synchronous.

> | Parameter | Description |
> | --- | --- |
> | filepath | [String]<br/>File path to read. |
> | options | [Object] (optional)<br/>Method options. [More details](https://github.com/fabiospampinato/atomically?tab=readme-ov-file#usage) |
>
> returns [String] | [Buffer]
>
>
> Example:
>
> ```js
> fs.readFileSync("./config.json");
> ```

<br/>

`writeFile(filepath, data, options?)`

Write file asynchronous.

> | Parameter | Description |
> | --- | --- |
> | filepath | [String]<br/>File path to write. |
> | data | [String] \| [Buffer]<br/>Data to be written. |
> | options | [Object] (optional)<br/>Method options. [More details](https://github.com/fabiospampinato/atomically?tab=readme-ov-file#usage) |
>
> returns [Promise]<[Void]>
>
>
> Example:
>
> ```js
> await fs.writeFile("./config.json", JSON.stringify({}));
> ```

<br/>

`writeFileSync(filepath, data, options?)`

Write file synchronous.

> | Parameter | Description |
> | --- | --- |
> | filepath | [String]<br/>File path to write. |
> | data | [String] \| [Buffer]<br/>Data to be written. |
> | options | [Object] (optional)<br/>Method options. [More details](https://github.com/fabiospampinato/atomically?tab=readme-ov-file#usage) |
>
> returns [Void]
>
>
> Example:
>
> ```js
> fs.writeFileSync("./config.json", JSON.stringify({}));
> ```

<br/>

## Links

- [Change Log](CHANGELOG.md)

## License

[MIT](LICENSE.md)