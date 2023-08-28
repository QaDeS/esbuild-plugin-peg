# esbuild-plugin-peg

> This plugin lets you import [PEGjs](https://pegjs.org/) and [Peggy](https://peggyjs.org/) files when bundling with [Esbuild](https://esbuild.github.io/)

## Installation

```bash
npm install --save-dev esbuild-plugin-peg
```

or

```bash
bun add -D esbuild-plugin-peg
```


## Getting Started

`my.peggy`

```pegjs
start = a:[0-9] "+" b:[0-9] { return a + b; }
```

`main.js`

```js
import * as parser from './my.peggy'

console.log(parser.parse("1+2"))
```

`build.js`

```js
const peg = require('esbuild-plugin-peg');

require('esbuild').build({
  entryPoints: ['main.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [peg()],
});
```

If you are using bun, you can activate the plugin as follows:

`peg-loader.ts`

```ts
import { plugin } from 'bun'
import peg from 'esbuild-plugin-peg/bun'

await plugin(peg())
```

You can then activate the loader per default in your project via


`bunfig.toml`

```toml
preload = "./peg-loader.ts"
```

## Configuration

An object containing configuration options may be passed into the plugin constructor `peg`

```js
peg({
  bare: true,
});
```

See [Peggy API Documentation](https://peggyjs.org/documentation.html#generating-a-parser-javascript-api) for available configuration options.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
