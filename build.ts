#!/bin/env bun
import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/bun.ts', './src/esbuild.ts'],
  outdir: './dist',
  plugins: [
    dts({
      compilationOptions: {
        preferredConfigPath: './tsconfig.json'
      }
    })
  ],
})