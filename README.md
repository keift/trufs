[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined

# FS-TRUSTY

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Links](#links)
  - [Change Log](CHANGELOG.md)

## About

Trusty file writes and reads.

## Features

  * Works with [Atomically](https://github.com/fabiospampinato/atomically)
  * Respects CommonJS
  * All other `fs` functions are accessible

## Installation

NPM
```sh-session
npm install fs-trusty
```

PNPM
```sh-session
pnpm install fs-trusty
```

Bun
```sh-session
bun add fs-trusty
```

Deno
```sh-session
deno install npm:fs-trusty
```

Yarn
```sh-session
yarn add fs-trusty
```

## Documentation

### Methods

`readFile(path, options?)`

Read file asynchronous.

> | Parameter | Description |
> | --- | --- |
> | path | [String]<br/>File to read. |
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

`readFileSync(path, options?)`

Read file synchronous.

> | Parameter | Description |
> | --- | --- |
> | path | [String]<br/>File to read. |
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

`writeFile(path, data, options?)`

Write file asynchronous.

> | Parameter | Description |
> | --- | --- |
> | path | [String]<br/>File to write. |
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

`writeFileSync(path, data, options?)`

Write file synchronous.

> | Parameter | Description |
> | --- | --- |
> | path | [String]<br/>File to write. |
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