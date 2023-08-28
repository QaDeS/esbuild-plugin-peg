# peg-loader

> This plugin lets you import [PEGjs](https://pegjs.org/) and [Peggy](https://peggyjs.org/) files when bundling with [Esbuild](https://esbuild.github.io/)

## Installation

```
$ npm install --save-dev peg-loader
```

## Getting Started

`my.pegjs`

```pegjs
start = a:[0-9] "+" b:[0-9] { return a + b; }
```

`main.js`

```js
import * as parser from './example.peggy'

console.log(parser.parse("1+2"))
```

`build.js`

```js
const peg = require('peg-loader');

require('esbuild').build({
  entryPoints: ['main.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [peg()],
});
```

## Configuration

An object containing configuration options may be passed into the plugin constructor `coffeeScriptPlugin`

```js
peg({
  bare: true,
});
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
